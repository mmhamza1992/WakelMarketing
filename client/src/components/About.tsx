import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { content } from '@/lib/content';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();
  const aboutContent = content[language].about;

  const achievements = [
    language === 'en' ? 'Gulf-based expertise in MENAT markets' : 'خبرة خليجية في أسواق المنطقة',
    language === 'en' ? 'End-to-end market entry solutions' : 'حلول شاملة لدخول السوق',
    language === 'en' ? 'Native cultural and regulatory understanding' : 'فهم محلي للثقافة واللوائح'
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-wakel-secondary text-wakel-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {language === 'en' ? 'About Wakel.io' : 'حول وكيل'}
            </div>

            <h2 className="text-headline text-wakel-text mb-6">
              {aboutContent.title}
            </h2>

            <p className="text-body-large mb-8">
              {aboutContent.content}
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <CheckCircle className="w-6 h-6 text-wakel-primary flex-shrink-0" />
                  <span className="text-body text-wakel-text">{achievement}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-wakel-secondary rounded-xl">
                <div className="text-2xl font-bold text-wakel-primary">2-4 weeks</div>
                <div className="text-sm text-wakel-muted">
                  {language === 'en' ? 'Time to market' : 'وقت دخول السوق'}
                </div>
              </div>
              <div className="text-center p-4 bg-wakel-secondary rounded-xl">
                <div className="text-2xl font-bold text-wakel-primary">100%</div>
                <div className="text-sm text-wakel-muted">
                  {language === 'en' ? 'Compliance rate' : 'معدل الامتثال'}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card-elevated p-8">
              <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">MENAT Region</h3>
                <p className="text-blue-100">AI Market Leadership</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-wakel-secondary p-4 rounded-xl text-center">
                  <div className="text-xl font-bold text-wakel-primary">$12B+</div>
                  <div className="text-xs text-wakel-muted">Market Size</div>
                </div>
                <div className="bg-wakel-secondary p-4 rounded-xl text-center">
                  <div className="text-xl font-bold text-wakel-primary">70%</div>
                  <div className="text-xs text-wakel-muted">Youth Demo</div>
                </div>
                <div className="bg-wakel-secondary p-4 rounded-xl text-center">
                  <div className="text-xl font-bold text-wakel-primary">24%</div>
                  <div className="text-xs text-wakel-muted">YoY Growth</div>
                </div>
                <div className="bg-wakel-secondary p-4 rounded-xl text-center">
                  <div className="text-xl font-bold text-wakel-primary">450M</div>
                  <div className="text-xs text-wakel-muted">Population</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}