
Data work of the Parrains2017 project
======================================

The idea here is to run a big SQL query then generate a pretty JSON file.

# Run the MYSQL database with docker

```
cp .env.default .env
vi .env # change password
./run.sh
```

# Create tables

Use `create_database.sql`.

Import corresponding data from .csv files (be sure float use '.' and not ',').

# Sources

Data sources :
    - [Conseil Constitutionnel](https://presidentielle2017.conseil-constitutionnel.fr/les-parrainages/tous-les-parrainages/)
    - [Data.gouv.fr](https://www.data.gouv.fr/fr/)

See `./sources/` for files.

# Build the JSON

```
cd json_builder
node -v # >= 7.4
npm install
node json_builder.js
```

