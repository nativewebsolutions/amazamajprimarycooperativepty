import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sprout, Beef, Wheat, Bird, Leaf, ShoppingCart } from "lucide-react";
import heroImg from "@/assets/hero-farm.jpg";
import logo from "@/assets/logo.png";
import ContactModal from "@/components/ContactModal";

const fade = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const Index = () => (
  <div className="font-body">
    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img src={heroImg} alt="Large scale farming" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-earth/60 via-primary/40 to-gold/20" />
      <div className="container relative z-10 py-32">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.15 } } }}>
          <motion.div variants={fade} className="flex items-center gap-5 mb-6">
            <img src={logo} alt="Amaz Amaj Logo" className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl" width={512} height={512} />
          </motion.div>
          <motion.h1 variants={fade} className="font-display text-4xl sm:text-6xl md:text-8xl font-bold text-primary-foreground leading-tight max-w-3xl drop-shadow-lg">
            Amaz Amaj Primary Cooperative PTY LTD
          </motion.h1>
          <motion.p variants={fade} className="text-primary-foreground/90 max-w-lg mt-6 text-lg md:text-xl font-light">
            Sustainable Farming. Real Returns. A diversified agricultural model built on community-owned land.
          </motion.p>
          <motion.div variants={fade} className="flex gap-4 mt-8 flex-wrap">
            <ContactModal
              trigger={
                <span className="btn-float inline-flex items-center gap-2 bg-gold text-gold-foreground font-bold px-7 py-3.5 rounded-lg shadow-lg cursor-pointer">
                  Request Investor Deck <ArrowRight size={18} />
                </span>
              }
            />
            <Link
              to="/order"
              className="btn-float inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-lg shadow-lg"
            >
              <ShoppingCart size={18} /> Place an Order
            </Link>
            <Link
              to="/about"
              className="btn-float inline-flex items-center gap-2 border-2 border-primary-foreground/50 text-primary-foreground px-7 py-3.5 rounded-lg font-semibold backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Learn About Our Land
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Scale & Diversification */}
    <section className="bg-card py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold text-foreground text-center mb-3"
        >
          Scale & Diversification
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Diversified revenue streams eliminate single-crop risk and maximize per-hectare returns.
        </p>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: <Sprout className="text-primary" size={32} />, title: "Industrial Hemp", area: "800 hectares", desc: "Fiber, seed, CBD — premium markets" },
            { icon: <Wheat className="text-gold" size={32} />, title: "Row Crops", area: "1,500 hectares", desc: "Food security & commercial grain (Maize, Legumes)" },
            { icon: <Beef className="text-primary" size={32} />, title: "Cattle", area: "250 head", desc: "Beef, dairy, breeding stock" },
            { icon: <Bird className="text-gold" size={32} />, title: "Sheep, Goats & Poultry", area: "550+ head", desc: "Meat, wool, eggs — rapid cash flow" },
          ].map((item, i) => (
            <motion.div key={i} variants={fade} className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
              <p className="text-gold font-bold text-sm mt-1">{item.area}</p>
              <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Value-Added Outputs */}
    <section className="bg-background py-20">
      <div className="container max-w-3xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          <motion.h2 variants={fade} className="font-display text-3xl font-bold text-foreground mb-8 text-center">
            Value-Added Outputs
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Hemp fiber for textiles and construction materials",
              "Organic fertilizer from livestock (reducing input costs by 40%)",
              "Grain for local processing and export",
              "Meat and dairy supplying regional markets",
            ].map((item, i) => (
              <motion.div key={i} variants={fade} className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <Leaf className="text-primary mt-0.5 flex-shrink-0" size={20} />
                <p className="text-foreground text-sm font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* The Problem We're Solving */}
    <section className="bg-gradient-to-br from-earth to-primary/80 py-20">
      <div className="container max-w-3xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.15 } } }}>
          <motion.h2 variants={fade} className="font-display text-3xl font-bold text-primary-foreground mb-10 text-center">
            The Problem We're Solving
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { num: "01", text: "Rural poverty & land fragmentation" },
              { num: "02", text: "Lack of access to capital and machinery" },
              { num: "03", text: "Youth unemployment & food insecurity" },
            ].map((item, i) => (
              <motion.div key={i} variants={fade} className="text-center">
                <p className="font-display text-5xl font-bold text-gold mb-3">{item.num}</p>
                <p className="text-primary-foreground font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* CTA strip */}
    <section className="bg-primary py-14 text-center">
      <div className="container">
        <p className="font-display text-3xl text-primary-foreground font-bold mb-6">
          Join the movement. Build Africa's agricultural future.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <ContactModal
            trigger={
              <span className="btn-float inline-flex items-center gap-2 bg-gold text-gold-foreground font-bold px-10 py-4 rounded-lg shadow-lg text-lg cursor-pointer">
                Get In Touch <ArrowRight size={20} />
              </span>
            }
          />
          <Link
            to="/order"
            className="btn-float inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground font-bold px-10 py-4 rounded-lg text-lg"
          >
            <ShoppingCart size={20} /> Order Now
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
