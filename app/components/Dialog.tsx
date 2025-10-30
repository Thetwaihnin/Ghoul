'use client'
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  onSetName: (name: string) => void;
};

export default function Dialog({ onSetName }: Props) {
  const [name, setName] = useState("");

  return (
    <div className="fixed h-full inset-0 flex bg-cover items-center justify-center bg-[url('/halloween/house.png')]">
      <div className=" p-6 rounded-xl w-80 text-center bg-white/30  shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.1px] border border-white/30">
        <h2 className="text-xl font-bold mb-4 text-blood font-nosifer">
          Welcome, ghoul friend!<i className="fa-regular fa-face-laugh-wink text-red-500"></i>
        </h2>
        <div className="flex gap-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name please"
            className="w-full font-serif border-blood border-2 px-3 py-2 bg-blood placeholder:font-henny-penny rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="pt-3 cursor-pointer" onClick={() => name.trim() && onSetName(name)}>
            <FaArrowRight className="hover:text-blood" />
          </div>
        </div>
      </div>
    </div>
  );
}
