# Hard Bone Tattoo: prévia da landing page

Página de uma tela só, em formato de prévia, para o estúdio **Hard Bone Tattoo** (Sítio Cercado, Curitiba/PR).
Feita com React + TypeScript + Vite, Tailwind CSS 4, shadcn/ui (botão) e Motion.

**Estilo "osso e tinta"**: papel cor de osso, tinta preta e um vermelho de carimbo usado só nos detalhes.
Títulos em serifa editorial (Instrument Serif, com itálico nas palavras de destaque), texto em Geist e
rótulos técnicos em Geist Mono. Réguas finas, numeração de seção, marcas de corte nas fotos e um carimbo
giratório, no espírito de uma revista de tatuagem.

## Rodar

```bash
npm install
npm run dev        # desenvolvimento: http://localhost:5173
npm run build      # gera a pasta dist/ (confere os tipos antes)
npm run preview    # serve a versão final: http://localhost:4173
```

## Onde trocar as coisas

**Todo texto e dado da página fica em `src/content.ts`.** Os componentes só leem desse arquivo.

| O que | Onde, em `src/content.ts` |
|---|---|
| Endereço, telefone, horário, link do WhatsApp | `estudio` |
| Título, subtítulo, botões e foto grande do topo | `hero` (`foto` e `fotoAlt`) |
| Texto do carimbo giratório | `hero.carimbo` |
| Estilos da faixa animada | `estilos.itens` (está marcado **[CONFIRMAR COM O ESTÚDIO]**: depois de confirmar, apague o texto de `estilos.aviso`) |
| Fotos do portfólio | `portfolio.trabalhos` (veja abaixo) |
| Passos do orçamento | `passos` |
| Piercing, camisetas e bonés | `loja` |
| Aviso de "imagem ilustrativa" | `imagens` (veja abaixo) |
| Frase do rodapé | `rodape.textoEstudio` (vazio = aparece o espaço reservado "TEXTO DO ESTÚDIO") |

### Fotos de banco de imagens (situação atual)

**Todas as fotos da prévia são ilustrativas**, do [Pexels](https://www.pexels.com/license/) (uso livre, inclusive comercial, sem exigir crédito).
A página avisa isso em três lugares: a etiqueta "Imagem ilustrativa" em cada foto, a legenda "Fig. 01" do topo e um aviso no rodapé.
Esse aviso é controlado por `imagens.ilustrativas` em `src/content.ts`: **quando todas as fotos forem reais, troque para `false`**.

| Arquivo em `public/fotos/` | Foto no Pexels |
|---|---|
| `estudio.webp` | [7005799](https://www.pexels.com/photo/7005799/) |
| `trabalho-01.webp` | [9676078](https://www.pexels.com/photo/9676078/) (Sergey Meshkov) |
| `trabalho-02.webp` | [19409461](https://www.pexels.com/photo/19409461/) (Efe Ersoy) |
| `trabalho-03.webp` | [20617804](https://www.pexels.com/photo/20617804/) (Alina Chernii) |
| `trabalho-04.webp` | [955938](https://www.pexels.com/photo/955938/) |
| `trabalho-05.webp` | [1993189](https://www.pexels.com/photo/1993189/) |
| `trabalho-06.webp` | [5088459](https://www.pexels.com/photo/5088459/) |
| `trabalho-07.webp` | [6024213](https://www.pexels.com/photo/6024213/) (umberto dez) |
| `piercing-01.webp` | [19588725](https://www.pexels.com/photo/19588725/) (Konstantin Mishchenko) |
| `piercing-02.webp` | [32275806](https://www.pexels.com/photo/32275806/) (Bhumika) |
| `camiseta.webp` | [8532638](https://www.pexels.com/photo/8532638/) (Hanna Pad) |
| `bone.webp` | [9393041](https://www.pexels.com/photo/9393041/) |

### Como trocar pelas fotos reais

1. Coloque as fotos em `public/fotos/`. Prefira **`.webp`** ou `.jpg`, com uns **1200 px no lado maior** e até ~200 KB cada.
2. **Foto do topo**: em `hero`, troque `foto` e `fotoAlt` (foto na vertical, 4:5). Se mudar o nome do arquivo, troque também o `preload` da foto no `index.html`.
3. **Portfólio**: em `portfolio.trabalhos`, troque `foto`, `alt`, `estilo` e `legenda` de cada item, por exemplo:

```ts
{ foto: "/fotos/trabalho-01.webp", alt: "Tatuagem realista de leão no antebraço", estilo: "Realismo", legenda: "Leão no antebraço" },
```

4. **Piercing e loja**: em `loja`, troque as fotos de `piercing.fotos` e de `produtos`.

- `alt`: descreva a foto (é o que o leitor de tela fala). Não deixe vazio.
- A grade é de revista e foi feita para **7 fotos**. No computador: 1ª larga + 2ª estreita, depois 3ª, 4ª e 5ª iguais, depois 6ª estreita + 7ª larga. No celular: a 1ª na largura toda e as outras em pares. As fotos são recortadas para caber (`object-cover`), então prefira fotos na vertical.
- As fotos carregam com `loading="lazy"`, entram com uma "cortina" que sobe e ganham zoom leve no hover.

### Imagem de compartilhamento (WhatsApp, Instagram, Facebook)

`public/og.jpg` (1200×630) é uma captura do topo da página. Depois de colocar as fotos reais, vale gerar de novo.
Ao publicar, troque em `index.html` o `og:image` de `/og.jpg` para o endereço completo (ex.: `https://hardbone.com.br/og.jpg`).

### Quando virar o site oficial

- Tire a linha `<meta name="robots" content="noindex" />` do `index.html` (hoje a prévia não aparece no Google de propósito).
- Remova o selo "Prévia criada por..." do rodapé (`credito` em `src/content.ts` e o link em `src/components/Footer.tsx`), se for o caso.

## Notas técnicas

- **Animações** (todas só com `transform` e `opacity`, uma vez só ao entrar na tela, curva `[0.22, 1, 0.36, 1]`):
  títulos sobem palavra por palavra de trás de uma máscara; fotos entram com cortina + zoom saindo; blocos com fade + subida de 20 px;
  réguas vermelhas se desenham nos passos; parallax de no máximo 20 px na foto do topo; carimbo girando devagar; faixa infinita de estilos.
- **Movimento reduzido**: com "reduzir movimento" ligado no sistema, parallax, faixa, carimbo e pulso param, e as entradas viram só fade.
- **Contraste (AA)**: tinta `#15120f` e cinza `#5c544c` (6,1:1) sobre o papel `#eee8dd`; vermelho `#a3121c` (6,5:1) no papel; no fundo escuro, vermelho claro `#f0646c` (5,9:1) e cinza `#a39a8f` (6,7:1).
- **Desempenho**: fontes locais com preload no build e `LazyMotion` para carregar só o necessário da biblioteca de animação.
- **Lighthouse** (build de produção, 30/10/2026, com as fotos): celular: desempenho 92 (estável em 3 rodadas), acessibilidade 100, boas práticas 100. Computador: 100 / 100 / 100. O SEO fica baixo só por causa do `noindex` da prévia.
- Não há preço, depoimento, nota, nome de tatuador nem número de clientes inventados. As fotos são de banco de imagens e marcadas como ilustrativas; o que falta de texto está marcado como espaço reservado.
