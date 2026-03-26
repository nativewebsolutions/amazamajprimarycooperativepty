import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sprout, Beef, Wheat, Bird, Leaf, ShoppingCart, User } from "lucide-react";
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
            <img src={logo} alt="Amaz Amaj Logo" className="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl" width={512} height={512} />
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { icon: <Sprout className="text-primary" size={32} />, title: "Industrial Hemp", area: "800 hectares", desc: "Fiber, seed, CBD — premium markets" },
            { icon: <Wheat className="text-gold" size={32} />, title: "Row Crops", area: "1,500 hectares", desc: "Food security & commercial grain (Maize, Legumes)" },
            { icon: <Beef className="text-primary" size={32} />, title: "Cattle", area: "250 head", desc: "Beef, dairy, breeding stock" },
            { icon: <Bird className="text-gold" size={32} />, title: "Sheep, Goats & Poultry", area: "550+ head", desc: "Meat, wool, eggs — rapid cash flow" },
          ].map((item, i) => (
            <motion.div key={i} variants={fade} className="bg-background border border-border rounded-xl p-5 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-center mb-2">{item.icon}</div>
              <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-gold font-bold text-sm mt-1">{item.area}</p>
              <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Small ad blocks under Scale */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          {[
            { label: "Fresh Beef", tag: "Available Now" },
            { label: "Organic Maize", tag: "Bulk Orders" },
            { label: "Hemp Fiber", tag: "Premium Quality" },
            { label: "Free-Range Eggs", tag: "Farm Direct" },
          ].map((ad, i) => (
            <Link key={i} to="/order" className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center hover:bg-primary/20 transition-colors">
              <p className="font-body font-bold text-primary text-sm">{ad.label}</p>
              <p className="text-xs text-gold font-semibold">{ad.tag}</p>
            </Link>
          ))}
        </div>
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

          {/* Small ad blocks under Value-Added */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              { label: "Textiles", tag: "Hemp-Based" },
              { label: "Fertilizer", tag: "100% Organic" },
              { label: "Export Grain", tag: "Certified" },
            ].map((ad, i) => (
              <Link key={i} to="/order" className="bg-gold/10 border border-gold/20 rounded-lg p-3 text-center hover:bg-gold/20 transition-colors">
                <p className="font-body font-bold text-foreground text-sm">{ad.label}</p>
                <p className="text-xs text-primary font-semibold">{ad.tag}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Referrals / Testimonials */}
    <section className="bg-card py-16">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-10">What People Say</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Referral with profile */}
          <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                <User className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-display font-bold text-foreground">Chief Ntabankulu</p>
                <p className="text-xs text-muted-foreground">Community Leader</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm italic">
              "This cooperative has transformed our community. The land is finally being used to create real jobs and feed our people."
            </p>
          </div>

          {/* Referral without profile image */}
          <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="font-display font-bold text-gold text-lg">AI</span>
              </div>
              <div>
                <p className="font-display font-bold text-foreground">Angel Investor</p>
                <p className="text-xs text-muted-foreground">Private Investment Group</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm italic">
              "A diversified agricultural model with real land assets — this is exactly the kind of venture Africa needs for sustainable growth."
            </p>
          </div>
        </div>
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

    {/* CTA strip — Yellow bg, green text */}
    <section className="bg-gold py-14 text-center">
      <div className="container">
        <p className="font-display text-3xl text-primary font-bold mb-3">
          Join the movement. Let's build Africa's agricultural future together.
        </p>
        <p className="text-primary/80 font-body mb-2">sakumzidokoda@gmail.com · 072 015 7762 · 079 972 859</p>
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <ContactModal
            trigger={
              <span className="btn-float inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-10 py-4 rounded-lg shadow-lg text-lg cursor-pointer">
                Get In Touch <ArrowRight size={20} />
              </span>
            }
          />
          <Link
            to="/order"
            className="btn-float inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-10 py-4 rounded-lg text-lg"
          >
            <ShoppingCart size={20} /> Order Now
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
