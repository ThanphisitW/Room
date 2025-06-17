import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Rain = ({ count = 1000 }) => {
    const meshRef = useRef()
    const dummy = useMemo(() => new THREE.Object3D(), [])
  
    // Center of rain area — move it outside the model
    const centerX = 15
    const centerY = 1    // higher Y to start above the room
    const centerZ = 0  // Z shift to "outside" of your model
  
    const drops = useMemo(() =>
      new Array(count).fill().map(() => ({
        position: [
          centerX + (Math.random() - 0.5) * 20, // X spread
          centerY + Math.random() * 10,        // Y height range
          centerZ + (Math.random() - 0.5) * 20 // Z spread
        ],
        velocity: 0.1 + Math.random() * 0.2,
      })), [count]
    )
  
    useFrame(() => {
      drops.forEach((drop, i) => {
        drop.position[1] -= drop.velocity
        if (drop.position[1] < -2) drop.position[1] = centerY + Math.random() * 10
  
        dummy.position.set(...drop.position)
        dummy.updateMatrix()
        meshRef.current.setMatrixAt(i, dummy.matrix)
      })
      meshRef.current.instanceMatrix.needsUpdate = true
    })
  
    return (
      <instancedMesh ref={meshRef} args={[null, null, count]}>
        <cylinderGeometry args={[0.01, 0.01, 0.2, 4]} />
        <meshBasicMaterial color="#111111" />
      </instancedMesh>
    )
  }

export default Rain
