"use client";

import { useState } from "react";
import type { NavType } from "../type/Card";
import { FaCakeCandles } from "react-icons/fa6";
import { WiStars } from "react-icons/wi";
import { PiStarFour } from "react-icons/pi";
import GiftBox from "./GiftBox";
import { LiaBackwardSolid } from "react-icons/lia";

const WishBox = ({ setComplete, open, setShowBox, setShowCards }: NavType) => {
  const [wish, setWish] = useState("");
  const [boxOpen, setBoxOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("wish", value);
    setValue(value);
    setComplete?.(true);
    setWish("");
    console.log(wish);
  };

  const handleGoBack = () => {
    setShowBox(false);
    setShowCards(false);
  };

  return (
    <>
      <div
        onClick={handleGoBack}
        title="Click to see wish cards"
        className=" mt-8 z-90 text-cyan-300 absolute left-6 top-12 backdrop-blur-md px-3 hover:text-shadow-lg hover:text-blue-400 hover:text-shadow-cyan-500/50
         active:scale-95 hover:border-2 hover:border-blue-400 hover:shadow-lg
          hover:shadow-cyan-500/50 bg-slate-400/20 transition-transform duration-100 cursor-pointer col-span-3 
          font-susemono font-bold py-2 rounded-lg border-2 border-[#1eecab] shadow-[0_0_6px_cyan]"
      >
        <LiaBackwardSolid />
      </div>
      <form
        id="wishBox"
        className="w-[90%] md:w-[40%] mt-12 h-[510px] border-4 border-green-500 drop-shadow-[0_0_6px_cyan] min-h-80 p-4 rounded-xl text-center shadow-lg relative overflow-hidden"
        onSubmit={handleOnSubmit}
      >
        <div className="absolute inset-0 bg-slate-800 backdrop-blur-sm rounded-xl"></div>

        <div className="relative z-10">
          <div className=" backdrop-blur-sm h-12  p-[5px] rounded-md border-2 border-green-500 drop-shadow-[0_0_6px_cyan] flex flex-col items-center justify-center">
            <p
              id="welcomeText"
              className="mt-[5px] text-lg text-green-10 font-kablammo "
            >
              Unlock the gift
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-[13px">
            {/* <img src="/birthday.png" className="w-32 h-32" alt="birthday" /> */}
            <FaCakeCandles className="text-8xl text-yellow-400 mt-6 drop-shadow-[0_0_20px_orange]" />
            <div className="text-2xl flex font-bold mt-[9px] ">
              <PiStarFour className="text-yellow-400 text-2xl mt-1" />
              <p className="text-green-10 mx-2 font-nosifer mt-1">
                Make a Wish!
              </p>
              <WiStars className="text-yellow-400 text-4xl" />
            </div>
          </div>
          <div className="relative w-full min-w-[200px] mt-[25px]">
            <textarea
              required
              onChange={(e) => setValue(e.target.value)}
              className="peer h-full min-h-[150px] border-2 w-full resize-none rounded-[7px] border-blue-gray-200 bg-transparent px-[13px] py-[11px] font-serif 
    text-sm font-normal text-[#09ff00] outline-none placeholder-shown:font-nosifer
    transition-all placeholder-shown:border placeholder-shown:border-blue-400
    placeholder-shown:border-t-blue-400 
    focus:border-[#09ff00]   
    focus:ring-2          
    focus:ring-green-500/50 
    focus:outline-none      
    
    disabled:resize-none disabled:border-0 
    disabled:bg-blue-gray-50 placeholder:text-[#09ff00]"
              placeholder="Write down your wish here to unlock the gift box"
            ></textarea>
          </div>
          <div className="text-start text-green-10">
            <small>**We'll keep your wish a secrect</small>
          </div>
          <div className="my-[9px] flex justify-center">
            <button
              type="submit"
              className="p-[9px] hover:border-yellow-500 cursor-pointer hover:bg-yellow-500 rounded-lg bg-[#09ff00] shadow-[0_0_8px_cyan] w-52"
            >
              <span className="font-kablammo cursor-pointer ">Button</span>
            </button>
          </div>
        </div>
      </form>

      {open && (
        <GiftBox boxOpen={boxOpen} setBoxOpen={setBoxOpen} open={open} />
      )}
    </>
  );
};

export default WishBox;
