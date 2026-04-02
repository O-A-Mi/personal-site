# 🎨 O MI — Portfólio Digital

Portfólio pessoal do artista digital **O MI**, construído com React + Vite. Apresenta ilustrações e artes digitais em um site imersivo com scroll-driven animations e design "liquid glass" em dark mode.

## ✨ Features

- **Internacionalização automática** — Detecta o idioma do navegador e alterna entre pt-BR e en-US  
- **Scroll-driven animations** — Parallax, fade-in e motion effects via Framer Motion  
- **Smooth scrolling** — Integração com Lenis para uma experiência de rolagem fluida  
- **Liquid Glass design** — Glassmorphism com backdrop-filter, bordas translúcidas e acentos em `#e8006c`  
- **Mobile-first** — Layout responsivo em todas as seções  
- **Galeria de arte** — Destaque em formato 3:4 com hover effects  
- **Showcases de personagens** — Seções com parallax individual por personagem  

## 🛠 Tech Stack

| Camada      | Tecnologia                         |
|-------------|------------------------------------|
| Framework   | React 19 + Vite 8                  |
| Animação    | Framer Motion 12                   |
| Scroll      | Lenis (smooth scroll)              |
| Roteamento  | React Router DOM 7                 |
| Estilo      | CSS Modules + CSS Custom Properties|
| Tipografia  | Inter + Montserrat (Google Fonts)  |

## 📁 Estrutura

```
src/
├── contexts/
│   └── LanguageContext.jsx    # Context de idioma (pt-BR / en-US)
├── components/
│   ├── HeroSection/           # Banner full-screen com parallax
│   ├── GallerySection/        # Grade 3:4 com obras em destaque
│   ├── AboutSection/          # Sobre mim (liquid glass card)
│   ├── CharacterShowcaseSection/  # Personagens com texto + imagem
│   └── Footer/                # Footer com links sociais
├── assets/
│   └── fa-essentials.css      # Ícones FontAwesome
├── App.jsx                    # Componente raiz
├── main.jsx                   # Entry point
└── index.css                  # Design tokens e estilos globais
```

## 🚀 Desenvolvimento

```bash
npm install
npm run dev
```

## 📦 Build de Produção

```bash
npm run build
npm run preview
```

## 📬 Contato

- Instagram: [@oa._mi](https://instagram.com/oa._mi)
- Artistree: [oami](https://artistree.io/oami)
- GitHub: [O-A-Mi](https://github.com/O-A-Mi)
- Email: o.ou.a.mis@gmail.com
