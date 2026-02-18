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
      {/* UI Overlay */}
      <div className="absolute inset-x-0 top-0 z-10">
        <div className="mx-auto max-w-6xl px-6 pt-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 py-2">
            <div className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-white/80">
              Defender 3D
            </div>
            <div className="h-4 w-px bg-white/15" />
            <div className="text-xs sm:text-sm text-white/60">Drag to rotate</div>
          </div>
        </div>
      </div>

      <Canvas camera={{ position: cameraPos, fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1.4} />

        {/* 3D Defender Model */}
        <Suspense
          fallback={
            <Html center>
              <div className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm text-white/80 backdrop-blur">
                Loading model…
              </div>
            </Html>
          }
        >
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
