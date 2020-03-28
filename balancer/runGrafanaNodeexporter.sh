# Не перезапускать, иначе потеряем дашборды в графане))
echo "---Stopping containers"
docker stop nodeexporter
docker rm nodeexporter
docker stop grafana
docker rm grafana

echo "---Starting..."
docker-compose up --build --detach nodeexporter grafana
