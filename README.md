# typescript-api

[![GitHub issues](https://img.shields.io/github/issues/gitackt/typescript-api?color=%236971ce)](https://github.com/gitackt/typescript-api/issues)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/gitackt/typescript-api?color=%236971ce)](https://github.com/gitackt/typescript-api/issues)
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/gitackt/typescript-api?color=%23ce6990)](https://github.com/gitackt/typescript-api/issues)
[![GitHub pull-requests closed](https://img.shields.io/github/issues-pr-closed/gitackt/typescript-api?color=%23ce6990)](https://github.com/gitackt/typescript-api/issues)
[![GitHub forks](https://img.shields.io/github/forks/gitackt/typescript-api?color=%2369cebf)](https://github.com/gitackt/typescript-api/network)
[![GitHub stars](https://img.shields.io/github/stars/gitackt/typescript-api?color=%2369cebf)](https://github.com/gitackt/typescript-api/stargazers)
[![GitHub contributors](https://img.shields.io/github/contributors/gitackt/typescript-api?color=%2369cebf)](https://github.com/gitackt/typescript-api/stargazers)

- Language: [Typescript](https://www.typescriptlang.org/ "Typescript")
- Server: [Express](https://expressjs.com/ja/ "Express")
- ORM: [TypeORM](https://typeorm.io/#/ "TypeORM")
- Database: [MySQL](https://www.mysql.com/jp/ "MySQL")

REST api server made with typescript. Seamlessly perform migration and seed generation by making full use of the schema-driven endpoint and ORM functions. Since the environment is made with docker, you can develop in a stateless environment.

- backend: http://localhost:8080/
- swagger-ui: http://localhost:8082/
- php-my-admin: http://localhost:4040/

## 1. Script

### 1-1. Start

After stopping all the running containers, start all the containers again.

```sh
sh scripts/server_restart.sh
```

### 1-2. OpenAPI

Automatically generate API endpoint type from openapi schema.

```sh
sh scripts/server_openapi_generate.sh
```

### 1-3. Migration

Generate a database migration file and perform the migration.

```shell
sh scripts/db_migration_generate.sh <MigrationName>
sh scripts/db_migration_run.sh
```

### 1-4. Seed

Generates seed data defined in the factory bot.

```shell
sh scripts/db_seed_run.sh
```

## 2. Authentication

### 2-1. Firebase auth

Firebase auth is used for the authentication board. After getting the access token on the client side, send it as a Bearer token.

https://firebase.google.com/docs/database/rest/auth?hl=ja

https://tools.ietf.org/html/rfc6750

## 3. API

## 4. ORM
