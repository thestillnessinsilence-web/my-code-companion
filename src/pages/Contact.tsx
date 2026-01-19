import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#7c4d8f] mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">
            Contact Us
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9b6cb0] to-transparent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-serif text-2xl text-stone-800 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block font-sans text-sm text-stone-600 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:border-[#9b6cb0] transition-colors"
                />
              </div>
              <div>
                <label className="block font-sans text-sm text-stone-600 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:border-[#9b6cb0] transition-colors"
                />
              </div>
              <div>
                <label className="block font-sans text-sm text-stone-600 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:border-[#9b6cb0] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#9b6cb0] to-[#7c4d8f] text-white py-3 font-sans text-sm tracking-widest uppercase rounded-lg hover:shadow-lg transition-shadow"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-[#9b6cb0]" />
                <h3 className="font-serif text-xl text-stone-800">Email</h3>
              </div>
              <p className="font-sans text-stone-600">crystalbloomery@gmail.com</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-6 h-6 text-[#9b6cb0]" />
                <h3 className="font-serif text-xl text-stone-800">Location</h3>
              </div>
              <p className="font-sans text-stone-600">Appalachian Mountains, USA</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
