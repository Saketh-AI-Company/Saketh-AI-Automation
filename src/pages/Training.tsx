import Hero from '../components/training/Hero'
import CourseDetails from '../components/training/CourseDetails'
import BatchFeatures from '../components/training/BatchFeatures'
import WhatYouGet from '../components/training/WhatYouGet'
import Curriculum from '../components/training/Curriculum'
import Vision from '../components/training/vision'
import FAQ from '../components/training/FAQ'



interface TrainingProps {
  onNavigate: (page: string) => void
}

export default function Training({ onNavigate }: TrainingProps) {
  return (
    <div>
      <Hero />
      <CourseDetails />
      <BatchFeatures/>
      <WhatYouGet />
      <Curriculum />
      <Vision />
      <FAQ />
    </div>
  )
}
