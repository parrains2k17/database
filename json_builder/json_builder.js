const mysql       = require('mysql');
const dotenv      = require('dotenv');
const fs          = require('fs');
const moment      = require('moment');
const _           = require('underscore');

const statsHelper = require('./stats');

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

const LISTS_ORDER = {
    LEXG:            1,
    LCOM:            2,
    LFG:             3,
    LPG:             4,
    LSOC:            5,
    LUG:             6,
    LDVG:            7,
    LVEC:            8,
    LMDM:            9,
    LUC:             10,
    LUDI:            11,
    LDVD:            12,
    LUD:             13,
    LUMP:            14,
    LFN:             15,
    LEXD:            16,
    LDIV:            17,
    LSE:             20,
};

const getListeOrder = (liste) => {
    return LISTS_ORDER[liste] || 20;
};

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
        return 'Unknown';
    }

    return code === 'Mme' ? 'Women' : 'Men';
};

const age = (n) => {
    if (n === null || n === undefined) {
        return 'Unknown';
    }

    if (n < 29) {
        return 'Less than 29';
    } else if (n < 44) {
        return '30 to 44';
    } else if (n < 59) {
        return '45 to 59';
    } else if (n < 74) {
        return '60 to 74';
    } else if (n >= 74) {
        return '75 and more';
    }

    return 'Unknown';
};

const csp = (code) => {
    if (code === null || code === undefined) {
        return 'Unknown';
    }

    if (code < 5) {
        return 'Agricultural';
    } else if (code < 13) {
        return 'Industrial and commercial';
    } else if (code < 24) {
        return 'Private sector employees';
    } else if (code < 40) {
        return 'Liberal profession';
    } else if (code < 45) {
        return 'Education';
    } else if (code < 54) {
        return 'Public sector employees';
    } else if (code < 58) {
        return 'Various';
    } else if (code >= 58) {
        return 'Retired';
    }

    return 'Unknown';
};

const population = (pop) => {
    if (pop === null || pop === undefined) {
        return 'Unknow';
    }

    if (pop < 200) {
        return '0 to 199';
    } else if (pop < 400) {
        return '200 to 399';
    } else if (pop < 1000) {
        return '400 to 999';
    } else if (pop < 2000) {
        return '1 000 to 2 000';
    } else if (pop < 10000) {
        return '2 000 to 10 000';
    } else if (pop < 40000000) {
        return 'More than 10 000';
    }

    return 'Unknow';
};

const urbanite = (score) => {
    if (score === null || score === undefined) {
        return 'Unknown';
    }

    return (score > 0) ? 'Urban' : 'Rural';
};

const chomage = (taux) => {
    if (taux === null || taux === undefined) {
        return 'Unknown';
    }

    if (taux < 5) {
        return 'Less than 5%';
    } else if (taux < 10) {
        return 'Between 5 and 10%';
    } else if (taux < 15) {
        return 'Between 10 and 15%';
    } else if (taux >= 15) {
        return 'More than 15%';
    }

    return 'Unknown';
};

const translateMandat = (mdt) => {
    switch (mdt) {
        case 'Maire':
            return 'Mayor';
        case 'Conseiller/ère départemental-e':
            return 'Departmental councillor';
        case 'Conseiller/ère régional-e':
            return 'Regional councillor';
        case 'Maire délégué-e':
            return 'Deputy Mayor';
        case 'Député-e':
            return 'Deputy';
        case 'Sénateur/trice':
            return 'Senator';
    }
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
        return translateMandat(mdt);
    }

    return 'Other';
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
        p.maire        = p.mandat === 'Mayor';
    });

    return _.sortBy(newParrainages, (p) => getListeOrder(p.liste));
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

const addStats = (candidats) => {
    Object.values(candidats).forEach((candidat) => {
        const maires = candidat.parrainages.filter((p) => p.maire);

        candidat.stats = statsHelper.buildCandidateStats(
            candidat.parrainages,
            maires
        );
    });

    // avearge here
    const stats = statsHelper.averageStats(candidats);
    console.log(stats);

    return {
        candidats,
        stats,
    };
};

const saveResults = (data) =>  new Promise((resolve, reject) => {
    console.log(data.stats);
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
        .then((result) => {
            const data = {};
            result.forEach((element) => {
                data[element.name] = element;
            });

            return data;
        })
        .then(addStats)
        .then(saveResults)
        .catch(console.error)
        .then(() => {
            connection.end(function(err) {
                console.log('The connection is terminated now');
            });
        });
});

