# typescript-api

[![GitHub forks](https://img.shields.io/github/forks/gitackt/typescript-api?color=%2369cebf)](https://github.com/gitackt/typescript-api/network)
[![GitHub stars](https://img.shields.io/github/stars/gitackt/typescript-api?color=%2369cebf)](https://github.com/gitackt/typescript-api/stargazers)
[![GitHub contributors](https://img.shields.io/github/contributors/gitackt/typescript-api?color=%2369cebf)](https://github.com/gitackt/typescript-api/stargazers)

- Language: [Typescript](https://www.typescriptlang.org/ "Typescript")
- Server: [Express](https://expressjs.com/ja/ "Express")
- ORM: [TypeORM](https://typeorm.io/#/ "TypeORM")
- Database: [MySQL](https://www.mysql.com/jp/ "MySQL")

## 1. Setup

```
brew install openapi-generator
touch firebase-admin.json // your firebase credentials.
```

## 2. Start

```sh
sh scripts/start.sh
```

## 3. OpenAPI

Automatically generate API endpoint type from openapi schema.

```sh
sh scripts/openapi.sh
```

## 4. Migration

Generate a database migration file and perform the migration.

```shell
sh scripts/migration.sh <MigrationName>
sh scripts/migrate.sh
```

## 5. Seed

Generates seed data defined in the factory bot.

```shell
sh scripts/seed.sh
```

## 6. Authentication

- https://firebase.google.com/docs/database/rest/auth?hl=ja
- https://tools.ietf.org/html/rfc6750
