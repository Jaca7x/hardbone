/**
 * TODO o texto e os dados da página ficam aqui. Para trocar algo, edite só este arquivo.
 *
 * Regras da prévia: nada de preço, depoimento, nota de avaliação, nome de tatuador
 * ou número de clientes inventados. As fotos são ILUSTRATIVAS, de banco de imagens
 * (Pexels, licença livre), e a página avisa isso. O que ainda falta vem como espaço
 * reservado (TEXTO DO ESTÚDIO, [CONFIRMAR COM O ESTÚDIO]).
 */

const mensagemWhatsApp =
  "Olá! Vi a prévia da página da Hard Bone e quero pedir um orçamento.";

export const estudio = {
  nome: "Hard Bone Tattoo",
  endereco: {
    rua: "R. São José dos Pinhais, 1490",
    bairro: "Sítio Cercado",
    cidade: "Curitiba/PR",
  },
  telefone: { exibicao: "(41) 3030-1022", link: "tel:+554130301022" },
  whatsapp: `https://wa.me/554130301022?text=${encodeURIComponent(mensagemWhatsApp)}`,
  comoChegar:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("R. São José dos Pinhais, 1490 - Sítio Cercado, Curitiba - PR"),
  horario: [
    { dias: "Segunda a sábado", horas: "10h às 18h" },
    { dias: "Domingo", horas: "Fechado" },
  ],
  horarioCurto: "Seg. a sáb., 10h às 18h",
  /** Usado para o aviso "dentro/fora do horário". 1 = segunda ... 6 = sábado. */
  expediente: { dias: [1, 2, 3, 4, 5, 6], abre: 10, fecha: 18 },
};

/**
 * Aviso das fotos. Enquanto as fotos forem de banco de imagens, deixe `ilustrativas: true`:
 * cada foto ganha a etiqueta e o rodapé mostra o aviso. Com as fotos reais, troque para false.
 */
export const imagens = {
  ilustrativas: true,
  etiqueta: "Imagem ilustrativa",
  aviso:
    "As fotos desta prévia são imagens ilustrativas de banco de imagens, meramente fictícias: não são trabalhos, clientes nem produtos da Hard Bone Tattoo.",
  fonte: { rotulo: "Pexels", url: "https://www.pexels.com/" },
};

export const navegacao = [
  { rotulo: "Trabalhos", href: "#trabalhos" },
  { rotulo: "Orçamento", href: "#orcamento" },
  { rotulo: "Piercing e loja", href: "#loja" },
  { rotulo: "Localização", href: "#localizacao" },
];

export const hero = {
  selo: "Tatuagem e piercing em Curitiba",
  /** Cada item é uma palavra animada. `italico` usa a serifa itálica; `quebraAntes` começa linha nova. */
  titulo: [
    { texto: "Arte" },
    { texto: "que" },
    { texto: "fica" },
    { texto: "na", italico: true, quebraAntes: true },
    { texto: "pele.", italico: true },
  ],
  subtitulo:
    "Estúdio de tatuagem e piercing no Sítio Cercado, em Curitiba. Conte sua ideia pelo WhatsApp e receba a proposta do estúdio.",
  botaoPrincipal: "Pedir orçamento",
  botaoSecundario: "Ver trabalhos",
  /** Foto grande do topo (vertical, 4:5). Vazio = espaço reservado. */
  foto: "/fotos/estudio.webp",
  fotoAlt: "Pessoa de costas, com as costas inteiras tatuadas, sentada num estúdio de tatuagem",
  /** Texto do carimbo que gira ao lado da foto. */
  carimbo: "Hard Bone Tattoo · Sítio Cercado · Curitiba · ",
};

export const estilos = {
  rotulo: "Estilos",
  aviso: "[CONFIRMAR COM O ESTÚDIO]",
  itens: ["Realismo", "Blackwork", "Old School", "Fineline"],
};

export type Trabalho = {
  /** Caminho da foto em /public, ex.: "/fotos/trabalho-01.webp". Vazio = espaço reservado. */
  foto: string;
  /** Descrição da foto para leitores de tela. */
  alt: string;
  estilo: string;
  legenda: string;
};

