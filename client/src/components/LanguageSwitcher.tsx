import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [, setLocation] = useLocation();

  const switchToEnglish = () => {
    setLanguage('en');
    setLocation('/');
  };

  const switchToArabic = () => {
    setLanguage('ar');
    setLocation('/ar');
  };

  return (
    <div className="flex items-center space-x-4 rtl:space-x-reverse">
      <div className="flex items-center space-x-3 rtl:space-x-reverse bg-gray-50 rounded-full p-1">
        <Button
          onClick={switchToEnglish}
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          className="text-sm font-medium rounded-full px-4 py-2"
        >
          EN
        </Button>
        <Button
          onClick={switchToArabic}
          variant={language === 'ar' ? 'default' : 'ghost'}
          size="sm"
          className="text-sm font-medium rounded-full px-4 py-2"
        >
          عربي
        </Button>
      </div>
    </div>
  );
}
