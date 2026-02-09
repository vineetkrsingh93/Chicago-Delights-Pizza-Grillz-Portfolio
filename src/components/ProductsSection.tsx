import vegPizza from "@/assets/vegpizza.png";
import nonvegPizza from "@/assets/nonvegpizza.png";
import burger from "@/assets/burger.png";
import fries from "@/assets/fries.png";
import milkshake from "@/assets/milkshake.png";
import garlicbread from "@/assets/garlicbread.png";
import mocktails from "@/assets/mocktails.png";
import combo from "@/assets/combo.png";
import heartpizza from "@/assets/heartpizza.png";

const categories = [
  {
    name: "Veg Pizzas 🍕",
    description: "Fresh veggies, rich cheese, and classic Italian flavors",
    image: vegPizza,
  },
  {
    name: "Non-Veg Pizzas 🍕",
    description: "Loaded with juicy meats and bold savory toppings",
    image: nonvegPizza,
  },
  {
    name: "Burger 🍔",
    description: "Crispy, cheesy bites and perfect starter sides",
    image: burger,
  },
  {
    name: "Fries 🍟",
    description: "Golden crispy fries with creamy dipping sauces",
    image: fries,
  },
  {
    name: "Milkshakes 🥤",
    description: "Thick, creamy shakes blended to perfection",
    image: milkshake,
  },
  {
    name: "Garlic Bread 🥖",
    description: "Oven-baked garlic bread with melted cheese",
    image: garlicbread,
  },
  {
    name: "Mocktails 🍹",
    description: "Chilled, colorful drinks to refresh every bite",
    image: mocktails,
  },
  {
    name: "Combos 🍕",
    description: "Perfect meal combos made for sharing",
    image: combo,
  },
  {
    name: "Special Heart ❤️ Pizza",
    description: "Signature heart-shaped pizza baked with love",
    image: heartpizza,
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Menu
          </span>

          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
            TASTE THE <span className="text-primary">CHICAGO DELIGHTS</span> DIFFERENCE
          </h2>

          <p className="text-muted-foreground text-lg">
            Indulge in gourmet flavors, fresh ingredients, and recipes made to deliver an unforgettable taste experience.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-glow ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-1">
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 