import { GiGhost } from "react-icons/gi";
type Props = {
  setComplete: (value: boolean) => void;
  setOpen: (value: boolean) => void;
};

export default function CompleteDialog({ setComplete, setOpen }: Props) {
  // const [open, setOpen] = useState(false);

  const handleOnClose = () => {
    setComplete(false);
    setOpen(true);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50/25 backdrop-blur-sm">
      <div className="p-6 rounded-xl w-80 text-center bg-blood border-4 border-slate-200 shadow-lg shadow-slate-200">
        <div className="bg-black rounded-lg pt-2 relative">
          <GiGhost className="absolute text-6xl text-white left-0 top-0" />
          <div className="py-2">
            <p className="text-2xl text-red font-bold font-henny-penny">BOO!</p>
          </div>
          <div className=" flex justify-center">
            <img
              src="/halloween/1234.png"
              className="w-36 h-36 drop-shadow-[0_0_15px_white]"
              alt="shinchan"
            />
          </div>
          <div className=" bg-red-500 p-3 mt-2 rounded-b-lg">
            <p className="text-md text-green font-creepster ">
              Now we hope your wishes to be come true and also 
              Have a Bootiful Halloween!
            </p>
            <div
              className="bg-violet-600 justify-center relative inline-flex w-full overflow-hidden transition-all mt-2 p-3 rounded-md group cursor-pointer "
              onClick={handleOnClose}
            >
              <span className="w-full h-48 rounded opacity-0 group-hover:opacity-100 bg-blood absolute bottom-0 right-0 -translate-x-full translate-y-full ease-out duration-500 transition-all mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative font-henny-penny tracking-widest font-bold w-full text-center text-green transition-colors duration-300 ease-in-out group-hover:text-white">
                Close
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
