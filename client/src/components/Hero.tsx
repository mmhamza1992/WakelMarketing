import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { content } from '@/lib/content';
import { ArrowRight, Globe, Users, Zap } from 'lucide-react';
import WhitepaperDownload from './WhitepaperDownload';

export default function Hero() {
  const { language, isRTL } = useLanguage();
  const heroContent = content[language].hero;

  const stats = [
    { icon: Globe, value: '18', label: language === 'en' ? 'Markets' : 'أسواق' },
    { icon: Users, value: '450M+', label: language === 'en' ? 'Population' : 'سكان' },
    { icon: Zap, value: '$12B+', label: language === 'en' ? 'AI Market' : 'سوق الذكاء الاصطناعي' }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-wakel-surface">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-wakel-primary via-transparent to-wakel-accent"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-wakel-primary rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-wakel-accent rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="container-spacing relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${isRTL ? 'lg:order-2' : ''}`}
          >
            

            <h1 className="text-display text-wakel-text mb-6">
              {language === 'en' ? (
                <>
                  Your Gateway to the{' '}
                  <span className="text-wakel-primary">MENAT AI Market</span>
                </>
              ) : (
                heroContent.title
              )}
            </h1>

            <p className="text-body-large mb-8 max-w-xl">
              {heroContent.subtitle}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a href="#contact" className="btn-primary inline-flex items-center justify-center">
                {language === 'en' ? 'Get Started' : 'ابدأ الآن'}
                <ArrowRight className={`w-5 h-5 ml-2 ${isRTL ? 'rotate-180 mr-2 ml-0' : ''}`} />
              </a>
              <WhitepaperDownload>
                <button className="btn-secondary">
                  {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
                </button>
              </WhitepaperDownload>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-wakel-secondary rounded-xl flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-wakel-primary" />
                  </div>
                  <div className="text-2xl font-bold text-wakel-text">{stat.value}</div>
                  <div className="text-sm text-wakel-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`${isRTL ? 'lg:order-1' : ''}`}
          >
            <div className="relative max-w-md mx-auto">
              {/* Main Visual */}
              <div className="relative bg-white p-6 rounded-3xl shadow-2xl overflow-hidden border border-wakel-secondary/20">
                {/* Header with logo and status */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-wakel-text">Wakel.io</div>
                      <div className="text-xs text-wakel-primary font-medium">AI Gateway Platform</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 bg-green-50 px-2 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-700 font-medium">Active</span>
                  </div>
                </div>

                {/* MENAT Region Map Visualization */}
                <div className="mb-6">
                  <div className="text-sm font-medium text-wakel-text mb-3">MENAT Region Coverage</div>
                  <div className="relative h-24 bg-gradient-to-r from-wakel-secondary via-wakel-secondary/50 to-wakel-secondary rounded-xl p-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-wakel-primary/10 via-wakel-accent/10 to-wakel-primary/10 rounded-xl"></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                      <div className="grid grid-cols-6 gap-2 opacity-80">
                        {Array.from({ length: 18 }, (_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05, duration: 0.2 }}
                            className="w-3 h-3 bg-wakel-primary rounded-full shadow-sm"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-4 text-xs text-wakel-muted">
                      18 Markets • 450M+ Users
                    </div>
                  </div>
                </div>
                
                {/* Market Statistics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-wakel-primary to-wakel-accent p-4 rounded-xl text-center text-white shadow-lg">
                    <div className="text-xl font-bold">$12B+</div>
                    <div className="text-xs opacity-90">Market Size</div>
                  </div>
                  <div className="bg-gradient-to-br from-wakel-accent to-wakel-primary p-4 rounded-xl text-center text-white shadow-lg">
                    <div className="text-xl font-bold">24%</div>
                    <div className="text-xs opacity-90">Annual Growth</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements with better visibility */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-wakel-accent text-white p-3 rounded-xl shadow-xl border-2 border-white"
              >
                <Users className="w-5 h-5" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-wakel-primary text-white p-3 rounded-xl shadow-xl border-2 border-white"
              >
                <Globe className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}