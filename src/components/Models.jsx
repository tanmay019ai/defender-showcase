"use client";
import React, { Suspense, useRef, useLayoutEffect, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";
import * as THREE from "three";

function DefenderModel({ url, scale }) {
  const groupRef = useRef();
  const { scene } = useGLTF(url);

  // Center the model
  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);
  }, [scene]);

  return (
    <group ref={groupRef} position={[0, -75, -200]}>
      <primitive object={scene} scale={scale} />
    </group>
  );
}

export default function Models() {
  const controlsRef = useRef();
  const [scale, setScale] = useState(1.1);
  const [cameraPos, setCameraPos] = useState([0, 1, 8]);

  // Responsive scaling and camera adjustment
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScale(0.6); // mobile
        setCameraPos([0, 1, 10]);
      } else if (width < 1024) {
        setScale(0.9); // tablet
        setCameraPos([0, 1, 9]);
      } else {
        setScale(1.1); // desktop
        setCameraPos([0, 1, 8]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <Canvas camera={{ position: cameraPos, fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1.4} />

        {/* 3D Defender Model */}
        <Suspense fallback={<Html center>Loading...</Html>}>
          <DefenderModel url="/defender.glb" scale={scale} />
        </Suspense>

        {/* Orbit Controls */}
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          enableRotate
          target={[0, -95, -200]}
          autoRotate
          autoRotateSpeed={1.2}
        />

        <Environment preset="city" />
      </Canvas>

      {/* Optional subtle floor reflection glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-40 bg-green-400/10 blur-3xl rounded-full" />
    </section>
  );
}
