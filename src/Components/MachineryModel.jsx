import { useGLTF } from '@react-three/drei';

function MachineryModel() {
  const { scene } = useGLTF('/models/modular_pipes.glb'); // 🔁 change filename if needed
  return <primitive object={scene} scale={1.5} />;
}

export default MachineryModel;
