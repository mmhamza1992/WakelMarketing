import { ReactNode, useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';
import { content } from '@/lib/content';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.body.className = isRTL ? 'rtl' : '';
  }, [language, isRTL]);

  return (
    <div className="min-h-screen bg-wakel-surface">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container-spacing">
          <div className="flex justify-between items-center h-28">
            <div className="flex items-center">
              <Logo />
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-wakel-text text-white section-spacing">
        <div className="container-spacing">
          <div className="text-center">
            <Logo className="mx-auto mb-8 filter brightness-0 invert h-20" />
            <p className="text-body-large text-gray-300 mb-8 max-w-2xl mx-auto">
              {content[language].footer.tagline}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {language === 'en' ? 'Services' : 'الخدمات'}
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>{language === 'en' ? 'Market Entry' : 'دخول السوق'}</li>
                  <li>{language === 'en' ? 'Localization' : 'التعريب'}</li>
                  <li>{language === 'en' ? 'Partnership' : 'الشراكة'}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {language === 'en' ? 'Markets' : 'الأسواق'}
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>{language === 'en' ? 'Middle East' : 'الشرق الأوسط'}</li>
                  <li>{language === 'en' ? 'North Africa' : 'شمال أفريقيا'}</li>
                  <li>{language === 'en' ? 'Turkey' : 'تركيا'}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {language === 'en' ? 'Contact' : 'التواصل'}
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>m@wakel.io</li>
                  <li>{language === 'en' ? 'Based in Gulf' : 'مقرنا الخليج'}</li>
                  <li>{language === 'en' ? '24/7 Support' : 'دعم 24/7'}</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <p className="text-sm text-gray-400">
                © 2025 Wakel.io. {language === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
