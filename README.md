# Champions League API

Express and TypeScript practice API for managing collections of clubs and players.

## Features

- Queries and creates clubs and players.
- Updates and deletes records by identifier.
- Separates controllers, services and repositories.
- Centralizes HTTP response helpers.

## Technologies

Node.js, TypeScript, Express, CORS, tsx and tsup.

## Run locally

```bash
git clone https://github.com/chruscinskiDiego/champions-league-api.git
cd champions-league-api
npm ci
# Set PORT=3000 in .env.
npm run start:dev
```

## Structure

`src/routes/` defines endpoints. Controllers handle HTTP, services apply rules and repositories access collections.

## Scope and limitations

Repositories store data in memory, so changes do not survive a restart. Prefer the development script: the path configured in start:dist needs review before use.
