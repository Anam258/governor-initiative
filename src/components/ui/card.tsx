// Importing React for creating components and forwarding refs
import * as React from "react";

// Importing a utility function for conditionally combining class names
import { cn } from "@/lib/utils";

// Card Component
// A wrapper for creating a card layout with a customizable appearance
const Card = React.forwardRef<
  HTMLDivElement, // Specifying the type of element being referenced (HTML div)
  React.HTMLAttributes<HTMLDivElement> // Allowing standard HTML div attributes as props
>(({ className, ...props }, ref) => (
  <div
    ref={ref} // Forwarding the ref for external access to the DOM element
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow", // Default styles for the card
      className // Adding any additional custom styles passed via props
    )}
    {...props} // Spreading remaining props to the card
  />
));
Card.displayName = "Card"; // Setting display name for easier debugging in React DevTools

// CardHeader Component
// A section for the card's header, typically used for titles or key information
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-1.5 p-6", // Styles for a vertical layout with spacing and padding
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

// CardTitle Component
// A styled heading element for the card's title
const CardTitle = React.forwardRef<
  HTMLParagraphElement, // Specifying paragraph element type
  React.HTMLAttributes<HTMLHeadingElement> // Allowing heading attributes as props
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-semibold leading-none tracking-tight", // Styles for bold, compact text with consistent spacing
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

// CardDescription Component
// A styled paragraph for descriptive text within the card
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm text-muted-foreground", // Styles for smaller, muted text
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// CardContent Component
// A section for the main content of the card
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "p-6 pt-0", // Padding with no top padding for better alignment with the header
      className
    )}
    {...props}
  />
));
CardContent.displayName = "CardContent";

// CardFooter Component
// A footer section for actions or additional information in the card
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center p-6 pt-0", // Styles for horizontal alignment with padding
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Exporting all components for use in other parts of the application
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
