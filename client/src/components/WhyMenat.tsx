import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { content } from '@/lib/content';
import { TrendingUp, Shield, Users, Star } from 'lucide-react';

export default function WhyMenat() {
  const { language } = useLanguage();
  const whyMenatContent = content[language].whyMenat;

  const advantages = [
    {
      icon: TrendingUp,
      title: language === 'en' ? 'Fastest Growing Region' : 'أسرع منطقة نمواً',
      description: language === 'en' ? 'AI adoption accelerating at 24% annually' : 'تسارع اعتماد الذكاء الاصطناعي بنسبة 24% سنوياً'
    },
    {
      icon: Users,
      title: language === 'en' ? 'Young Demographics' : 'تركيبة سكانية شابة',
      description: language === 'en' ? 'Tech-savvy population under 35' : 'سكان متقنون للتكنولوجيا تحت سن 35'
    },
    {
      icon: Shield,
      title: language === 'en' ? 'Regulatory Clarity' : 'وضوح تنظيمي',
      description: language === 'en' ? 'Progressive AI governance frameworks' : 'أطر حوكمة تقدمية للذكاء الاصطناعي'
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container-spacing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-wakel-secondary text-wakel-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {language === 'en' ? 'Market Opportunity' : 'فرصة السوق'}
          </div>

          <h2 className="text-headline text-wakel-text mb-6">
            {whyMenatContent.title}
          </h2>

          <p className="text-body-large max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Strategic advantages that make MENAT the premier destination for AI expansion'
              : 'المزايا الاستراتيجية التي تجعل المنطقة الوجهة الأولى للتوسع في الذكاء الاصطناعي'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6">
                <advantage.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-title text-wakel-text mb-4">
                {advantage.title}
              </h3>
              <p className="text-body">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-primary rounded-3xl p-12 text-white text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <Star className="w-8 h-8 text-yellow-300 mr-2" />
            <h3 className="text-title">
              {language === 'en' ? 'Regional Leadership' : 'الريادة الإقليمية'}
            </h3>
            <Star className="w-8 h-8 text-yellow-300 ml-2" />
          </div>

          <p className="text-body-large mb-8 opacity-90">
            {language === 'en' 
              ? 'Position your AI product at the forefront of the next digital transformation wave'
              : 'ضع منتج الذكاء الاصطناعي الخاص بك في المقدمة لموجة التحول الرقمي القادمة'
            }
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-2xl font-bold">1st</div>
              <div className="text-sm opacity-80">
                {language === 'en' ? 'Mover Advantage' : 'ميزة الريادة'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-2xl font-bold">5x</div>
              <div className="text-sm opacity-80">
                {language === 'en' ? 'ROI Potential' : 'إمكانية العائد'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-2xl font-bold">0</div>
              <div className="text-sm opacity-80">
                {language === 'en' ? 'Market Saturation' : 'تشبع السوق'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-2xl font-bold">∞</div>
              <div className="text-sm opacity-80">
                {language === 'en' ? 'Growth Ceiling' : 'سقف النمو'}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}