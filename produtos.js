// ============================================================
// LISTA DE PRODUTOS - BRUGUELOS STUDIO 3D
// ============================================================
// Para ADICIONAR um produto novo: copie um bloco { ... } inteiro,
// cole antes do "];" final e ajuste os campos.
//
// Para REMOVER um produto: apague o bloco { ... } inteiro dele.
//
// Campos de cada produto:
//   nome  -> nome que aparece no card
//   cat   -> categoria: "natal", "decoracao", "brinquedos", "utilidades" ou "personalizados"
//   desc  -> descrição curta (1 linha)
//   preco -> texto do preço, ex: "R$ 25"
//   img   -> nome do arquivo de imagem dentro da pasta assets/produtos/
//            (a foto deve estar nessa pasta com esse nome exato)
//   tag   -> selo colorido no canto do card. Use "Natal" ou null (sem selo)
//   emoji -> aparece só se a foto não for encontrada (reserva de segurança)
// ============================================================

const PRODUTOS = [

  // ---------- NATAL ----------
  { nome: "Enfeite de Natal - Rena", cat: "natal", desc: "Enfeite impresso em 3D no tema rena, ideal para a árvore.", preco: "R$ 25", img: "enfeite-natal-rena.jpg", tag: "Natal", emoji: "🦌" },
  { nome: "Enfeite de Natal - Estrela", cat: "natal", desc: "Estrela personalizada com nome para pendurar na árvore.", preco: "R$ 25", img: "enfeite-natal-estrela.jpg", tag: "Natal", emoji: "⭐" },
  { nome: "Enfeite de Natal - Boneco de Neve", cat: "natal", desc: "Bonequinho de neve impresso em 3D, cores personalizáveis.", preco: "R$ 28", img: "enfeite-natal-boneco-neve.jpg", tag: "Natal", emoji: "⛄" },
  { nome: "Enfeite de Natal - Sino", cat: "natal", desc: "Sino decorativo com detalhes em dourado ou prateado.", preco: "R$ 25", img: "enfeite-natal-sino.jpg", tag: "Natal", emoji: "🔔" },
  { nome: "Enfeite de Natal - Bola Personalizada", cat: "natal", desc: "Bola de Natal com nome ou frase especial impressa.", preco: "R$ 22", img: "enfeite-natal-bola.jpg", tag: "Natal", emoji: "🎄" },
  { nome: "Árvore de Natal Decorativa 3D", cat: "natal", desc: "Miniatura de árvore impressa, ideal para mesa ou escritório.", preco: "R$ 45", img: "arvore-natal.jpg", tag: "Natal", emoji: "🎋" },
  { nome: "Porta-retrato de Natal", cat: "natal", desc: "Moldura temática com nome e data, perfeita para presentear.", preco: "R$ 35", img: "porta-retrato-natal.jpg", tag: "Natal", emoji: "🖼️" },

  // ---------- DECORAÇÃO ----------
  { nome: "Luminária Lua", cat: "decoracao", desc: "Luminária em formato de lua com efeito de luz suave.", preco: "R$ 65", img: "luminaria-lua.jpg", tag: null, emoji: "🌙" },
  { nome: "Luminária Personagem", cat: "decoracao", desc: "Luminária temática de personagem, com nome personalizável.", preco: "R$ 70", img: "luminaria-personagem.jpg", tag: null, emoji: "💡" },
  { nome: "Luminária Geométrica", cat: "decoracao", desc: "Design moderno e minimalista para mesa de escritório.", preco: "R$ 60", img: "luminaria-geometrica.jpg", tag: null, emoji: "💡" },
  { nome: "Vaso Decorativo Geométrico", cat: "decoracao", desc: "Vaso impresso em 3D com design moderno para plantas.", preco: "R$ 40", img: "vaso-geometrico.jpg", tag: null, emoji: "🪴" },
  { nome: "Porta-treco / Organizador de Mesa", cat: "decoracao", desc: "Organizador impresso para canetas, chaves e acessórios.", preco: "R$ 28", img: "porta-treco.jpg", tag: null, emoji: "🗂️" },

  // ---------- BRINQUEDOS ----------
  { nome: "Boneco Articulado - Herói", cat: "brinquedos", desc: "Action figure impressa com articulações móveis.", preco: "R$ 55", img: "boneco-heroi.jpg", tag: null, emoji: "🤖" },
  { nome: "Boneco Articulado - Personagem Anime", cat: "brinquedos", desc: "Figura articulada inspirada em anime, personalizável.", preco: "R$ 58", img: "boneco-anime.jpg", tag: null, emoji: "🤖" },
  { nome: "Quebra-cabeça 3D Educativo", cat: "brinquedos", desc: "Brinquedo educativo impresso, ótimo presente infantil.", preco: "R$ 30", img: "quebra-cabeca.jpg", tag: null, emoji: "🧩" },
  { nome: "Pião Personalizado", cat: "brinquedos", desc: "Pião de madeira impressa com cores à sua escolha.", preco: "R$ 18", img: "piao.jpg", tag: null, emoji: "🌀" },

  // ---------- UTILIDADES ----------
  { nome: "Suporte para Celular", cat: "utilidades", desc: "Suporte de mesa personalizado com nome ou logo.", preco: "R$ 22", img: "suporte-celular.jpg", tag: null, emoji: "📱" },
  { nome: "Suporte para Fones de Ouvido", cat: "utilidades", desc: "Organizador de mesa para fones e acessórios.", preco: "R$ 25", img: "suporte-fones.jpg", tag: null, emoji: "🎧" },
  { nome: "Porta-canetas Personalizado", cat: "utilidades", desc: "Organizador de canetas com nome ou frase.", preco: "R$ 20", img: "porta-canetas.jpg", tag: null, emoji: "🖊️" },

  // ---------- PERSONALIZADOS ----------
  { nome: "Chaveiro Personalizado - Nome", cat: "personalizados", desc: "Chaveiro com nome ou iniciais impresso em 3D.", preco: "R$ 15", img: "chaveiro-nome.jpg", tag: null, emoji: "🔑" },
  { nome: "Chaveiro Personalizado - Personagem", cat: "personalizados", desc: "Chaveiro temático do seu personagem favorito.", preco: "R$ 18", img: "chaveiro-personagem.jpg", tag: null, emoji: "🔑" },
  { nome: "Topo de Bolo Personalizado", cat: "personalizados", desc: "Topo de bolo sob medida para aniversários e datas especiais.", preco: "R$ 20", img: "topo-bolo.jpg", tag: null, emoji: "🎂" },
  { nome: "Placa Decorativa com Nome", cat: "personalizados", desc: "Placa impressa em 3D para porta de quarto ou presente.", preco: "R$ 32", img: "placa-decorativa.jpg", tag: null, emoji: "🪧" },

];
