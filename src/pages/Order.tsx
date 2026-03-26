import { useState } from "react";
import { motion } from "framer-motion";
import { Beef, Bird, Wheat, Sprout, ShoppingCart, Send, Truck, CheckCircle, HelpCircle, Phone, Mail } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const products = [
  { name: "Cow", icon: <Beef className="text-primary" size={28} />, category: "Livestock", desc: "Grass-fed beef cattle" },
  { name: "Pig", icon: <Beef className="text-gold" size={28} />, category: "Livestock", desc: "Free-range pork" },
  { name: "Sheep", icon: <Bird className="text-primary" size={28} />, category: "Livestock", desc: "Wool & meat sheep" },
  { name: "Goat", icon: <Bird className="text-gold" size={28} />, category: "Livestock", desc: "Meat & milk goats" },
  { name: "Chicken", icon: <Bird className="text-primary" size={28} />, category: "Poultry", desc: "Free-range poultry & eggs" },
  { name: "Maize", icon: <Wheat className="text-gold" size={28} />, category: "Crops", desc: "Organic maize grain" },
  { name: "Legumes", icon: <Sprout className="text-primary" size={28} />, category: "Crops", desc: "Beans & lentils" },
  { name: "Hemp Products", icon: <Sprout className="text-gold" size={28} />, category: "Crops", desc: "Fiber, seed & CBD" },
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
    <div className="font-body pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-earth to-primary/80 py-20">
        <div className="container max-w-4xl text-center">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.15 } } }}>
            <motion.h1 variants={fade} className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              <ShoppingCart className="inline mr-3" size={40} />
              Place Your Order
            </motion.h1>
            <motion.p variants={fade} className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
              Fresh from our farm to your table. Select your products and we'll get back to you within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-12 bg-background">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: <CheckCircle className="text-primary" size={24} />, step: "1", title: "Select Products", desc: "Choose what you need from our range" },
              { icon: <Send className="text-gold" size={24} />, step: "2", title: "Send Order", desc: "Fill in your details and submit" },
              { icon: <Truck className="text-primary" size={24} />, step: "3", title: "We Deliver", desc: "We confirm and arrange delivery" },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="bg-card border border-border rounded-xl p-5 text-center">
                <div className="flex justify-center mb-2">{item.icon}</div>
                <p className="text-gold font-bold text-xs mb-1">Step {item.step}</p>
                <h3 className="font-display font-bold text-foreground text-sm">{item.title}</h3>
                <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Selection */}
      <section className="py-16 bg-card">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
            <motion.h2 variants={fade} className="font-display text-3xl font-bold text-foreground mb-2 text-center">Select Products</motion.h2>
            <motion.p variants={fade} className="text-muted-foreground text-center mb-8">Click to select one or more products for your order.</motion.p>
            <motion.div variants={fade} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {products.map((product) => (
                <button
                  key={product.name}
                  type="button"
                  onClick={() => toggleProduct(product.name)}
                  className={`btn-float flex flex-col items-center gap-2 p-5 rounded-xl border-2 transition-all duration-300 ${
                    selected.includes(product.name)
                      ? "border-primary bg-primary/10 shadow-lg scale-105"
                      : "border-border bg-background hover:border-gold/50 hover:shadow-md"
                  }`}
                >
                  {product.icon}
                  <span className="font-body font-semibold text-foreground text-sm">{product.name}</span>
                  <span className="text-xs text-muted-foreground">{product.category}</span>
                  <span className="text-xs text-primary/70">{product.desc}</span>
                </button>
              ))}
            </motion.div>
            {selected.length > 0 && (
              <p className="mt-4 text-sm text-primary font-semibold text-center">
                Selected: {selected.join(", ")}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 bg-background">
        <div className="container max-w-2xl">
          <motion.form initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} onSubmit={handleSubmit} className="glow-form rounded-xl p-8 bg-card space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center">Your Details</h2>
            <p className="text-muted-foreground text-sm text-center mb-4">Fill in your information and we'll send the order via email.</p>
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <input
              type="text"
              placeholder="Quantity (e.g. 5 cows, 100kg maize)"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <select className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold text-muted-foreground">
              <option value="">Delivery Preference</option>
              <option value="pickup">Farm Pickup</option>
              <option value="local">Local Delivery (Eastern Cape)</option>
              <option value="national">National Delivery</option>
            </select>
            <textarea
              placeholder="Additional message or special requests..."
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
            />
            <button
              type="submit"
              disabled={selected.length === 0}
              className="btn-float w-full bg-primary text-primary-foreground font-bold py-3.5 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} /> Send Order via Email
            </button>
          </motion.form>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-16 bg-card">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-10">Delivery Information</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: <Truck className="text-primary" size={24} />, title: "Farm Pickup", desc: "Collect directly from our farm in the Ntabankulu region. No delivery fee. Available Mon–Sat." },
              { icon: <Truck className="text-gold" size={24} />, title: "Local Delivery", desc: "We deliver within the Eastern Cape region. Delivery fees vary based on distance and order size." },
              { icon: <Truck className="text-primary" size={24} />, title: "National Delivery", desc: "For bulk orders, we arrange national delivery. Contact us for a custom quote and timeline." },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-10">Order FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "What is the minimum order?", a: "There is no minimum order for farm pickup. For deliveries, minimum quantities may apply depending on the product." },
              { q: "How long until I receive my order?", a: "We confirm orders within 24 hours. Farm pickup can be arranged within 2–3 days. Deliveries typically take 3–7 business days." },
              { q: "Can I order in bulk?", a: "Yes! We offer bulk pricing for large orders. Contact us directly for wholesale rates and custom arrangements." },
              { q: "What payment methods do you accept?", a: "We accept EFT/bank transfer, cash on pickup, and mobile payments. Payment details are provided upon order confirmation." },
              { q: "Are your products organic?", a: "We use organic fertilizer from our own livestock and practice sustainable farming methods. Our maize and legumes are grown without synthetic chemicals." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <HelpCircle className="text-gold mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-2">{item.q}</h3>
                    <p className="text-muted-foreground text-sm">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-8 bg-earth">
        <div className="container text-center">
          <p className="text-primary-foreground/80 text-sm mb-2">Need help with your order? Contact us directly:</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <a href="mailto:sakumzidokoda@gmail.com" className="flex items-center gap-2 text-gold hover:text-primary-foreground transition-colors">
              <Mail size={14} /> sakumzidokoda@gmail.com
            </a>
            <a href="tel:0720157762" className="flex items-center gap-2 text-gold hover:text-primary-foreground transition-colors">
              <Phone size={14} /> 072 015 7762
            </a>
            <a href="tel:079972859" className="flex items-center gap-2 text-gold hover:text-primary-foreground transition-colors">
              <Phone size={14} /> 079 972 859
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gold text-center">
        <div className="container">
          <p className="font-display text-3xl text-primary font-bold mb-3">
            Join the movement. Let's build Africa's agricultural future together.
          </p>
          <p className="text-primary/80 font-body">sakumzidokoda@gmail.com · 072 015 7762 · 079 972 859</p>
        </div>
      </section>
    </div>
  );
};

export default Order;
