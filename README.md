# typescript-api

- backend: http://localhost:8080/
- swagger-ui: http://localhost:8082/
- php-my-admin: http://localhost:4040/

### Start

```sh
sh restart.sh
```

### OpenAPI

```sh
sh generate.sh
```

### Migration

```shell
docker-compose exec backend ./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:generate -n $1
docker-compose exec backend ./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:run
```

### Seed

```shell
docker-compose exec backend ./node_modules/.bin/ts-node ./node_modules/typeorm-seeding/dist/cli.js seed
```
