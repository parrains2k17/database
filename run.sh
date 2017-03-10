
mkdir -p postgredata
docker run \
    --name parrains-postgresql \
    --env-file .env \
    -p 3306:3306 \
    -v $(pwd)/postgredata:/var/lib/postgresql \
    -d postgre:9.6.2
