import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Sparkles, Gift } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function BlindBoxSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="blind-box" className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <Gift className="w-4 h-4" />
              <span className="text-sm">Mystery Awaits</span>
            </div>

            <h2 className="text-5xl lg:text-6xl text-white">
              Blind Box Experience
            </h2>

            <p className="text-lg text-white/90 max-w-lg">
              The thrill of not knowing what's inside! Each blind box contains one of 12 possible designs. Will you get the rare chase figure?
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white mb-1">12 Regular Designs</h4>
                  <p className="text-white/80 text-sm">Each box guaranteed to contain one complete figure</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Secret & Chase Figures</h4>
                  <p className="text-white/80 text-sm">Extra rare designs with only 1% drop rate!</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Premium Packaging</h4>
                  <p className="text-white/80 text-sm">Beautiful box design perfect for display</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8"
                onClick={() => scrollToSection("featured")}
              >
                Shop Blind Boxes
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 rounded-full px-8"
                onClick={() => toast.info("Blind Box Guide", {
                  description: "Learn about drop rates, chase figures, and collecting tips!"
                })}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-3xl blur-2xl opacity-20"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1570883886759-27e180c69e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGluZCUyMGJveCUyMHRveXxlbnwxfHx8fDE3NTkyMjAxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Blind Box"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}