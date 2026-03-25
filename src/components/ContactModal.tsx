import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ContactModal = ({ trigger }: { trigger: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger}
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-lg p-6 w-full max-w-md shadow-2xl animate-glow-pulse relative"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Request Investor Deck
              </h3>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-background border border-border rounded-md px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-background border border-border rounded-md px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="bg-background border border-border rounded-md px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground font-body font-semibold py-2.5 rounded-md hover:bg-primary/90 transition-colors mt-1"
                >
                  Send Request
                </button>
              </form>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                sakumzidokoda@gmail.com · 072 015 7762 · 079 972 859
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactModal;
