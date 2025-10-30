'use client'
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";

type Props = {
  open: boolean;
  boxOpen: boolean;
  setBoxOpen: (value: boolean) => void;
};
const Tap = "Trick or Treat";
const Yay = "BOOM!";

const GiftBox = ({ boxOpen, setBoxOpen, open }: Props) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [open]);

  // async function copyHtmlToClipboard() {
  //   const contentToCopy = document.getElementById("contentToCopy")?.innerHTML ?? "";
  //   try {
  //     await navigator.clipboard.writeText(contentToCopy);
  //     alert("HTML content copied to clipboard!");
  //   } catch (err) {
  //     console.error("Failed to copy HTML content: ", err);
  //     alert("Failed to copy HTML content.");
  //   }
  // }
  const navigate = useRouter();
  return (
    <div className="min-h-screen justify-center flex w-full mt-12 p-4">
      <div
        ref={elementRef}
        className="w-[90%] md:w-[40%] min-h-[430px] h-[450px] flex flex-col justify-center 
        items-center  rounded-sm text-center bg-slate-800 shadow-lg shadow-emerald-400 
        relative overflow-hidden border-emerald-400 border-4"
      >
        {/* bg-[#A52A2A] */}

        <div className="absolute w-[90%] rounded-t-full h-[90%] border border-emerald-400"></div>
        <div className="">
          <div className=" mb-3">
            <p
              className={`${"text-emerald-400"} font-bold font-kablammo text-2xl`}
            >
              {boxOpen ? Yay : Tap}
            </p>
          </div>
          <div
            className={`${
              boxOpen
                ? " drop-shadow-[0_0_10px_orange]"
                : "drop-shadow-[0_0_10px_cyan]"
            } relative`}
          >
            <img
              src={`${
                boxOpen ? "/halloween/boxopen.png" : "/halloween/box.png"
              }`}
              alt="box"
              className={`${
                boxOpen ? "w-48 h-48" : "w-40 h-40"
              } hover:scale-125 transition duration-300 cursor-pointer z-20`}
              onClick={() => setBoxOpen(!boxOpen)}
            />
            {boxOpen && (
              <>
                <img
                  src="/halloween/candy.png"
                  alt="candy"
                  className="absolute right-[-12px] z-0 w-24 h-24 top-0"
                />
              </>
            )}
          </div>
          {/* {boxOpen && (
              <img
                src="/halloween/candy.png"
                alt="candy"
                className="absolute right-[-12px] top-0 w-24 h-24 z-0"
              />
            )} */}
        </div>
        {!boxOpen ? (
          <div className=" font-henny-penny absolute bottom-12 text-xl text-emerald-400">
            <p>A Treat for you</p>
            <small>Open it by tapping</small>
          </div>
        ) : (
          <div
            title="code"
            className="text-[#F9F6EE] mt-8 backdrop-blur-md hover:text-shadow-lg hover:text-blue-400 hover:text-shadow-cyan-500/50
         active:scale-95 hover:border-2 hover:border-blue-400 hover:shadow-lg
          hover:shadow-cyan-500/50 transition-transform duration-100 cursor-pointer col-span-3 
          font-susemono font-bold py-2 px-4 rounded-3xl border-2 border-[#1eecab] shadow-[0_0_6px_cyan]"
          onClick={() => navigate.push("/magic-book")}
          >
            <button
              type="button"
              title="Claim your gift!"
              className="w-full cursor-pointer font-henny-penny tracking-widest"
            >
              Claim
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftBox;
