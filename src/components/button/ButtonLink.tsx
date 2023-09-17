import { Link } from "react-router-dom";

type LinkProps = {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  to?: string;
};

const ButtonStyle = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary: "bg-white text-gray-400 hover:bg-primary hover:text-white",
};

const ButtonSize = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  to
}: LinkProps) {
  return (
    <Link
      to={to ?? "/"}
      className={`flex items-center justify-center gap-2 rounded-full ${ButtonStyle[variant]} ${ButtonSize[size]} transition-all duration-500 `}
    >
      {children}
    </Link>
  );
}
