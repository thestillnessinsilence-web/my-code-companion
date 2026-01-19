import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Wholesale from "./pages/Wholesale";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import MoonWater from "./pages/blog/MoonWater";
import CrystalHealing from "./pages/blog/CrystalHealing";
import SacredHerbGuide from "./pages/blog/SacredHerbGuide";
import MeditationSpace from "./pages/blog/MeditationSpace";
import TeaCeremonies from "./pages/blog/TeaCeremonies";
import CrystalEnergy from "./pages/blog/CrystalEnergy";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
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
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
