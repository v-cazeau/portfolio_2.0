import Certifications from '@/components/Certifications'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Certifications />
      <Footer />
    </main>
  )
}
