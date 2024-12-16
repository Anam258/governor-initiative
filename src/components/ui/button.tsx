// Importing React for component creation and forwarding refs
import * as React from "react";

// Importing Slot from Radix UI for rendering a custom child component
import { Slot } from "@radix-ui/react-slot";

// Importing cva (Class Variance Authority) for handling conditional class names
// and VariantProps for typing component variants
import { cva, type VariantProps } from "class-variance-authority";

// Importing a utility function (cn) for conditionally combining class names
import { cn } from "@/lib/utils";

// Defining button variants using `cva` for consistent styling and easy customization
const buttonVariants = cva(
  // Base class styles for buttons, such as flex behavior, size, and default transitions
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    // Variants define additional styling options for the button
    variants: {
      variant: {
        default: "rounded-md", // Default button style
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", // Style for destructive actions
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground", // Button with an outline
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80", // Secondary button style
        ghost: "", // Minimalistic "ghost" button style
        link: "text-primary underline-offset-4 hover:underline", // Button styled as a link
      },
      size: {
        default: "h-9 px-4 py-2", // Default size for the button
        sm: "h-8 rounded-md px-3 text-xs", // Small size button
        lg: "h-10 rounded-md px-8", // Large size button
        icon: "h-9 w-9", // Button styled specifically for icons
      },
    },
    // Default variants specify the styles applied when no variant or size is provided
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Defining the props interface for the Button component
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, // Inheriting HTML button attributes
    VariantProps<typeof buttonVariants> { // Including variant props for styling
  asChild?: boolean; // Optional prop to render the button as a child component
}

// Creating the Button component with forwardRef for better compatibility with React refs
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Determining the component type (default is "button", or use Slot if `asChild` is true)
    const Comp = asChild ? Slot : "button";

    // Returning the button (or custom component) with computed styles and properties
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))} // Combining base and variant styles
        ref={ref} // Forwarding the ref
        {...props} // Spreading remaining props onto the component
      />
    );
  }
);

// Setting a display name for better debugging in React DevTools
Button.displayName = "Button";

// Exporting the Button component and buttonVariants for reuse
export { Button, buttonVariants };
