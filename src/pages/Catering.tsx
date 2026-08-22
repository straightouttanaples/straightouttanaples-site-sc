import { serviceInfo } from '../constants'

export default function Catering() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-crema">
      <title>Catering | Straight Outta Naples, Maidstone</title>
      <meta name="description" content="Planning an event? Straight Outta Naples offers Neapolitan pizza catering in Maidstone. Call (03) 9689 1954 to discuss your menu." />
      <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-bruno mb-6">
        Catering
      </h1>

      <p className="font-sans text-base sm:text-lg text-testo max-w-md mb-3 leading-relaxed">
        Call us on (03) 9689 1954 to discuss your catering needs and pricing.
      </p>

      <p className="font-sans text-sm sm:text-base text-testo/70 max-w-md mb-10 leading-relaxed">
        Our team will be happy to help you plan the perfect menu for your event.
      </p>

      <p className="font-sans text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-azzurro-bright mb-2">
        Restaurant Phone
      </p>

      <p className="font-display text-3xl sm:text-4xl text-bruno mb-8">
        (03) 9689 1954
      </p>

      
        <a href={`tel:+61${serviceInfo.phone.replace(/\D/g, '').slice(1)}`}
        className="inline-flex items-center gap-2 min-h-[48px] px-8 py-3 rounded-full bg-azzurro text-white font-sans font-semibold text-sm tracking-wide transition-colors duration-150 hover:bg-azzurro-bright active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.902.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.908.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Call Us Now
      </a>
    </section>
  )
}
