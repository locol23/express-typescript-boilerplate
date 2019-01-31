#!sh/bin

docker build -t server .
docker stop server
docker rm server
docker run -p 4000:4000 -d --name server server
