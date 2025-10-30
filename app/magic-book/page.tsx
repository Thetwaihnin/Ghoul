"use client";
import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { textData } from "../data/Book";

const WishCard = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  // The size constants for clarity
  const FLIPBOOK_WIDTH = 370;
  const FLIPBOOK_HEIGHT = 500;

  return (
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <HTMLFlipBook
          {...({
            width: FLIPBOOK_WIDTH,
            height: FLIPBOOK_HEIGHT,
            maxShadowOpacity: 0.5,
            drawShadow: true,
            showCover: true,
            size: "fixed",
            flipping_single_page: true,
          } as any)}
          className="overflow-hidden"
          disableFlipScroll={true}
        >
          <div
            className="w-full cursor-pointer h-full flex justify-center items-center"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <div
              ref={elementRef}
              style={{
                width: `${FLIPBOOK_WIDTH}px`,
                height: `${FLIPBOOK_HEIGHT}px`,
              }}
              className="bg-violet-300 flex flex-col justify-center 
              items-center rounded-lg shadow-xl text-center 
              relative overflow-hidden"
            >
              <img
                src="/card/web.png"
                alt="spider_web"
                className="absolute bottom-0 right-0 w-40"
              />
              <img
                src="/card/spiderweb.png"
                alt="spider_web"
                className="absolute top-0 -left-6 w-48"
              />
              <svg viewBox="0 0 500 200" className="w-full absolute top-4">
                <defs>
                  <path id="curve" d="M 50 150 Q 250 10 450 150" />
                </defs>
                <text className="fill-blood text-[60px] font-griffy">
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
                <p className=" font-serif">
                  Be the happiest person alive today
                </p>
                <p className="font-griffy text-2xl text-blood">
                  Ghouls just wanna have fun
                </p>
                <p className="font-serif">
                  Trick or treat yo'self — it's your birthday!
                </p>
              </div>
            </div>
          </div>

          {/* === Pokemon Pages (Inner Content) === */}
          {textData.map((pokemon) => (
            <div className="page bg-slate-300 p-4 relative" key={pokemon.id}>
              {/* Decorative Spine/Edge */}
              <div className="absolute h-full w-4 bg-purple-400 left-0 top-0"></div>

              <div className="page-content pl-6 h-full flex flex-col justify-between">
                {" "}
                {/* Added pl-6 to accommodate the spine */}
                <div className="pokemon-container relative flex flex-col items-center text-center">
                  <img
                    src={pokemon.img}
                    alt={pokemon.name}
                    className="w-40 h-40 object-contain mx-auto mt-8" // Sized image
                  />
                  <img
                    src="/card/spider_web.png"
                    alt="spider_web"
                    className="absolute w-40 -right-5 -top-5"
                  />
                  <div className="pokemon-info mt-4 w-full">
                    <h2 className="text-3xl font-griffy font-bold text-blood">
                      {pokemon.name}
                    </h2>
                    <br />
                    <div className="flex justify-center flex-wrap gap-2 mb-4">
                      {pokemon.types.map((type) => (
                        <span
                          key={type}
                          // Use a consistent class name for styling the type badge
                          className={`px-3 py-1.5 font-serif text-xs font-semibold rounded-full shadow-md 
                          ${type === "Ghouls" && "bg-blood text-white"}
                          ${type === "Trick" && "bg-yellow-400 text-black"}
                          ${type === "Aging" && "bg-green-700 text-white"}
                          ${type === "Fighting" && "bg-orange-600 text-white"}
                          ${type === "Buttons" && "bg-gray-400 text-white"}
                          ${
                            type === "bones and shits" &&
                            "bg-purple-800 text-white"
                          }
                          ${type === "Cat" && "bg-orange-500 text-white"}
                          ${type === "Treats" && "bg-orange-600 text-white"}
                        `}
                        >
                          {type}
                        </span>
                      ))}
                    </div>

                    <p className="text-xl italic font-lacquer text-slate-800 p-2 border-t border-gray-300">
                      "{pokemon.description}"
                    </p>
                  </div>
                </div>
                {/* Page Number (Optional) */}
                <div className="text-xs text-right italic font-kablammo text-blood mt-4">
                  Page {textData.findIndex((p) => p.id === pokemon.id) + 1}
                </div>
              </div>
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </>
  );
};

export default WishCard;
