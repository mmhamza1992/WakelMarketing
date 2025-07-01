import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { content } from '@/lib/content';
import { ChevronRight, TrendingUp, Globe, Users, Zap } from 'lucide-react';
import WhitepaperDownload from './WhitepaperDownload';

export default function Hero() {
  const { language, isRTL } = useLanguage();
  const heroContent = content[language].hero;

  const metrics = [
    { 
      value: "$12B+", 
      label: language === 'en' ? 'Market Size' : 'حجم السوق',
      icon: TrendingUp
    },
    { 
      value: "24%", 
      label: language === 'en' ? 'Annual Growth' : 'نمو سنوي',
      icon: TrendingUp
    },
    { 
      value: "18", 
      label: language === 'en' ? 'Markets' : 'سوق',
      icon: Globe
    },
    { 
      value: "450M+", 
      label: language === 'en' ? 'Users' : 'مستخدم',
      icon: Users
    }
  ];

  return (
    <section className="relative bg-[#F5F5F5] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`space-y-8 ${isRTL ? 'text-right lg:order-2' : 'text-left'}`}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-inter font-bold text-[#141414] text-5xl lg:text-6xl leading-tight"
            >
              {heroContent.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-inter text-base lg:text-lg text-[#141414] max-w-xl leading-relaxed"
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact">
                <button className="bg-[#0E7DF0] hover:bg-[#0b6ace] text-white font-semibold rounded-2xl px-6 py-3 transition focus:outline-none focus:ring-2 focus:ring-[#0E7DF0] focus:ring-offset-2">
                  {heroContent.cta}
                  <ChevronRight className="inline ml-2 w-5 h-5" />
                </button>
              </a>
              
              <WhitepaperDownload>
                <button className="text-[#0E7DF0] hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-[#0E7DF0] focus:ring-offset-2 rounded px-2 py-3">
                  {language === 'en' ? 'Learn More' : 'تعرف أكثر'}
                </button>
              </WhitepaperDownload>
            </motion.div>
          </motion.div>

          {/* Visual - Empty space for metrics cards to float into */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`${isRTL ? 'lg:order-1' : ''} relative`}
          >
            {/* Abstract background visual */}
            <div className="w-full h-96 relative">
              <svg viewBox="0 0 400 400" className="w-full h-full opacity-20">
                <circle cx="200" cy="200" r="150" fill="none" stroke="#E5E7EB" strokeWidth="2"/>
                <circle cx="200" cy="200" r="100" fill="none" stroke="#E5E7EB" strokeWidth="2"/>
                <circle cx="200" cy="200" r="50" fill="none" stroke="#E5E7EB" strokeWidth="2"/>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Floating Metrics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative -mt-12 lg:-mt-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center space-y-2 hover:shadow-xl transition-shadow"
              >
                <metric.icon className="w-8 h-8 text-[#0E7DF0] stroke-[1.5]" />
                <div className="font-inter font-bold text-[#141414] text-2xl lg:text-3xl">
                  {metric.value}
                </div>
                <div className="font-inter text-sm text-[#141414] text-center">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}