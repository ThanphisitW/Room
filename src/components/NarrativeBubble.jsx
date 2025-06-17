import React from 'react'
import TypingText from './TypeingText'

const NarrativeBubble = ({ text, onNext, onBack, hasNext, hasPrev }) => {
    return (
      <div className="fixed bottom-0 w-full p-4 bg-black/70 text-white text-lg flex justify-between items-center">
        <button
          onClick={onBack}
          disabled={!hasPrev}
          className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
        >
          Back
        </button>
        <TypingText text={text} />
        <button
          onClick={onNext}
          disabled={!hasNext}
          className="px-3 py-1 bg-blue-600 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    )
  }
export default NarrativeBubble