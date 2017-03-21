const mysql       = require('mysql');
const dotenv      = require('dotenv');
const fs          = require('fs');
const moment      = require('moment');

dotenv.config({path:'../.env'});

const NOW = moment().year();

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

const stringToInt = (n) => {
    if (typeof n === 'string') {
        return parseInt(n, 10);
    }

    return null;
};

const stringToFloat = (n) => {
    if (typeof n === 'string') {
        return parseFloat(n, 10);
    }

    return null;
};

const gender = (code) => {
    if (code === null || code === undefined) {
        return 'Inconnu';
    }

    return code === 'Mme' ? 'Femmes' : 'Hommes';
};

const age = (n) => {
    if (n === null || n === undefined) {
        return 'Inconnu';
    }

    if (n < 29) {
        return 'Moins de 29 ans';
    } else if (n < 44) {
        return '30 à 44 ans';
    } else if (n < 59) {
        return '45 à 59 ans';
    } else if (n < 74) {
        return '60 à 74 ans';
    } else if (n >= 74) {
        return '75 ans et plus';
    }

    return 'Inconnu';
};

const csp = (code) => {
    if (code === null || code === undefined) {
        return 'Inconnue';
    }

    if (code < 5) {
        return 'Professions agricoles';
    } else if (code < 13) {
        return 'Professions industrielles et commerciales';
    } else if (code < 24) {
        return 'Salariés du privé';
    } else if (code < 40) {
        return 'Professions libérales';
    } else if (code < 45) {
        return 'Professions de l\'enseignement';
    } else if (code < 54) {
        return 'Personnels des entreprises publiques';
    } else if (code < 58) {
        return 'Divers';
    } else if (code >= 58) {
        return 'Retraités';
    }

    return 'Inconnue';
};

const population = (pop) => {
    if (pop === null || pop === undefined) {
        return 'Inconnue';
    }

    if (pop < 200) {
        return '0 à 199 habitants';
    } else if (pop < 400) {
        return '200 à 399 habitants';
    } else if (pop < 1000) {
        return '400 à 999 habitants';
    } else if (pop < 2000) {
        return '1 000 à 2 000 habitants';
    } else if (pop < 10000) {
        return '2 000 à 10 000 habitants';
    } else if (pop < 40000000) {
        return 'Plus de 10 000 habitants';
    }

    return 'Inconnue';
};

const urbanite = (score) => {
    if (score === null || score === undefined) {
        return 'Inconnu';
    }

    return (score > 0) ? 'Urbaine' : 'Rurale';
};

const chomage = (taux) => {
    if (taux === null || taux === undefined) {
        return 'Inconnu';
    }

    if (taux < 5) {
        return 'Moins de 5%';
    } else if (taux < 10) {
        return 'Entre 5 et 10%';
    } else if (taux < 15) {
        return 'Entre 10 et 15%';
    } else if (taux >= 15) {
        return 'Plus de 15%';
    }

    return 'Inconnu';
};

const mandat = (mdt) => {
    if (
        mdt === 'Maire'                          || 
        mdt === 'Conseiller/ère départemental-e' || 
        mdt === 'Conseiller/ère régional-e'      || 
        mdt === 'Maire délégué-e'                || 
        mdt === 'Député-e'                       || 
        mdt === 'Sénateur/trice'
    ) {
        return mdt;
    }

    return 'Autre';
};

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

const getCandidateTotalSupporters = (connection) => (candidat) =>
    new Promise((resolve, reject) => {
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

const readParrainages = (parrainages) => {
    const newParrainages = parrainages;
    newParrainages.forEach((p) => {
        p.age          = NOW - moment(p.date_naissance, 'YYYY-MM-DD').year();
        p.age_category = age(p.age);
        p.csp_name     = csp(stringToInt(p.csp));
        p.population   = population(stringToInt(p.pop_commune));
        p.urbainite    = urbanite(stringToFloat(p.score_urbanite));
        p.chomage      = chomage(stringToFloat(p.taux_chomage));
        p.sexe         = gender(p.civilite);
        p.mandat       = mandat(p.mandat);
    });

    return newParrainages;
};

const getCandidateInfo = (connection) => (candidat) => Promise.all(
    [
        getCandidateSupporters(connection)(candidat),
        getCandidateTotalSupporters(connection)(candidat)
    ]
).then((results) => ({
    name:              results[0].name,
    total_parrainages: results[1].total_parrainages,
    total_maires:      results[0].total_maires,
    parrainages:       readParrainages(results[0].parrainages),
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