export const portfolio = {
  numero: "01",
  selo: "Portfólio",
  titulo: ["Trabalhos", "do estúdio"],
  subtitulo:
    "Imagens ilustrativas de banco de imagens, só para a prévia. Aqui entram as fotos reais dos trabalhos da Hard Bone.",
  /** A ordem importa: 1º e 7º são os quadros largos, 2º e 6º os estreitos, 3º a 5º a fileira do meio. */
  trabalhos: [
    {
      foto: "/fotos/trabalho-01.webp",
      alt: "Mãos de tatuador com luvas pretas fazendo o contorno de uma tatuagem num braço",
      estilo: "Contorno",
      legenda: "Traço em andamento",
    },
    {
      foto: "/fotos/trabalho-02.webp",
      alt: "Tatuagem preta de um cachorro no antebraço",
      estilo: "Blackwork",
      legenda: "Cachorro no antebraço",
    },
    {
      foto: "/fotos/trabalho-03.webp",
      alt: "Tatuagem de traço fino no braço, em foto preto e branco, ao lado de um clarinete",
      estilo: "Fineline",
      legenda: "Traço fino no braço",
    },
    {
      foto: "/fotos/trabalho-04.webp",
      alt: "Tatuador fazendo sombreado num braço fechado, em foto preto e branco",
      estilo: "Preto e cinza",
      legenda: "Sombreado em sessão",
    },
    {
      foto: "/fotos/trabalho-05.webp",
      alt: "Tatuagem minimalista de uma linha no pulso",
      estilo: "Minimalista",
      legenda: "Linha única no pulso",
    },
    {
      foto: "/fotos/trabalho-06.webp",
      alt: "Tatuagem pequena no braço de uma mulher de vestido preto",
      estilo: "Delicada",
      legenda: "Detalhe no braço",
    },
    {
      foto: "/fotos/trabalho-07.webp",
      alt: "Tatuador de braços tatuados trabalhando numa sessão, em ambiente escuro",
      estilo: "Sessão",
      legenda: "Fechamento de braço",
    },
  ] satisfies Trabalho[],
};

export const passos = {
  numero: "02",
  selo: "Orçamento",
  titulo: ["Como funciona", "o orçamento"],
  itens: [
    {
      titulo: "Conte sua ideia pelo WhatsApp",
      texto: "Mande referências, o tamanho aproximado e a parte do corpo onde quer tatuar.",
    },
    {
      titulo: "Receba a proposta",
      texto: "O estúdio avalia a ideia e responde com a proposta para o seu desenho.",
    },
    {
      titulo: "Agende seu horário",
      texto: "Com tudo combinado, é só escolher o dia e o horário da sua sessão.",
    },
  ],
  botao: "Começar pelo WhatsApp",
};

export const loja = {
  numero: "03",
  selo: "Piercing e loja",
  titulo: ["Além da", "tatuagem"],
  texto: "O estúdio também faz piercing e vende camisetas e bonés.",
  piercing: {
    rotulo: "Serviço",
    titulo: "Piercing",
    texto: "Faça seu piercing no estúdio. Tire dúvidas e agende pelo WhatsApp.",
    link: "Perguntar sobre piercing",
    fotos: [
      { foto: "/fotos/piercing-01.webp", alt: "Mulher loira com piercing no septo" },
      { foto: "/fotos/piercing-02.webp", alt: "Orelha com vários piercings dourados" },
    ],
  },
  produtos: [
    {
      rotulo: "Loja",
      titulo: "Camisetas",
      texto: "À venda no estúdio. Consulte modelos e tamanhos pelo WhatsApp.",
      foto: "/fotos/camiseta.webp",
      alt: "Camiseta preta lisa num cabide",
    },
    {
      rotulo: "Loja",
      titulo: "Bonés",
      texto: "À venda no estúdio. Consulte os modelos pelo WhatsApp.",
      foto: "/fotos/bone.webp",
      alt: "Homem de boné preto, em foto com fundo escuro",
    },
  ],
};

export const localizacao = {
  numero: "04",
  selo: "Localização",
  titulo: ["Venha conhecer", "o estúdio"],
  botaoMapa: "Como chegar",
  botaoWhatsApp: "Chamar no WhatsApp",
};

export const ctaFinal = {
  titulo: ["Tem uma ideia?", "Vamos tirar do papel."],
  texto: "Mande sua referência pelo WhatsApp e receba a proposta do estúdio.",
  botao: "Pedir orçamento no WhatsApp",
};

export const rodape = {
  /** Uma frase curta sobre o estúdio. Vazio = mostra o espaço reservado "TEXTO DO ESTÚDIO". */
  textoEstudio: "",
};

export const credito = {
  texto: "Prévia criada por Miguel Costa",
  site: "miguelcosta.vercel.app",
  url: "https://miguelcosta.vercel.app",
};
