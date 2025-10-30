import { useEffect, useState } from "react";
// import { BiPlay } from "react-icons/bi";
import { TbGhost2 } from "react-icons/tb";
import { GiPumpkinLantern } from "react-icons/gi";
import { LuGift } from "react-icons/lu";

type Props = {
  username: string;
  onShowCards: () => void;
  onShowBox: () => void;
};

export default function MainPage({ username, onShowCards, onShowBox }: Props) {
  const [welcomeText, setWelcomeText] = useState("");
  const [animateDone, setAnimateDone] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!username) return;
    const formattedName = username.charAt(0).toUpperCase() + username.slice(1);

    setWelcomeText("");
    setAnimateDone(false);

    const title = "Sacream!";
    const text = `Happy Birthday ${formattedName ?? ""}! `;

    let index = 0;
    const interval = setInterval(() => {
      setWelcomeText((prev) => prev + (title[index] ?? ""));
      index++;
      if (index >= title.length) {
        clearInterval(interval);
        setTimeout(() => {
          setWelcomeText(text);
          setAnimateDone(!animateDone);
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [username]);

  // const handlePlay = () => {
  //   if (audioRef.current) {
  //     audioRef.current.play();
  //     setIsPlaying(true);
  //   }
  // };

  // const handlePause = () => {
  //   if (audioRef.current) {
  //     audioRef.current.pause();
  //     setIsPlaying(false);
  //   }
  // };

  return (
    <div className="w-[70%] md:w-[30%] h-[450px] max-h-auto bg-[#2C333E] animate-rainbow min-h-[450px] p-[17px] rounded-3xl  text-center border-4 shadow-lg relative overflow-hidden">
      <div className="flex justify-center p-[13px] my-[13px]">
        <TbGhost2 className="text-[#14fffb] text-6xl drop-shadow-[0_0_6px_cyan]" />
      </div>
      <div className="">
        <p
          id="welcomeText"
          className="mt-[5px] text-[#F9F6EE] text-3xl px-[5px] font-henny-penny bd "
        >
          {welcomeText}
        </p>
      </div>{" "}
      <div
        onClick={onShowBox}
        title="Click to see wish cards"
        className="text-[#F9F6EE] mt-[25px] backdrop-blur-md hover:text-shadow-lg hover:text-blue-400 hover:text-shadow-cyan-500/50
         active:scale-95 hover:border-2 hover:border-blue-400 hover:shadow-lg 
          hover:shadow-cyan-500/50 transition-transform duration-100 cursor-pointer col-span-3 
          font-susemono font-bold py-[13px]  px-[9px] rounded-3xl border-2 border-[#1eecab] shadow-[0_0_6px_cyan]"
      >
        <button type="button" className="w-full cursor-pointer  tracking-widest">
          <span className="font-henny-penny">Make a wish</span>
        </button>
      </div>
      <div
        onClick={onShowCards}
        title="Click to see wish cards"
        className="text-[#F9F6EE] mt-[25px] backdrop-blur-md hover:text-shadow-lg hover:text-blue-400 hover:text-shadow-cyan-500/50
         active:scale-95 hover:border-2 hover:border-blue-400 hover:shadow-lg
          hover:shadow-cyan-500/50 transition-transform duration-100 cursor-pointer col-span-3 
          font-susemono font-bold py-[13px] px-[9px] rounded-3xl border-2 border-[#1eecab] shadow-[0_0_6px_cyan]"
      >
        <button type="button" className="w-full cursor-pointer tracking-widest">
          <span className="font-henny-penny">Cards</span>
        </button>
      </div>
      <div className="absolute text-5xl bottom-0 right-1 text-[#1eecab]">
        <GiPumpkinLantern />
      </div>
      <div className="absolute text-5xl bottom-0 left-1 text-[#1eecab]">
        <LuGift />
      </div>
    </div>
  );
}

{
  /* <div
      id="mainPage"
      className="w-[70%] md:w-[30%] h-[350px]  min-h-80 p-4 rounded-xl animate-rainbow text-center border-2 border-black shadow-lg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#2C333E] backdrop-blur-sm rounded-xl"></div>
      <div className="relative z-10 flex flex-col justify-center text-center">
        <div>
          <TbGhost2 className="text-[#14fffb] text-5xl" />
        </div>
        <div className="bg-[#6A0DAD] backdrop-blur-sm hover:border-blue-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-transform duration-100 min-h-24 h-24 p-1 rounded-md border-2 border-red-50 flex flex-col items-center justify-center">
          <p
            id="welcomeText"
            className="mt-1 text-[#F9F6EE] text-lg px-1 font-serif bd font-bold"
          >
            {welcomeText}
          </p>
          <audio
            ref={audioRef}
            src="/love3000.mp3"
            className="hidden"
            id="bdSong"
          />
        </div>

        <div className="mt-8 grid grid-cols-3 gap-2 relative z-10">
          <div
            onClick={onShowCards}
            title="Click to see wish cards"
            className="bg-[#6A0DAD] text-[#FFD700] backdrop-blur-md hover:text-shadow-lg hover:text-blue-400 hover:text-shadow-cyan-500/50 active:scale-95 hover:border-2 hover:border-blue-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-transform duration-100 cursor-pointer col-span-2 font-susemono font-bold p-2 rounded-md border-2 border-black"
          >
            <button type="button" className="w-full">
              Read the BD cards
            </button>
          </div>

          {!isPlaying ? (
            <div
              title="Play"
              id="playBtn"
              className="bg-[#6A0DAD] text-[#FFD700] items-center py-2 flex justify-center backdrop-blur-md hover:text-shadow-lg hover:text-blue-600 hover:text-shadow-cyan-500/50 p-2 rounded-2xl border-2 hover:border-2 hover:border-blue-400 hover:shadow-lg hover:shadow-cyan-500/50 cursor-pointer border-black active:scale-95 transition-transform duration-100"
              onClick={handlePlay}
            >
              {/* <button className="p-2 w-full"> */
}
// <BiPlay className=" text-3xl" />
{
  /* </button> */
}
// </div>
//   ) : (
//     <div
//       title="Pause"
//       id="pauseBtn"
//       className="bg-[#6A0DAD] text-[#FFD700] backdrop-blur-md p-2 rounded-md border-2 cursor-pointer border-black active:scale-95 transition-transform duration-100"
//       onClick={handlePause}
//     >
//       <button className="p-2 w-full">
//         <i className="fa-solid fa-pause" />
//       </button>
//     </div>
//   )}
// </div>

// <div
//   onClick={onShowBox}
//   title="Click to see wish cards"
//   className="bg-[#6A0DAD] text-[#FFD700] mt-3 backdrop-blur-md hover:text-shadow-lg hover:text-blue-400 hover:text-shadow-cyan-500/50 active:scale-95 hover:border-2 hover:border-blue-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-transform duration-100 cursor-pointer col-span-3 font-susemono font-bold p-2 rounded-md border-2 border-black"
// >
//   <button type="button" className="w-full">
//     Make a wish
//   </button>
// </div>
//   </div>
// </div> */}
