const AutoScrollPage = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black text-white z-51">
        <button
          onClick={onClose}
          className="text-white px-4 py-2 absolute top-4 right-4 cursor-pointer z-52"
        >
          ✕
        </button>
      <div className="flex flex-col h-screen items-center justify-center inset-0 p-10 text-center text-lg animate-fade-in">
        <p className="w-lg">
        The resting youth are not failures, nor are they lost causes.
        They are a generation caught between ambition and exhaustion
        young people who stepped away not because they lacked will,
        but because they could no longer keep running toward a finish line that kept disappearing.
        They are thoughtful, sensitive, and weary, not idle.
        Behind their pause is not laziness, but quiet resistance
        not despair, but a fragile hope that the world might someday meet them halfway.
        To understand them is not to fix them
        it is simply to see them, and let them breathe.
        </p>
        <button onClick={() => {window.location.reload(true)}}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        >
          Play agian
        </button>
      </div>
    </div>
  )
}

export default AutoScrollPage
