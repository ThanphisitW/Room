// App.jsx
import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, Loader } from '@react-three/drei'
import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Experience from './components/Experience.jsx'
import Background from './components/Background.jsx'
import NarrativeManager from './components/NarrativeManager.jsx'
import Phone from './components/Phone.jsx'
import PhonePopup from './components/PhonePopup.jsx'
import Tablet from './components/Tablet.jsx'
import TabletPopup from './components/TabletPopup.jsx'

export default function App()  {
  const [showPopup, setShowPopup] = useState(false)
  const [showTablet, setShowTablet] = useState(false)

  return (
    <main className='w-full h-screen'>
      <div className='w-full h-full absolute inset-0 overflow-hidden'>
        <Navbar />
        <Canvas
          className='w-full h-full'
          gl={{ toneMappingExposure: 12 }}
          camera={{ position: [0, 0, 0], fov: 50 }}
        >
          <Background />
          <Suspense fallback={null}>
            <Experience />
            <Html position={[2.9, -0.8, 2]}>
              <Phone onClick={() => setShowPopup(true)} />
            </Html>
            <Html position={[0.2, -0.5, 1.35]}>
              <Tablet onClick={() => setShowTablet(true)} />
            </Html>
          </Suspense>
        </Canvas>

        {showPopup && <PhonePopup
                        onClose={() => {
                        setShowPopup(false)
                      }} />}

        {showTablet && <TabletPopup
                        onClose={() => {
                        setShowTablet(false)
                      }} />}
                      
        <NarrativeManager/>


        <Loader />
      </div>
    </main>
  )
}
