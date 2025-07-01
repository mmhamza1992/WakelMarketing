import { useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyMenat from '@/components/WhyMenat';
import Edge from '@/components/Edge';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <WhyMenat />
      <Edge />
      <ContactForm />
    </Layout>
  );
}
