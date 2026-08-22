import { HeroSection } from '../components/Hero.tsx'
import { MenuSlideshow } from '../components/MenuSlideshow'
import LocationAndHours from '../components/LocationAndHours'

export default function HomePage() {
  return (
    <>
      <title>Straight Outta Naples | Neapolitan Pizza Restaurant & Takeaway Maidstone</title>
      <meta name="description" content="Authentic Neapolitan pizza in Maidstone, Melbourne. Dine in or order takeaway at Straight Outta Naples, 2/12 Hampstead Rd. Call (03) 9689 1954." />
      <HeroSection />
      <MenuSlideshow />
      <LocationAndHours />
    </>
  )
}
