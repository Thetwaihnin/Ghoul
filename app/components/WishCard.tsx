import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import type { NavType } from "../type/Card";

const WishCard = ({ setShowCards, setShowBox }: NavType) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  // The size constants for clarity
  const FLIPBOOK_WIDTH = 370;
  const FLIPBOOK_HEIGHT = 500;

  const pokemonData = [
    {
      id: "006",
      name: "Charizard",
      img: "/card/baby.png",
      types: ["Fire", "Flying"],
      description:
        "Flies in search of strong opponents. Breathes extremely hot fire that melts anything, but never uses it on weaker foes.",
    },
    {
      id: "025",
      name: "Pikachu",
      types: ["Electric"],
      description:
        "When Pikachu meet, they touch tails to exchange electricity as a greeting.",
    },
    {
      id: "125",
      name: "Electabuzz",
      types: ["Electric"],
      description:
        "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms.",
    },
    {
      id: "185",
      name: "Sudowoodo",
      types: ["Rock"],
      description:
        "Despite looking like a tree, its body is more like rock. Hates water and hides when it rains.",
    },
    {
      id: "448",
      name: "Lucario",
      types: ["Fighting", "Steel"],
      description:
        "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.",
    },
    {
      id: "658",
      name: "Greninja",
      types: ["Water", "Dark"],
      description:
        "Creates throwing stars from compressed water that can slice through metal when thrown at high speed.",
    },
    {
      id: "491",
      name: "Darkrai",
      types: ["Dark"],
      description:
        "A legendary Pokémon that appears on moonless nights, putting people to sleep and giving them nightmares.",
    },
  ];

  return (
    <>
    <div className="flex justify-center items-center  min-h-screen  p-4">
      <HTMLFlipBook
        {...({
          width: FLIPBOOK_WIDTH,
          height: FLIPBOOK_HEIGHT,
          maxShadowOpacity: 0.5,
          drawShadow: true,
          showCover: true,
          size: "fixed",
          flipping_sigle_page: true,
        } as any)} 
      >
        <div className="w-full h-full flex justify-center items-center">
          <div
            ref={elementRef}
            style={{ width: `${FLIPBOOK_WIDTH}px`, height: `${FLIPBOOK_HEIGHT}px` }}
            className="bg-violet-300 flex flex-col justify-center 
              items-center rounded-lg shadow-xl text-center 
              relative overflow-hidden p-8" 
          >
            <img src="/card/web.png" alt="spider_web" className="absolute bottom-0 right-0 w-40" />
            <img src="/card/spiderweb.png" alt="spider_web" className="absolute top-0 -left-6 w-48" />
            <svg viewBox="0 0 500 200" className="w-full absolute top-4">
              <defs>
                <path id="curve" d="M 50 150 Q 250 10 450 150" />
              </defs>
              <text className="fill-blood text-[60px] font-griffy"
              >
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                  Happy Birthday
                </textPath>
              </text>
            </svg>
            <img
              src="/card/hatghost.png"
              alt="ghost with hat"
              className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full transform hover:scale-110 transition duration-300" // Added transition and hover effect
            />
            <img
              src="/card/on.png"
              alt="bat"
              className="absolute z-10 left-0 top-1/3 w-24 transform hover:scale-105 transition duration-300" // Added transition and hover effect
            />
            <div className="absolute bottom-8">
              <p className="font-griffy text-2xl text-blood">Flip the page</p>
              <p className=" font-serif">Be the happiest person alive today</p>
              <p className="font-griffy text-2xl text-blood">Ghouls just wanna have fun</p>
              <p className="font-serif">Trick or treat yo'self — it's your birthday!</p>
            </div>
          </div>
        </div>

        {/* === Pokemon Pages (Inner Content) === */}
        {pokemonData.map((pokemon) => (
          <div 
            className="page bg-white p-4 relative"
            key={pokemon.id}
          >
            {/* Decorative Spine/Edge */}
            <div className="absolute h-full w-4 bg-purple-300 left-0 top-0"></div> 

            <div className="page-content pl-6 h-full flex flex-col justify-between"> {/* Added pl-6 to accommodate the spine */}
              <div className="pokemon-container flex flex-col items-center text-center">
                <img
                  src={pokemon.img}
                  alt={pokemon.name}
                  className="w-40 h-40 object-contain mx-auto mt-4" // Sized image
                />
                
                <div className="pokemon-info mt-4 w-full">
                  <h2 className="text-3xl font-bold text-gray-800">{pokemon.name}</h2>
                  <p className="text-sm font-mono text-gray-500 mb-2">Pokedex No. **#{pokemon.id}**</p>
                  
                  <div className="flex justify-center flex-wrap gap-2 mb-4">
                    {pokemon.types.map((type) => (
                      <span
                        key={type}
                        // Use a consistent class name for styling the type badge
                        className={`px-3 py-1 text-xs font-semibold rounded-full uppercase shadow-md 
                          ${type === 'Fire' && 'bg-red-500 text-white'}
                          ${type === 'Electric' && 'bg-yellow-400 text-black'}
                          ${type === 'Rock' && 'bg-amber-700 text-white'}
                          ${type === 'Fighting' && 'bg-orange-600 text-white'}
                          ${type === 'Steel' && 'bg-gray-400 text-white'}
                          ${type === 'Water' && 'bg-blue-500 text-white'}
                          ${type === 'Dark' && 'bg-gray-800 text-white'}
                          ${type === 'Flying' && 'bg-indigo-300 text-gray-800'}
                          
                        `}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-base italic text-gray-700 p-2 border-t border-gray-300">
                    "{pokemon.description}"
                  </p>
                </div>
              </div>

              {/* Page Number (Optional) */}
              <div className="text-xs text-right text-gray-400 mt-4">Page {pokemonData.findIndex(p => p.id === pokemon.id) + 1}</div>

            </div>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
    </>
  );
};

export default WishCard;