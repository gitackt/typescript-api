docker-compose down -v
docker-compose build --parallel
docker-compose up -d
sleep 20
sh scripts/db_migration_run.sh
sh scripts/db_seed_run.sh
