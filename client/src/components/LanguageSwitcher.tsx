import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

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
      <Button
        onClick={switchToEnglish}
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        className="flex items-center space-x-2 rtl:space-x-reverse"
      >
        <span>🇺🇸</span>
        <span>English</span>
      </Button>
      <Button
        onClick={switchToArabic}
        variant={language === 'ar' ? 'default' : 'ghost'}
        size="sm"
        className="flex items-center space-x-2 rtl:space-x-reverse"
      >
        <span>🇸🇦</span>
        <span>العربية</span>
      </Button>
    </div>
  );
}
