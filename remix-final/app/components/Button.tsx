import type { ReactNode } from "react";
import React from "react";
import UniversalLink from "./UniversalLink";
import { cn } from "~/lib/misc";

const BG_COLORS = {
  red: "bg-red-500/90 hover:bg-red-400 focus:bg-red-400",
  rust: "bg-rust-500/90 hover:bg-rust-400 focus:bg-rust-400",
  teal: "bg-teal-500/90 hover:bg-teal-400 focus:bg-teal-400",
  default: "bg-rust-500/90 hover:bg-rust-400 focus:bg-rust-400",
  transparent:
    "bg-transparent text-black border-2 hover:bg-black hover:text-white",
};
const Button = ({
  to,
  children,
  bgColor = "default",
  className = "",
}: {
  to: string;
  children: ReactNode;
  bgColor?: string;
  className?: string;
}) => (
  <UniversalLink
    className={cn(
      `inline-block mt-8 button cursor-pointer`,
      BG_COLORS[bgColor as keyof typeof BG_COLORS],
      className
    )}
    to={to}
  >
    {children}
  </UniversalLink>
);

export default Button;
