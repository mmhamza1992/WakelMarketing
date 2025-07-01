import { ReactNode, useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';
import LanguageSwitcher from './LanguageSwitcher';
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
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-wakel-primary">Wakel.io</div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-wakel-text text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-wakel-primary mb-4">Wakel.io</div>
            <p className="text-gray-300">{content[language].footer.tagline}</p>
            <div className="mt-6">
              <p className="text-sm text-gray-400">© 2024 Wakel.io. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
