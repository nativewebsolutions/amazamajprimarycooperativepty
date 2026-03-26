import { motion } from "framer-motion";
import hempImg from "@/assets/hemp-field.jpg";
import cattleImg from "@/assets/cattle.jpg";
import ContactModal from "@/components/ContactModal";
import { ArrowRight, Users, Target, Eye, MapPin, Calendar, Award, Handshake, Sprout, Beef, Wheat, Bird } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const About = () => (
  <div className="font-body pt-20">
    {/* Hero Banner */}
    <section className="bg-gradient-to-br from-earth to-primary/80 py-20">
      <div className="container max-w-4xl text-center">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.15 } } }}>
          <motion.h1 variants={fade} className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            About Our Cooperative
          </motion.h1>
          <motion.p variants={fade} className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            Amaz Amaj Primary Cooperative PTY LTD is a community-driven agricultural enterprise built on trust, shared ownership, and sustainable farming.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-background">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Target className="text-primary" size={24} />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To empower rural communities through cooperative agriculture, creating sustainable livelihoods by aggregating household garden plots into productive farming blocks — without displacing families from their ancestral land.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <Eye className="text-gold" size={24} />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become Africa's leading cooperative farming model — proving that community-owned agriculture can deliver commercial-scale returns while preserving land rights, feeding families, and creating dignified employment for the youth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Land Model */}
    <section className="py-20 bg-card">
      <div className="container max-w-4xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.15 } } }}>
          <motion.h2 variants={fade} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Our Land Model
          </motion.h2>
          <motion.p variants={fade} className="text-lg text-muted-foreground leading-relaxed mb-6 text-center max-w-2xl mx-auto">
            The land is a standalone big garden — not one large commercial estate. Each household in our partner villages owns between <strong className="text-foreground">2 to 4 standard garden plots</strong>, depending on family size and village allocation.
          </motion.p>
          <motion.p variants={fade} className="text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-2xl mx-auto">
            Through signed MOUs, these household gardens are aggregated into a cooperative farming block — without displacing anyone. Families keep ownership of their plots while benefiting from shared machinery, inputs, and market access that only scale can provide.
          </motion.p>
          <motion.div variants={fade} className="bg-background rounded-xl p-8 border border-border">
            <p className="font-display text-gold font-bold text-xl mb-4 text-center">How It Works</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: <MapPin className="text-primary" size={20} />, text: "Each household contributes 2–4 garden plots to the cooperative block" },
                { icon: <Handshake className="text-gold" size={20} />, text: "Land ownership stays with the family — always" },
                { icon: <Sprout className="text-primary" size={20} />, text: "The cooperative provides seeds, fertilizer, machinery & market access" },
                { icon: <Award className="text-gold" size={20} />, text: "Revenue is shared proportionally based on land contributed" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border">
                  <span className="mt-0.5 flex-shrink-0">{item.icon}</span>
                  <p className="text-foreground text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Key Stats */}
    <section className="py-16 bg-background">
      <div className="container max-w-5xl">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-3xl font-bold text-foreground text-center mb-10">
          Our Impact in Numbers
        </motion.h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "2,500+", label: "Hectares Aggregated", color: "text-primary" },
            { value: "150+", label: "Partner Households", color: "text-gold" },
            { value: "800+", label: "Jobs Created", color: "text-primary" },
            { value: "5", label: "Revenue Streams", color: "text-gold" },
          ].map((stat, i) => (
            <motion.div key={i} variants={fade} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <p className={`font-display text-3xl md:text-4xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* What We Grow */}
    <section className="py-20 bg-card">
      <div className="container max-w-5xl">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-3xl font-bold text-foreground text-center mb-12">
          What We Grow & Raise
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
            <img src={hempImg} alt="Hemp crops growing in fields" className="rounded-xl w-full h-64 object-cover mb-4 shadow-md" loading="lazy" width={1280} height={720} />
            <h3 className="font-display text-xl font-bold text-foreground">Industrial Hemp</h3>
            <p className="text-muted-foreground mt-2">800 hectares producing fiber, seed, and CBD for premium export markets. Hemp is one of the most versatile crops, providing materials for textiles, construction, and health products.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
            <img src={cattleImg} alt="Livestock grazing on farmland" className="rounded-xl w-full h-64 object-cover mb-4 shadow-md" loading="lazy" width={1280} height={720} />
            <h3 className="font-display text-xl font-bold text-foreground">Livestock & Row Crops</h3>
            <p className="text-muted-foreground mt-2">250+ cattle, 550+ small stock (sheep, goats, poultry), plus 1,500 hectares of maize and legumes for food security and commercial grain supply.</p>
          </motion.div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: <Beef className="text-primary" size={24} />, name: "Cattle", detail: "250+ head" },
            { icon: <Bird className="text-gold" size={24} />, name: "Sheep & Goats", detail: "350+ head" },
            { icon: <Bird className="text-primary" size={24} />, name: "Poultry", detail: "200+ birds" },
            { icon: <Wheat className="text-gold" size={24} />, name: "Maize & Legumes", detail: "1,500 ha" },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="bg-background border border-border rounded-xl p-4 text-center hover:border-primary/30 hover:shadow-md transition-all">
              <div className="flex justify-center mb-2">{item.icon}</div>
              <p className="font-display font-bold text-foreground text-sm">{item.name}</p>
              <p className="text-gold text-xs font-semibold">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 bg-background">
      <div className="container max-w-3xl">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-3xl font-bold text-foreground text-center mb-12">
          Our Journey
        </motion.h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.12 } } }} className="space-y-6">
          {[
            { year: "2019", title: "Cooperative Founded", desc: "Amaz Amaj Primary Cooperative PTY LTD was established with a vision to transform rural agriculture." },
            { year: "2020", title: "First MOU Signed", desc: "Initial agreements with partner villages to aggregate household garden plots into cooperative farming blocks." },
            { year: "2021", title: "Hemp Cultivation Begins", desc: "800 hectares allocated for industrial hemp — fiber, seed, and CBD for premium markets." },
            { year: "2022", title: "Livestock Program Launch", desc: "Introduced cattle, sheep, goats, and poultry to diversify revenue and create rapid cash flow." },
            { year: "2023", title: "First Export Deal", desc: "Secured off-take agreements for hemp fiber and commercial grain for regional and export markets." },
            { year: "2024–2026", title: "Scaling Operations", desc: "Expanding to 2,500+ hectares, 150+ partner households, and establishing value-added processing facilities." },
          ].map((item, i) => (
            <motion.div key={i} variants={fade} className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-primary" size={18} />
                </div>
                {i < 5 && <div className="w-0.5 h-full bg-border mt-2" />}
              </div>
              <div className="pb-4">
                <p className="text-gold font-bold text-sm">{item.year}</p>
                <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Team / Leadership */}
    <section className="py-20 bg-card">
      <div className="container max-w-4xl">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-3xl font-bold text-foreground text-center mb-4">
          Our Leadership
        </motion.h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          A dedicated team driving sustainable growth and community empowerment.
        </p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="grid sm:grid-cols-3 gap-6">
          {[
            { name: "Sakumzi Dokoda", role: "Founder & Director", initials: "SD" },
            { name: "Community Board", role: "Village Representatives", initials: "CB" },
            { name: "Agricultural Team", role: "Farm Management", initials: "AT" },
          ].map((member, i) => (
            <motion.div key={i} variants={fade} className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl font-bold text-primary">{member.initials}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 bg-earth">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-primary-foreground text-center mb-10">What People Say</h2>
        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-center">
            <blockquote className="font-display text-xl text-primary-foreground italic leading-relaxed">
              "We signed the MOU because we saw our neighbors prosper. This is our land, and now we finally own our future."
            </blockquote>
            <p className="text-gold font-semibold mt-4">Chief L. Ntabankulu</p>
            <p className="text-primary-foreground/60 text-sm">Village Chief</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-center">
            <blockquote className="font-display text-xl text-primary-foreground italic leading-relaxed">
              "The model is brilliant. Aggregated land without displacing the community. This is the future of ethical agri-investment."
            </blockquote>
            <p className="text-gold font-semibold mt-4">Current Angel Investor</p>
            <p className="text-primary-foreground/60 text-sm">Name withheld</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-background">
      <div className="container max-w-4xl">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-3xl font-bold text-foreground text-center mb-10">
          Our Core Values
        </motion.h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Users className="text-primary" size={28} />, title: "Community First", desc: "Every decision centers on uplifting the families who own the land." },
            { icon: <Sprout className="text-gold" size={28} />, title: "Sustainability", desc: "Organic practices, livestock integration, and long-term soil health." },
            { icon: <Handshake className="text-primary" size={28} />, title: "Transparency", desc: "Open books, shared revenue, and honest communication with all stakeholders." },
            { icon: <Award className="text-gold" size={28} />, title: "Excellence", desc: "Commercial-grade outputs that compete in regional and export markets." },
          ].map((value, i) => (
            <motion.div key={i} variants={fade} className="bg-card border border-border rounded-xl p-5 text-center hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="flex justify-center mb-3">{value.icon}</div>
              <h3 className="font-display font-bold text-foreground">{value.title}</h3>
              <p className="text-muted-foreground text-xs mt-2">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 bg-gold text-center">
      <div className="container">
        <p className="font-display text-3xl text-primary font-bold mb-4">
          Interested in our cooperative model?
        </p>
        <p className="text-primary/80 font-body mb-6">Learn more about how you can participate or invest.</p>
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

export default About;
