import { OrbitControls, useGLTF } from '@react-three/drei'
import Rain from './Rain'

useGLTF.preload('./models/Room_project-v1.glb', true)

const Model = () => {
  const { scene } = useGLTF('./models/Room_project-v1.glb')

{/*
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        console.log(child.name, child.material)
      }
    })
  }, [scene])
*/}

  return <primitive object={scene} scale={2} position={[0, -1.5, 0]} />
}

export default function Experience() {
  return (
    <>
      <OrbitControls
        target={[2, 0.2, 0.1]}
        enablePan={false}
        enableZoom={false}
      />
      <Model />
      <Rain count={300} />
    </>
  )
}
