import { ArrowRight, Calendar, Clock, Search, Tag } from "lucide-react";
import Link from "next/link";

import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata = {
    title: "Blog | Franclean - Laundry Tips & Insights",
    description: "Discover expert laundry tips, fabric care guides, and industry insights from Franclean professionals."
  }

const Blog = () => {

  const featuredPost = {
    id: 1,
    title: "The Ultimate Guide to Caring for Delicate Fabrics",
    excerpt: "Learn professional techniques for maintaining silk, cashmere, and other luxury fabrics. Discover how proper care can extend the life of your favorite garments by years.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Fabric Care",
    author: "Sarah Mitchell",
    date: "Jan 5, 2026",
    readTime: "8 min read",
  };

  const posts = [
    {
      id: 2,
      title: "5 Common Laundry Mistakes That Ruin Your Clothes",
      excerpt: "Avoid these costly errors that most people make when doing laundry at home.",
      image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=400&q=80",
      category: "Tips & Tricks",
      author: "James Chen",
      date: "Jan 3, 2026",
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "Eco-Friendly Laundry: A Complete Guide",
      excerpt: "How to reduce your environmental footprint while keeping clothes fresh and clean.",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&q=80",
      category: "Sustainability",
      author: "Emma Green",
      date: "Dec 28, 2025",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Professional Stain Removal Secrets Revealed",
      excerpt: "Industry secrets for removing the toughest stains from any fabric type.",
      image: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=400&q=80",
      category: "Expert Tips",
      author: "Michael Ross",
      date: "Dec 22, 2025",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "How to Organize Your Wardrobe Like a Pro",
      excerpt: "Maximize closet space and keep your clothes in perfect condition with these organization tips.",
      image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=400&q=80",
      category: "Organization",
      author: "Lisa Park",
      date: "Dec 18, 2025",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "The Science Behind Fresh-Smelling Laundry",
      excerpt: "Understanding fabric freshness and how professional services achieve that just-cleaned scent.",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=80",
      category: "Science",
      author: "Dr. Amy Walsh",
      date: "Dec 15, 2025",
      readTime: "6 min read",
    },
  ];

  const categories = [
    { name: "All Posts", count: 24 },
    { name: "Fabric Care", count: 8 },
    { name: "Tips & Tricks", count: 6 },
    { name: "Sustainability", count: 4 },
    { name: "Expert Tips", count: 3 },
    { name: "Organization", count: 3 },
  ];

  return (
    <>
      <main className="">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#8be4fb] via-[#e9f9ff] to-[#ffffff] pt-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Fresh Ideas & <span className="text-gradient">Expert Tips</span>
              </h1>
              <p className="text-lg text-gray-600">
                Stay updated with the latest laundry tips, fabric care guides, and industry insights from our team of professionals.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent shadow-card transition-shadow"
                />
              </div>
            </div>

            {/* Featured Post */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-sky-500 text-white text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 hover:text-sky-500 transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-sky-500 font-semibold hover:text-sky-600 transition-colors group">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <aside className="lg:col-span-1 order-2 lg:order-1">
                <div className="sticky top-28">
                  {/* Categories */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5 text-sky-500" />
                      Categories
                    </h3>
                    <ul className="space-y-2">
                      {categories.map((category, index) => (
                        <li key={index}>
                          <button className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-gray-600 hover:bg-white hover:text-sky-500 transition-colors">
                            <span>{category.name}</span>
                            <span className="text-sm text-gray-400">{category.count}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Newsletter CTA */}
                  <div className="bg-gradient-to-br from-sky-500 to-teal-500 rounded-2xl p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">Get Fresh Tips</h3>
                    <p className="text-sky-100 text-sm mb-4">
                      Subscribe to our newsletter for weekly laundry tips and exclusive offers.
                    </p>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2.5 rounded-lg bg-white/20 backdrop-blur text-white placeholder-sky-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 mb-3"
                    />
                    <button className="w-full py-2.5 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </aside>

              {/* Posts Grid */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
                  <select className="px-4 py-2 bg-gray-50 rounded-lg border-0 text-gray-600 focus:ring-2 focus:ring-sky-500">
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                    <option>Oldest First</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {posts.map((post, index) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-sky-200 hover:shadow-card-hover transition-all duration-300 group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 bg-white/90 backdrop-blur text-gray-700 text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-sky-500 transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                  <button className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors">
                    Load More Articles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <WhatsAppButton />
      </main>

    </>
  );
};

export default Blog;
