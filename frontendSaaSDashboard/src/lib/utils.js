import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(inputs.join(' '));
};

