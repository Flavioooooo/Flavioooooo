import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-pink-200">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm text-pink-600">New Collection Available</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Collect Your Dreams
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 max-w-lg">
              Discover unique designer toys and blind boxes from world-renowned artists. Every unboxing is a magical surprise!
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full px-8"
                onClick={() => scrollToSection("featured")}
              >
                Shop Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8"
                onClick={() => scrollToSection("categories")}
              >
                Explore Collections
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6">
              <div>
                <div className="text-3xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-sm text-gray-500">Unique Designs</div>
              </div>
              <div>
                <div className="text-3xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-sm text-gray-500">Artists</div>
              </div>
              <div>
                <div className="text-3xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  100K+
                </div>
                <div className="text-sm text-gray-500">Collectors</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
            <ImageWithFallback
              src="https://tse1.mm.bing.net/th/id/OIP.wgyEiQWYiMj8dfsxqbxU6gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Designer Toys"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-50"></div>
    </section>
  );
}