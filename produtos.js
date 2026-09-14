// ============================================================
// LISTA DE PRODUTOS - BRUGUELOS STUDIO 3D
// ============================================================
// COMO ADICIONAR UM PRODUTO NOVO:
// 1. Copie um bloco inteiro { ... } de exemplo abaixo
// 2. Cole antes do "];" no final do arquivo
// 3. Ajuste nome, categoria, descrição, preço e o nome do arquivo de imagem
//
// COMO REMOVER: apague o bloco { ... } inteiro do produto
//
// CAMPOS:
//   nome  -> nome exibido no card
//   cat   -> categoria (deve ser uma das existentes em CATEGORIAS, veja abaixo)
//   desc  -> descrição curta (1 linha)
//   preco -> texto do preço, ex: "R$ 25"
//   img   -> nome do arquivo dentro de assets/produtos/ (ex: "chaveiro1.jpg")
//   tag   -> selo no card. Use "Natal", "Novidade", "Mais vendido" ou null
//   emoji -> aparece só se a foto não existir ainda (reserva de segurança)
// ============================================================

// Categorias do menu, na ordem em que aparecem no site
const CATEGORIAS = [
  { id: "natal",           nome: "Natal",           emoji: "🎄" },
  { id: "decoracao",       nome: "Decoração",       emoji: "🏠" },
  { id: "brinquedos",      nome: "Brinquedos",      emoji: "🧸" },
  { id: "utilidades",      nome: "Utilidades",      emoji: "🗂️" },
  { id: "personalizados",  nome: "Personalizados",  emoji: "✨" },
];

const PRODUTOS = [

  // ---------- NATAL ----------
  { nome: "Enfeite de Natal - Modelo 1", cat: "natal", desc: "Enfeite impresso em 3D para pendurar na árvore.", preco: "R$ 25", img: "natal1.jpg", tag: "Natal", emoji: "🎄" },
  { nome: "Enfeite de Natal - Modelo 2", cat: "natal", desc: "Enfeite personalizado com nome ou frase especial.", preco: "R$ 25", img: "natal2.jpg", tag: "Natal", emoji: "🎄" },
  { nome: "Enfeite de Natal - Modelo 3", cat: "natal", desc: "Enfeite temático, cores personalizáveis.", preco: "R$ 28", img: "natal3.jpg", tag: "Natal", emoji: "🎄" },
  { nome: "Árvore de Natal Decorativa 3D", cat: "natal", desc: "Miniatura de árvore impressa, ideal para mesa.", preco: "R$ 45", img: "natal4.jpg", tag: "Natal", emoji: "🎄" },
  { nome: "Porta-retrato de Natal", cat: "natal", desc: "Moldura temática com nome e data.", preco: "R$ 35", img: "natal5.jpg", tag: "Natal", emoji: "🎄" },

  // ---------- DECORAÇÃO ----------
  { nome: "Luminária - Modelo 1", cat: "decoracao", desc: "Luminária com efeito de luz suave.", preco: "R$ 65", img: "luminaria1.jpg", tag: null, emoji: "💡" },
  { nome: "Luminária - Modelo 2", cat: "decoracao", desc: "Luminária temática, nome personalizável.", preco: "R$ 70", img: "luminaria2.jpg", tag: null, emoji: "💡" },
  { nome: "Luminária - Modelo 3", cat: "decoracao", desc: "Design moderno e minimalista.", preco: "R$ 60", img: "luminaria3.jpg", tag: null, emoji: "💡" },
  { nome: "Vaso Decorativo", cat: "decoracao", desc: "Vaso impresso em 3D com design moderno.", preco: "R$ 40", img: "decoracao1.jpg", tag: null, emoji: "🪴" },
  { nome: "Porta-treco / Organizador", cat: "decoracao", desc: "Organizador para canetas, chaves e acessórios.", preco: "R$ 28", img: "decoracao2.jpg", tag: null, emoji: "🗂️" },

  // ---------- BRINQUEDOS ----------
  { nome: "Boneco Articulado - Modelo 1", cat: "brinquedos", desc: "Action figure impressa com articulações.", preco: "R$ 55", img: "brinquedo1.jpg", tag: null, emoji: "🤖" },
  { nome: "Boneco Articulado - Modelo 2", cat: "brinquedos", desc: "Figura articulada personalizável.", preco: "R$ 58", img: "brinquedo2.jpg", tag: null, emoji: "🤖" },
  { nome: "Quebra-cabeça 3D Educativo", cat: "brinquedos", desc: "Brinquedo educativo, ótimo presente infantil.", preco: "R$ 30", img: "brinquedo3.jpg", tag: null, emoji: "🧩" },
  { nome: "Pião Personalizado", cat: "brinquedos", desc: "Pião impresso com cores à sua escolha.", preco: "R$ 18", img: "brinquedo4.jpg", tag: null, emoji: "🌀" },

  // ---------- UTILIDADES ----------
  { nome: "Suporte para Celular", cat: "utilidades", desc: "Suporte de mesa personalizado.", preco: "R$ 22", img: "utilidade1.jpg", tag: null, emoji: "📱" },
  { nome: "Suporte para Fones de Ouvido", cat: "utilidades", desc: "Organizador de mesa para fones.", preco: "R$ 25", img: "utilidade2.jpg", tag: null, emoji: "🎧" },
  { nome: "Porta-canetas Personalizado", cat: "utilidades", desc: "Organizador de canetas com nome.", preco: "R$ 20", img: "utilidade3.jpg", tag: null, emoji: "🖊️" },

  // ---------- PERSONALIZADOS ----------
  { nome: "Chaveiro - Modelo 1", cat: "personalizados", desc: "Chaveiro com nome ou iniciais impresso em 3D.", preco: "R$ 15", img: "chaveiro1.jpg", tag: null, emoji: "🔑" },
  { nome: "Chaveiro - Modelo 2", cat: "personalizados", desc: "Chaveiro temático de personagem.", preco: "R$ 18", img: "chaveiro2.jpg", tag: null, emoji: "🔑" },
  { nome: "Chaveiro - Modelo 3", cat: "personalizados", desc: "Chaveiro com formato exclusivo.", preco: "R$ 18", img: "chaveiro3.jpg", tag: null, emoji: "🔑" },
  { nome: "Topo de Bolo Personalizado", cat: "personalizados", desc: "Topo de bolo sob medida para datas especiais.", preco: "R$ 20", img: "personalizado1.jpg", tag: null, emoji: "🎂" },
  { nome: "Placa Decorativa com Nome", cat: "personalizados", desc: "Placa impressa em 3D para porta ou presente.", preco: "R$ 32", img: "personalizado2.jpg", tag: null, emoji: "🪧" },

];
