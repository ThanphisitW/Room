import { useEffect, useRef, useState } from 'react'

const AudioControls = () => {
  const rainRef = useRef(new Audio('/audio/rain.mp3'))
  const pianoRef = useRef(new Audio('/audio/bg.mp3'))

  const [isPlaying, setIsPlaying] = useState(false)
  const [showPanel, setShowPanel] = useState(false)
  const [rainVolume, setRainVolume] = useState(1)
  const [pianoVolume, setPianoVolume] = useState(0.1)

  useEffect(() => {
    const rain = rainRef.current
    const piano = pianoRef.current

    rain.loop = true
    piano.loop = true
    rain.volume = rainVolume
    piano.volume = pianoVolume

    if (isPlaying) {
      rain.play()
      piano.play()
    } else {
      rain.pause()
      piano.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    if (rainRef.current) rainRef.current.volume = rainVolume
  }, [rainVolume])

  useEffect(() => {
    if (pianoRef.current) pianoRef.current.volume = pianoVolume
  }, [pianoVolume])

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowPanel(true)}
    >
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="text-white"
      >
        {isPlaying ?
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
        }
      </button>

      {showPanel && (
        <div className="absolute top-10 right-0 bg-black/80 text-white p-3 rounded shadow-lg w-30"
        onMouseLeave={() => setShowPanel(false)}>
          <div>
            <label className="text-xs">Rain Volume</label>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={rainVolume}
              onChange={(e) => setRainVolume(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="mt-2">
            <label className="text-xs">Piano Volume</label>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={pianoVolume}
              onChange={(e) => setPianoVolume(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default AudioControls
