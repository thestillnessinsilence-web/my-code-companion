import { useState, useEffect, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavLink {
  name: string;
  page: string;
  submenu?: { name: string; page: string }[];
}

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
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
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
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
                      <div className="bg-white/95 backdrop-blur-md shadow-lg border border-stone-200/50 py-2 min-w-[160px]">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.page}
                            to={createPageUrl(sublink.page)}
                            className="block px-4 py-2 font-sans text-sm tracking-widest uppercase text-stone-600 hover:text-[#10665c] hover:bg-stone-50 transition-colors"
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
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <Link to={createPageUrl('Cart')} className="relative p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#d4af37]" strokeWidth={1} />
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
                <div key={link.page}>
                  <Link
                    to={createPageUrl(link.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-sans text-sm tracking-widest uppercase text-stone-600 py-2"
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="pl-4 space-y-2 mt-2">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.page}
                          to={createPageUrl(sublink.page)}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-sans text-xs tracking-widest uppercase text-stone-500 py-1"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16">
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
                  <div key={link.page}>
                    <Link
                      to={createPageUrl(link.page)}
                      className="block text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                    {link.submenu && link.submenu.map((sublink) => (
                      <Link
                        key={sublink.page}
                        to={createPageUrl(sublink.page)}
                        className="block text-sm text-stone-500 hover:text-white transition-colors pl-4 mt-1"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
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
