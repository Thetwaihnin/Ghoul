"use client";
import { useState } from "react";
import Footer from "./Footer";
import { NavType } from "../type/Card";
import { cardsData } from "../data/CardData";
import { LiaBackwardSolid } from "react-icons/lia";
// {setShowCards,setShowBox}: NavType
export default function CardDisplayArea({ setShowCards, setShowBox }: NavType) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Helper to get the index of the next card
  const getNextIndex = (current: number) => (current + 1) % cardsData.length;

  const nextCard = () => {
    setTimeout(() => {
      setCurrentIndex((prev) => getNextIndex(prev));
    }, 100);
  };

  const prevCard = () => {
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + cardsData.length) % cardsData.length
      );
    }, 100);
  };

  const currentCard = cardsData[currentIndex];
  const handleGoBack = () => {
    setShowBox(false);
    setShowCards(false);
  };
  return (
    <>
      <div
        onClick={handleGoBack}
        title="Click to see wish cards"
        className=" mt-8 text-cyan-300 absolute left-6 top-12 backdrop-blur-md px-3 hover:text-shadow-lg hover:text-blue-400 hover:text-shadow-cyan-500/50
         active:scale-95 hover:border-2 hover:border-blue-400 hover:shadow-lg
          hover:shadow-cyan-500/50 bg-slate-400/20 transition-transform duration-100 cursor-pointer col-span-3 
          font-susemono font-bold py-2 rounded-lg border-2 border-[#1eecab] shadow-[0_0_6px_cyan]"
      >
        <LiaBackwardSolid />
      </div>
      <div className="flex flex-col items-center justify-center mt-24 min-h-[500px]  p-6 rounded-lg">
        <div className="relative w-96 h-96">
          <div
            key={currentCard.id}
            className={`flip-card absolute w-full h-full cursor-pointer transition-all duration-500 z-20 `}
          >
            <div className="flip-card-inner bg-slate-900 w-full h-full glowing-shadow">
              {/* Front */}
              <div className="flip-card-front w-full h-full rounded-xl flex flex-col justify-center items-center ">
                <img
                  src={currentCard.frontImg}
                  alt={currentCard.title}
                  className="w-48 h-48 object-contain drop-shadow-[0_0_12px_white]"
                />
                <p className="font-henny-penny text-[#E0E3E6] text-2xl mt-4">
                  {currentCard.title}
                </p>
              </div>

              {/* Back */}
              <div className="flip-card-back absolute inset-0 rounded-2xl overflow-hidden">
                {currentCard.backContent}
              </div>
            </div>
          </div>
        </div>{" "}
        <div className=" hidden justify-center w-full pt-8 space-x-8">
          <button
            onClick={prevCard}
            className="rounded-full w-12 h-12 bg-gray-700 text-white text-xl hover:bg-red-500 transition-colors duration-200 shadow-lg flex items-center justify-center"
          >
            &lt;
          </button>
          <button
            onClick={nextCard}
            className="rounded-full w-12 h-12 bg-gray-700 text-white text-xl hover:bg-blue-500 transition-colors duration-200 shadow-lg flex items-center justify-center"
          >
            &gt;
          </button>
        </div>
        <Footer
          cardsData={cardsData}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </>
  );
}
