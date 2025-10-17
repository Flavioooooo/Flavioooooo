import { Box, Gift, Star, Palette } from "lucide-react";
import { toast } from "sonner@2.0.3";

const categories = [
  {
    icon: Box,
    name: "Blind Boxes",
    count: "120+ items",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
  },
  {
    icon: Gift,
    name: "Limited Edition",
    count: "45+ items",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Star,
    name: "New Arrivals",
    count: "80+ items",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Palette,
    name: "Artist Series",
    count: "60+ items",
    color: "from-orange-500 to-yellow-500",
    bgColor: "bg-orange-50",
  },
];

export function Categories() {
  const handleCategoryClick = (categoryName: string) => {
    toast.success(`Browsing ${categoryName}`, {
      description: "Loading amazing collectibles for you!"
    });
    // In a real app, this would navigate to a category page or filter products
  };

  return (
    <section id="categories" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections of designer toys from around the world
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className={`${category.bgColor} rounded-2xl p-6 cursor-pointer hover:scale-105 transition-transform duration-300 group text-left w-full`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.count}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}