type MenuItem = {
  name: string
  tags?: string
  description?: string
}

type MenuSection = {
  title: string
  items: MenuItem[]
}

const ANTIPASTI: MenuItem[] = [
  { name: "Frittatine Napoletane (2)", description: "Medallions of pasta fritters mixed with bechamel, caramelised onion and veal ragù" },
  { name: "Crocché di Patate", tags: "V, GF", description: "Crumbed mashed potato croquette with pecorino, smoked provola and parsley" },
  { name: "Arancini alla Bolognese (2)", tags: "GF", description: "Lightly crumbed arborio risotto balls with slow cooked bolognese ragù, parmesan and mozzarella" },
  { name: "Arancini al Tartufo (2)", tags: "V, GF", description: "Lightly crumbed arborio risotto balls with creamy porcini, mushrooms, truffle sauce, mozzarella and herbs" },
  { name: "Scagliuziell", tags: "V, GF", description: "Crispy polenta chips served with a warm creamy parmesan fonduta dipping sauce" },
  { name: "Frittura di Calamari", tags: "I, GF", description: "Golden fried calamari served with black aioli" },
  { name: "Prosciutto e Burratina", tags: "GFO", description: "Creamy burratina with San Daniele prosciutto, drizzled with basil oil and black pepper, served with grissini. Add focaccia slices" },
  { name: "Patatine Fritte", tags: "V, VG, GF", description: "Crispy, large cut, skin on fries, seasoned with a fragrant blend of herbs and sea salt" },
  { name: "Antipasto alla Toto' (2 p/p)", tags: "I", description: "Selection of our sliced meat, mixed cheeses, mixed olives, roasted peppers, white anchovies and grissini. Add focaccia slices" },
  { name: "Lasagna 'e Mamma'", description: "Homemade lasagne layers with a rich, slow cooked beef bolognese ragù, creamy handmade bechamel sauce, mozzarella, parmesan, basil and black pepper" },
]

const INSALATE: MenuItem[] = [
  { name: "Insalata Caprese", tags: "V, GF", description: "Sliced tomatoes paired with buffalo mozzarella, fresh basil leaves, oregano, extra virgin olive oil and a drizzle of balsamic glaze" },
  { name: "Rucola, Pera e Noci", tags: "VG, GF", description: "Peppery rocket leaves tossed with sliced pear and crunchy toasted walnuts, dressed in a light honey vinaigrette, balsamic glaze, topped with shaved parmesan" },
]

const PIZZE: MenuItem[] = [
  { name: "Margherita", tags: "V, VGO, GFO", description: "Tomato, mozzarella, parmesan, basil, evo" },
  { name: "St Gennaro", tags: "V, VGO, GFO", description: "Tomato, smoked provola, parmesan, basil, cracked black pepper, evo" },
  { name: "Vesuvio", tags: "VGO, GFO", description: "Tomato, mozzarella, basil, mild salami, ricotta, chilli flakes, evo" },
  { name: "Capricciosa", tags: "VGO, GFO", description: "Tomato, mozzarella, ham, mushroom, artichokes, olives" },
  { name: "L'Orto di Pulcinella", tags: "V, VGO, GFO", description: "Broccoli velouté, mozzarella, cherry tomatoes, mushrooms, roasted capsicum, crispy shallots" },
  { name: "Don Carmine", tags: "GFO", description: "Pistacchio paste, mozzarella, mortadella, stracciatella, pistacchio crumble, basil, evo" },
  { name: "Pino Daniele", tags: "GFO", description: "Mozzarella, San Daniele prosciutto, rocket, shaved parmesan, evo" },
  { name: "Maradona", tags: "V, GFO", description: "Yellow tomato, buffalo mozzarella, cherry tomato, basil reduction" },
  { name: "Masto Marco", tags: "GFO", description: "Genovese ragù (veal and caramelised onions), smoked provola, parmesan chips, parsley oil" },
  { name: "Katari'", tags: "I, GFO", description: "Zucchini sauce, mozzarella, cherry tomatoes, prawns, stracciatella, chilli, black caviar" },
  { name: "St Antonio", tags: "GFO", description: "Truffle cream, mozzarella, mushroom, porchetta, potato crocché" },
  { name: "Scugnizzo", tags: "GFO", description: "Smoked provola, ham, cherry tomatoes, basil, cracked black pepper, basil oil" },
  { name: "Spaccanapoli", tags: "VGO, GFO", description: "Smoked provola, sausages, friarielli Napoletani" },
  { name: "Marechiaro", tags: "I, GFO", description: "Yellow tomato, mozzarella, calamari, white fish, prawns, mussels, parsley oil" },
  { name: "Carlucciell", tags: "VO", description: "Fried dough filled with ricotta, mozzarella, tomatoes, parmesan, basil, ham, cracked black pepper" },
]

