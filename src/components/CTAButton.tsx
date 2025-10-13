interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const CTAButton = ({ href, children, variant = "primary" }: CTAButtonProps) => {
  const baseClasses = "inline-block px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105";
  const variantClasses = variant === "primary" 
    ? "bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-[var(--shadow-glow)]" 
    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground";
  
  return (
    <a 
      href={href} 
      className={`${baseClasses} ${variantClasses}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default CTAButton;
