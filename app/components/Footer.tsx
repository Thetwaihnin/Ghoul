import type { ReactNode, Dispatch, SetStateAction } from "react";

type Card = {
  id: string;
  frontImg: string;
  title: string;
  backContent: ReactNode;
};

type Props = {
  cardsData: Card[];
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
};

const Footer = ({ cardsData,currentIndex , setCurrentIndex}: Props) => {
  return (
    <footer className="fixed bottom-0 left-0 h-300px rounded-t-xl w-full sm:w-[400px]  bg-blue-400/20  shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.1px] border border-white/30 text-white p-4 text-center">
    <div className="mb-4 p-2 text-center">
        <p>.</p>
    </div>
      <div className="relative glowing-border-box grid grid-cols-3 w-full h-[250px] overflow-y-auto sm:h-[350px] scrollbar-hide rounded-md gap-2 p-2 bg-slate-900/30 ">
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            onClick={() => setCurrentIndex(index)}
            className={`flex-none w-28 h-28 text-center cursor-pointer p-1 border-2 rounded-md ${
              currentIndex === index ? "border-blue-400 bg-slate-700" : "border-transparent bg-slate-300"
            }`}
          >
            <div className={`${currentIndex === index ? "grayscale-0 brightness-100" : "filter grayscale brightness-50"} w-full h-full hover:border-2 hover:border-blue-400   hover:grayscale-0 hover:brightness-100 transition duration-100`}>
              <img
                src={card.frontImg}
                alt={card.title}
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </div> 
    </footer>
  );
};

export default Footer;