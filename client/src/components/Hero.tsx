import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { content } from '@/lib/content';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const { language } = useLanguage();
  const heroContent = content[language].hero;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-wakel-text leading-tight mb-6">
              {heroContent.title.split('MENAT AI Market').map((part, index) => 
                index === 0 ? (
                  <span key={index}>{part}<span className="text-wakel-primary">MENAT AI Market</span></span>
                ) : (
                  <span key={index}>{part}</span>
                )
              )}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {heroContent.subtitle}
            </p>
            <Button className="gradient-bg text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 h-auto">
              {heroContent.cta}
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional business meeting" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
