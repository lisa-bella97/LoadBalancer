docker build -t node .
docker run -d -p 8000:8000 -p 8080:8080 node:latest
