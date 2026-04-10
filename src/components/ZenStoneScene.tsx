import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

const ZenStone = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const geometry = useMemo(() => {
    // Classic brilliant-cut diamond proportions
    const points = [
      new THREE.Vector2(0, -1.2),    // Culet (bottom point)
      new THREE.Vector2(1.4, 0),     // Girdle (widest point)
      new THREE.Vector2(0.8, 0.45),  // Table edge
      new THREE.Vector2(0, 0.45)     // Table center
    ];
    // Use 8 segments for a classic, octagonal diamond shape
    const geo = new THREE.LatheGeometry(points, 8).toNonIndexed(); // Non-indexed for flat facets
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Smooth mouse follow
    const pointer = state.pointer;
    mouseRef.current.x += (pointer.x * 0.3 - mouseRef.current.x) * 0.02;
    mouseRef.current.y += (pointer.y * 0.3 - mouseRef.current.y) * 0.02;

    meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.1 + mouseRef.current.y;
    meshRef.current.rotation.y = t * 0.08 + mouseRef.current.x;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} geometry={geometry} scale={1}>
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={1.5}
          chromaticAberration={0.05}
          anisotropy={0.3}
          distortion={0}
          distortionScale={0}
          temporalDistortion={0}
          ior={2.4}
          color="#ffffff"
          roughness={0}
          transmission={1}
        />
      </mesh>
    </Float>
  );
};

const ZenStoneScene = () => (
  <div className="w-full h-[300px] md:h-[500px]">
    <Canvas
      camera={{ position: [0, 0, 5], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <directionalLight position={[-3, 2, -3]} intensity={0.3} />
      <ZenStone />
      <Environment preset="studio" environmentIntensity={1} />
    </Canvas>
  </div>
);

export default ZenStoneScene;
