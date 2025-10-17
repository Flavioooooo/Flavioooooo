import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { toast } from "sonner@2.0.3";

const artists = [
  {
    name: "Kimi Studio",
    specialty: "Kawaii Characters",
    collections: 8,
    image: "https://images.unsplash.com/photo-1679165805421-61adcdf96758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXdhaWklMjBmaWd1cmUlMjBjb2xsZWN0aWJsZXxlbnwxfHx8fDE3NTkyMjAxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Luna Art",
    specialty: "Fantasy Worlds",
    collections: 12,
    image: "https://images.unsplash.com/photo-1582571352032-448f7928eca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwdG95JTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NTkyMjAxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Cosmic Toys",
    specialty: "Space Theme",
    collections: 6,
    image: "https://images.unsplash.com/photo-1713970820109-a6b98bee0ba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjB0b3klMjBkaXNwbGF5fGVufDF8fHx8MTc1OTIyMDE2NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Metro Arts",
    specialty: "Urban Culture",
    collections: 10,
    image: "https://images.unsplash.com/photo-1725417835584-39518601bf7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZpZ3VyaW5lc3xlbnwxfHx8fDE3NTkyMjAxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function ArtistSection() {
  const handleArtistClick = (artistName: string) => {
    toast.info(`Viewing ${artistName}'s Collection`, {
      description: "Explore all their amazing designs!"
    });
  };

  return (
    <section id="artists" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0">
            Featured Artists
          </Badge>
          <h2 className="mb-4">Meet Our Creators</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Talented artists from around the world bringing their unique vision to life
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist, index) => (
            <button
              key={index}
              onClick={() => handleArtistClick(artist.name)}
              className="group cursor-pointer text-left w-full"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-4 bg-gradient-to-br from-pink-100 to-purple-100">
                <ImageWithFallback
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm">{artist.collections} Collections</p>
                  </div>
                </div>
              </div>
              <h3 className="mb-1">{artist.name}</h3>
              <p className="text-sm text-gray-500">{artist.specialty}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}