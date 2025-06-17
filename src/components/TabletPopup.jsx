import { useState, useRef } from 'react'
import AutoScrollPage from './AutoScrollPage'

const emails = [
    {
      "id": 1,
      "sender": "recruitment@novatek.kr",
      "subject": "Application Result for Software Developer Position",
      "snippet": "We appreciate your interest in Novatek Corporation...",
      "body": "Dear Applicant,\n\nThank you for applying to Novatek Corporation. We appreciate the time and effort you invested in the application process.\n\nAfter careful consideration, we regret to inform you that you have not been selected to move forward in our recruitment process at this time.\n\nWe wish you all the best in your future endeavors.\n\nSincerely,\nNovatek Recruitment Team",
      "read": true
    },
    {
      "id": 2,
      "sender": "careers@infocrest.co.kr",
      "subject": "Thank You for Your Application",
      "snippet": "After reviewing your profile, we have decided to proceed with other candidates...",
      "body": "Hello,\n\nWe would like to express our gratitude for your application to InfoCrest Solutions.\n\nUnfortunately, we have decided to move forward with candidates whose experience more closely matches our current requirements.\n\nWe encourage you to apply for future opportunities that match your skills and interests.\n\nWarm regards,\nInfoCrest HR Department",
      "read": true
    },
    {
      "id": 3,
      "sender": "noreply@joblinkplus.kr",
      "subject": "[Advertisement] Your Ideal Job Is Waiting – Start Now",
      "snippet": "Find companies actively looking for your skills on JobLink+...",
      "body": "Looking for your next career move?\n\n🔍 Discover job postings tailored to your profile on JobLink+.\n\n✔ Personalized recommendations\n✔ Resume review service\n✔ Direct applications to hiring managers\n\n👉 Click here to get started today!",
      "read": true
    },
    {
      "id": 4,
      "sender": "hr@dexontech.co.kr",
      "subject": "Recruitment Process Update",
      "snippet": "We have completed the screening process...",
      "body": "Dear Candidate,\n\nThank you for applying to DexonTech Industries.\n\nFollowing the screening process, we regret to inform you that you have not been selected for the current role. Your background is impressive, and we encourage you to consider future openings with us.\n\nBest regards,\nDexonTech Recruitment Team",
      "read": true
    },
    {
      "id": 5,
      "sender": "ads@hirepulse.kr",
      "subject": "[Ad] Get Job Offers from Top Startups Instantly",
      "snippet": "Create your profile on HirePulse and let employers reach out to you...",
      "body": "🚀 Tired of endless job applications?\n\nLet employers come to you with HirePulse.\n\n✓ Smart job matching\n✓ Interview invites from top startups\n✓ 100% free for job seekers\n\nStart building your career today!\n\n👉 Visit hirepulse.kr now",
      "read": true
    },
    {
      "id": 6,
      "sender": "recruit@zenex.kr",
      "subject": "Regarding Your Recent Job Application",
      "snippet": "We regret to inform you that we cannot proceed with your application...",
      "body": "Dear Applicant,\n\nThank you for your recent application to Zenex Microsystems.\n\nAfter careful evaluation, we regret to inform you that we will not be moving forward with your candidacy for the current position.\n\nWe appreciate your interest in our company and wish you the best in your job search.\n\nSincerely,\nZenex Recruitment",
      "read": true
    },
    {
      "id": 7,
      "sender": "careers@byteworks.kr",
      "subject": "Your Application Status",
      "snippet": "Unfortunately, you have not been selected for this role...",
      "body": "Dear Candidate,\n\nThank you for taking the time to apply for the Frontend Developer role at ByteWorks Korea.\n\nWe regret to inform you that we have chosen to proceed with other applicants whose qualifications more closely meet our current needs.\n\nWe value your interest and encourage you to apply again in the future.\n\nBest regards,\nByteWorks HR Team",
      "read": true
    },
    {
      "id": 8,
      "sender": "promotions@careerbridge.kr",
      "subject": "[Ad] CareerBridge – Korea’s Leading Job Platform",
      "snippet": "Thousands of new jobs posted daily. Find your match today...",
      "body": "🎯 Don’t miss out on your perfect job!\n\nJoin CareerBridge today to explore:\n\n- AI-powered job matching\n- Resume boosters\n- Insider company reviews\n\n🧑‍💼 Take charge of your career path.\n\n👉 Start now at careerbridge.kr",
      "read": true
    }
  
]

