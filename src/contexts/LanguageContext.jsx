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
    about: {
      title: 'Sobre Mim',
      text: 'Sou artista digital e ilustrador, apaixonado por dar vida a personagens e mundos através da arte. Cada ilustração é uma história contada com cores, formas e emoção — do concept art à peça final, meu objetivo é criar imagens que conectam e inspiram.',
    },
    characters: [
      {
        title: 'Guerreiro Sombrio',
        desc: 'Uma alma forjada nas trevas, este guerreiro carrega o peso de batalhas incontáveis. Sua determinação é inabalável e sua presença inspira temor.',
      },
      {
        title: 'Mago Arcano',
        desc: 'Domina as artes arcanas com maestria incomparável. Cada gesto tece feitiços ancestrais que distorcem a própria realidade ao seu redor.',
      },
      {
        title: 'Lâmina Noturna',
        desc: 'Silenciosa como a noite, letal como a aurora. Move-se entre as sombras com graça mortal, deixando apenas ecos de sua passagem.',
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
    about: {
      title: 'About Me',
      text: "I'm a digital artist and illustrator, passionate about bringing characters and worlds to life through art. Each illustration is a story told with colors, shapes, and emotion — from concept art to the final piece, my goal is to create images that connect and inspire.",
    },
    characters: [
      {
        title: 'Dark Warrior',
        desc: 'A soul forged in darkness, this warrior carries the weight of countless battles. Their determination is unwavering and their presence inspires dread.',
      },
      {
        title: 'Arcane Mage',
        desc: 'Masters the arcane arts with unparalleled skill. Each gesture weaves ancestral spells that distort reality itself.',
      },
      {
        title: 'Night Blade',
        desc: 'Silent as the night, lethal as the dawn. Moves through the shadows with deadly grace, leaving only echoes of their passage.',
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
