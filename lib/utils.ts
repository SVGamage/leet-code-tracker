import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Difficulty } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function difficultyMapper(difficulty: Difficulty) {
  switch (difficulty) {
    case Difficulty.EASY:
      return "Easy";
    case Difficulty.MEDIUM:
      return "Medium";
    case Difficulty.HARD:
      return "Hard";
    default:
      return "Unknown";
  }
}
