const PhonePopup = ({ onClose }) => {
    return (
      <>
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50"
              onClick={onClose}>
            <img src="./images/chat.jpg" alt="엄마랑 대화" className="h-[80vh] w-auto rounded"/>
        </div>
      </>
    )
  }
  
export default PhonePopup
  