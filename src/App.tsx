import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { BlindBoxSection } from "./components/BlindBoxSection";
import { ArtistSection } from "./components/ArtistSection";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { CartProvider } from "./components/CartContext";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Categories />
          <FeaturedProducts />
          <BlindBoxSection />
          <ArtistSection />
          <Newsletter />
        </main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </div>
    </CartProvider>
  );
}