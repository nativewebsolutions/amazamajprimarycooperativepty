import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sprout, Beef, Wheat, Bird, Leaf } from "lucide-react";
import heroImg from "@/assets/hero-farm.jpg";
import ContactModal from "@/components/ContactModal";

const fade = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const Index = () => (
  <div className="font-body">
    {/* Hero */}
    <section className="relative min-h-screen flex items-center">
      <img src={heroImg} alt="Amaz Amaj farmland" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-earth/60" />
      <div className="container relative z-10 py-32">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.15 } } }}>
          <motion.p variants={fade} className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
            Amaz Amaj Primary Cooperative Ltd
          </motion.p>
          <motion.h1 variants={fade} className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight max-w-2xl">
            Sustainable Farming. <br />Real Returns.
          </motion.h1>
          <motion.p variants={fade} className="text-primary-foreground/80 max-w-lg mt-4 text-lg">
            A diversified agricultural model built on community-owned land — delivering high-yield returns and rural empowerment.
          </motion.p>
          <motion.div variants={fade} className="flex gap-4 mt-8 flex-wrap">
            <ContactModal
              trigger={
                <span className="inline-flex items-center gap-2 bg-gold text-gold-foreground font-semibold px-6 py-3 rounded-md hover:bg-gold/90 transition-colors">
                  Request Investor Deck <ArrowRight size={18} />
                </span>
              }
            />
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-6 py-3 rounded-md hover:bg-primary-foreground/10 transition-colors"
            >
              Learn About Our Land
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Scale & Diversification */}
    <section className="bg-card py-16">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-foreground text-center mb-3"
        >
          Scale & Diversification
        </motion.h2>
        <p className="text-center text-muted-foreground mb-10">
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
            { icon: <Sprout className="text-primary" size={28} />, title: "Industrial Hemp", area: "800 hectares", desc: "Fiber, seed, CBD — premium markets" },
            { icon: <Wheat className="text-gold" size={28} />, title: "Row Crops", area: "1,500 hectares", desc: "Food security & commercial grain (Maize, Legumes)" },
            { icon: <Beef className="text-accent" size={28} />, title: "Cattle", area: "250 head", desc: "Beef, dairy, breeding stock" },
            { icon: <Bird className="text-primary" size={28} />, title: "Sheep, Goats & Poultry", area: "550+ head", desc: "Meat, wool, eggs — rapid cash flow" },
          ].map((item, i) => (
            <motion.div key={i} variants={fade} className="bg-background border border-border rounded-lg p-5 text-center">
              <div className="flex justify-center mb-2">{item.icon}</div>
              <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-gold font-semibold text-sm mt-1">{item.area}</p>
              <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Value-Added Outputs */}
    <section className="bg-background py-16">
      <div className="container max-w-3xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          <motion.h2 variants={fade} className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            Value-Added Outputs
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Hemp fiber for textiles and construction materials",
              "Organic fertilizer from livestock (reducing input costs by 40%)",
              "Grain for local processing and export",
              "Meat and dairy supplying regional markets",
            ].map((item, i) => (
              <motion.div key={i} variants={fade} className="flex items-start gap-3 bg-card rounded-md p-4 border border-border">
                <Leaf className="text-primary mt-0.5 flex-shrink-0" size={18} />
                <p className="text-foreground text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* The Problem We're Solving */}
    <section className="bg-earth py-16">
      <div className="container max-w-3xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.15 } } }}>
          <motion.h2 variants={fade} className="font-display text-2xl font-bold text-primary-foreground mb-8 text-center">
            The Problem We're Solving
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { num: "01", text: "Rural poverty & land fragmentation" },
              { num: "02", text: "Lack of access to capital and machinery" },
              { num: "03", text: "Youth unemployment & food insecurity" },
            ].map((item, i) => (
              <motion.div key={i} variants={fade} className="text-center">
                <p className="font-display text-4xl font-bold text-gold mb-2">{item.num}</p>
                <p className="text-primary-foreground text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* CTA strip */}
    <section className="bg-primary py-12 text-center">
      <div className="container">
        <p className="font-display text-2xl text-primary-foreground font-bold mb-4">
          Join the movement. Build Africa's agricultural future.
        </p>
        <ContactModal
          trigger={
            <span className="inline-flex items-center gap-2 bg-gold text-gold-foreground font-semibold px-8 py-3 rounded-md hover:bg-gold/90 transition-colors">
              Get In Touch <ArrowRight size={18} />
            </span>
          }
        />
      </div>
    </section>
  </div>
);

export default Index;
