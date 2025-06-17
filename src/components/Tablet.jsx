const Tablet = ({ onClick }) => {
    return (
      <button className='cursor-pointer' onClick={onClick}>
        <span className='text-white text-lg bg-black p-10 invisible'>Tablet</span>
      </button>
    )
  }
  
  export default Tablet
  