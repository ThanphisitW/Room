import { useState } from 'react'
import NarrativeBubble from './NarrativeBubble'

const narrative = [
  { text: `...` },
  { text: `My name is Park and I'm 26 years old.` },
  { text: `It's been six months since I left my job, and I've been living off my savings ever since.` },
  { text: `People think that once you quit a toxic workplace, you’re free.` },
  { text: `But in truth, some things don’t leave with you.` },
  { text: `Every time I think about applying for a new job, fear grips me.` },
  { text: `What if it happens again?` },
  { text: `What if I land somewhere even worse?` },
  { text: `What if I’m the problem?` },
  { text: `There was one time I managed to push through the fear and apply for a job.` },
  { text: `But over and over again, I was rejected, often with the same reason` },
  { text: `“You’re too old.”` },
  { text: `Each time it happened, a little more of my confidence broke away.` },
  { text: `Now, even trying feels like setting myself up to be reminded that I’m not wanted.` },
  { text: `Now, I find myself staying in my room most days.` },
  { text: `Too scared to try, too scared to fail.` },
  { text: `(Let's check the phone first then continue the story)` },
  { text: `Oh right... today’s the day the interview results come out...` },
  { text: `Ugh... I really don’t want to look...` },
  { text: `But... maybe I should check, just once.` },
  { text: `(Let's check the email on tablet)` },
]

const NarrativeManager = () => {
  const [index, setIndex] = useState(0)
  const current = narrative[index]

  const handleNext = () => {
    if (index < narrative.length - 1) setIndex(index + 1)
  }

  const handleBack = () => {
    if (index > 0) setIndex(index - 1)
  }

  return (
    <>
      <NarrativeBubble
        text={current.text}
        onNext={handleNext}
        onBack={handleBack}
        hasNext={index < narrative.length - 1}
        hasPrev={index > 0}
      />
    </>
  )
}
export default NarrativeManager