'use client'

import { usePathname, useRouter } from "next/navigation";
import { GiPumpkinMask } from "react-icons/gi";
import { GiPumpkinLantern } from "react-icons/gi";

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()
  
  const handleBack = () => {
    if (pathname === "/magic-book") router.push("/");
    return;
  };

// bg-blue-400/20
  return (
    <nav className="top-0 fixed w-full z-50 flex justify-between shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.1px] border-b border-white/30 text-white p-[13px] text-center">
      <button className="px-[13px] py-[5px]" onClick={handleBack}>
        <span title="can't go back unless url is magic-book" className={`${pathname === "/magic-book" ? "text-green-10 hover:text-orange-500" : "text-slate-500"} font-nosifer  cursor-pointer`}>Back</span>
      </button>
      <div className="px-[13px] flex">
        <GiPumpkinMask className="text-4xl text-green-10"/>
        <GiPumpkinLantern className="text-4xl mx-[9px] text-green-10"/>
      </div>
    </nav>
  );
};

export default Navbar;
