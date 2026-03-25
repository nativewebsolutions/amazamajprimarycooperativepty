import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const Contact = () => (
  <div className="font-body pt-16 min-h-screen bg-background flex items-center">
    <div className="container max-w-lg py-20">
      <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.15 } } }}>
        <motion.h1 variants={fade} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          Get In Touch
        </motion.h1>
        <motion.p variants={fade} className="text-muted-foreground mb-8">
          Let's build Africa's agricultural future together.
        </motion.p>

        <motion.form variants={fade} className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Full Name"
            className="bg-card border border-border rounded-md px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-card border border-border rounded-md px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="bg-card border border-border rounded-md px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="bg-card border border-border rounded-md px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-gold resize-none"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground font-semibold py-3 rounded-md hover:bg-primary/90 transition-colors animate-glow-pulse"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div variants={fade} className="mt-8 space-y-2 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-gold" />
            <span>sakumzidokoda@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-gold" />
            <span>072 015 7762 · 079 972 859</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

export default Contact;
