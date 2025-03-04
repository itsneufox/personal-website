import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <>
      <button 
        onClick={() => setLanguage('pt')} 
        style={{
          ...languageButtonStyle,
          fontWeight: language === 'pt' ? 'bold' : 'normal',
          textDecoration: language === 'pt' ? 'underline' : 'none'
        }}
      >
        🇵🇹 PT
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button 
        onClick={() => setLanguage('en')} 
        style={{
          ...languageButtonStyle,
          fontWeight: language === 'en' ? 'bold' : 'normal',
          textDecoration: language === 'en' ? 'underline' : 'none'
        }}
      >
        🇬🇧 EN
      </button>
    </>
  );
};

const languageButtonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#3173bb',
  padding: '0',
  fontFamily: 'source-sans-pro, sans-serif',
  fontSize: '1rem',
};

export default LanguageSwitcher;