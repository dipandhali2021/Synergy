import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, School } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empowering Education,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Transforming Schools
            </span>
          </h1>
          <p className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto">
            Join 145,012 schools across India in our mission to standardize education
            and create better learning environments for future generations.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/analysis"
            className="inline-flex items-center px-8 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
          >
            <School className="mr-2 h-5 w-5" />
            Submit School Data
          </Link>
          <Link
            to="/schools"
            className="inline-flex items-center px-8 py-3 bg-white text-indigo-900 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            <Search className="mr-2 h-5 w-5" />
            Find Your School
          </Link>
        </div>

        {/* Quick Search */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter school name, PIN code, or UDISE code..."
              className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-indigo-200 border border-indigo-400/30 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors">
              <Search className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowRight className="h-6 w-6 text-indigo-200 rotate-90" />
        </motion.div>
      </div>
    </div>
  );
}