const AboutModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null
  
    return (
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
        <div className="bg-white p-6 m-4 rounded max-w-md w-full relative">
          <button
            className="absolute top-2 right-4 text-black text-xl cursor-pointer"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-2">About Me</h2>
          <p className="text-sm text-gray-700">
            Hi, I'm a sophomore student at Faculty of Arts, Chulalongkorn University. I'm majoring in Information Studies and minoring in Korean Language. <br />
            I have a passion for creative coding and any kind of art. This project is part of my personal projects. I hope you enjoy exploring it :)
          </p>
          <div>
            <p className="text-sm text-gray-700 mt-4">
              Feel free to ontact me!
            </p>
            <ul className="flex mt-0.5 space-x-1.5">
              <li className="flex items-center justify-center shrink-0">
                <a href="https://medium.com/@6640105922" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
                    <path d="M52,8H12c-2.209,0-4,1.791-4,4v40c0,2.209,1.791,4,4,4h40c2.209,0,4-1.791,4-4V12C56,9.791,54.209,8,52,8z M47,19.5	l-1.821,2.197C45.064,21.811,45,21.965,45,22.125V41.75c0,0.16,0.064,0.314,0.179,0.428L47,44.546V45H37v-0.454l2.821-2.368	C39.936,42.064,40,41.91,40,41.75V23.879L31.848,45h-0.001h-1.543L22,24.375v16.108c0,0.22,0.076,0.433,0.215,0.605L25,44.546V45h-8	v-0.454l2.783-3.438C19.923,40.936,20,40.721,20,40.5V22.388c0-0.142-0.05-0.279-0.142-0.388L18,19.5V19h7.097l7.624,19.183	L40.002,19H47V19.5z"></path>
                  </svg>
                </a>
              </li>
              <li className="flex items-center justify-center shrink-0">
                <a href="https://www.linkedin.com/in/thanphisit-wingpat-2b0b34335/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                      <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                  </svg>
                </a>
              </li>
              <li className="text-sm flex items-center justify-center shrink-0">
                <a href="6640105922@student.chula.ac.th">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  export default AboutModal
  