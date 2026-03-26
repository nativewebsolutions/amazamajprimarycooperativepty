import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const Contact = () => (
  <div className="font-body pt-20">
    {/* Hero */}
    <section className="bg-gradient-to-br from-earth to-primary/80 py-20">
      <div className="container max-w-4xl text-center">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.15 } } }}>
          <motion.h1 variants={fade} className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Get In Touch
          </motion.h1>
          <motion.p variants={fade} className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            Whether you're an investor, buyer, or community member — we'd love to hear from you.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Contact Info Cards */}
    <section className="py-16 bg-background">
      <div className="container max-w-5xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { icon: <Mail className="text-primary" size={24} />, label: "Email Us", value: "sakumzidokoda@gmail.com", link: "mailto:sakumzidokoda@gmail.com" },
            { icon: <Phone className="text-gold" size={24} />, label: "Call Us", value: "072 015 7762", link: "tel:0720157762" },
            { icon: <Phone className="text-primary" size={24} />, label: "Alternative", value: "079 972 859", link: "tel:079972859" },
            { icon: <Clock className="text-gold" size={24} />, label: "Office Hours", value: "Mon–Fri: 8am – 5pm", link: null },
          ].map((item, i) => (
            <motion.div key={i} variants={fade} className="bg-card border border-border rounded-xl p-5 text-center hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="flex justify-center mb-3">{item.icon}</div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{item.label}</p>
              {item.link ? (
                <a href={item.link} className="font-display font-bold text-foreground hover:text-primary transition-colors text-sm">
                  {item.value}
                </a>
              ) : (
                <p className="font-display font-bold text-foreground text-sm">{item.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Form + Info side by side */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
            <form className="glow-form rounded-xl p-6 bg-card space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <select className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold text-muted-foreground">
                <option value="">What is this regarding?</option>
                <option value="investment">Investment Inquiry</option>
                <option value="order">Product Order</option>
                <option value="partnership">Partnership / MOU</option>
                <option value="employment">Employment</option>
                <option value="general">General Question</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-background border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
              />
              <button
                type="submit"
                className="btn-float w-full bg-primary text-primary-foreground font-bold py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="space-y-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Visit Our Farm</h2>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-display font-bold text-foreground">Farm Location</p>
                    <p className="text-muted-foreground text-sm mt-1">Eastern Cape, South Africa</p>
                    <p className="text-muted-foreground text-sm">Ntabankulu Region</p>
                  </div>
                </div>
                <div className="bg-primary/10 rounded-lg p-4 mt-4">
                  <p className="text-sm text-foreground font-semibold mb-1">Farm Visits</p>
                  <p className="text-muted-foreground text-xs">
                    Farm visits are available for investors and potential partners. Please contact us in advance to arrange a guided tour of our operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <MessageCircle className="text-gold mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-display font-bold text-foreground">Quick Response</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    We typically respond within 24 hours during business days. For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <p className="font-display font-bold text-foreground mb-3">Connect With Us</p>
              <div className="space-y-3">
                <a href="mailto:sakumzidokoda@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Mail size={16} className="text-gold" /> sakumzidokoda@gmail.com
                </a>
                <a href="tel:0720157762" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Phone size={16} className="text-gold" /> 072 015 7762
                </a>
                <a href="tel:079972859" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Phone size={16} className="text-gold" /> 079 972 859
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 bg-card">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-10">Common Questions</h2>
        <div className="space-y-4">
          {[
            { q: "How do I place an order?", a: "Visit our Order page, select the products you want, fill in your details, and we'll receive your order via email. We'll confirm availability and arrange delivery." },
            { q: "Do you deliver?", a: "Yes, we deliver within the Eastern Cape region. For orders outside this area, please contact us to discuss logistics and delivery options." },
            { q: "Can I visit the farm before investing?", a: "Absolutely! We welcome farm visits. Growth and Anchor tier investors receive annual visit invitations, and others can arrange visits by contacting us." },
            { q: "How do I become a partner village?", a: "Contact us to learn about our MOU process. We work with village leadership to ensure all families understand and benefit from the cooperative model." },
          ].map((item, i) => (
            <div key={i} className="bg-background border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
              <h3 className="font-display font-bold text-foreground mb-2">{item.q}</h3>
              <p className="text-muted-foreground text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 bg-gold text-center">
      <div className="container">
        <p className="font-display text-3xl text-primary font-bold mb-3">
          Join the movement. Let's build Africa's agricultural future together.
        </p>
        <p className="text-primary/80 font-body mb-2">sakumzidokoda@gmail.com · 072 015 7762 · 079 972 859</p>
      </div>
    </section>
  </div>
);

export default Contact;
