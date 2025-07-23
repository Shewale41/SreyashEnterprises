import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import MachineryModel from './MachineryModel';

function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
          <MachineryModel />
        </Float>
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}

export default HeroCanvas;
