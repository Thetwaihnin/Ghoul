import { type JSX } from "react";

export type Card = {
  id: string;
  frontImg: string 
;
  title: string;
  backContent: JSX.Element;
};

export type NavType = {
  // showBox: boolean;
  // showCards: boolean;
  setClick?: (value: boolean) => void;
  setShowCards: (value: boolean) => void;
  setShowBox: (value: boolean) => void;
  setComplete?: (value: boolean) => void;
  open?: boolean; 
}