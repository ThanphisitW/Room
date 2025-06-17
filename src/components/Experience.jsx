import { OrbitControls, useGLTF } from '@react-three/drei'
import Rain from './Rain'
import { useEffect } from 'react'  

useGLTF.preload('/models/Room_project-v1.glb', true)

const Model = () => {
  const { scene } = useGLTF('/models/Room_project-v1.glb')

  useEffect(() => {
    fetch('/models/Room_project-v1.glb')
      .then(res => res.text())
      .then(text => console.log('Model file starts with:', text.slice(0, 100)))
      .catch(console.error)
  }, [])

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
