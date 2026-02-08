import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "Franchise", href: "#franchise" },
  { name: "Contact", href: "#contact" },
];

const whatsappNumber = "919996553545";
const whatsappMessage = encodeURIComponent(
  "Hi, I want to know about Chicago Delights franchise."
);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elevated border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* 🔥 LOGO + BRAND */}
          {/* LOGO + BRAND */}
<a href="#home" className="flex items-center gap-3 whitespace-nowrap">
  <img src="/logo.png" alt="logo" className="h-14 md:h-16 w-auto" />


  <div className="flex items-center gap-2">
    <span className="font-display text-2xl md:text-3xl font-bold text-primary leading-none">
      CHICAGO
    </span>
    <span className="font-display text-2xl md:text-3xl font-bold text-secondary leading-none">
      DELIGHTS
    </span>
  </div>
</a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />

            <Button
              asChild
              className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 shadow-lg"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />

            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <Button
            asChild
            className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 mt-4"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