const FOCACCIE: MenuItem[] = [
  { name: "Garlic & Herbs" },
  { name: "Garlic & Cheese" },
  { name: "Cosacca", description: "Tomato & parmesan" },
]

const EXTRAS_LEFT: MenuItem[] = [
  { name: "Gluten free pizza base" },
  { name: "Ham / Salami / Sausage" },
  { name: "Assorted veg (each)" },
  { name: "Prosciutto" },
  { name: "Prawns" },
  { name: "Anchovies" },
]

const EXTRAS_RIGHT: MenuItem[] = [
  { name: "Mozzarella" },
  { name: "Buffalo mozzarella" },
  { name: "Smoked provola" },
  { name: "Make it vegan" },
  { name: "Pineapple" },
  { name: "Ruota di carro (15\")" },
]

const DOLCI: MenuItem[] = [
  { name: "Tiramisù" },
  { name: "Pannacotta", description: "Home made strawberry jam" },
  { name: "Cannoli", description: "Ricotta / custard / cioccolato" },
  { name: "Mousse al Cioccolato" },
  { name: "Angioletti Napoletani", description: "Neapolitan mini donuts, Nutella" },
  { name: "Sweet Pizza", description: "Nutella, pistacchio cream, ricotta dolce" },
  { name: "Tartufo Semifreddo", description: "Nocciola / pistacchio / limoncello" },
  { name: "Bowl of Vanilla Ice Cream" },
]

const SECTIONS: MenuSection[] = [
  { title: "Antipasti", items: ANTIPASTI },
  { title: "Insalate", items: INSALATE },
  { title: "Pizze", items: PIZZE },
]

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="py-3 border-b border-crema-gray last:border-b-0">
      <div className="flex flex-wrap items-baseline gap-x-2">
        <span className="font-sans font-bold text-testo text-sm sm:text-base uppercase tracking-wide">
          {item.name}
        </span>
        {item.tags && (
          <span className="font-sans text-azzurro text-xs sm:text-sm font-semibold">
            ({item.tags})
          </span>
        )}
      </div>
      {item.description && (
        <p className="font-sans text-testo/70 text-sm mt-1 leading-relaxed">
          {item.description}
        </p>
      )}
    </li>
  )
}

function Section({ section }: { section: MenuSection }) {
  return (
    <div className="mb-14">
      <h2 className="font-display text-2xl sm:text-3xl text-bruno mb-4 pb-2 border-b-2 border-azzurro inline-block">
        {section.title}
      </h2>
      <ul>
        {section.items.map((item, i) => (
          <ItemRow key={i} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default function Menu() {
  return (
    <section className="bg-crema px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-14">
          <p className="font-sans text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-azzurro-bright mb-3">
            Straight Outta Naples
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-bruno">
            Our Menu
          </h1>
        </div>

        {SECTIONS.map((section) => (
          <Section key={section.title} section={section} />
        ))}

        <div className="mb-14">
          <h2 className="font-display text-2xl sm:text-3xl text-bruno mb-4 pb-2 border-b-2 border-azzurro inline-block">
            Focaccie
          </h2>
          <ul>
            {FOCACCIE.map((item, i) => (
              <ItemRow key={i} item={item} />
            ))}
          </ul>
          <p className="font-sans text-testo/70 text-xs mt-4">
            (V) Vegetarian &nbsp;·&nbsp; (VGO) Vegan option available &nbsp;·&nbsp; (GFO) Gluten free option available
          </p>
        </div>

        <div className="mb-14">
          <h2 className="font-display text-2xl sm:text-3xl text-bruno mb-4 pb-2 border-b-2 border-azzurro inline-block">
            Extras
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            <ul>
              {EXTRAS_LEFT.map((item, i) => (
                <ItemRow key={i} item={item} />
              ))}
            </ul>
            <ul>
              {EXTRAS_RIGHT.map((item, i) => (
                <ItemRow key={i} item={item} />
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-display text-2xl sm:text-3xl text-bruno mb-4 pb-2 border-b-2 border-azzurro inline-block">
            Dolci
          </h2>
          <ul>
            {DOLCI.map((item, i) => (
              <ItemRow key={i} item={item} />
            ))}
          </ul>
        </div>

        <p className="font-sans text-testo/60 text-xs text-center mt-10">
          V = Vegetarian &nbsp;·&nbsp; VG = Vegan &nbsp;·&nbsp; GF = Gluten free &nbsp;·&nbsp; VGO = Vegan option available &nbsp;·&nbsp; GFO = Gluten free option available
        </p>

      </div>
    </section>
  )
}
