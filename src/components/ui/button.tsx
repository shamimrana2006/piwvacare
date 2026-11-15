import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6D2E] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#4D6D2E] text-white hover:bg-[#3E5823] shadow-sm hover:shadow-md hover:shadow-[#4D6D2E]/20",
        secondary:
          "bg-[#EBF3E7] text-[#2C4F22] hover:bg-[#DDECD7] border border-[#D3E4CB]",
        outline:
          "border border-[#D1E0C8] bg-transparent text-[#1A3B22] hover:bg-[#EBF3E7]/60",
        ghost:
          "text-[#1A3B22] hover:bg-[#EBF3E7] hover:text-[#2C4F22]",
        dark:
          "bg-[#1A3B22] text-white hover:bg-[#122A17] shadow-sm",
        pill:
          "bg-[#4D6D2E] text-white hover:bg-[#3D5624] px-6 py-3 rounded-full text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10 p-0 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

