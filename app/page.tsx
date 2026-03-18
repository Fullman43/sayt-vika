import Hero from '@/components/home/Hero'
import ServicesSection from '@/components/home/ServicesSection'
import UTPSection from '@/components/home/UTPSection'
import ProcessSection from '@/components/home/ProcessSection'
import PortfolioSection from '@/components/home/PortfolioSection'
import ContactFormSection from '@/components/home/ContactFormSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <UTPSection />
      <ProcessSection />
      <PortfolioSection />
      <ContactFormSection />
    </>
  )
}
