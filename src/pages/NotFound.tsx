import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Home, ShoppingBag, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Crystal Bloomery</title>
        <meta name="description" content="The page you're looking for doesn't exist. Explore our crystal ceremony bags, blog, or return home." />
      </Helmet>
      
      <div className="min-h-screen bg-stone-50 pt-32 pb-24 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative Crystal Icon */}
            <div className="w-20 h-20 mx-auto mb-8 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#e8f5f2] to-[#f3eef5]" />
              <Sparkles className="absolute inset-0 m-auto w-10 h-10 text-[#9b6cb0]" strokeWidth={1.5} />
            </div>

            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#7c4d8f] mb-4 block">
              404 Error
            </span>
            
            <h1 className="font-serif text-4xl sm:text-5xl text-stone-800 mb-6">
              Page Not Found
            </h1>
            
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9b6cb0] to-transparent mx-auto mb-8" />
            
            <p className="font-sans text-stone-600 mb-12 max-w-md mx-auto leading-relaxed">
              The path you seek has wandered into the mist. Let us guide you back to 
              sacred ground where crystals and wisdom await.
            </p>

            {/* Navigation Options */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              <Link to="/">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white p-6 shadow-sm hover:shadow-md transition-all group"
                >
                  <Home className="w-6 h-6 text-[#10665c] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <span className="font-sans text-sm text-stone-700">Return Home</span>
                </motion.div>
              </Link>
              
              <Link to="/shop">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white p-6 shadow-sm hover:shadow-md transition-all group"
                >
                  <ShoppingBag className="w-6 h-6 text-[#9b6cb0] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <span className="font-sans text-sm text-stone-700">Browse Shop</span>
                </motion.div>
              </Link>
              
              <Link to="/blog">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white p-6 shadow-sm hover:shadow-md transition-all group"
                >
                  <BookOpen className="w-6 h-6 text-[#b695c8] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <span className="font-sans text-sm text-stone-700">Read Blog</span>
                </motion.div>
              </Link>
            </div>

            {/* Primary CTA */}
            <Link to="/shop">
              <Button className="bg-[#10665c] hover:bg-[#0d5249] text-white px-10 py-6 font-sans text-sm tracking-widest uppercase transition-all">
                Explore Bloom Satchels
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
