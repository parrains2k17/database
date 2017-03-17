const mysql       = require('mysql');
const dotenv      = require('dotenv');
const fs          = require('fs');
dotenv.config({path:'../.env'});

const connection  = mysql.createConnection({
    host        : process.env.MYSQL_HOST,
    port        : process.env.MYSQL_PORT,
    user        : process.env.MYSQL_ID,
    password    : process.env.MYSQL_PASSWORD,
    database    : process.env.MYSQL_DATABASE
});

const candidats = [
                    "ALLIOT-MARIE Michèle", 
                    "ARTHAUD Nathalie", 
                    "ASSELINEAU François", 
                    "CHEMINADE Jacques", 
                    "DUPONT-AIGNAN Nicolas",
                    "FAUDOT Bastien",
                    "FILLON François",
                    "GORGES Jean-Pierre",
                    "GUAINO Henri",
                    "HAMON Benoit",
                    "JARDIN Alexandre",
                    "LARROUTUROU Pierre",
                    "LASSALLE Jean",
                    "LE PEN Marine",
                    "MACRON Emmanuel",
                    "MARCHANDISE Charlotte",
                    "MELENCHON Jean-Luc",
                    "POUTOU Philippe",
                    "TAUZIN Didier",
                    "TEMARU Oscar",
                    "YADE Rama"
                ];

const getCandidateSupporters = (connection) => (candidat) => new Promise((resolve, reject) => {
    connection.query({
        sql: 'SELECT * FROM `parrainages_enrichis` WHERE `candidat` = ?',
        timeout: 36000, // 36.000s :-) 
        values: candidat
    }, function (error, results, fields) {
        if (error) {
            reject(error);
            return;
        }

        resolve({
            name: candidat,
            parrainages: results,
            total_maires: results.length,
        });
    });
 
});

const getCandidateTotalSupporters = (connection) => (candidat) => new Promise((resolve, reject) => {
    connection.query({
        sql: 'SELECT COUNT(*) as count FROM `parrainages` WHERE `Candidate_parrainee` = ?',
        timeout: 36000, // 36.000s :-) 
        values: candidat
    }, function (error, results, fields) {
        if (error) {
            reject(error);
            return;
        }

        resolve({
            total_parrainages: results[0].count,
        });
    });
});

const getCandidateInfo = (connection) => (candidat) => Promise.all(
        [getCandidateSupporters(connection)(candidat), getCandidateTotalSupporters(connection)(candidat)]
    )
    .then((results) => ({
        name: results[0].name,
        total_parrainages: results[1].total_parrainages,
        total_maires: results[0].total_maires,
        parrainages: results[0].parrainages,
    }));

const saveResults = (result) =>  new Promise((resolve, reject) => {
    const data = {};
    result.forEach( function(element) {
        data[element.name] = element;
        
    });

    fs.writeFile('parrainages.json', JSON.stringify(data), (err) => { 
        if (err) {
            reject(err);
            return;
        }

        console.log('File wrtitten');
        resolve();
    });
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting : ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);

    Promise.all(candidats.map(getCandidateInfo(connection)))
        .then(saveResults)
        .catch(console.error)
        .then(() => {
            connection.end(function(err) {
                console.log('The connection is terminated now');
            });
        });
});


// {


// 'hfslqkdhfjk' : {
//     name: 'àfsnqdkjlfh'
// }
// }