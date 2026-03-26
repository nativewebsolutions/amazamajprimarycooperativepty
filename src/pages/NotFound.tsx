import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ShoppingCart, ArrowRight, Phone } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="font-body pt-20 min-h-screen bg-background flex items-center">
      <div className="container max-w-lg text-center py-20">
        <p className="font-display text-8xl font-bold text-primary mb-4">404</p>
        <h1 className="font-display text-3xl font-bold text-foreground mb-3">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, the page you're looking for doesn't exist. It may have been moved or the URL might be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link to="/" className="btn-float inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg shadow-lg">
            <Home size={18} /> Back to Home
          </Link>
          <Link to="/order" className="btn-float inline-flex items-center gap-2 bg-gold text-gold-foreground font-bold px-6 py-3 rounded-lg shadow-lg">
            <ShoppingCart size={18} /> Place an Order
          </Link>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <p className="font-display font-bold text-foreground mb-3">Quick Links</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "Our Land" },
              { to: "/invest", label: "Invest" },
              { to: "/order", label: "Order" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-primary/5">
                <ArrowRight size={14} /> {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>Need help? Contact us:</p>
          <a href="tel:0720157762" className="inline-flex items-center gap-1 text-gold hover:text-primary transition-colors mt-1">
            <Phone size={14} /> 072 015 7762
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
