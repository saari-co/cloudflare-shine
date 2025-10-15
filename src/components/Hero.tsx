const Hero = () => {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            Smoky Cannabis Company
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            We're not the Great Smoky Cannabis Company. We're Smoky Mountain CBD — a hemp‑derived THCa vendor shipping fast from Cherokee County, NC.
            If you're looking to order edibles, flower, or concentrates online today, you're in the right place.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <a 
              href="https://smokymountaincbd.com/" 
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10">Visit Smoky Mountain CBD</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
            
            <a 
              href="https://smokymountaincbd.com/product-category/edibles/" 
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Edibles
            </a>
            
            <a 
              href="https://smokymountaincbd.com/product-category/thca-flower/" 
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Flower
            </a>
            
            <a 
              href="https://smokymountaincbd.com/product-category/cannabis-concentrates/" 
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Concentrates
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
