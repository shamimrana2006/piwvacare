import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-[#EBF3E7] text-[#2D5323] border border-[#D5E6CD]/80",
        secondary:
          "bg-[#F3EFE6] text-[#473B28] border border-[#E6DEC $\\div$ C]",
        brand:
          "bg-[#4D6D2E] text-white",
        outline:
          "border border-[#C8DCBE] text-[#2D5323] bg-white/70 backdrop-blur-xs",
        soft:
          "bg-[#E8F0E3] text-[#335628] font-semibold text-xs tracking-wide",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

