
docker run \
    --name parrains-db \
    --env-file .env
    -p 3306:3306
    -d mysql:8.0.0
