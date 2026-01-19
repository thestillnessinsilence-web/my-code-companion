import { motion } from 'framer-motion';

export default function Blog() {
  const posts = [
    {
      title: 'The Power of Moon Water',
      date: 'January 15, 2026',
      excerpt: 'Discover how to harness lunar energy through moon water rituals and crystal charging ceremonies.',
      image: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=800&q=80',
      category: 'Rituals'
    },
    {
      title: 'Crystal Healing for Beginners',
      date: 'January 10, 2026',
      excerpt: 'Learn the fundamentals of working with healing crystals and how to choose the right stones for your journey.',
      image: 'https://images.unsplash.com/photo-1602524206684-943a0f29d0eb?w=800&q=80',
      category: 'Crystals'
    },
    {
      title: 'Sacred Herb Guide',
      date: 'January 5, 2026',
      excerpt: 'Explore the magical properties of lavender, mugwort, white sage, and other sacred herbs in our collection.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      category: 'Herbs'
    },
    {
      title: 'Creating Your Meditation Space',
      date: 'December 28, 2025',
      excerpt: 'Tips for designing a peaceful sanctuary in your home where you can connect with your Oracle Bag.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      category: 'Meditation'
    },
    {
      title: 'The Art of Tea Ceremonies',
      date: 'December 20, 2025',
      excerpt: 'Transform your daily tea into a mindful ritual with our guide to sacred tea ceremonies.',
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80',
      category: 'Rituals'
    },
    {
      title: 'Understanding Crystal Energy',
      date: 'December 15, 2025',
      excerpt: 'Dive deep into the vibrational frequencies of amethyst, rose quartz, and other powerful healing stones.',
      image: 'https://images.unsplash.com/photo-1518047601542-79f18c655718?w=800&q=80',
      category: 'Crystals'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#7c4d8f] mb-4 block">
            Wisdom & Insights
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-stone-800 mb-6">
            The Bloomery Journal
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9b6cb0] to-transparent mx-auto mb-8" />
          <p className="font-sans text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Explore the sacred practices of crystal healing, herbalism, and mindful living through our curated collection of guides and stories.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3] bg-stone-200">
                <img
                  src={post.image}
                  alt={`${post.title} - spiritual gift bag meditation ritual crystal healing`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#10665c] text-white px-3 py-1 text-xs tracking-widest uppercase rounded-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2">
                  {post.date}
                </p>
                <h2 className="font-serif text-2xl text-stone-800 mb-3 group-hover:text-[#10665c] transition-colors">
                  {post.title}
                </h2>
                <p className="font-sans text-sm text-stone-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-[#10665c] font-sans text-sm tracking-widest uppercase group-hover:gap-3 transition-all">
                  Read More
                  <span>→</span>
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Sacred Geometry Decoration */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-24">
          <div className="flex justify-center opacity-10">
            <svg className="w-48 h-48" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48" stroke="#10665c" strokeWidth="0.3" />
              <circle cx="50" cy="50" r="35" stroke="#7c4d8f" strokeWidth="0.3" />
              <circle cx="50" cy="50" r="22" stroke="#b695c8" strokeWidth="0.3" />
              <polygon points="50,5 95,50 50,95 5,50" stroke="#10665c" strokeWidth="0.3" />
              <polygon points="50,20 80,50 50,80 20,50" stroke="#9b6cb0" strokeWidth="0.3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
