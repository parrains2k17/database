
mkdir -p data
docker run \
    --name parrains-db \
    --env-file .env \
    -p 3306:3306 \
    -v $(pwd)/data:/var/lib/mysql \
    -d mysql:5.7.17
