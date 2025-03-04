import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Default to Portuguese, but check localStorage on client
  const [language, setLanguage] = useState<Language>('pt');
  
  // On client side initialization, check localStorage
  React.useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language;
    if (storedLanguage && (storedLanguage === 'pt' || storedLanguage === 'en')) {
      setLanguage(storedLanguage);
    }
  }, []);

  // Update localStorage when language changes
  React.useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};