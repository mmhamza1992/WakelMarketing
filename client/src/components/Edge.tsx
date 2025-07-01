import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { content } from '@/lib/content';
import { Zap, Heart, Network } from 'lucide-react';

export default function Edge() {
  const { language } = useLanguage();
  const edgeContent = content[language].edge;
  
  const icons = [Zap, Heart, Network];

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
            {edgeContent.title}
          </h2>
          <p className="text-large text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {edgeContent.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {edgeContent.items.map((item, index) => {
            const IconComponent = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-50 rounded-3xl p-8 h-full hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-wakel-primary to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-wakel-text mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.description}
                  </p>
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
          className="text-center"
        >
          <div className="bg-gray-50 rounded-3xl p-12 border border-gray-100">
            <h3 className="text-3xl font-bold text-wakel-text mb-6">
              {language === 'en' 
                ? 'From Weeks to Pilots' 
                : 'من أسابيع إلى مشاريع تجريبية'
              }
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Our proven methodology transforms complex market entry into streamlined partnerships, delivering measurable results in record time.'
                : 'منهجيتنا المُثبتة تحول دخول السوق المعقد إلى شراكات مبسطة، مما يحقق نتائج قابلة للقياس في وقت قياسي.'
              }
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-wakel-primary mb-2">2-4</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Weeks to Partnership' : 'أسابيع للشراكة'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-wakel-primary mb-2">18</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Markets Accessible' : 'أسواق متاحة'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-wakel-primary mb-2">100+</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Local Partners' : 'شركاء محليون'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-wakel-primary mb-2">24/7</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Regional Support' : 'دعم إقليمي'}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
