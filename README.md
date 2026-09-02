# O MI — Portfólio Digital

Experiência web responsiva para apresentar ilustrações, personagens e serviços do
artista digital O MI com uma navegação visual, bilíngue e orientada a movimento.

> Projeto em preparação para publicação. O endereço da demonstração será
> adicionado após o deploy.

## Proposta

Portfólios artísticos precisam valorizar as obras sem transformar a interface em
uma galeria genérica. Este projeto propõe uma apresentação imersiva que combina
hierarquia visual, animações suaves e uma experiência consistente em telas
grandes e dispositivos móveis.

Leia a proposta completa em [PROPOSTA.md](PROPOSTA.md).

## Principais recursos

- Conteúdo em português e inglês conforme o idioma do navegador.
- Seção inicial com parallax e direção visual própria.
- Galeria responsiva com destaque para obras em proporção vertical.
- Apresentação de personagens com narrativa e movimento.
- Rolagem suave com Lenis e animações com Framer Motion.
- Separação entre licença do código e direitos das obras.

## Stack

| Área | Tecnologias |
|---|---|
| Interface | React 19, Vite 8, React Router |
| Movimento | Framer Motion, Lenis |
| Estilos | CSS Modules, propriedades CSS personalizadas |
| Qualidade | ESLint, build Vite |
| Métricas | Vercel Analytics |

## Estrutura

```text
src/
├── components/        # Seções visuais e componentes da página
├── contexts/          # Idioma e conteúdo localizado
├── App.jsx            # Composição da experiência
├── main.jsx           # Inicialização React
└── index.css           # Tokens e estilos globais

public/                # Obras e identidade visual
```

## Executar localmente

```bash
npm install
npm run dev
```

## Validar e gerar a versão de produção

```bash
npm run lint
npm run build
npm run preview
```

Lint e build de produção foram executados com sucesso no estado documentado.

## Contato do artista

- Instagram: [@oa._mi](https://instagram.com/oa._mi)
- Artistree: [oami](https://artistree.io/oami)
- GitHub: [O-A-Mi](https://github.com/O-A-Mi)
- E-mail: `o.ou.a.mis@gmail.com`

## Licenças e direitos autorais

O código-fonte é distribuído sob a licença MIT. As obras, personagens, logotipos
e demais imagens em `public/` não fazem parte dessa licença e não podem ser
reutilizados sem autorização. Consulte [LICENSE](LICENSE) e [ASSETS.md](ASSETS.md).
