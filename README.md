# Champions League API

API de estudo com Express e TypeScript para gerenciar coleções de clubes e jogadores.

## Funcionalidades

- Consulta e cadastro de clubes e jogadores.
- Atualização e remoção por identificador.
- Organização em controllers, services e repositories.
- Respostas HTTP centralizadas em utilitários.

## Tecnologias

Node.js, TypeScript, Express, CORS, tsx e tsup.

## Executar localmente

```bash
git clone https://github.com/chruscinskiDiego/champions-league-api.git
cd champions-league-api
npm ci
# Configure PORT=3000 em .env
npm run start:dev
```

## Organização

`src/routes/` define os endpoints; controllers tratam HTTP, services aplicam regras e repositories acessam as coleções.

## Escopo e limitações

Os repositórios mantêm dados em memória; alterações não são persistidas entre reinicializações. Prefira o script de desenvolvimento: o caminho configurado em start:dist precisa ser revisado antes de uso.

