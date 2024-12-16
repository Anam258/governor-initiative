// Importing the `clsx` library for conditional class name manipulation
// `clsx` allows combining class names conditionally, e.g., adding a class only if a condition is true
import { clsx, type ClassValue } from "clsx";

// Importing `twMerge` from the `tailwind-merge` library
// `twMerge` is used to intelligently merge Tailwind CSS class names, handling conflicts like duplicate classes
import { twMerge } from "tailwind-merge";

// Defining the `cn` utility function for combining and merging class names
// This function simplifies the process of working with conditional and dynamic class names
export function cn(...inputs: ClassValue[]) {
  // Using `clsx` to process and combine the input class names
  // Then passing the result to `twMerge` to handle Tailwind-specific class conflicts
  return twMerge(clsx(inputs));
}
