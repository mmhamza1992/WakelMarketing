import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { content } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { language, isRTL } = useLanguage();
  const heroContent = content[language].hero;

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white section-spacing relative overflow-hidden">
      <div className="container-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 max-w-4xl"
          >
            <h1 className="text-heading text-wakel-text leading-tight mb-8">
              {language === 'en' ? (
                <>
                  Your Gateway to the{' '}
                  <span className="text-wakel-primary">MENAT AI Market</span>
                </>
              ) : (
                heroContent.title
              )}
            </h1>
            <p className="text-large text-gray-600 mb-12 leading-relaxed max-w-2xl">
              {heroContent.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="gradient-bg text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                {heroContent.cta}
                <ArrowRight 
                  className={`ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 mr-2 ml-0 group-hover:-translate-x-1' : ''}`} 
                />
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-wakel-primary/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-wakel-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">18</span>
                    </div>
                    <div>
                      <p className="font-semibold text-wakel-text">Arabic Markets</p>
                      <p className="text-gray-600 text-sm">Countries covered</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">100M+</span>
                    </div>
                    <div>
                      <p className="font-semibold text-wakel-text">Users</p>
                      <p className="text-gray-600 text-sm">Arabic internet users</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">24%</span>
                    </div>
                    <div>
                      <p className="font-semibold text-wakel-text">Growth YoY</p>
                      <p className="text-gray-600 text-sm">AI adoption budgets</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
