import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'

export default function Background() {
  const texture = useLoader(THREE.TextureLoader, '/images/Citynight.jpg')
  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[50, 32, 32]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  )
}