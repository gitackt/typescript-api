docker-compose down -v
docker-compose build --parallel
docker-compose up -d
sh scripts/db_migration_run.sh
sh scripts/db_seed_run.sh
