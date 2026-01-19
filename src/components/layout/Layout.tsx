import { useState, useEffect, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, ShoppingBag } from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup';
import { useCart } from '@/context/CartContext';
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
  const location = useLocation();
  const { cartItems } = useCart();
  
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
      { name: 'Book a Reading', page: 'BookReading' },
      { name: 'Blog', page: 'Blog' },
      { name: 'Contact', page: 'Contact' }
    ]},
    { name: 'Wholesale', page: 'Wholesale', submenu: [
      { name: 'Events', page: 'Events' }
    ]},
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-stone-800 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#10665c]"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3" aria-label="Crystal Bloomery - Home">
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
                className="relative p-2 text-stone-600 hover:text-[#10665c] transition-colors"
                aria-label={`View shopping cart${cartItemCount > 0 ? `, ${cartItemCount} items` : ''}`}
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#10665c] text-white text-xs font-medium rounded-full flex items-center justify-center">
                    {cartItemCount > 99 ? '99+' : cartItemCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <Link
                to={createPageUrl('Cart')}
                className="relative p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-600"
                aria-label={`View shopping cart${cartItemCount > 0 ? `, ${cartItemCount} items` : ''}`}
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
                {cartItemCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-5 h-5 bg-[#10665c] text-white text-xs font-medium rounded-full flex items-center justify-center">
                    {cartItemCount > 99 ? '99+' : cartItemCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-stone-600 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 shadow-lg safe-area-bottom">
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.page}>
                  <Link
                    to={createPageUrl(link.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-sans text-sm tracking-widest uppercase text-stone-800 py-3 min-h-[44px] flex items-center hover:text-[#10665c] active:text-[#10665c] transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="pl-4 space-y-1 mt-1 border-l-2 border-stone-200">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.page}
                          to={createPageUrl(sublink.page)}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-sans text-xs tracking-widest uppercase text-stone-600 py-3 min-h-[44px] flex items-center hover:text-[#10665c] active:text-[#10665c] transition-colors"
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
      <main id="main-content">{children}</main>

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
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                <Link to={createPageUrl('Home')} className="text-sm hover:text-white transition-colors">Home</Link>
                <Link to={createPageUrl('Shop')} className="text-sm hover:text-white transition-colors">Shop</Link>
                <Link to={createPageUrl('About')} className="text-sm hover:text-white transition-colors">About</Link>
                <Link to={createPageUrl('Blog')} className="text-sm hover:text-white transition-colors">Blog</Link>
                <Link to={createPageUrl('Contact')} className="text-sm hover:text-white transition-colors">Contact</Link>
                <Link to={createPageUrl('Wholesale')} className="text-sm hover:text-white transition-colors">Wholesale</Link>
                <Link to={createPageUrl('Events')} className="text-sm hover:text-white transition-colors">Events</Link>
                <Link to={createPageUrl('BookReading')} className="text-sm hover:text-white transition-colors">Book a Reading</Link>
              </div>
            </div>
            <div>
              <h4 className="font-sans text-xs tracking-widest uppercase text-[#b695c8] mb-4">Connect</h4>
              <div className="space-y-3">
                <a href="mailto:crystalbloomery@gmail.com" className="block text-sm hover:text-white transition-colors">
                  crystalbloomery@gmail.com
                </a>
                <div className="flex items-center gap-4 pt-2">
                  <a 
                    href="https://www.instagram.com/crystalbloomery" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-white transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@crystalbloomery" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-white transition-colors"
                    aria-label="Follow us on TikTok"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-6 pt-6 border-t border-stone-700">
                <h4 className="font-sans text-xs tracking-widest uppercase text-[#b695c8] mb-2">Newsletter</h4>
                <NewsletterSignup />
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-60">
            <span>© {new Date().getFullYear()} Crystal Bloomery. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
