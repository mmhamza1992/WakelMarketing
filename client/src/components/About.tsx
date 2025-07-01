import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { content } from '@/lib/content';

export default function About() {
  const { language } = useLanguage();
  const aboutContent = content[language].about;

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <img 
              src="https://pixabay.com/get/g54bb4fdc27c4f05f17c85bc3c833b5efdeef505cbc9f08498f2b2d86e073d87698b9ca953f8e354deadb0ac253dae32c08a4ee0bda69f224bee05577d4b706ca_1280.jpg" 
              alt="Middle East technology landscape" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-wakel-text mb-6">
              {aboutContent.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {aboutContent.content}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
