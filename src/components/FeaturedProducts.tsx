import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";
import { toast } from "sonner@2.0.3";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Rainbow Dreams Series",
    artist: "Kimi Studio",
    price: 799,
    image: "https://www.hobbydigi.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/p/o/pop_mart_blind_box_-_spotlight_pop_mart_13th_anniversary_series_original_box_of_12_different_model__231025032821.jpg",
    tag: "New",
    tagColor: "bg-pink-500",
  },
  {
    id: 2,
    name: "Kawaii Collection",
    artist: "Luna Art",
    price: 899,
    image: "https://tse4.mm.bing.net/th/id/OIP.pVBYXE6W0PbSzd3OOFMxzwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    tag: "Popular",
    tagColor: "bg-purple-500",
  },
  {
    id: 3,
    name: "Mystery Box - Space",
    artist: "Cosmic Toys",
    price: 999,
    image: "https://ae01.alicdn.com/kf/S12b4699af70148b1989daf3c8ae42db0a/POP-MART-MEGA-SPACE-MOLLY-100-SERIES-02-B-Mystery-Box-1PC-9PCS-POPMART-Blind-Box.jpg",
    tag: "Limited",
    tagColor: "bg-blue-500",
  },
  {
    id: 4,
    name: "Animal Friends",
    artist: "Nature Studio",
    price: 849,
    image: "https://tse4.mm.bing.net/th/id/OIP.-d0ufRJHRplfAhQDdBh3gAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    tag: "Trending",
    tagColor: "bg-orange-500",
  },
  {
    id: 5,
    name: "Fantasy Castle",
    artist: "Dream Works",
    price: 949,
    image: "https://media.karousell.com/media/photos/products/2023/3/30/skullpanda_ancient_castle__blo_1680219594_5f7f1d19.jpg",
    tag: "New",
    tagColor: "bg-pink-500",
  },
  {
    id: 6,
    name: "Urban Street Series",
    artist: "Metro Arts",
    price: 899,
    image: "https://tse2.mm.bing.net/th/id/OIP.VDWT0AvvfngnOzMQ6gJ5bQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    tag: "Hot",
    tagColor: "bg-red-500",
  },
];

export function FeaturedProducts() {
  const { addToCart } = useCart();
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      artist: product.artist,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.name} added to cart!`, {
      description: "Continue shopping or checkout when ready."
    });
  };

  const toggleFavorite = (productId: number, productName: string) => {
    setFavorites((prev) => {
      if (prev.includes(productId)) {
        toast.info(`Removed ${productName} from favorites`);
        return prev.filter((id) => id !== productId);
      } else {
        toast.success(`Added ${productName} to favorites!`);
        return [...prev, productId];
      }
    });
  };

  return (
    <section id="featured" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Featured Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hand-picked designer toys that will brighten your day
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className={`absolute top-4 left-4 ${product.tagColor} text-white border-0`}>
                  {product.tag}
                </Badge>
                <Button
                  size="icon"
                  variant="secondary"
                  className={`absolute top-4 right-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${
                    favorites.includes(product.id) ? 'bg-pink-500 text-white hover:bg-pink-600' : ''
                  }`}
                  onClick={() => toggleFavorite(product.id, product.name)}
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
                </Button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500">by {product.artist}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    ₱{product.price}
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full px-8"
            onClick={() => toast.info("Loading more products...")}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}