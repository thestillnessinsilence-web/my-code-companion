import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Phone, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function BookReading() {
  const readingOptions = [
    {
      icon: MapPin,
      title: "In-Person Reading",
      location: "Asheville, NC",
      description: "Experience a deeply personal intuitive reading in the heart of the Blue Ridge Mountains. Reading will take place at the Crystal Bloomery workshop.",
      details: [
        "Watercolor aura reading",
        "Mediumship or Tarot Reading available",
        "$60 for 30 minutes",
        "Reading notes sent to you by email"
      ]
    },
    {
      icon: Phone,
      title: "Phone Readings",
      location: "Anywhere",
      description: "Can't make it to Asheville? Connect with us from wherever you are. Phone readings offer the same intuitive guidance from the comfort of your own sacred space.",
      details: [
        "Watercolor aura reading ($5 shipping charge for original watercolor otherwise copy by email)",
        "Mediumship or Tarot Reading available",
        "$60 for 30 minutes",
        "Reading notes sent to you by email"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Book an Intuitive Reading | Crystal Bloomery</title>
        <meta name="description" content="Book an intuitive reading with Crystal Bloomery. Available in-person in Asheville, NC or via phone. Crystal guidance and oracle card readings for clarity and peace." />
        <link rel="canonical" href="https://crystalbloomery.com/book-reading" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://crystalbloomery.com/" },
        { name: "About", url: "https://crystalbloomery.com/about" },
        { name: "Book a Reading", url: "https://crystalbloomery.com/bookreading" }
      ]} />
      
      <div className="min-h-screen bg-stone-50 pt-32 pb-24">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#7c4d8f] mb-4 block">
              Intuitive Guidance
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-6">
              Book a Reading
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9b6cb0] to-transparent mx-auto mb-8" />
            <p className="font-sans text-stone-600 max-w-2xl mx-auto leading-relaxed text-lg">
              Receive personalized intuitive guidance through crystal energy and oracle wisdom. 
              Available in-person in Asheville, NC or via phone from anywhere.
            </p>
          </motion.div>
        </div>

        {/* Reading Options */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {readingOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#e8f5f2] to-[#f3eef5] flex items-center justify-center mb-6">
                  <option.icon className="w-6 h-6 text-[#10665c]" strokeWidth={1.5} />
                </div>
                <h2 className="font-serif text-2xl text-stone-800 mb-2">{option.title}</h2>
                <p className="font-sans text-sm text-[#7c4d8f] mb-4">{option.location}</p>
                <p className="font-sans text-stone-600 leading-relaxed mb-6">
                  {option.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {option.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Sparkles className="w-4 h-4 text-[#b695c8] mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-sm text-stone-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>


        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-gradient-to-br from-[#e8f5f2] to-[#f3eef5] p-8 sm:p-12 text-center">
            <Heart className="w-8 h-8 text-[#b695c8] mx-auto mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-4">
              Ready to Connect?
            </h2>
            <p className="font-sans text-stone-600 mb-8 max-w-xl mx-auto">
              Reach out to schedule your intuitive reading. We'll respond within 24-48 hours to find a time that works for you.
            </p>
            <a href="mailto:crystalbloomery@gmail.com">
              <Button className="bg-[#10665c] hover:bg-[#0d5249] text-white px-10 py-6 font-sans text-sm tracking-widest uppercase transition-all">
                Email Us to Book
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
