import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge Tailwind and conditional classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}