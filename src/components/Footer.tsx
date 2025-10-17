import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (linkName: string) => {
    toast.info(`${linkName} page`, {
      description: "This feature is coming soon!"
    });
  };

  const handleSocialClick = (platform: string) => {
    toast.success(`Opening ${platform}...`);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="mb-4 text-white">About Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => handleLinkClick("Our Story")} className="hover:text-pink-400 transition-colors">
                  Our Story
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("artists")} className="hover:text-pink-400 transition-colors">
                  Artists
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Careers")} className="hover:text-pink-400 transition-colors">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Press")} className="hover:text-pink-400 transition-colors">
                  Press
                </button>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="mb-4 text-white">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => scrollToSection("featured")} className="hover:text-pink-400 transition-colors">
                  New Arrivals
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("blind-box")} className="hover:text-pink-400 transition-colors">
                  Blind Boxes
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("featured")} className="hover:text-pink-400 transition-colors">
                  Collections
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("categories")} className="hover:text-pink-400 transition-colors">
                  Limited Edition
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => handleLinkClick("Contact Us")} className="hover:text-pink-400 transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("FAQ")} className="hover:text-pink-400 transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Shipping")} className="hover:text-pink-400 transition-colors">
                  Shipping
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Returns")} className="hover:text-pink-400 transition-colors">
                  Returns
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => handleLinkClick("Privacy Policy")} className="hover:text-pink-400 transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Terms of Service")} className="hover:text-pink-400 transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Cookie Policy")} className="hover:text-pink-400 transition-colors">
                  Cookie Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Disclaimer")} className="hover:text-pink-400 transition-colors">
                  Disclaimer
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="cursor-pointer"
              >
                <h3 className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
                  POP TOYS
                </h3>
              </button>
              <p className="text-sm text-gray-400">
                © 2025 Pop Toys. All rights reserved.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <button 
                onClick={() => handleSocialClick("Instagram")}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick("Twitter")}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick("Facebook")}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick("YouTube")}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all"
              >
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}