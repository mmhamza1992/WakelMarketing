import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { content } from '@/lib/content';
import { MapPin, Users, Building2 } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();
  const aboutContent = content[language].about;

  const stats = [
    {
      icon: MapPin,
      value: '18',
      label: language === 'en' ? 'Countries' : 'دول',
      description: language === 'en' ? 'Arabic markets covered' : 'أسواق عربية مغطاة'
    },
    {
      icon: Users,
      value: '100M+',
      label: language === 'en' ? 'Users' : 'مستخدم',
      description: language === 'en' ? 'Arabic internet population' : 'مستخدمو الإنترنت العرب'
    },
    {
      icon: Building2,
      value: '100+',
      label: language === 'en' ? 'Partners' : 'شريك',
      description: language === 'en' ? 'Trusted integration partners' : 'شركاء تكامل موثوقون'
    }
  ];

  return (
    <section className="bg-gray-50 section-spacing">
      <div className="container-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <h2 className="text-section-title text-wakel-text mb-8">
              {aboutContent.title}
            </h2>
            <p className="text-large text-gray-600 leading-relaxed mb-12">
              {aboutContent.content}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-wakel-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div className="text-3xl font-bold text-wakel-text mb-2">{stat.value}</div>
                    <div className="text-sm font-semibold text-wakel-primary uppercase tracking-wide mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-wakel-primary/10 to-blue-500/10 rounded-3xl"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-wakel-text mb-2">
                      {language === 'en' ? 'Gulf-Based Expertise' : 'خبرة خليجية'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? 'Strategic location for MENAT market access' 
                        : 'موقع استراتيجي للوصول إلى أسواق المنطقة'
                      }
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-wakel-primary">24%</div>
                      <div className="text-sm text-gray-600">
                        {language === 'en' ? 'YoY Growth' : 'نمو سنوي'}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-green-600">18</div>
                      <div className="text-sm text-gray-600">
                        {language === 'en' ? 'Markets' : 'أسواق'}
                      </div>
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
