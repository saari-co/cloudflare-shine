interface ProductPillProps {
  children: React.ReactNode;
}

const ProductPill = ({ children }: ProductPillProps) => {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium border border-border rounded-full text-muted-foreground bg-muted/50 mr-2 mb-2">
      {children}
    </span>
  );
};

export default ProductPill;
