import { GiPumpkinLantern } from "react-icons/gi";
import type { Card } from "../type/Card";
import Image from "next/image";
export const cardsData: Card[] = [
  {
    id: "card1",
    frontImg: "/card/darkorange.png",
    title: "Card Number 1",
    backContent: (
      <div className="relative bg-orange-600 text-center p-4 shadow-lg flex-col border-solid rounded-sm w-full h-full flex justify-center items-center">
        <p className=" font-creepster text-xl text-orange-200">
          Hope your Birthday leaves you smiling like a jack o' latern
        </p>
        <div className="mt-4">
          <GiPumpkinLantern className="text-9xl font-semibold" />
        </div>
        <p className="font-creepster text-xl mt-3 text-orange-200">
          Happy Birthday!
        </p>
      </div>
    ),
  },
  {
    id: "card2",
    frontImg: "/card/dark.png",
    title: "Card Number 2",
    backContent: (
      <div className="relative text-center justify-center bg-slate-900 border-2 items-center shadow-lg flex-col border-solid border-black  rounded-sm w-full h-full flex">
        <p className="text-amber-50 text-md z-10 font-nosifer">
          Today's your birthday? You're getting older… now that' scary!
        </p>
        <Image
          src="/card/blackpumpkin.png"
          alt="blackpumpkin"
          width={140}
          height={140}
          className="z-0 drop-shadow-[0_0_15px_orange]"
        />
      </div>
    ),
  },
  {
    id: "card3",
    frontImg: "/card/purple.png",
    title: "Card Number 3",
    backContent: (
      <div className="relative text-center p-4 shadow-lg flex-col bg-violet-700 rounded-sm w-full h-full flex ">
        <p className="font-kablammo text-xl drop-shadow-[0_0_8px_yellow]">
          I won't let halloween overshadow your birthday.
        </p>
        <img
          src="/card/orangepum.png"
          alt="orange-punpkin"
          className="w-32 h-32 z-10 drop-shadow-[0_0_15px_black] mx-auto mt-6"
        />
        <p className="font-serious text-2xl mt-3 drop-shadow-[0_0_15px_white] text-orange-100 z-10">
          Happy Birthday!
        </p>
        <img
          src="/card/crack.png"
          alt="crack"
          className="absolute w-full z-0"
        />
      </div>
    ),
  },
  {
    id: "card4",
    frontImg: "/card/frontcover/pumpkin.png",
    title: "Card Number 4",
    backContent: (
      <div className="relative text-center justify-center items-center shadow-lg flex-col bg-slate-900 rounded-sm w-full h-full flex">
        {/* <div className=""> */}
        <img
          src="/card/cute.jpg"
          alt="white-ghost"
          className=" drop-shadow-[0_0_6px_cyan] bg-cover w-full h-full"
        ></img>
        {/* </div> */}
        <div className="z-10 w-32 absolute left-2 bottom-2">
          <p className=" font-lacquer font-bold">
            Here's a wish for a special someone who shares a birthday with
            ghosts, witches and vampires. You're still way cooler.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "card5",
    frontImg: "/card/witch.png",
    title: "Card Number 5",
    backContent: (
      <div className="relative text-center shadow-lg flex-col bg-violet-400 rounded-sm w-full h-full flex">
        <img
          src="/card/witch.png"
          alt="ghosted"
          className="absolute w-32 top-1/3 z-10 left-1/3 -translate-x-1/2 -translate-y-1/2"
        />
        <small className="absolute  font-nosifer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 text-blood">
          may your birthday be spooky that even the candles on your cakes are
          afraid to be blown out
        </small>
        <img
          src="/card/halloween-night.png"
          alt="halloween_night"
          className="absolute w-full z-0 -top-8 right-0 bg-cover"
        />
      </div>
    ),
  },
  {
    id: "card6",
    frontImg: "/card/ghoul.png",
    title: "Card Number 6",
    backContent: (
       <div className="relative text-center shadow-lg flex-col bg-black rounded-sm w-full h-full flex">
        <img
          src="/card/android.png"
          alt="ghosted"
          className="absolute w-56 h-56 top-12 left-6 object-cover drop-shadow-[0_0_10px_cyan]"
        />
        <p className="absolute right-8 text-2xl text-green-10 font-griffy bottom-3">
          Sorry I'm still developing😢
        </p>
      </div>
    ),
  },
  {
    id: "card7",
    frontImg: "/card/skull.png",
    title: "Card Number 7",
    backContent: (
      <div className="relative text-center shadow-lg flex-col bg-black rounded-sm w-full h-full flex">
        <img
          src="/card/hector.png"
          alt="ghosted"
          className="absolute w-full h-full object-cover"
        />
        <p className="absolute  font-handwriting top-2 left-8">
          <span className="text-blue-600 font-creepster text-3xl">H</span>
          <span className="text-violet-600 font-creepster text-3xl">A</span>
          <span className="text-green-600 font-creepster text-3xl">P</span>
          <span className="text-orange-600 font-creepster text-3xl">P</span>
          <span className="text-purple-600 font-creepster text-3xl">Y</span>
          <span className="text-green-600 ml-3 font-creepster text-3xl">B</span>
          <span className="text-yellow-600 font-creepster text-3xl">I</span>
          <span className="text-red-600 font-creepster text-3xl">R</span>
          <span className="text-blue-600 font-creepster text-3xl">T</span>
          <span className="text-orange-600 font-creepster text-3xl">H</span>
          <span className="text-green-600 font-creepster text-3xl">D</span>
          <span className="text-blue-600 font-creepster text-3xl">A</span>
          <span className="text-purple-600 font-creepster text-3xl">Y</span>
        </p>

        <p className="absolute  font-handwriting bottom-24 left-8">
          <span className="text-blue-600 font-creepster text-3xl">"R</span>
          <span className="text-violet-600 font-creepster text-3xl">E</span>
          <span className="text-green-600 font-creepster text-3xl">M</span>
          <span className="text-orange-600 font-creepster text-3xl">E</span>
          <span className="text-purple-600 font-creepster text-3xl">M</span>
          <span className="text-green-600 font-creepster text-3xl">B</span>
          <span className="text-yellow-600 font-creepster text-3xl">E</span>
          <span className="text-red-600 font-creepster text-3xl">R</span>
          <span className="text-blue-600 font-creepster text-3xl"></span>
          <span className="text-orange-600 font-creepster text-3xl"></span>
          <span className="text-green-600 font-creepster text-3xl"></span>
          <span className="text-blue-600 font-creepster text-3xl ml-3.5">M</span>
          <span className="text-purple-600 font-creepster text-3xl">E"</span>
        </p>

        <p className="absolute font-handwriting bottom-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3">
          <span className="text-blue-600 font-creepster text-5xl">l</span>
          <span className="text-violet-600 font-creepster text-5xl">i</span>
          <span className="text-green-600 font-creepster text-5xl">s</span>
          <span className="text-orange-600 font-creepster text-5xl">t</span>
          <span className="text-purple-600 font-creepster text-5xl">e</span>
          <span className="text-green-600 font-creepster text-5xl">n</span>
          <span className="text-yellow-600 font-creepster text-5xl ml-3.5">t</span>
          <span className="text-red-600 font-creepster text-5xl">o</span>
        </p>

        <p className="bottom-12 absolute left-12 text-2xl font-kablammo text-amber-50">
          By Coco
        </p>
      </div>
    ),
  },
  {
    id: "card8",
    frontImg: "/card/balckcat.png",
    title: "Card Number 8",
    backContent: (
      <div className="relative text-center bg-blue-200 shadow-lg flex-col  rounded-sm w-full h-full flex">
        <img
          src="/card/caroline_cat.png"
          alt="ghosted"
          className="absolute w-full h-full object-cover"
        />
        <p className="absolute w-full font-lacquer bg-blue-400 py-3 px-3 rounded-lg bottom-0">
          Boo Do I scare you? Other Mother is scarier yk.!
        </p>
      </div>
    ),
  },
  {
    id: "card9",
    frontImg: "/card/bat.png",
    title: "Card Number 9",
    backContent: (
      <div className="relative text-center shadow-lg flex-col bg-black rounded-sm w-full h-full flex">
        <img
          src="/card/android.png"
          alt="ghosted"
          className="absolute w-56 h-56 top-12 left-6 object-cover drop-shadow-[0_0_10px_cyan]"
        />
        <p className="absolute right-8 text-2xl text-green-10 font-griffy bottom-3">
          Sorry I'm still developing😢
        </p>
      </div>
    ),
  },
];
