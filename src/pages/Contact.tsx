import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Send, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully!');
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '(910) 922-1549',
      href: 'tel:+19109221549'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'crystalbloomery@gmail.com',
      href: 'mailto:crystalbloomery@gmail.com'
    }
  ];

  return (
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
            Connect With Us
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-6">
            Get in Touch
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9b6cb0] to-transparent mx-auto mb-8" />
          <p className="font-sans text-stone-600 max-w-xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have questions about our Oracle Bags 
            or simply want to connect, reach out and let's start a conversation.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-8">Contact Information</h2>
            
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e8f5f2] to-[#f3eef5] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-5 h-5 text-[#10665c]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-widest uppercase text-stone-400 mb-1">
                      {info.label}
                    </p>
                    <p className="font-serif text-lg text-stone-800 group-hover:text-[#10665c] transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="relative p-6 sm:p-8 bg-gradient-to-br from-[#e8f5f2] to-[#f3eef5]">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#10665c]/20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#b76e79]/20" />
              
              <p className="font-serif text-lg sm:text-xl text-stone-700 italic leading-relaxed">
                "Each interaction is sacred. We honor your questions and curiosities 
                with the same intention we pour into every Oracle Bag."
              </p>
              <div className="mt-4 w-16 h-px bg-[#9b6cb0]/40" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-white border border-stone-200">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e8f5f2] to-[#f3eef5] flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-[#10665c]" />
                </div>
                <h3 className="font-serif text-2xl text-stone-800 mb-4">Message Sent</h3>
                <p className="font-sans text-stone-500">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2 block">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-stone-200 rounded-none focus:border-[#10665c] focus:ring-0 py-6"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-stone-200 rounded-none focus:border-[#10665c] focus:ring-0 py-6"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2 block">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="border-stone-200 rounded-none focus:border-[#10665c] focus:ring-0 py-6"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2 block">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-stone-200 rounded-none focus:border-[#10665c] focus:ring-0 resize-none"
                    placeholder="Share your thoughts with us..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-stone-900 hover:bg-stone-800 text-white font-sans text-xs tracking-widest uppercase py-6 rounded-none transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Sacred Geometry Decoration */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-24">
        <div className="flex justify-center opacity-10">
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none">
            <polygon points="50,5 95,50 50,95 5,50" stroke="#10665c" strokeWidth="0.5" />
            <polygon points="50,20 80,50 50,80 20,50" stroke="#7c4d8f" strokeWidth="0.4" />
            <polygon points="50,35 65,50 50,65 35,50" stroke="#b695c8" strokeWidth="0.3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