const TabletPopup = ({ onClose }) => {
  const [selectedEmail, setSelectedEmail] = useState(null)
  const [emailList, setEmailList] = useState(emails)
  const [showScroll, setShowScroll] = useState(false)

  const gasp = useRef(new Audio('/audio/gasp.mp3'))

  const handleSelect = (email) => {
    setSelectedEmail(email)
    setEmailList((prev) =>
      prev.map((e) => (e.id === email.id ? { ...e, read: true } : e))
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col md:flex-row text-sm font-sans bg-black/70 backdrop-blur-sm">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 px-3 py-1 bg-white text-black rounded hover:bg-gray-200 shadow-md"
      >
        ✕
      </button>
      
      {/* Sidebar */}
      <aside className="bg-gray-100 p-4 border-b md:border-b-0 md:border-r w-full md:w-30 flex-shrink-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Mail</h2>
        </div>
        <ul className="text-sm flex space-x-4 space-y-2 md:flex-col">
          <li className="font-semibold text-blue-600">Inbox</li>
          <li className="text-gray-600">Sent</li>
          <li className="text-gray-600">Drafts</li>
          <li className="text-gray-600">Trash</li>
        </ul>
      </aside>

      {/* Email List */}
      <section className="w-full h-1/2 md:h-full md:w-1/3 bg-white border-t md:border-t-0 md:border-r overflow-y-auto">
        <div className="font-semibold text-gray-800 border-b p-3 bg-gray-50">
          Emails
        </div>

            <div className={`px-4 py-3 cursor-pointer border-b hover:bg-blue-50 transition`}
                onClick={() => {
                    setShowScroll(true)
                    gasp.current.play()
                }}
            >
                <div className="flex justify-between items-center">
                    <span className={`font-bold text-black`}>
                      talent@skynexlabs.co.kr
                    </span>
                    <span className="w-2 h-2 bg-blue-500 rounded-full inline-block ml-2"/>
                </div>
                <div className="text-sm text-gray-800">Update on Your Application</div>
                <div className="text-xs text-gray-500 truncate">We appreciate your interest in joining Skynex Labs...</div>
            </div>
            
            {showScroll && <AutoScrollPage onClose={() => setShowScroll(false)} />}

        {emailList.map((email) => (
            <div
                key={email.id}
                onClick={() => handleSelect(email)}
                className={`px-4 py-3 cursor-pointer border-b hover:bg-blue-50 transition ${
                selectedEmail?.id === email.id ? 'bg-blue-100' : ''
                } ${!email.read ? 'bg-white' : 'bg-gray-200'}`}
            >
                <div className="flex justify-between items-center">
                    <span className={`font-bold ${!email.read ? 'text-black' : 'text-gray-600'}`}>
                        {email.sender}
                    </span>
                    {!email.read && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full inline-block ml-2"/>
                    )}
                </div>
                <div className="text-sm text-gray-800">{email.subject}</div>
                <div className="text-xs text-gray-500 truncate">{email.snippet}</div>
            </div>
        ))}
      </section>

      {/* Email Preview */}
      <section className="flex-1 bg-white p-6 overflow-y-auto relative">
        {selectedEmail ? (
          <div>
            <h3 className="text-lg font-bold mb-1">{selectedEmail.subject}</h3>
            <div className="text-sm text-gray-500 mb-4">
              From: {selectedEmail.sender}
            </div>
            <pre className="whitespace-pre-wrap text-sm text-gray-800">
              {selectedEmail.body}
            </pre>
          </div>
        ) : (
          <div className="text-gray-400 text-center mt-20">Select an email to preview</div>
        )}
      </section>
    </div>
  )
}

export default TabletPopup
