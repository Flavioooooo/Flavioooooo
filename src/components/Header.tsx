import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useCart } from "./CartContext";
import { ShoppingCartDialog } from "./ShoppingCartDialog";
import { toast } from "sonner@2.0.3";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems } = useCart();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.info(`Searching for "${searchQuery}"...`);
      // In a real app, this would trigger a search
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="cursor-pointer"
              >
                <h1 className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  POP TOYS
                </h1>
              </button>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-6">
                <button onClick={() => scrollToSection("featured")} className="hover:text-pink-500 transition-colors">
                  New Arrivals
                </button>
                <button onClick={() => scrollToSection("blind-box")} className="hover:text-pink-500 transition-colors">
                  Blind Boxes
                </button>
                <button onClick={() => scrollToSection("featured")} className="hover:text-pink-500 transition-colors">
                  Collections
                </button>
                <button onClick={() => scrollToSection("artists")} className="hover:text-pink-500 transition-colors">
                  Artists
                </button>
                <button onClick={() => scrollToSection("newsletter")} className="hover:text-pink-500 transition-colors">
                  About
                </button>
              </nav>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Search Bar - Desktop */}
              <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 w-64">
                <Search className="w-4 h-4 text-gray-400" />
                <Input 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search toys..." 
                  className="border-0 bg-transparent p-0 focus-visible:ring-0"
                />
              </form>

              {/* Icons */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full"
                onClick={() => toast.info("Sign in coming soon!")}
              >
                <User className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-4 flex flex-col gap-3">
              <button onClick={() => scrollToSection("featured")} className="hover:text-pink-500 transition-colors text-left">
                New Arrivals
              </button>
              <button onClick={() => scrollToSection("blind-box")} className="hover:text-pink-500 transition-colors text-left">
                Blind Boxes
              </button>
              <button onClick={() => scrollToSection("featured")} className="hover:text-pink-500 transition-colors text-left">
                Collections
              </button>
              <button onClick={() => scrollToSection("artists")} className="hover:text-pink-500 transition-colors text-left">
                Artists
              </button>
              <button onClick={() => scrollToSection("newsletter")} className="hover:text-pink-500 transition-colors text-left">
                About
              </button>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                <Search className="w-4 h-4 text-gray-400" />
                <Input 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search toys..." 
                  className="border-0 bg-transparent p-0 focus-visible:ring-0"
                />
              </form>
            </nav>
          )}
        </div>
      </header>

      <ShoppingCartDialog open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
}