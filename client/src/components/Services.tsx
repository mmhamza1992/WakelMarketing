import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { content } from '@/lib/content';
import { Handshake, Languages, Network, ArrowRight } from 'lucide-react';

const icons = [Handshake, Languages, Network];

export default function Services() {
  const { language, isRTL } = useLanguage();
  const servicesContent = content[language].services;

  return (
    <section className="bg-white section-spacing">
      <div className="container-spacing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-section-title text-wakel-text mb-6">
            {servicesContent.title}
          </h2>
          <p className="text-large text-gray-600 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Comprehensive solutions for scaling AI products across Arabic markets'
              : 'حلول شاملة لتوسيع منتجات الذكاء الاصطناعي عبر الأسواق العربية'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesContent.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                viewport={{ once: true }}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-wakel-primary to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-wakel-text mb-4 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center text-wakel-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm">
                      {language === 'en' ? 'Learn more' : 'اعرف المزيد'}
                    </span>
                    <ArrowRight 
                      className={`ml-2 h-4 w-4 ${isRTL ? 'rotate-180 mr-2 ml-0' : ''}`} 
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-wakel-primary/5 to-blue-500/5 rounded-3xl p-12 border border-wakel-primary/10">
            <h3 className="text-2xl font-bold text-wakel-text mb-4">
              {language === 'en' 
                ? 'Ready to expand into MENAT markets?' 
                : 'جاهز للتوسع في أسواق المنطقة؟'
              }
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Our end-to-end solution covers everything from legal agreements to technical localization and market entry strategy.'
                : 'حلولنا الشاملة تغطي كل شيء من الاتفاقيات القانونية إلى التعريب التقني واستراتيجية دخول السوق.'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
