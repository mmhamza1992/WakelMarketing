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
    <div className="min-h-screen bg-wakel-background">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container-spacing">
          <div className="flex justify-between items-center h-20">
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
      <footer className="bg-wakel-text text-white py-16">
        <div className="container-spacing">
          <div className="text-center">
            <Logo className="mx-auto mb-6 filter brightness-0 invert" />
            <p className="text-gray-300 text-lg mb-8">{content[language].footer.tagline}</p>
            <div className="border-t border-gray-700 pt-8 mt-8">
              <p className="text-sm text-gray-400">© 2025 Wakel.io. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
