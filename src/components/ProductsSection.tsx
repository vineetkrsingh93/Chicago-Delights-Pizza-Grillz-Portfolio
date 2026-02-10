import { useState } from "react";
import ItemsModal from "@/components/ui/ItemsModal";

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

const menuItems: Record<string, any> = {

  "Veg Pizzas 🍕": [
    { name: "Margherita", prices: [129, 249, 399, 649] },
    { name: "Chilli Margherita", prices: [149, 269, 419, 669] },
    { name: "Crunchy Veggie", prices: [149, 269, 419, 669] },
    { name: "Veggie Delight", prices: [149, 269, 419, 669] },
    { name: "Golden Sweet Corn", prices: [149, 269, 419, 669] },
    { name: "Hawaiian Pizza", prices: [149, 269, 419, 669] },
    { name: "Caribbean Pizza", prices: [149, 269, 429, 669] },

    { name: "Cheese Pizza", prices: [219, 399, 549, 799] },
    { name: "Chicago Spl Paneer", prices: [219, 399, 549, 799] },
    { name: "Peri Peri Boom", prices: [219, 399, 549, 799] },
    { name: "Mughlai Retreat", prices: [219, 399, 549, 799] },
    { name: "Karahi Paneer", prices: [219, 399, 549, 799] },
    { name: "Makhani Supreme", prices: [219, 399, 549, 799] },
    { name: "7 Veggies", prices: [219, 399, 549, 799] },
    { name: "Mexican Overload", prices: [219, 399, 549, 799] },
    { name: "Tandoori Paneer", prices: [219, 399, 549, 799] },
  ],

  "Non-Veg Pizzas 🍕": [
    { name: "Love Salami", prices: [169, 319, 449, 679] },
    { name: "Love Tikka", prices: [169, 319, 449, 679] },
    { name: "Love Kabab", prices: [169, 319, 449, 679] },
    { name: "Egg Pizza", prices: [169, 319, 449, 679] },

    { name: "Karahi Chicken", prices: [249, 479, 649, 819] },
    { name: "Chicken Peri Peri", prices: [249, 479, 649, 819] },
    { name: "North Chicken SPL", prices: [249, 479, 649, 819] },
    { name: "Cheesy Chicken", prices: [249, 479, 649, 819] },
    { name: "Baked Chicken Deluxe", prices: [249, 479, 649, 819] },
  ],

  "Burger 🍔": [
    { name: "Aloo Tikki Burger", prices: [69] },
    { name: "Healthy Veg Burger", prices: [79] },
    { name: "Cheese Burger", prices: [89] },
    { name: "Deluxe Burger", prices: [89] },
    { name: "Maharaja Burger", prices: [99] },
    { name: "Cheese Veggie Burger", prices: [119] },
    { name: "Makhani Paneer Burger", prices: [99] },
    { name: "Chicken Burger", prices: [110] },
    { name: "Peri Peri Chicken Burger", prices: [129] },
    { name: "Tandoori Chicken Burger", prices: [199] },
  ],

  "Fries 🍟": [
    { name: "Classic Fries", prices: [110] },
    { name: "Cheesy Fries", prices: [119] },
    { name: "Chilly Cheese Fries", prices: [129] },
    { name: "Masala Fries", prices: [129] },
    { name: "Tandoori Fries", prices: [129] },
    { name: "Peri Peri Fries", prices: [139] },

    { name: "Chicken Cheese Fries", prices: [179] },
    { name: "Peri Peri Chicken Cheese Fries", prices: [189] },
    { name: "Chicken Pizza Fries", prices: [199] },
    { name: "Chicken Tandoori Fries", prices: [199] },
    { name: "Chicken Popcorn Fries", prices: [219] },
    { name: "Chilli Chicken Fries", prices: [209] },
  ],

  "Milkshakes 🥤": [
    { name: "Strawberry Shake", prices: [90] },
    { name: "Chocolate Shake", prices: [90] },
    { name: "Butterscotch Shake", prices: [90] },
    { name: "Vanilla Shake", prices: [90] },
    { name: "Oreo Shake", prices: [90] },
    { name: "Hazelnut Nutella", prices: [180] },
    { name: "Kitkat Shake", prices: [90] },
    { name: "Mango Shake", prices: [90] },
  ],

  "Mocktails 🍹": [
    { name: "Bubble Gum", prices: [120] },
    { name: "Spicy Mango", prices: [120] },
    { name: "Watermelon", prices: [120] },
    { name: "Grenadine", prices: [120] },
    { name: "Pina Colada", prices: [120] },
    { name: "Peach", prices: [120] },
    { name: "Rose", prices: [120] },
    { name: "Cranberry", prices: [120] },
    { name: "Coconut", prices: [120] },
  ],

  "Combos 🍕": [
    { name: "Buy 1 Veg Pizza + Garlic Bread + Mojito", prices: [555] },
    { name: "2 Burger + Fries + Coke", prices: [319] },
    { name: "2 Medium Pizza + Shake", prices: [699] },
    { name: "Chicken Burger + Fries + Ice Tea", prices: [299] },
    { name: "Aloo Tikki Burger Combo", prices: [169] },
    { name: "Veg Sandwich Combo", prices: [259] },
    { name: "Meal for One Pizza", prices: [299] },
    { name: "Veg Sandwich + Fries", prices: [289] },
  ],

  "Special Heart ❤️ Pizza": [
    { name: "Love in Box Heart Pizza", prices: [159, 369, 469, 659] },
    { name: "Italian Sweet Heart", prices: [189, 369, 469, 659] },
    { name: "Heat N Sweet", prices: [189, 369, 469, 659] },
    { name: "Hot Stuff", prices: [189, 369, 469, 659] },
    { name: "Garlic To", prices: [189, 369, 469, 659] },
    { name: "Four Season", prices: [189, 369, 469, 659] },
    { name: "Super Spicy", prices: [189, 369, 469, 659] },
  ],
};


export function ProductsSection() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [items, setItems] = useState<any[]>([]);

  const handleOpen = (categoryName: string) => {
    setTitle(categoryName);
    setItems(menuItems[categoryName]);
    setOpen(true);
  };

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleOpen(category.name)}
              className="cursor-pointer group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-glow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              <div className="relative p-6">
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ItemsModal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        items={items}
      />
    </section>
  );
}
