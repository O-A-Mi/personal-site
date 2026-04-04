import { createContext, useContext, useState, useMemo, useCallback } from 'react';

const translations = {
  'pt-BR': {
    hero: {
      greeting: 'Prazer, eu sou',
      name: 'O MI!',
    },
    gallery: {
      title: 'Obras em Destaque',
      altPrefix: 'Arte',
    },
    about: [
      {
        title: 'Sobre Mim',
        text: 'Sou artista digital e ilustrador, apaixonado por dar vida a personagens e mundos através da arte. Cada ilustração é uma história contada com cores, formas e emoção — do concept art à peça final, meu objetivo é criar imagens que conectam e inspiram.',
      },
      {
        title: 'Contato',
        text: 'Entre em contato através do email: <b>o.ou.a.mis@gmail.com</b> <br /> <a href="#social-links">ou pelas redes sociais!</a>',
      }
    ],
    characters: [
      {
        title: 'Criação de Personagens',
        desc: 'Realizo criação de personagens originais para jogos, animações, livros, TTRPGs e projetos pessoais. Os desenhos iniciais são feitos digitalmente, com rascunhos e estudos de cores para garantir que o personagem seja único e memorável.',
      },
      {
        title: 'Rascunho a Renderização',
        desc: 'Transformo ideias em arte final, desde o rascunho inicial até a renderização final. Com atenção aos detalhes e foco em cores vibrantes, crio artes que buscam causar sentimentos positivos e inspirar pessoas.',
      },
      {
        title: 'Idealização e Worldbuilding',
        desc: 'Desenvolvo conceitos visuais e narrativas para personagens, cenários e histórias. Meu processo inclui pesquisa, criação de moodboards, rascunhos e refinamento até a arte final, garantindo que cada elemento contribua para um universo coeso e envolvente.',
      },
    ],
    footer: {
      tagline: 'Arte Digital & Ilustração',
      copyright: 'Todos os direitos reservados.',
      subtitle: 'Portfólio Digital — Arte, design e criação.',
      socialAriaLabel: 'Links sociais',
    },
  },
  'en-US': {
    hero: {
      greeting: "Nice to meet you, I'm",
      name: 'O MI!',
    },
    gallery: {
      title: 'Featured Artworks',
      altPrefix: 'Art',
    },
    about: [
      {
        title: 'About Me',
        text: "I'm a digital artist and illustrator, passionate about bringing characters and worlds to life through art. Each illustration is a story told with colors, shapes, and emotion — from concept art to the final piece, my goal is to create images that connect and inspire.",
      },
      {
        title: 'Contact',
        text: 'Contact me through email: <b>o.ou.a.mis@gmail.com</b> <br /> <a href="#social-links">or through social media!</a>',
      }
    ],
    characters: [
      {
        title: 'Character Creation',
        desc: 'I create original characters for games, animations, books, TTRPGs, and personal projects. Initial designs are done digitally, with sketches and color studies to ensure each character is unique and memorable.',
      },
      {
        title: 'Sketch to Render',
        desc: 'I transform ideas into final art, from the initial sketch to the final render. With attention to detail and a focus on vibrant colors, I create art that aims to evoke positive feelings and inspire people.',
      },
      {
        title: 'Conceptualization and Worldbuilding',
        desc: 'I develop visual concepts and narratives for characters, settings, and stories. My process includes research, moodboard creation, sketching, and refinement through to the final artwork, ensuring every element contributes to a cohesive and engaging universe.',
      },
    ],
    footer: {
      tagline: 'Digital Art & Illustration',
      copyright: 'All rights reserved.',
      subtitle: 'Digital Portfolio — Art, design and creation.',
      socialAriaLabel: 'Social links',
    },
  },
};

function detectLanguage() {
  const browserLang = navigator.language || navigator.userLanguage || 'en-US';
  return browserLang.startsWith('pt') ? 'pt-BR' : 'en-US';
}

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(detectLanguage);

  const t = useMemo(() => translations[language], [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'pt-BR' ? 'en-US' : 'pt-BR'));
  }, []);

  const value = useMemo(
    () => ({ language, t, toggleLanguage }),
    [language, t, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
