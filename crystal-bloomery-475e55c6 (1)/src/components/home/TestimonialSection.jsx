import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "The oracle bag I received was exactly what my soul needed. The message brought me to tears—it was so perfectly aligned with what I was going through.",
      author: "Sarah M.",
      location: "North Carolina"
    },
    {
      quote: "I gifted one to my sister during a difficult time, and she said it felt like a hug from the universe. The crystals are beautiful and the energy is palpable.",
      author: "Jennifer L.",
      location: "Virginia"
    },
    {
      quote: "Every crystal, every herb, every word in my oracle message resonated deeply. Crystal Bloomery creates magic.",
      author: "Amanda K.",
      location: "Georgia"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-stone-50 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" stroke="#10665c" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" stroke="#6b4c7a" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="22" stroke="#b76e79" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#9b6cb0] mb-4 block">
            Voices of the Community
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800">
            Blessed Connections
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-8 relative group"
            >
              {/* Border decoration */}
              <div className="absolute inset-0 border border-stone-200 group-hover:border-[#9b6cb0]/30 transition-colors duration-300" />
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#10665c]/30" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#7c4d8f]/30" />

              <Quote className="w-8 h-8 text-[#9b6cb0]/30 mb-4" />
              <p className="font-serif text-lg text-stone-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-stone-100 pt-4">
                <p className="font-sans text-sm font-medium text-stone-800">{testimonial.author}</p>
                <p className="font-sans text-xs text-stone-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}