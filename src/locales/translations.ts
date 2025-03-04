// locales/translations.ts
export const translations = {
    en: {
      title: 'CV | João Lopes Frias',
      introduction: 'Introduction:',
      aboutMe: 'About Me:',
      skills: 'Skills:',
      experience: 'Professional Experience:',
      projects: 'Personal Projects:',
      education: 'Education:',
      print: 'Print page',
      download: 'Download as PDF',
      viewSource: 'View source code on Github',
      // Add all text translations here
    },
    pt: {
      title: 'CV | João Lopes Frias',
      introduction: 'Introdução:',
      aboutMe: 'Sobre Mim:',
      skills: 'Competências:',
      experience: 'Experiência Profissional:',
      projects: 'Projetos Pessoais:',
      education: 'Educação:',
      print: 'Imprimir página',
      download: 'Download em PDF',
      viewSource: 'Ver código fonte no Github',
      // Add all text translations here
    }
  };
  
  // Helper function to get translations
  export const getTranslation = (language: 'pt' | 'en', key: keyof typeof translations.en) => {
    return translations[language][key];
  };