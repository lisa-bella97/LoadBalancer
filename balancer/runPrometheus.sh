echo "---Stopping containers"
docker stop prometheus
docker rm prometheus

echo "---Starting..."
docker-compose up --build --detach prometheus
