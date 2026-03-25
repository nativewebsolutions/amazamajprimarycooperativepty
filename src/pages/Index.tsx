import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sprout, Beef, Wheat } from "lucide-react";
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

    {/* Quick stats */}
    <section className="bg-card py-16">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: <Sprout className="text-primary" size={32} />, title: "800 ha Hemp", desc: "Fiber, seed & CBD for premium markets" },
            { icon: <Wheat className="text-gold" size={32} />, title: "1,500 ha Row Crops", desc: "Maize & legumes for food security" },
            { icon: <Beef className="text-accent" size={32} />, title: "800+ Livestock", desc: "Cattle, sheep, goats & poultry" },
          ].map((item, i) => (
            <motion.div key={i} variants={fade} className="text-center p-6">
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground mt-1">{item.desc}</p>
            </motion.div>
          ))}
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
