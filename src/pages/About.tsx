import marcoImg from '../assets/interior-4.webp'
import italyMapImg from '../assets/italy-map.jpeg'

export default function About() {
  return (
    <section className="bg-crema px-4 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto">

        <p className="font-sans text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-azzurro-bright text-center mb-3">
          Straight Outta Naples
        </p>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-bruno text-center mb-2">
          A taste of Naples.
        </h1>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-bruno text-center mb-12">
          A piece of home.
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12">
          <img
            src={marcoImg}
            alt="Marco, founder of Straight Outta Naples, holding a wood-fired pizza"
            className="w-56 sm:w-64 md:w-72 rounded-2xl object-cover shrink-0"
          />

          <div className="font-sans text-base sm:text-lg text-testo leading-relaxed space-y-4">
            <p>
              For Marco, pizza has been part of his life since he was 12 years old, growing up in Naples and learning the craft from a young age.
            </p>
            <p>
              In Naples, pizza is more than food — it's tradition, family, passion and pride. Recipes are passed down through generations, traditional techniques are respected, and quality ingredients are essential.
            </p>
          </div>
        </div>

        <div className="font-sans text-base sm:text-lg text-testo leading-relaxed space-y-4 max-w-2xl mx-auto text-center mb-12">
          <p>
            Now, Marco is bringing that tradition to Maidstone with Straight Outta Naples, serving authentic Neapolitan cuisine inspired by the flavours and spirit of his hometown.
          </p>
          <p>
            Our pizzas are made using an original traditional Neapolitan recipe, time-honoured techniques and carefully selected, high-quality ingredients. Cooked in our Marana oven, each pizza is light, soft and beautifully charred — just as it should be.
          </p>
          <p>
            While staying true to the traditions of Naples, Marco also brings new ideas to the menu, including a range of gluten-free pizzas.
          </p>
          <p className="font-bold italic text-bruno">
            His mission is simple: to make the best pizza in Australia, right here in Maidstone.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 border-t border-beige pt-12">
          <img
            src={italyMapImg}
            alt="Map of Italy showing Naples"
            className="w-40 sm:w-48 rounded-xl object-cover"
          />

          <p className="font-sans text-base sm:text-lg text-testo text-center leading-relaxed max-w-xl">
            Every pizza tells a little part of Marco's story. Every bite brings a piece of Naples to you.
          </p>

          <p className="font-display text-xl sm:text-2xl text-bruno text-center">
            From Naples to Australia. From his family to yours.
          </p>

          <p className="font-display text-2xl sm:text-3xl text-azzurro-bright text-center">
            Straight Outta Naples.
          </p>

          <p className="font-sans text-lg text-testo text-center">
            Benvenuti. 🇮🇹🍕
          </p>
        </div>

      </div>
    </section>
  )
}
