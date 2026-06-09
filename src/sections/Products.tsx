"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Replace with your actual WhatsApp number (Country code + Number, no + or spaces)
const WHATSAPP_NUMBER = "1234567890";

const products = [
  {
    id: 1,
    name: "The Noir Walnut Door",
    category: "Premium Collection",
    price: "1,450",
    img: "/10.jpeg",
    description:
      "A deep, rich walnut finish paired with sleek minimalist lines. The natural grain tells a story of timeless elegance, anchored by a subtle gold handle.",
    dimensions: "2100mm x 900mm x 40mm",
    finish: "Natural Walnut Veneer",
    hardware: "Brushed Brass",
  },
  {
    id: 2,
    name: "Arctic Minimalist Door",
    category: "Modern Collection",
    price: "1,050",
    img: "/11.jpeg",
    description:
      "Pure, uninterrupted white. Designed for ultra-modern interiors seeking clean sightlines and flawless integration with white walls.",
    dimensions: "2100mm x 850mm x 40mm",
    finish: "Matte Lacquer",
    hardware: "Satin Nickel",
  },
  {
    id: 3,
    name: "Savanna Oak Door",
    category: "Classic Collection",
    price: "2,100",
    img: "/12.jpeg",
    description:
      "Warm light oak paired with refined gold hardware. A perfect balance of organic warmth and structural precision for living spaces.",
    dimensions: "2100mm x 900mm x 44mm",
    finish: "Smoked Oak Veneer",
    hardware: "Polished Gold",
  },
  {
    id: 4,
    name: "Stone Gray Flush Door",
    category: "Contemporary Collection",
    price: "1,950",
    img: "/13.jpeg",
    description:
      "Cool concrete-gray tones in a flawless flush design. Ideal for industrial chic or sophisticated modern architecture.",
    dimensions: "2100mm x 900mm x 40mm",
    finish: "Textured Matte Laminate",
    hardware: "Matte Black",
  },
  {
    id: 5,
    name: "Linear Panel Door",
    category: "Signature Collection",
    price: "2,800",
    img: "/13.jpeg",
    description:
      "Subtle vertical profiling adds rhythm and shadow to this elegant panel door. A timeless silhouette for transitional spaces.",
    dimensions: "2100mm x 950mm x 50mm",
    finish: "Painted MDF / Veneer",
    hardware: "Integrated Pull",
  },
  {
    id: 6,
    name: "Deco Geometric Door",
    category: "Bespoke Collection",
    price: "3,200",
    img: "/14.jpeg",
    description:
      "Striking gold geometric inlays on a slate gray base. A statement piece that demands attention and defines luxury entryways.",
    dimensions: "2200mm x 1000mm x 55mm",
    finish: "Dark Grey Lacquer & Brass",
    hardware: "Gold Inlaid Handle",
  },
  {
    id: 7,
    name: "Deco Geometric Door",
    category: "Bespoke Collection",
    price: "3,200",
    img: "/15.jpeg",
    description:
      "Striking gold geometric inlays on a slate gray base. A statement piece that demands attention and defines luxury entryways.",
    dimensions: "2200mm x 1000mm x 55mm",
    finish: "Dark Grey Lacquer & Brass",
    hardware: "Gold Inlaid Handle",
  },
];

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  img: string;
  description: string;
  dimensions: string;
  finish: string;
  hardware: string;
}

function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  if (!product) return null;

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in the *${product.name}* (${product.category}) priced at $${product.price}. Could you provide more details?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-onyx/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center text-foreground transition-colors cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Side */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-card">
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-background/20 to-transparent" />
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
          <span className="text-accent text-[10px] uppercase tracking-[0.25em] font-mono mb-2">
            {product.category}
          </span>
          <h3 className="text-3xl font-light tracking-tight text-foreground mb-4">
            {product.name}
          </h3>

          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-3xl font-light text-foreground">
              ${product.price}
            </span>
            <span className="text-sm text-foreground/50">/ unit</span>
          </div>

          <p className="text-foreground/70 text-sm leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="border border-border rounded-lg p-3">
              <span className="text-[9px] uppercase tracking-wider text-foreground/50 block mb-1">
                Dimensions
              </span>
              <span className="text-sm font-light">{product.dimensions}</span>
            </div>
            <div className="border border-border rounded-lg p-3">
              <span className="text-[9px] uppercase tracking-wider text-foreground/50 block mb-1">
                Finish
              </span>
              <span className="text-sm font-light">{product.finish}</span>
            </div>
            <div className="border border-border rounded-lg p-3 col-span-2">
              <span className="text-[9px] uppercase tracking-wider text-foreground/50 block mb-1">
                Hardware
              </span>
              <span className="text-sm font-light">{product.hardware}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-auto flex flex-col gap-3">
            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#1da851] text-white font-medium text-sm uppercase tracking-wider px-6 py-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Buy Now via WhatsApp
            </button>
            <button
              onClick={onClose}
              className="w-full border border-border text-foreground hover:border-accent text-sm uppercase tracking-wider px-6 py-3 rounded-lg transition-colors duration-300 cursor-pointer"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>

      <section
        id="products"
        className="py-32 bg-background text-foreground px-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-accent text-xs uppercase font-bold tracking-widest block mb-3">
              THE COLLECTION
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Product Catalogue
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative w-full aspect-4/5 overflow-hidden rounded-xl mb-5 bg-card border border-border group-hover:border-accent/30 transition-colors duration-300">
                  {/* Image */}
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/30 transition-colors duration-300 z-10" />

                  {/* Corner View Button */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="bg-background/90 backdrop-blur-sm text-foreground text-xs uppercase tracking-widest text-center py-3 rounded-lg font-medium">
                      View Details
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 z-20 bg-onyx/80 backdrop-blur-sm text-bone text-sm px-3 py-1.5 rounded-md font-light tracking-wide">
                    SAR {product.price}
                  </div>
                </div>

                <p className="text-accent text-[10px] font-mono uppercase tracking-[0.2em] mb-1.5">
                  {product.category}
                </p>
                <h3 className="text-xl font-light tracking-wide group-hover:text-accent transition-colors duration-300">
                  {product.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
