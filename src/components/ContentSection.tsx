import { ReactNode } from "react";

interface ContentSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const ContentSection = ({ id, title, children }: ContentSectionProps) => {
  return (
    <section 
      id={id} 
      className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-6 animate-scale-in shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-500"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default ContentSection;
