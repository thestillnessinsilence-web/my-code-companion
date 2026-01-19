import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { base44 } from '@/api/base44Client';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchCartCount = async () => {
      const sessionId = localStorage.getItem('crystal_session') || 
        `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('crystal_session', sessionId);
      
      const items = await base44.entities.CartItem.filter({ session_id: sessionId });
      const count = items.reduce((sum, item) => sum + (item.quantity || 1), 0);
      setCartCount(count);
    };
    fetchCartCount();
    
    window.addEventListener('cart-updated', fetchCartCount);
    return () => window.removeEventListener('cart-updated', fetchCartCount);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'Shop', page: 'Shop' },
    { name: 'About', page: 'About', submenu: [
      { name: 'Blog', page: 'Blog' },
      { name: 'Contact', page: 'Contact' }
    ]},
    { name: 'Wholesale', page: 'Wholesale', submenu: [
      { name: 'Events', page: 'Events' }
    ]},
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500&display=swap');
        
        :root {
          --emerald: #10665c;
          --emerald-light: #e8f5f2;
          --purple: #7c4d8f;
          --purple-light: #f3edf7;
          --purple-accent: #9b6cb0;
          --lavender: #b695c8;
          --cream: #faf9f7;
        }
        
        .font-serif {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        
        .font-sans {
          font-family: 'Inter', system-ui, sans-serif;
        }

        .sacred-geometry {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 30L30 55L5 30L30 5z' stroke='%2310665c' stroke-width='0.5' fill='none' opacity='0.08'/%3E%3Ccircle cx='30' cy='30' r='15' stroke='%236b4c7a' stroke-width='0.3' fill='none' opacity='0.06'/%3E%3C/svg%3E");
        }

        .crystal-gradient {
          background: linear-gradient(135deg, var(--emerald-light) 0%, var(--purple-light) 50%, #f8f4fb 100%);
        }

        * {
          user-select: text;
          -webkit-user-select: text;
          -moz-user-select: text;
          -ms-user-select: text;
        }
        
        button, a, svg {
          user-select: none;
          -webkit-user-select: none;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#10665c] via-[#7c4d8f] to-[#b695c8] opacity-20" />
                <svg className="absolute inset-0 w-10 h-10" viewBox="0 0 40 40" fill="none">
                  <polygon points="20,4 36,20 20,36 4,20" stroke="#10665c" strokeWidth="1" fill="none" />
                  <polygon points="20,10 30,20 20,30 10,20" stroke="#7c4d8f" strokeWidth="0.8" fill="none" />
                  <circle cx="20" cy="20" r="4" fill="#b695c8" opacity="0.6" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-lg sm:text-xl tracking-wide text-stone-800">Crystal Bloomery</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <div key={link.page} className="relative group">
                  <Link
                    to={createPageUrl(link.page)}
                    className="font-sans text-sm tracking-widest uppercase text-stone-600 hover:text-[#10665c] transition-colors relative"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#9b6cb0] transition-all duration-300 group-hover:w-full" />
                  </Link>
                  {link.submenu && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white/80 backdrop-blur-md shadow-sm border border-stone-200/50 rounded py-2 min-w-[160px]">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.page}
                            to={createPageUrl(sublink.page)}
                            className="block px-4 py-2 font-sans text-sm tracking-widest uppercase text-stone-600 hover:text-[#10665c] hover:bg-stone-100/50 transition-colors"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link
                to={createPageUrl('Cart')}
                className="relative p-2 text-[#d4af37] hover:text-[#b8941f] transition-colors"
              >
                <Sparkles className="w-5 h-5" strokeWidth={1} />
              {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#9b6cb0] text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <Link to={createPageUrl('Cart')} className="relative p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#d4af37]" strokeWidth={1} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#9b6cb0] text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-stone-600 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-stone-100">
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-sans text-sm tracking-widest uppercase text-stone-600 py-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 sacred-geometry">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-2xl text-white mb-4">Crystal Bloomery</h3>
              <p className="text-sm leading-relaxed opacity-80">
                Where nature's wisdom meets crystalline energy. Each oracle bag is crafted with intention 
                and blessed with healing vibrations.
              </p>
            </div>
            <div>
              <h4 className="font-sans text-xs tracking-widest uppercase text-[#b695c8] mb-4">Navigate</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className="block text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-sans text-xs tracking-widest uppercase text-[#b695c8] mb-4">Connect</h4>
              <p className="text-sm mb-2">crystalbloomery@gmail.com</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-stone-800 text-center text-xs opacity-60">
            © {new Date().getFullYear()} Crystal Bloomery. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}