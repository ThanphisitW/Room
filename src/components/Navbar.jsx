import { useState } from 'react'
import AudioControls from './AudioControls'
import AboutModal from './AboutModal'

const Navbar = () => {
  const [showAbout, setShowAbout] = useState(false)

  return (
    <nav
      className="p-4 z-50 flex gap-4 items-center bg-transparent
      absolute w-full justify-end"
    >
      <AudioControls />
      <button
        onClick={() => setShowAbout(true)}
        className="text-white border px-2 py-1 rounded hover:bg-white hover:text-black transition"
      >
        About Me
      </button>
      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </nav>
  )
}

export default Navbar
