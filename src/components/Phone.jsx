const Phone = ({ onClick }) => {
  return (
    <button className='cursor-pointer' onClick={onClick}>
      <span className='text-grey text-lg invisible'>Phone</span>
    </button>
  )
}

export default Phone
