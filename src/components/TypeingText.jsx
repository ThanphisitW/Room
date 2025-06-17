import { useEffect, useState } from 'react'

const TypingText = ({ text = '', speed = 30, onDone }) => {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    setDisplayed('') // reset on new text
    let i = -1

    const interval = setInterval(() => {
      if (i >= text.length-1) {
        clearInterval(interval)
        if (onDone) onDone()
        return
      }
      setDisplayed((prev = '') => {
        if (typeof text[i] !== 'string') return '.'
        return prev + text[i]
      })
      i++
    }, speed)

    return () => clearInterval(interval)
  }, [text])

  const formatDisplayedText = () => {
    if (displayed.startsWith('What if')) {
      return <span className="italic font-bold text-red-500">{displayed}</span>
    }
    if (displayed.startsWith('(')) {
      return <span id='phone' className="font-bold text-white">{displayed}</span>
    }

    return <span>{displayed}</span>
  }

  return (
    <div className='flex flex-col items-center px-5'>
      <span className="text-gray-400 text-sm mb-2 text-center">Turn on the music and click 'Next' to continue</span>
      <span className="text-center flex-1">
        {formatDisplayedText()}
      </span>
    </div> 
  )
}

export default TypingText
