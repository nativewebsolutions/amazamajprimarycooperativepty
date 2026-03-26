import { useState } from "react";
import { motion } from "framer-motion";
import { Beef, Bird, Wheat, Sprout, ShoppingCart, Send } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const products = [
  { name: "Cow", icon: <Beef className="text-primary" size={28} />, category: "Livestock" },
  { name: "Pig", icon: <Beef className="text-gold" size={28} />, category: "Livestock" },
  { name: "Sheep", icon: <Bird className="text-primary" size={28} />, category: "Livestock" },
  { name: "Goat", icon: <Bird className="text-gold" size={28} />, category: "Livestock" },
  { name: "Chicken", icon: <Bird className="text-primary" size={28} />, category: "Poultry" },
  { name: "Maize", icon: <Wheat className="text-gold" size={28} />, category: "Crops" },
  { name: "Legumes", icon: <Sprout className="text-primary" size={28} />, category: "Crops" },
  { name: "Hemp Products", icon: <Sprout className="text-gold" size={28} />, category: "Crops" },
];

const Order = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  const toggleProduct = (productName: string) => {
    setSelected((prev) =>
      prev.includes(productName)
        ? prev.filter((p) => p !== productName)
        : [...prev, productName]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Order Request: ${selected.join(", ")}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nProducts: ${selected.join(", ")}\nQuantity: ${quantity}\n\nAdditional Message:\n${message}`
    );
    window.location.href = `mailto:sakumzidokoda@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="font-body pt-20 min-h-screen bg-background">
      <div className="container max-w-4xl py-16">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          <motion.h1 variants={fade} className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2 text-center">
            <ShoppingCart className="inline text-primary mr-3" size={40} />
            Place Your Order
          </motion.h1>
          <motion.p variants={fade} className="text-muted-foreground text-center mb-10 text-lg">
            Select the products you'd like to order and we'll get back to you.
          </motion.p>

          {/* Product Selection */}
          <motion.div variants={fade} className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Select Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {products.map((product) => (
                <button
                  key={product.name}
                  type="button"
                  onClick={() => toggleProduct(product.name)}
                  className={`btn-float flex flex-col items-center gap-2 p-5 rounded-xl border-2 transition-all duration-300 ${
                    selected.includes(product.name)
                      ? "border-primary bg-primary/10 shadow-lg scale-105"
                      : "border-border bg-card hover:border-gold/50 hover:shadow-md"
                  }`}
                >
                  {product.icon}
                  <span className="font-body font-semibold text-foreground text-sm">{product.name}</span>
                  <span className="text-xs text-muted-foreground">{product.category}</span>
                </button>
              ))}
            </div>
            {selected.length > 0 && (
              <p className="mt-3 text-sm text-primary font-semibold">
                Selected: {selected.join(", ")}
              </p>
            )}
          </motion.div>

          {/* Order Form */}
          <motion.form variants={fade} onSubmit={handleSubmit} className="glow-form rounded-xl p-6 bg-card space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">Your Details</h2>
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-background border border-border rounded-md px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-background border border-border rounded-md px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-background border border-border rounded-md px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <input
              type="text"
              placeholder="Quantity (e.g. 5 cows, 100kg maize)"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full bg-background border border-border rounded-md px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <textarea
              placeholder="Additional message or special requests..."
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-background border border-border rounded-md px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-gold resize-none"
            />
            <button
              type="submit"
              disabled={selected.length === 0}
              className="btn-float w-full bg-primary text-primary-foreground font-bold py-3.5 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} /> Send Order via Email
            </button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Order;
