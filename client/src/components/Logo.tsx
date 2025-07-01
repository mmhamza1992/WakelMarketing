import logoSrc from "@assets/ChatGPT Image Jul 1, 2025, 10_20_31 AM_1751354440888.png";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <img 
      src={logoSrc} 
      alt="Wakel.io" 
      className={`h-40 w-auto ${className}`}
    />
  );
}