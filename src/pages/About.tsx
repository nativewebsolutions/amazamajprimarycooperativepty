import { motion } from "framer-motion";
import hempImg from "@/assets/hemp-field.jpg";
import cattleImg from "@/assets/cattle.jpg";
import ContactModal from "@/components/ContactModal";
import { ArrowRight } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const About = () => (
  <div className="font-body pt-16">
    {/* Land Model */}
    <section className="py-20 bg-background">
      <div className="container max-w-3xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.15 } } }}>
          <motion.h1 variants={fade} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Land Model
          </motion.h1>
          <motion.p variants={fade} className="text-lg text-muted-foreground leading-relaxed mb-6">
            The land is a standalone big garden — not one large commercial estate. Each household in our partner villages owns between <strong className="text-foreground">2 to 4 standard garden plots</strong>, depending on family size and village allocation.
          </motion.p>
          <motion.p variants={fade} className="text-lg text-muted-foreground leading-relaxed mb-6">
            Through signed MOUs, these household gardens are aggregated into a cooperative farming block — without displacing anyone. Families keep ownership of their plots while benefiting from shared machinery, inputs, and market access that only scale can provide.
          </motion.p>
          <motion.div variants={fade} className="bg-card rounded-lg p-6 border border-border">
            <p className="font-display text-gold font-bold text-lg mb-2">How It Works</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Each household contributes 2–4 garden plots to the cooperative block</li>
              <li>• Land ownership stays with the family — always</li>
              <li>• The cooperative provides seeds, fertilizer, machinery & market access</li>
              <li>• Revenue is shared proportionally based on land contributed</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* What We Grow */}
    <section className="py-20 bg-card">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-foreground text-center mb-12"
        >
          What We Grow
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
            <img src={hempImg} alt="Hemp crops" className="rounded-lg w-full h-64 object-cover mb-4" loading="lazy" width={1280} height={720} />
            <h3 className="font-display text-xl font-bold text-foreground">Industrial Hemp</h3>
            <p className="text-muted-foreground mt-1">800 hectares producing fiber, seed, and CBD for premium export markets.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
            <img src={cattleImg} alt="Livestock" className="rounded-lg w-full h-64 object-cover mb-4" loading="lazy" width={1280} height={720} />
            <h3 className="font-display text-xl font-bold text-foreground">Livestock & Row Crops</h3>
            <p className="text-muted-foreground mt-1">250+ cattle, 550+ small stock, plus 1,500 ha of maize and legumes for food security and commercial grain.</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Testimonial */}
    <section className="py-16 bg-earth text-center">
      <div className="container max-w-2xl">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-display text-xl text-primary-foreground italic leading-relaxed"
        >
          "We signed the MOU because we saw our neighbors prosper. This is our land, and now we finally own our future."
        </motion.blockquote>
        <p className="text-gold font-semibold mt-4">Chief L. Ntabankulu</p>
        <p className="text-primary-foreground/60 text-sm">Village Chief</p>
      </div>
    </section>

    {/* CTA */}
    <section className="py-12 bg-primary text-center">
      <div className="container">
        <p className="font-display text-2xl text-primary-foreground font-bold mb-4">
          Interested in our cooperative model?
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

export default About;
