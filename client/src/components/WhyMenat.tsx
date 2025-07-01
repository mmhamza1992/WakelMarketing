import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { content } from '@/lib/content';
import { TrendingUp, Users, Shield } from 'lucide-react';

export default function WhyMenat() {
  const { language } = useLanguage();
  const whyMenatContent = content[language].whyMenat;
  
  const icons = [Users, TrendingUp, Shield];

  return (
    <section className="bg-gray-50 section-spacing">
      <div className="container-spacing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-section-title text-wakel-text mb-6">
            {whyMenatContent.title}
          </h2>
          <p className="text-large text-gray-600 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'The MENAT region represents one of the fastest-growing AI markets globally'
              : 'تمثل منطقة الشرق الأوسط وشمال أفريقيا واحدة من أسرع الأسواق نمواً للذكاء الاصطناعي عالمياً'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {whyMenatContent.points.map((point, index) => {
            const IconComponent = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-wakel-primary to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-white" size={32} />
                </div>
                <p className="text-xl text-gray-700 font-semibold leading-relaxed">
                  {point}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-wakel-primary to-blue-600 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">
            {language === 'en' 
              ? 'Market Opportunity' 
              : 'فرصة السوق'
            }
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">$12B+</div>
              <div className="text-blue-100">
                {language === 'en' ? 'AI Market Value' : 'قيمة سوق الذكاء الاصطناعي'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">450M</div>
              <div className="text-blue-100">
                {language === 'en' ? 'Population' : 'السكان'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">70%</div>
              <div className="text-blue-100">
                {language === 'en' ? 'Youth Demographics' : 'الشباب'}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
