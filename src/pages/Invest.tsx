import { motion } from "framer-motion";
import { TrendingUp, Shield, DollarSign, ArrowRight } from "lucide-react";
import ContactModal from "@/components/ContactModal";

const fade = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const stats = [
  { label: "Year 3 EBITDA", value: "32%", sub: "margin" },
  { label: "Payback Period", value: "5–6", sub: "years" },
  { label: "Soil Fertility Index", value: "8.7/10", sub: "rating" },
];

const risks = [
  "Diversified crops — no single crop failure risk",
  "Signed MOUs with villages for long-term land security",
  "Existing off-take agreements for hemp and grain",
  "Organic fertilizer from livestock reduces input costs by 40%",
];

const Invest = () => (
  <div className="font-body pt-16">
    {/* Returns */}
    <section className="py-20 bg-background">
      <div className="container max-w-4xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.15 } } }}>
          <motion.h1 variants={fade} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Projected Returns
          </motion.h1>
          <motion.p variants={fade} className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Diversified revenue streams eliminate single-crop risk and maximize per-hectare returns.
          </motion.p>
          <motion.div variants={fade} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 text-center">
                <TrendingUp className="text-gold mx-auto mb-2" size={28} />
                <p className="font-display text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.sub}</p>
                <p className="font-semibold text-foreground mt-1 text-sm">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Risk Mitigation */}
    <section className="py-20 bg-card">
      <div className="container max-w-3xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          <motion.div variants={fade} className="flex items-center gap-3 mb-6">
            <Shield className="text-primary" size={28} />
            <h2 className="font-display text-2xl font-bold text-foreground">Risk Mitigation</h2>
          </motion.div>
          <div className="space-y-3">
            {risks.map((r, i) => (
              <motion.div key={i} variants={fade} className="flex items-start gap-3 bg-background rounded-md p-4 border border-border">
                <DollarSign className="text-gold mt-0.5 flex-shrink-0" size={18} />
                <p className="text-foreground">{r}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Exit Options */}
    <section className="py-16 bg-earth text-center">
      <div className="container">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          <motion.h2 variants={fade} className="font-display text-2xl text-primary-foreground font-bold mb-6">
            Exit Options
          </motion.h2>
          <motion.div variants={fade} className="flex justify-center gap-4 flex-wrap">
            {["Acquisition", "Secondary Sale", "Dividend Stream"].map((opt) => (
              <span key={opt} className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 px-5 py-2 rounded-full text-sm font-semibold">
                {opt}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-12 bg-primary text-center">
      <div className="container">
        <p className="font-display text-2xl text-primary-foreground font-bold mb-4">
          Ready to invest in Africa's future?
        </p>
        <ContactModal
          trigger={
            <span className="inline-flex items-center gap-2 bg-gold text-gold-foreground font-semibold px-8 py-3 rounded-md hover:bg-gold/90 transition-colors">
              Request Investor Deck <ArrowRight size={18} />
            </span>
          }
        />
      </div>
    </section>
  </div>
);

export default Invest;
