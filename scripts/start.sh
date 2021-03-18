docker-compose down -v
docker-compose build --parallel
docker-compose up -d
sleep 20
sh scripts/migrate.sh
sh scripts/seed.sh
