
mkdir -p postgredata
docker run \
    --name parrains-postgresql \
    --env-file .env \
    -p 5432:5432 \
    -v $(pwd)/postgredata:/var/lib/postgresql \
    -d postgres:9.6.2
