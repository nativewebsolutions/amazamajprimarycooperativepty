import { motion } from "framer-motion";
import { TrendingUp, Shield, DollarSign, ArrowRight, BarChart3, PieChart, Clock, CheckCircle, HelpCircle, Layers } from "lucide-react";
import ContactModal from "@/components/ContactModal";

const fade = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const Invest = () => (
  <div className="font-body pt-20">
    {/* Hero */}
    <section className="bg-gradient-to-br from-earth to-primary/80 py-20">
      <div className="container max-w-4xl text-center">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.15 } } }}>
          <motion.h1 variants={fade} className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Invest in Africa's Future
          </motion.h1>
          <motion.p variants={fade} className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            A diversified agricultural investment with real land assets, multiple revenue streams, and proven community impact.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Why Invest */}
    <section className="py-20 bg-background">
      <div className="container max-w-5xl">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-3xl font-bold text-foreground text-center mb-4">
          Why Invest With Us
        </motion.h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Our cooperative model delivers competitive returns while creating lasting social impact.
        </p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Layers className="text-primary" size={28} />, title: "Diversified Revenue", desc: "Five distinct income streams — hemp, crops, cattle, small stock, and value-added products — eliminate single-crop risk." },
            { icon: <Shield className="text-gold" size={28} />, title: "Land Security", desc: "Signed MOUs with partner villages ensure long-term access. Land rights remain with families, creating alignment of interests." },
            { icon: <TrendingUp className="text-primary" size={28} />, title: "Strong Returns", desc: "Projected 32% EBITDA margin by Year 3, with 5–6 year payback period on invested capital." },
            { icon: <BarChart3 className="text-gold" size={28} />, title: "Scalable Model", desc: "Currently at 2,500+ hectares with clear pathway to 10,000+ hectares through additional village partnerships." },
            { icon: <CheckCircle className="text-primary" size={28} />, title: "Off-Take Agreements", desc: "Existing contracts for hemp fiber and grain with regional and international buyers." },
            { icon: <PieChart className="text-gold" size={28} />, title: "Cost Efficiency", desc: "Organic fertilizer from livestock reduces input costs by 40%, improving margins across all crop lines." },
          ].map((item, i) => (
            <motion.div key={i} variants={fade} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Projected Returns */}
    <section className="py-20 bg-card">
      <div className="container max-w-4xl">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-3xl font-bold text-foreground text-center mb-12">
          Projected Returns
        </motion.h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Year 3 EBITDA", value: "32%", sub: "margin", icon: <TrendingUp className="text-gold" size={28} /> },
            { label: "Payback Period", value: "5–6", sub: "years", icon: <Clock className="text-primary" size={28} /> },
            { label: "Soil Fertility Index", value: "8.7/10", sub: "rating", icon: <BarChart3 className="text-gold" size={28} /> },
          ].map((s, i) => (
            <motion.div key={i} variants={fade} className="bg-background border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-3">{s.icon}</div>
              <p className="font-display text-4xl font-bold text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.sub}</p>
              <p className="font-semibold text-foreground mt-2 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Investment Tiers */}
    <section className="py-20 bg-background">
      <div className="container max-w-5xl">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-3xl font-bold text-foreground text-center mb-4">
          Investment Tiers
        </motion.h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Flexible options to match your investment appetite and goals.
        </p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="grid sm:grid-cols-3 gap-6">
          {[
            { tier: "Seed", amount: "R50,000 – R250,000", benefits: ["Quarterly progress reports", "Revenue share from Year 2", "Certificate of participation", "Community impact updates"], highlight: false },
            { tier: "Growth", amount: "R250,000 – R1,000,000", benefits: ["All Seed benefits", "Priority off-take access", "Annual farm visit invitation", "Named partnership recognition", "Board observer seat"], highlight: true },
            { tier: "Anchor", amount: "R1,000,000+", benefits: ["All Growth benefits", "Board advisory position", "Custom project allocation", "Dedicated account manager", "First right of refusal on expansion"], highlight: false },
          ].map((plan, i) => (
            <motion.div key={i} variants={fade} className={`rounded-xl p-8 border-2 text-center hover:shadow-xl transition-all ${plan.highlight ? "border-gold bg-gold/5 shadow-lg scale-105" : "border-border bg-card"}`}>
              <p className="text-gold font-bold text-sm uppercase tracking-wider mb-2">{plan.tier}</p>
              <p className="font-display text-2xl font-bold text-foreground mb-4">{plan.amount}</p>
              <ul className="space-y-2 text-left">
                {plan.benefits.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={14} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ContactModal
                  trigger={
                    <span className={`btn-float inline-flex items-center gap-2 font-bold px-6 py-3 rounded-lg cursor-pointer text-sm ${plan.highlight ? "bg-gold text-gold-foreground" : "bg-primary text-primary-foreground"}`}>
                      Get Started <ArrowRight size={16} />
                    </span>
                  }
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Use of Funds */}
    <section className="py-20 bg-card">
      <div className="container max-w-4xl">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-3xl font-bold text-foreground text-center mb-10">
          How Funds Are Used
        </motion.h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="grid sm:grid-cols-2 gap-4">
          {[
            { label: "Machinery & Equipment", pct: "35%", desc: "Tractors, irrigation systems, and processing equipment" },
            { label: "Seeds, Inputs & Livestock", pct: "25%", desc: "Quality seed stock, fertilizer, and breeding animals" },
            { label: "Infrastructure", pct: "20%", desc: "Storage facilities, fencing, and water systems" },
            { label: "Operations & Labour", pct: "15%", desc: "Skilled farm workers, management, and admin" },
            { label: "Marketing & Sales", pct: "5%", desc: "Market development, packaging, and distribution" },
          ].map((item, i) => (
            <motion.div key={i} variants={fade} className="bg-background border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-display font-bold text-foreground">{item.label}</h3>
                <span className="text-gold font-bold text-lg">{item.pct}</span>
              </div>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Risk Mitigation */}
    <section className="py-20 bg-background">
      <div className="container max-w-3xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          <motion.div variants={fade} className="flex items-center gap-3 mb-8 justify-center">
            <Shield className="text-primary" size={28} />
            <h2 className="font-display text-3xl font-bold text-foreground">Risk Mitigation</h2>
          </motion.div>
          <div className="space-y-3">
            {[
              "Diversified crops — no single crop failure risk",
              "Signed MOUs with villages for long-term land security",
              "Existing off-take agreements for hemp and grain",
              "Organic fertilizer from livestock reduces input costs by 40%",
              "Multiple exit strategies including acquisition and secondary sale",
              "Experienced agricultural management team",
            ].map((r, i) => (
              <motion.div key={i} variants={fade} className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all">
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
          <motion.h2 variants={fade} className="font-display text-3xl text-primary-foreground font-bold mb-8">
            Exit Options
          </motion.h2>
          <motion.div variants={fade} className="flex justify-center gap-4 flex-wrap mb-8">
            {["Acquisition", "Secondary Sale", "Dividend Stream"].map((opt) => (
              <span key={opt} className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 px-6 py-3 rounded-full font-semibold">
                {opt}
              </span>
            ))}
          </motion.div>
          <p className="text-primary-foreground/70 max-w-lg mx-auto">
            Investors have multiple pathways to realize returns, from ongoing dividend distributions to full exit through acquisition by agri-corporates or secondary market sale.
          </p>
        </motion.div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 bg-card">
      <div className="container max-w-3xl">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-3xl font-bold text-foreground text-center mb-10">
          Frequently Asked Questions
        </motion.h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="space-y-4">
          {[
            { q: "What is the minimum investment?", a: "The Seed tier starts at R50,000, making it accessible for individuals who want to participate in Africa's agricultural growth." },
            { q: "How are returns distributed?", a: "Revenue is distributed quarterly based on your investment tier. Seed investors begin receiving returns from Year 2, while Growth and Anchor investors may receive earlier distributions." },
            { q: "Is my capital secured against land?", a: "While the cooperative operates on community-owned land through signed MOUs, your investment is secured against the cooperative's assets including equipment, livestock, and standing crops." },
            { q: "Can I visit the farm?", a: "Yes! Growth and Anchor investors receive annual farm visit invitations. Seed investors can arrange visits upon request." },
            { q: "What happens if a crop fails?", a: "Our diversified model means no single crop failure can significantly impact overall returns. With five distinct revenue streams, risk is naturally hedged." },
            { q: "How do I get started?", a: "Click 'Request Investor Deck' to receive our detailed prospectus, or contact us directly at sakumzidokoda@gmail.com or 072 015 7762." },
          ].map((item, i) => (
            <motion.div key={i} variants={fade} className="bg-background border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <HelpCircle className="text-gold mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h3 className="font-display font-bold text-foreground mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm">{item.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 bg-gold text-center">
      <div className="container">
        <p className="font-display text-3xl text-primary font-bold mb-3">
          Ready to invest in Africa's agricultural future?
        </p>
        <p className="text-primary/80 font-body mb-6">sakumzidokoda@gmail.com · 072 015 7762 · 079 972 859</p>
        <ContactModal
          trigger={
            <span className="btn-float inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-10 py-4 rounded-lg shadow-lg text-lg cursor-pointer">
              Request Investor Deck <ArrowRight size={20} />
            </span>
          }
        />
      </div>
    </section>
  </div>
);

export default Invest;
