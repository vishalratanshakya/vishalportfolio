"use client";

import { Float, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function GlowMesh() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.14;
    meshRef.current.rotation.y += delta * 0.18;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.12;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <icosahedronGeometry args={[1.25, 2]} />
        <meshPhysicalMaterial
          color="#4cc9f0"
          emissive="#0d4c6b"
          emissiveIntensity={0.65}
          roughness={0.2}
          metalness={0.25}
          clearcoat={1}
          transmission={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="h-[320px] w-full sm:h-[420px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={["#05070b"]} />
        <ambientLight intensity={0.7} />
        <directionalLight intensity={1.6} position={[3, 2, 3]} color="#6ee7ff" />
        <pointLight position={[-3, -1, 2]} intensity={1.2} color="#4f46e5" />
        <GlowMesh />
        <Sparkles
          count={80}
          scale={2.5}
          size={2}
          speed={0.15}
          opacity={0.7}
          color="#7dd3fc"
        />
      </Canvas>
    </div>
  );
}
