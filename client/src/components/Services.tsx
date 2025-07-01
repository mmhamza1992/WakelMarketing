import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { content } from '@/lib/content';
import { FileText, Globe, Handshake } from 'lucide-react';

export default function Services() {
  const { language } = useLanguage();
  const servicesContent = content[language].services;

  const serviceIcons = [FileText, Globe, Handshake];

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-white text-[#0E7DF0] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {language === 'en' ? 'Our Services' : 'خدماتنا'}
          </div>

          <h2 className="font-inter font-bold text-[#141414] text-3xl lg:text-4xl mb-6">
            {servicesContent.title}
          </h2>

          <p className="font-inter text-base lg:text-lg text-[#141414] max-w-3xl mx-auto leading-relaxed">
            {language === 'en' 
              ? 'Three core pillars that accelerate your AI product success in MENAT markets'
              : 'ثلاث ركائز أساسية تسرع نجاح منتج الذكاء الاصطناعي في أسواق المنطقة'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesContent.items.map((service, index) => {
            const IconComponent = serviceIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-elevated p-8 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-title text-wakel-text mb-4">
                  {service.title}
                </h3>

                <p className="text-body mb-6">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-wakel-secondary">
                  <span className="text-sm font-semibold text-wakel-primary">
                    {language === 'en' ? `Step ${index + 1}` : `الخطوة ${index + 1}`}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-title text-wakel-text mb-4">
              {language === 'en' 
                ? 'Complete Market Entry Package' 
                : 'حزمة دخول السوق الكاملة'
              }
            </h3>
            <p className="text-body mb-6">
              {language === 'en' 
                ? 'From legal framework to cultural adaptation - everything you need for successful MENAT expansion'
                : 'من الإطار القانوني إلى التكيف الثقافي - كل ما تحتاجه للتوسع الناجح في المنطقة'
              }
            </p>
            <a href="#contact" className="btn-primary">
              {language === 'en' ? 'Start Your Journey' : 'ابدأ رحلتك'}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}