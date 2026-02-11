import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Franchise", href: "#franchise" },
  { name: "Contact", href: "#contact" },
];

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <motion.div variants={item} className="lg:col-span-2">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="font-display text-3xl text-primary">CHICAGO</span>
              <span className="font-display text-3xl text-secondary">DELIGHTS</span>
            </motion.a>

            <p className="text-muted-foreground mb-4 max-w-md">
              Pizza & Grillz — India's premium pizza franchise since 2014.
              Join our family of 80+ successful outlets across the nation.
            </p>

            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Chicago Delights. All rights reserved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item}>
            <h4 className="font-display text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item}>
            <h4 className="font-display text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-muted-foreground">
                  Booths, 61, 35C, Sector 35, Chandigarh, 160022
                </span>
              </li>

              <li>
                <a
                  href="tel:+919996553545"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +91 9996553545
                </a>
              </li>

              <li>
                <a
                  href="mailto:chicagodelightskkr@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  chicagodelightskkr@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/chicagodelights/"
                  target="_blank"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                  @chicagodelights
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/chicagodelightsind/"
                  target="_blank"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary"
                >
                  <Facebook className="w-5 h-5 text-primary" />
                  Chicago Delights Facebook
                </a>
              </li>

            </ul>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          variants={item}
          className="mt-12 rounded-xl overflow-hidden border border-border"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            title="Chicago Delights Location"
          />
        </motion.div>

      </motion.div>
    </footer>
  );
}
