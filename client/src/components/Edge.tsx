import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { content } from '@/lib/content';
import { Rocket, Target, Lightbulb } from 'lucide-react';
import WhitepaperDownload from './WhitepaperDownload';

export default function Edge() {
  const { language } = useLanguage();
  const edgeContent = content[language].edge;

  const differentiators = [
    {
      icon: Rocket,
      title: language === 'en' ? 'Speed to Market' : 'سرعة دخول السوق',
      description: language === 'en' ? 'Launch in weeks, not months with our streamlined approach' : 'انطلق خلال أسابيع وليس شهور بفضل نهجنا المبسط',
      metric: '2-4 weeks'
    },
    {
      icon: Target,
      title: language === 'en' ? 'Precision Targeting' : 'استهداف دقيق',
      description: language === 'en' ? 'Cultural nuances and local preferences integrated from day one' : 'الفروق الثقافية والتفضيلات المحلية مدمجة من اليوم الأول',
      metric: '18 markets'
    },
    {
      icon: Lightbulb,
      title: language === 'en' ? 'Innovation First' : 'الابتكار أولاً',
      description: language === 'en' ? 'Cutting-edge AI solutions tailored for emerging market dynamics' : 'حلول ذكاء اصطناعي متطورة مصممة لديناميكيات الأسواق الناشئة',
      metric: '100% custom'
    }
  ];

  return (
    <section className="section-spacing bg-wakel-secondary">
      <div className="container-spacing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-white text-wakel-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {language === 'en' ? 'Our Edge' : 'ميزتنا'}
          </div>

          <h2 className="text-headline text-wakel-text mb-6">
            {edgeContent.title}
          </h2>

          <p className="text-body-large max-w-3xl mx-auto">
            {edgeContent.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card-elevated p-8 h-full group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <div className="absolute top-4 right-4 bg-wakel-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                  {item.metric}
                </div>

                <h3 className="text-title text-wakel-text mb-4">
                  {item.title}
                </h3>

                <p className="text-body">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <h3 className="text-title text-wakel-text mb-6">
              {language === 'en' 
                ? 'Ready to Lead the MENAT AI Revolution?' 
                : 'جاهز لقيادة ثورة الذكاء الاصطناعي في المنطقة؟'
              }
            </h3>
            
            <p className="text-body mb-8 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Join visionary AI companies already expanding their reach across the Middle East, North Africa, and Turkey'
                : 'انضم إلى شركات الذكاء الاصطناعي الرائدة التي تتوسع بالفعل عبر الشرق الأوسط وشمال أفريقيا وتركيا'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                {language === 'en' ? 'Schedule Consultation' : 'احجز استشارة'}
              </a>
              <WhitepaperDownload>
                <button className="btn-secondary">
                  {language === 'en' ? 'Download Whitepaper' : 'تحميل الدراسة'}
                </button>
              </WhitepaperDownload>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}