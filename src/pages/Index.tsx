import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import ProductPill from "@/components/ProductPill";
import CTAButton from "@/components/CTAButton";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Smoky Mountain CBD",
    "description": "Premium hemp-derived THCa products shipping from Cherokee County, NC",
    "url": "https://smokycannabisco.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "NC",
      "addressLocality": "Cherokee County"
    },
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "itemOffered": [
        {
          "@type": "Product",
          "name": "Hemp Edibles"
        },
        {
          "@type": "Product",
          "name": "Hemp Flower"
        },
        {
          "@type": "Product",
          "name": "Hemp Concentrates"
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Hero />
        
        <main className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
          <ContentSection id="intro" title="A unique first in North Carolina">
            <p className="text-foreground/90 mb-4 leading-relaxed">
              The Great Smoky Cannabis Company (GSCC) is the first and only recreational cannabis dispensary in North Carolina,
              operating on the Qualla Boundary in Cherokee under the sovereignty of the Eastern Band of Cherokee Indians.
              That distinction allows GSCC to serve walk‑in customers on tribal land — even though recreational cannabis remains prohibited elsewhere in the state.
            </p>
            <p className="text-foreground/90 mb-6 leading-relaxed">
              We want to be clear: we are not the Great Smoky Cannabis Company. We're Smoky Mountain CBD (SMCBD), and while our names
              and geography are similar, we serve a different need: compliant, shippable hemp‑derived products you can order online today.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CTAButton href="https://smokymountaincbd.com/">
                Explore Smoky Mountain CBD
              </CTAButton>
              <CTAButton href="https://smokymountaincbd.com/product-category/flower/" variant="secondary">
                See Latest Hemp Flower
              </CTAButton>
            </div>
          </ContentSection>

          <ContentSection id="law" title="Understanding cannabis laws in North Carolina">
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Recreational cannabis is not legalized statewide in North Carolina. Possession and retail sales of marijuana remain illegal outside of tribal jurisdiction.
              GSCC operates legally because tribal sovereignty allows the Eastern Band of Cherokee Indians to regulate commerce on their land, creating
              a narrow, location‑specific exception for in‑person purchases at their dispensary in Cherokee.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              For everyone else — including residents who aren't able to visit Cherokee — hemp‑derived products provide a compliant alternative.
              Under federal law, hemp and hemp‑derived cannabinoids can be sold and shipped when products meet the delta‑9 THC threshold.
              This framework enables online ordering and fast fulfillment for compliant hemp goods.
            </p>
            <p className="text-muted-foreground text-sm mb-6 p-4 bg-muted/30 rounded-lg border border-border/50">
              Where GSCC focuses on in‑store recreational sales on tribal land, Smoky Mountain CBD offers hemp‑derived THCa and related products that ship
              directly to your door. If you're browsing for "great smoky cannabis company reviews" or "great smoky cannabis company photos,"
              you may find what you need faster by exploring our available inventory and customer feedback.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CTAButton href="https://smokymountaincbd.com/">
                Browse Smoky Mountain CBD
              </CTAButton>
              <CTAButton href="https://smokymountaincbd.com/product-category/edibles/" variant="secondary">
                Order Compliant Edibles
              </CTAButton>
            </div>
          </ContentSection>

          <ContentSection id="smcb" title="Smoky Mountain CBD — local roots, nationwide reach">
            <p className="text-foreground/90 mb-6 leading-relaxed">
              We're proudly based in Cherokee County, North Carolina — the same county where GSCC operates — and we specialize in high‑quality, compliant hemp‑derived
              products available to order online right now. If you searched for the Great Smoky Cannabis Company because of the name, the region,
              or curiosity about local options, we're here to give you a fast, reliable way to get what you're looking for.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-foreground">What we offer</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Our catalog covers the most in‑demand categories for modern consumers:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <ProductPill>Edibles</ProductPill>
                <span className="text-foreground/90 leading-relaxed">Gummies, chews, and confectionery with clear, consistent dosing and great flavor.</span>
              </li>
              <li className="flex items-start">
                <ProductPill>Flower</ProductPill>
                <span className="text-foreground/90 leading-relaxed">Fresh, aromatic hemp flower with THCa, curated by effect and terpene profile.</span>
              </li>
              <li className="flex items-start">
                <ProductPill>Concentrates</ProductPill>
                <span className="text-foreground/90 leading-relaxed">Potent, clean extracts for more experienced consumers looking for purity and punch.</span>
              </li>
            </ul>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <CTAButton href="https://smokymountaincbd.com/product-category/edibles/" variant="secondary">
                Shop Edibles
              </CTAButton>
              <CTAButton href="https://smokymountaincbd.com/product-category/flower/" variant="secondary">
                Shop Flower
              </CTAButton>
              <CTAButton href="https://smokymountaincbd.com/product-category/concentrates/" variant="secondary">
                Shop Concentrates
              </CTAButton>
              <CTAButton href="https://smokymountaincbd.com/">
                Visit Homepage
              </CTAButton>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-foreground">Why choose us</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              When convenience and compliance matter, delivery wins. Our hemp‑derived products ship quickly from Cherokee County, NC, with packaging designed
              for protection and discretion. Orders are processed promptly, and customer support is responsive — because we know speed and clarity count.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <ProductPill>Fast shipping</ProductPill>
                <span className="text-foreground/90 leading-relaxed">From Cherokee County, NC — get your order sooner.</span>
              </li>
              <li className="flex items-start">
                <ProductPill>Reliable selection</ProductPill>
                <span className="text-foreground/90 leading-relaxed">New drops and core staples across edibles, flower, and concentrates.</span>
              </li>
              <li className="flex items-start">
                <ProductPill>Transparent info</ProductPill>
                <span className="text-foreground/90 leading-relaxed">Clear descriptions and straightforward category navigation.</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-foreground">If you were searching for GSCC</h3>
            <p className="text-foreground/90 mb-6 leading-relaxed">
              Many people arrive here after searching phrases like "great smoky cannabis company," "great smoky cannabis company reviews," "great smoky cannabis company photos,"
              or "great smoky cannabis co." If your goal is to browse, compare, and order today — without the drive — our storefront is ready right now.
            </p>

            <div className="h-px bg-border my-8" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <CTAButton href="https://smokymountaincbd.com/">
                Start at Homepage
              </CTAButton>
              <CTAButton href="https://smokymountaincbd.com/product-category/edibles/" variant="secondary">
                Order Edibles
              </CTAButton>
              <CTAButton href="https://smokymountaincbd.com/product-category/flower/" variant="secondary">
                Explore Flower
              </CTAButton>
              <CTAButton href="https://smokymountaincbd.com/product-category/concentrates/" variant="secondary">
                Browse Concentrates
              </CTAButton>
            </div>

            <p className="text-muted-foreground text-sm p-4 bg-muted/30 rounded-lg border border-border/50">
              Quick note: we're not the Great Smoky Cannabis Company, and we don't claim to represent them. We're Smoky Mountain CBD — a separate business
              leveraging hemp rules to deliver compliant products to your doorstep.
            </p>
          </ContentSection>
        </main>

        <footer className="border-t border-border py-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 SmokyCannabisCo.com — Redirecting shoppers to SmokyMountainCBD.com for ordering. All product availability subject to applicable laws.</p>
        </footer>
      </div>
    </>
  );
};

export default Index;
