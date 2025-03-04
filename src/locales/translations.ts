// locales/translations.ts
export const translations = {
    en: {
      title: 'CV | João Lopes Frias',
      aboutMe: 'About Me:',
      skills: 'Skills:',
      experience: 'Professional Experience:',
      projects: 'Personal Projects:',
      education: 'Education:',
      print: 'Print',
      download: 'PDF',
      viewSource: 'Source code (Github)',
      // Add all text translations here
    },
    pt: {
      title: 'CV | João Lopes Frias',
      aboutMe: 'Sobre Mim:',
      skills: 'Competências:',
      experience: 'Experiência Profissional:',
      projects: 'Projetos Pessoais:',
      education: 'Educação:',
      print: 'Imprimir',
      download: 'PDF',
      viewSource: 'Código fonte (Github)',
      // Add all text translations here
    }
  };
  
  // Helper function to get translations
  export const getTranslation = (language: 'pt' | 'en', key: keyof typeof translations.en) => {
    return translations[language][key];
  };