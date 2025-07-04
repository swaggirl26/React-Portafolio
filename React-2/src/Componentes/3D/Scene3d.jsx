import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text } from '@react-three/drei';
import { Suspense } from 'react';

const Scene3D = () => {
  return (
    <div className="w-full h-screen relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          <Float speed={1} rotationIntensity={0.5}>
            <Text
              position={[0, 0, 0]}
              fontSize={1.5}
              color="#FFFFFF"
              anchorX="center"
              anchorY="middle"
            >
              Mi Portafolio 3D
            </Text>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
