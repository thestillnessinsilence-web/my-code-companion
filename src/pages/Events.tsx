import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Globe } from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { curatedItems } from '@/data/curatedItems';

export default function Events() {
  return (
    <>
      <Helmet>
        <title>Bloom Satchel Gifts and Favors | Crystal Bloomery Events</title>
        <meta name="description" content="Custom Bloom Satchel gifts for weddings, celebrations, and special events. Bulk pricing and personalized messages available for your sacred occasion." />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://crystalbloomery.com/" },
        { name: "Events", url: "https://crystalbloomery.com/events" }
      ]} />
      <div className="min-h-screen bg-stone-50 pt-32 pb-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#7c4d8f] mb-4 block">
            Special Occasions
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-6">
            Events
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9b6cb0] to-transparent mx-auto mb-8" />
          <p className="font-sans text-stone-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Celebrate life's sacred moments with custom Bloom Satchel gifts for weddings and other special events.
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-[#e8f5f2] to-[#f3eef5] p-8 sm:p-12 rounded-lg mb-12">
            <div className="max-w-3xl mx-auto">
              <p className="font-serif text-xl sm:text-2xl text-stone-800 leading-relaxed mb-8 text-center italic">
                "Transform your special day into a moment of shared intention and blessing."
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e8f5f2] to-[#f3eef5] flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-[#10665c]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-stone-800 mb-3">Bulk & Custom Orders</h3>
                      <p className="font-sans text-stone-600 leading-relaxed">
                        We offer bulk pricing for weddings, celebrations, and corporate events. Each satchel can be customized 
                        to honor the unique spirit of your occasion while maintaining the sacred intention of Appalachian wisdom.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e8f5f2] to-[#f3eef5] flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-[#10665c]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-stone-800 mb-3">Personalized Messages</h3>
                      <p className="font-sans text-stone-600 leading-relaxed">
                        Messages can be custom written in the theme of your event—whether you envision Old English script 
                        for a traditional wedding, multilingual blessings to honor diverse heritage, or culturally-based wisdom 
                        that speaks to your community. Each message retains the depth and beauty of a sacred offering from 
                        the Appalachian mountains, adapted to resonate with your celebration's unique essence.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e8f5f2] to-[#f3eef5] flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-[#10665c]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-stone-800 mb-3">Perfect For</h3>
                      <ul className="font-sans text-stone-600 leading-relaxed space-y-2">
                        <li>• Weddings & Anniversaries</li>
                        <li>• Baby Showers & Birth Celebrations</li>
                        <li>• Corporate Retreats & Team Events</li>
                        <li>• Memorial Services & Celebrations of Life</li>
                        <li>• Spiritual Gatherings & Ceremonies</li>
                        <li>• Charity Events</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Bespoke Oracle Satchel Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2">The Bespoke Bloom Satchel</h2>
              <p className="font-sans text-sm tracking-wide text-[#7c4d8f] uppercase">
                A Custom Meaningful Favor for Weddings & Private Events
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-lg border border-stone-200 mb-8">
              <p className="font-sans text-stone-600 leading-relaxed text-center max-w-3xl mx-auto mb-8">
                Move beyond the ordinary. Our signature velvet Bloom Satchel is a thoughtfully crafted, fully customizable 
                meaningful favor designed to hold the unique energy of your gathering. Whether celebrating a wedding, hosting 
                a private retreat, or marking an important milestone, each Bloom Satchel is curated with intention to reflect 
                your vision and the spirit of the moment.
              </p>
              <p className="font-serif text-lg text-stone-700 text-center italic">
                Every element is selected to create a lasting keepsake—one your guests will feel, treasure, and remember.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-[#f3eef5] to-white p-6 rounded-lg border border-[#b695c8]/20">
                <h3 className="font-serif text-xl text-stone-800 mb-4">The Contents</h3>
                <p className="font-sans text-stone-600 leading-relaxed">
                  Let us create a special tea blend for your event, paired with hand-selected crystals, or elevate the experience 
                  with fine or curated artisan jewelry, chosen for beauty, symbolism, and craftsmanship. Each selection 
                  is thoughtfully aligned with the tone, meaning, and intention of your event.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#e8f5f2] to-white p-6 rounded-lg border border-[#10665c]/20">
                <h3 className="font-serif text-xl text-stone-800 mb-4">The Art</h3>
                <p className="font-sans text-stone-600 leading-relaxed">
                  Complete your Oracle Bags with custom watercolor artwork, created exclusively for your celebration. 
                  Artwork is painted to reflect your color palette, theme, or seasonal inspiration, ensuring each piece 
                  feels personal and one-of-a-kind.
                </p>
              </div>
            </div>

            <p className="font-sans text-stone-600 leading-relaxed text-center max-w-3xl mx-auto">
              From simple, elegant herbal sachets to luxurious jewelry keepsakes, we collaborate with you to create 
              meaningful favors that feel intentional, beautiful, and unforgettable—designed to honor both the occasion 
              and the people you share it with. In keeping true with our mission, our focus is on delivering a special 
              message of love, peace, and happiness in each Bloom Satchel.
            </p>
          </motion.div>

          {/* Curated Items Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-4">Examples of Custom Curations</h2>
              <p className="font-sans text-stone-600 max-w-2xl mx-auto">
                A glimpse at the unique additions we can include in your bespoke Bloom Satchel.
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {curatedItems.map((item, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                    <div className="p-1">
                      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-stone-200 group">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.alt || item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6 text-center">
                          <h3 className="font-serif text-lg text-stone-800 mb-2">{item.title}</h3>
                          <p className="font-sans text-sm text-stone-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-12 border-stone-200 hover:bg-stone-100" />
              <CarouselNext className="hidden sm:flex -right-12 border-stone-200 hover:bg-stone-100" />
            </Carousel>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center bg-white p-8 sm:p-12 rounded-lg shadow-sm border border-stone-200"
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-4">Let's Create Something Beautiful</h2>
            <p className="font-sans text-stone-600 mb-6 max-w-2xl mx-auto">
              Every event is unique, and we'd love to help craft a Bloom Satchel that perfectly honors your special occasion. 
              Reach out to discuss your vision, customization options, and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:crystalbloomery@gmail.com"
                className="font-sans text-sm text-[#10665c] hover:text-[#0d534a] transition-colors underline"
              >
                crystalbloomery@gmail.com
              </a>
              <span className="hidden sm:inline text-stone-400">•</span>
              <a
                href="tel:9109221549"
                className="font-sans text-sm text-[#10665c] hover:text-[#0d534a] transition-colors underline"
              >
                Text or call (910) 922-1549 to get started
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Sacred Geometry Decoration */}
        <div className="flex justify-center opacity-10 mt-20">
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" stroke="#10665c" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="35" stroke="#7c4d8f" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="22" stroke="#b695c8" strokeWidth="0.3" />
            <polygon points="50,5 95,50 50,95 5,50" stroke="#10665c" strokeWidth="0.3" />
            <polygon points="50,20 80,50 50,80 20,50" stroke="#9b6cb0" strokeWidth="0.3" />
          </svg>
        </div>
      </div>
    </div>
    </>
  );
}
