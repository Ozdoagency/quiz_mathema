import React, { useEffect, useState } from 'react';
import Quiz from './components/Quiz';
import { QuizSidebar } from './components/QuizSidebar';
import { LanguageSelector } from './components/LanguageSelector';
import { ThemeToggle } from './components/ThemeToggle';
import { ArrowRight, Gift, Shield, Clock, Sparkles } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';
import { useTheme } from './context/ThemeContext'; // Импортируем useTheme
import { translations } from './translations';
import { getCountryByIP, countries } from './data/countries';
import { Country } from './types/quiz';


export default function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    async function fetchCountry() {
      const detectedCountry = await getCountryByIP();
      setCountry(detectedCountry);
    }
    fetchCountry();
  }, []);

  const { language } = useLanguage();
  const { theme } = useTheme(); // Получаем текущую тему
  const t = translations[language];

  if (isQuizStarted) {
    return (
      <div className={`min-h-screen bolt-background p-4 relative grid-background ${theme === 'light' ? 'light' : ''}`}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-4 lg:gap-6">
          <div className="hidden lg:block">
            <QuizSidebar />
          </div>
          <Quiz />
        </div>
        
        <div className="lg:hidden fixed bottom-0 left-0 right-0 text-center py-3 bg-background/80 backdrop-blur-sm border-t border-white/10">
          <span className="text-primary font-semibold">{t.header.madeIn} </span>
          <span className="font-bold text-foreground">QuizDo</span>
        </div>
        
        <div className="lg:hidden h-16"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bolt-background relative overflow-hidden grid-background ${theme === 'light' ? 'light' : ''}`}>
      {/* Header */}
      <div className="w-full border-b border-white/10 bg-background/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-center">
            <span className="text-primary font-semibold">{t.header.madeIn} </span>
            <span className="font-bold text-foreground">QuizDo</span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          {country && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-light-blue backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-6 border border-white/10">
              <span>{country.name}</span>
            </div>
          )}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-light-blue backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-6 border border-white/10">
            <Sparkles className="w-4 h-4" />
            {t.hero.specialOffer}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {t.hero.subtitle}
          </p>

          <button
            onClick={() => setIsQuizStarted(true)}
            className="bolt-button group dark:text-white"
          >
            <span className="relative z-10 flex items-center gap-2 text-lg">
              {t.cta}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bolt-card group">
            <div className="bolt-glow" />
            <div className="flex items-start gap-4">
              <div className="fixed-width w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 backdrop-blur-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-6 h-6 text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {t.features.quickCalculation.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.features.quickCalculation.description}
                </p>
              </div>
            </div>
          </div>

          <div className="bolt-card group">
            <div className="bolt-glow" />
            <div className="flex items-start gap-4">
              <div className="fixed-width w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 backdrop-blur-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gift w-6 h-6 text-primary">
                  <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                  <path d="M12 8v13"></path>
                  <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                  <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {t.features.yourBonuses.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.features.yourBonuses.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              {t.security}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}