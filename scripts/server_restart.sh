docker-compose down -v
docker-compose build --parallel
docker-compose up -d
sh settings/scripts/migration/run.sh
sh settings/scripts/seed/run.sh
