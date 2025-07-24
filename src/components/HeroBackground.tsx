// src/components/HeroBackground.tsx

"use client";
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useState } from 'react';

function Stars(props: JSX.IntrinsicElements['points']) {
    const ref = useRef<THREE.Points>(null!);
    const [sphere] = useState(() => {
        const positions = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            positions[i * 3 + 0] = (Math.random() - 0.5) * 5;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
        }
        return positions;
    });

    useFrame((state, delta) => {
        // ස්වයංක්‍රීයව සෙමින් කැරකැවීම
        ref.current.rotation.x -= delta / 25;
        ref.current.rotation.y -= delta / 30;

        // mouse එකට 따라 සිනිඳුව චලනය වීම (Lerp - Linear Interpolation)
        // Lerp මගින් ක්ෂණිකව චලනය නොවී, ඉලක්කය දෙසට සෙමින් ගමන් කරයි.
        // මෙය වඩාත් ස්වභාවික පෙනුමක් ලබා දෙයි.
        const targetX = state.pointer.y * 0.15;
        const targetY = state.pointer.x * 0.15;
        
        // 0.02 යනු වේගයයි. මෙම අගය වෙනස් කර ඔබට අවශ්‍ය සුමට බව සකසාගත හැක.
        ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, targetX, 0.02);
        ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetY, 0.02);
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#985eff" // වර්ණය මදක් වෙනස් කළා
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function HeroBackground() {
    return (
        <div className="w-full h-full absolute inset-0 z-5"> {/* z-index එක 5 ලෙස සකසන ලදී */}
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
}