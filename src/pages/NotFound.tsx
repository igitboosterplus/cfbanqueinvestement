import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center bg-muted">
        <div className="text-center px-6">
          <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Error 404</span>
          <h1 className="font-serif text-5xl sm:text-6xl text-foreground font-bold mt-3 mb-4">Page Not Found</h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link to="/" className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-3.5 font-semibold text-sm tracking-wider transition-all duration-300">
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
