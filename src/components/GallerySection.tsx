import { useState } from "react";
import { X } from "lucide-react";
import outlet1 from "@/assets/outlet-1.jpg";
import outlet2 from "@/assets/outlet-2.jpg";
import outlet3 from "@/assets/outlet-3.jpg";
import outlet4 from "@/assets/outlet-4.jpg";
import vegPizza from "@/assets/veg-pizza.jpg";
import nonvegPizza from "@/assets/nonveg-pizza.jpg";
import sides from "@/assets/sides.jpg";
import combos from "@/assets/combos.jpg";

const galleryImages = [
  { src: outlet1, alt: "Premium Restaurant Interior", category: "outlet" },
  { src: vegPizza, alt: "Gourmet Veg Pizza", category: "food" },
  { src: outlet2, alt: "Professional Kitchen", category: "outlet" },
  { src: nonvegPizza, alt: "Non-Veg Special", category: "food" },
  { src: outlet3, alt: "Happy Customers", category: "outlet" },
  { src: sides, alt: "Delicious Sides", category: "food" },
  { src: outlet4, alt: "Fast Delivery", category: "outlet" },
  { src: combos, alt: "Family Combos", category: "food" },
  { src: combos, alt: "Family Combos", category: "food" },
  { src: combos, alt: "Family Combos", category: "food" },
  { src: combos, alt: "Family Combos", category: "food" },
  
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
            EXPERIENCE <span className="text-gradient-gold">CHICAGO DELIGHTS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Take a peek inside our outlets and discover the quality that defines us.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-foreground font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}