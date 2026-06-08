# Minha Estante - Backend API (In-Memory)

Esta é uma API REST desenvolvida com Node.js e Express para gerenciar uma coleção de livros. Esta versão utiliza armazenamento em memória para facilitar a execução sem a necessidade de configurar um banco de dados externo.

## Requisitos

- Node.js instalado

## Instalação

1. Entre na pasta do projeto:
   ```bash
   cd app-book-backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução

Para rodar em modo de desenvolvimento:
```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`.

## Rotas da API

- `GET /api/books`: Lista todos os livros
- `GET /api/books/:id`: Busca um livro por ID
- `POST /api/books`: Cadastra um novo livro
- `PUT /api/books/:id`: Atualiza um livro existente
- `DELETE /api/books/:id`: Remove um livro

> **Nota:** Por utilizar armazenamento em memória, os dados serão resetados sempre que o servidor for reiniciado.
