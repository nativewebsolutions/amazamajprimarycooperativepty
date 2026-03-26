import { Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-earth text-earth-foreground py-12">
    <div className="container text-center font-body">
      <p className="font-display text-gold text-2xl md:text-3xl font-bold mb-3">
        Join the movement. Let's build Africa's agricultural future together.
      </p>
      <p className="font-display text-gold text-lg mb-6">
        Amaz Amaj Primary Cooperative PTY LTD
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-earth-foreground/80 text-sm mb-4">
        <a href="mailto:sakumzidokoda@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
          <Mail size={16} className="text-gold" /> sakumzidokoda@gmail.com
        </a>
        <a href="tel:0720157762" className="flex items-center gap-2 hover:text-gold transition-colors">
          <Phone size={16} className="text-gold" /> 072 015 7762 / 079 972 859
        </a>
      </div>
      <p className="text-earth-foreground/50 text-xs">© 2026 All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
