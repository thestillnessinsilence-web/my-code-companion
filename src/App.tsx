import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useCartSync } from "@/hooks/useCartSync";
import Layout from "@/components/layout/Layout";

// Eager load critical pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";

// Lazy load secondary pages for better initial load performance
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Cart = lazy(() => import("./pages/Cart"));
const Blog = lazy(() => import("./pages/Blog"));
const Events = lazy(() => import("./pages/Events"));
const Wholesale = lazy(() => import("./pages/Wholesale"));
const BookReading = lazy(() => import("./pages/BookReading"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

// Lazy load blog posts
const MoonWater = lazy(() => import("./pages/blog/MoonWater"));
const CrystalHealing = lazy(() => import("./pages/blog/CrystalHealing"));
const SacredHerbGuide = lazy(() => import("./pages/blog/SacredHerbGuide"));
const MeditationSpace = lazy(() => import("./pages/blog/MeditationSpace"));
const TeaCeremonies = lazy(() => import("./pages/blog/TeaCeremonies"));
const CrystalEnergy = lazy(() => import("./pages/blog/CrystalEnergy"));

const queryClient = new QueryClient();

// Minimal loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-stone-300 border-t-[#10665c] rounded-full animate-spin" />
  </div>
);

// Cart sync wrapper component
function CartSyncWrapper({ children }: { children: React.ReactNode }) {
  useCartSync();
  return <>{children}</>;
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartSyncWrapper>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Suspense fallback={<PageLoader />}>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/moon-water" element={<MoonWater />} />
                  <Route path="/blog/crystal-healing" element={<CrystalHealing />} />
                  <Route path="/blog/sacred-herb-guide" element={<SacredHerbGuide />} />
                  <Route path="/blog/meditation-space" element={<MeditationSpace />} />
                  <Route path="/blog/tea-ceremonies" element={<TeaCeremonies />} />
                  <Route path="/blog/crystal-energy" element={<CrystalEnergy />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/wholesale" element={<Wholesale />} />
                  <Route path="/bookreading" element={<BookReading />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </Layout>
          </BrowserRouter>
        </CartSyncWrapper>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
