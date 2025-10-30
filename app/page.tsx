"use client";

import { useState, useEffect } from "react";
import Dialog from "./components/Dialog";
import MainPage from "./components/MainPage";
import CardDisplayArea from "./components/CardDisplayArea";
import WishBox from "./components/WishBox";
import CompleteDialog from "./components/CompleteDialog";

function App() {
  const [username, setUsername] = useState<string | null>(null);
  const [showCards, setShowCards] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [complete, setComplete] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem("username") || "";
    if (name) setUsername(name);
  }, []);

  // if (username === null) {
  //   return <p>Loading...</p>;
  // }

  const handleSetName = (name: string) => {
    localStorage.setItem("username", name);
    setUsername(name);
  };
  // bg-[url(/jf.png)]
  return (
    <div className="min-h-screen overflow-auto p-3 flex bg-[url('/halloween/house.png')] bg-cover bg-center flex-col justify-center items-center">
      {!username && <Dialog onSetName={handleSetName} />}

      {username && !showCards && !showBox && (
        <MainPage
          username={username}
          onShowCards={() => setShowCards(true)}
          onShowBox={() => setShowBox(true)}
        />
      )}

      {showCards && (
        <CardDisplayArea setShowCards={setShowCards} setShowBox={setShowBox} />
      )}

      {showBox && (
        <WishBox
          setComplete={setComplete}
          setShowCards={setShowCards}
          setShowBox={setShowBox}
          open={open}
        />
      )}

      {complete && (
        <CompleteDialog setComplete={setComplete} setOpen={setOpen} />
      )}
    </div>
  );
}

export default App;
