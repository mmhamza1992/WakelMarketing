import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { content } from '@/lib/content';
import { Check } from 'lucide-react';

export default function WhyMenat() {
  const { language } = useLanguage();
  const whyMenatContent = content[language].whyMenat;

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-wakel-text mb-8">
              {whyMenatContent.title}
            </h2>
            <div className="space-y-6">
              {whyMenatContent.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 rtl:space-x-reverse"
                >
                  <div className="w-6 h-6 bg-wakel-primary rounded-full flex items-center justify-center mt-1">
                    <Check className="text-white" size={16} />
                  </div>
                  <p className="text-lg text-gray-600">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="AI technology innovation" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
