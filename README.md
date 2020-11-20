# typescript-api

- backend: http://localhost:8080/
- swagger-ui: http://localhost:8082/
- php-my-admin: http://localhost:4040/

### Start

```sh
sh server_restart.sh
```

### OpenAPI

```sh
sh server_openapi_generate.sh
```

### Migration

```shell
sh db_migration_generate.sh <MigrationName>
sh db_migration_run.sh
```

### Seed

```shell
sh db_seed_run.sh
```
