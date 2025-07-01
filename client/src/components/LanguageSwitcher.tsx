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
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <Globe className="text-gray-400" size={16} />
      <Button
        onClick={switchToEnglish}
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        className="text-sm font-medium"
      >
        EN
      </Button>
      <div className="w-px h-4 bg-gray-300"></div>
      <Button
        onClick={switchToArabic}
        variant={language === 'ar' ? 'default' : 'ghost'}
        size="sm"
        className="text-sm font-medium"
      >
        العربية
      </Button>
    </div>
  );
}
