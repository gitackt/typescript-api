docker-compose down -v
docker-compose up -d --build
sleep 20
sh scripts/migrate.sh
sh scripts/seed.sh
