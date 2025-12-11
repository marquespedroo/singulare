import React, { useRef, useMemo, useEffect } from 'react';

import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Center, Environment, MeshTransmissionMaterial, Float, ContactShadows } from '@react-three/drei';
import { EffectComposer, SMAA, Bloom } from '@react-three/postprocessing';
// @ts-ignore
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import * as THREE from 'three';

// Utility to compute area for sorting
function getShapeArea(shape: THREE.Shape) {
    return THREE.ShapeUtils.area(shape.getPoints());
}

// Internal component that uses R3F hooks
function LogoScene() {
    const groupRef = useRef<THREE.Group>(null);
    const lightRef = useRef<THREE.SpotLight>(null);
    const movingLightRef = useRef<THREE.SpotLight>(null);
    const mouseRef = useRef(new THREE.Vector2(0, 0));

    // Global Mouse Tracking to ensure the light follows mouse even outside the canvas
    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            // Normalize mouse position (-1 to 1)
            mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', updateMouse);
        return () => window.removeEventListener('mousemove', updateMouse);
    }, []);

    useFrame((state) => {
        if (lightRef.current) {
            // Calculate target position based on viewport dimensions
            // We use the global mouseRef instead of state.pointer to capture movement across the entire screen
            const x = (mouseRef.current.x * state.viewport.width) / 1.5; // Divide by 1.5 to allow wider reach
            const y = (mouseRef.current.y * state.viewport.height) / 1.5;

            // Smoothly interpolate light position
            lightRef.current.position.lerp(new THREE.Vector3(x, y, 12), 0.02);

            // Ensure light always points to center
            lightRef.current.target.position.set(0, 0, 0);
            lightRef.current.target.updateMatrixWorld();
        }

        // Automated Moving Spotlight Animation
        if (movingLightRef.current) {
            const time = state.clock.elapsedTime;
            // Sweep back and forth
            movingLightRef.current.position.x = Math.sin(time * 0.2) * 20; // Slower sweep (was 0.5)
            movingLightRef.current.position.y = Math.cos(time * 0.1) * 5; // Very slow vertical variance
            movingLightRef.current.position.z = 12;

            movingLightRef.current.target.position.set(0, 0, 0);
            movingLightRef.current.target.updateMatrixWorld();
        }
    });

    // Load the SVG file
    const svgData = useLoader(SVGLoader, '/assets/logo.svg');

    const processedShapes = useMemo(() => {
        // 1. Flatten all shapes from all paths
        const allShapes: THREE.Shape[] = [];
        svgData.paths.forEach((path) => {
            const shapes = SVGLoader.createShapes(path);
            allShapes.push(...shapes);
        });

        if (allShapes.length === 0) return [];

        // 2. Identify the Background (Largest Area)
        // We assume the logo is "Text cut out of a Box", so the Box is the largest shape.
        const sortedShapes = [...allShapes].sort((a, b) => Math.abs(getShapeArea(b)) - Math.abs(getShapeArea(a)));
        const background = sortedShapes[0];
        const islands = sortedShapes.slice(1); // The loose pieces (like inside of A, R, or just noise)

        if (!background) return [];

        if (!background) return [];

        // STRATEGY 1: Stencil / Cutout Logic (Background contains holes which are letters)
        const letterOutlines = background.holes;
        let finalLetterShapes: THREE.Shape[] = [];

        if (letterOutlines.length > 0) {
            letterOutlines.forEach((outlinePath) => {
                const letterShape = new THREE.Shape(outlinePath.getPoints());
                const letterPoints = letterShape.getPoints();
                const letterBox = new THREE.Box2().setFromPoints(letterPoints);

                islands.forEach((island) => {
                    const islandPoints = island.getPoints();
                    const islandCenter = new THREE.Box2().setFromPoints(islandPoints).getCenter(new THREE.Vector2());
                    if (letterBox.containsPoint(islandCenter)) {
                        letterShape.holes.push(island);
                    }
                });
                finalLetterShapes.push(letterShape);
            });
        }

        // FILTER: Remove small shapes
        if (finalLetterShapes.length > 0) {
            const maxArea = Math.max(...finalLetterShapes.map(s => Math.abs(getShapeArea(s))));
            return finalLetterShapes.filter(s => Math.abs(getShapeArea(s)) > maxArea * 0.2);
        }

        // STRATEGY 2: Fallback (Positive Shapes)
        // If Strategy 1 yielded nothing (SVG is not a stencil), we render the shapes directly.
        // We assume the largest shape might be a background container if it's huge, but for now we render everything
        // to ensure visibility.
        return sortedShapes;
    }, [svgData]);

    return (
        <group ref={groupRef}>
            <Center position={[0, -1, 0]}>
                {/* Elegant Float Animation: Slower, smoother, heavier feel */}
                <Float
                    speed={0.2} // Animation speed
                    rotationIntensity={0.05} // Ultra-subtle rotation (almost still)
                    floatIntensity={0} // STOP up/down movement
                    floatingRange={[0, 0]} // Range of y-axis values the object will float within
                >
                    <group
                        scale={[0.009, -0.009, 0.009]} // Increased scale for bigger logo
                        rotation={[0, 0, 0]}
                    >
                        {/* STRATEGY 1: SINGLE DRAW CALL (Merging) */}
                        {/* Passing the array of shapes creates ONE geometry for the whole logo, instead of 1 mesh per letter. */}
                        <mesh receiveShadow>
                            <extrudeGeometry
                                args={[processedShapes, {
                                    depth: 15, // Slightly thinner volume for elegance
                                    bevelEnabled: true,
                                    bevelThickness: 2, // STRATEGY 1: Thicker Bevels physically round the sharp edges
                                    bevelSize: 2,      // STRATEGY 1: Larger Bevel Radius
                                    bevelSegments: 16, // STRATEGY 1: High-Poly Bevels for smooth curvature
                                    curveSegments: 24  // STRATEGY 1: "High-Def Curvature" - Doubled the smoothness of the curves
                                }]}
                            />
                            <MeshTransmissionMaterial
                                thickness={1.5} // Thicker to absorb more light (obsidian look)
                                roughness={0} // Perfectly polished
                                chromaticAberration={0.02} // Subtle aberration
                                anisotropy={16}
                                distortion={0.0} // No distortion
                                distortionScale={0}
                                temporalDistortion={0.0}
                                color="#000000" // Almost black glass
                                resolution={1024}
                                samples={16} // Higher sampling for quality
                                reflectivity={1} // Maximum reflectivity
                                clearcoat={1}
                                clearcoatRoughness={0}
                                transmission={0.2} // LOW TRANSMISSION: Stops the white background from showing through
                                attenuationDistance={0.1} // Light dies immediately (very dark)
                                attenuationColor="#000000"
                                envMapIntensity={1} // Strong reflections to make the black glass pop
                            />
                        </mesh>
                    </group>
                </Float>
            </Center>

            {/* Dynamic Mouse-based Lighting */}
            <ambientLight intensity={0} /> {/* Completely dark ambient */}

            <spotLight
                ref={lightRef}
                position={[0, 0, 10]}
                angle={6.0} // EXTREMELY WIDE beam - effectively an ambient wash centered on mouse
                penumbra={1} // SOFTEST edges (was 0.5) - eliminates the "dot" look
                intensity={10} // Reduced intensity
                color="#E5A00D" // Gold Light
                castShadow
            />

            {/* Automated Dynamic Spotlight for sheen effect */}
            <spotLight
                ref={movingLightRef}
                position={[0, 0, 12]}
                angle={2.0} // WIDER beam (was 0.6)
                penumbra={1} // Softer edges
                intensity={50} // Bright pulse
                color="#ffffff" // Clean White Glint
                castShadow
            />

            {/* Additional Static Spotlights for richer reflections */}
            <spotLight
                position={[-15, 15, 15]} // Top Left
                angle={2} // Big wide light
                penumbra={1}
                intensity={30}
                color="#ffffff" // White highlight
                castShadow
            />
            <spotLight
                position={[15, 10, 15]} // Top Right
                angle={2} // Big wide light
                penumbra={1}
                intensity={30}
                color="#E5A00D" // Gold warm highlight
                castShadow
            />

            {/* Studio Backdrop REMOVED as per user request to remove "the effect" */}

            {/* DEPTH SOLUTION: ContactShadows */}
            {/* Creates a soft shadow 'behind' the object on a fake wall, adding depth without changing the background color */}
            <ContactShadows
                position={[0, 0, -2]} // Slightly behind the object
                opacity={0.5}
                scale={40}
                blur={2}
                far={10}
                resolution={256}
                color="#000000"
            />

            {/* Studio preset restored. Rotation applied to shift the harsh key light away from the right side of the text. */}
            {/* @ts-ignore */}
            <Environment preset="studio" environmentRotation={[0, Math.PI, 0]} />

            {/* STRATEGY 5: POST-PROCESSING (The "Definite Fix" for Aliasing) */}
            <EffectComposer multisampling={4}>
                <SMAA />
                <Bloom
                    intensity={0.2}
                    luminanceThreshold={0.9}
                    luminanceSmoothing={0.9}
                    mipmapBlur
                />
            </EffectComposer>
        </group>
    );
}

// Exported component providing the Canvas context
export default function SingulareLogo3D() {
    return (
        <div className="w-full h-full">
            <Canvas
                shadows
                dpr={[1.5, 2.5]} // STRATEGY 4 (BONUS): Super-Sampling. Force rendering at 1.5x - 2.5x screen resolution.
                className="w-full h-full"
                // Moving camera back and reducing FOV makes it look more "flat" (orthographic-like) and less distorted/tilted
                camera={{ position: [0, 0, 21], fov: 30 }}
                gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }} // Explicitly enable Native AA
            >
                <React.Suspense fallback={null}>
                    <LogoScene />
                </React.Suspense>
            </Canvas>
        </div>
    );
}
