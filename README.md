# Bruguelos Studio 3D - Catálogo Online

## Estrutura de arquivos

```
bruguelos-site/
├── index.html          -> Site principal (não precisa editar para adicionar produtos)
├── produtos.js          -> Lista de produtos e categorias (edite este arquivo)
├── README.md             -> Este guia
└── assets/
    ├── logo/
    │   └── logo.jpg      -> Logo da marca
    └── produtos/
        └── (suas fotos entram aqui)
```

## Como adicionar um produto novo

1. Salve a foto do produto na pasta `assets/produtos/` com um nome simples,
   sem espaços ou acentos. Exemplo: `chaveiro4.jpg`, `luminaria4.jpg`.

2. Abra o arquivo `produtos.js` e copie um bloco de produto existente da
   mesma categoria, por exemplo:

   { nome: "Chaveiro - Modelo 1", cat: "personalizados", desc: "Chaveiro com nome ou iniciais impresso em 3D.", preco: "R$ 15", img: "chaveiro1.jpg", tag: null, emoji: "🔑" },

3. Cole um novo bloco antes do "];" no final da lista PRODUTOS, e ajuste:
   - nome: nome do produto
   - desc: descrição curta
   - preco: preço, ex "R$ 20"
   - img: nome exato do arquivo que você subiu em assets/produtos/

4. Salve o arquivo. Pronto — o site atualiza automaticamente.

## Como criar uma categoria nova

Edite a lista CATEGORIAS no topo do produtos.js e adicione um novo bloco:

  { id: "acessorios", nome: "Acessórios", emoji: "🎒" },

O "id" deve ser uma palavra sem espaço, em letras minúsculas — é ela que
você usa no campo "cat" de cada produto para associá-lo a essa categoria.

## Categorias já configuradas

- natal
- decoracao
- brinquedos
- utilidades
- personalizados

## Como publicar no GitHub Pages

1. Suba todo o conteúdo desta pasta para a raiz do seu repositório no GitHub
   (mantendo a estrutura de pastas assets/logo e assets/produtos).
2. Vá em Settings > Pages > Branch > selecione "main" e a pasta "/ (root)".
3. Salve e aguarde 1-2 minutos. O link do site aparece na mesma tela.

## Contato configurado

WhatsApp: (85) 99734-3158
Todos os botões de "Pedir no WhatsApp" já enviam automaticamente uma
mensagem com o nome do produto escolhido.
