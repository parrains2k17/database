
const _ = require('underscore');

const GENDER_LABELS = [
    'Hommes',
    'Femmes',
];

const CSP_LABELS = [
    'Professions agricoles',
    'Salariés du privé',
    'Professions libérales',
    'Professions de l\'enseignement',
    'Personnels des entreprises publiques',
    'Professions industrielles et commerciales',
    'Divers',
    'Retraités',
    'Inconnue',
];

const AGES_LABELS = [
    'Moins de 29 ans',
    '30 à 44 ans',
    '45 à 59 ans',
    '60 à 74 ans',
    '75 ans et plus',
    'Inconnu',
];

const POPULATION_LABELS = [
    'Inconnue',
    '0 à 199 habitants',
    '200 à 399 habitants',
    '400 à 999 habitants',
    '1 000 à 2 000 habitants',
    '2 000 à 10 000 habitants',
    'Plus de 10 000 habitants',
];

const URBANITE_LABELS = [
    'Inconnu',
    'Urbaine',
    'Rurale',
];

const CHOMAGE_LABELS = [
    'Inconnu',
    'Moins de 5%',
    'Entre 5 et 10%',
    'Entre 10 et 15%',
    'Plus de 15%',
];

const TYPE_LABELS = [
    'Autre',
    'Maire',
    'Conseiller/ère départemental-e',
    'Conseiller/ère régional-e',
    'Maire délégué-e',
    'Député-e',
    'Sénateur/trice',
];

const buildRawData = (labels, groups) => _.object(labels, labels.map(
    (cat) => groups[cat] ? groups[cat].length : 0
));

const buildGenderData = (parrains) => {
    const groups = _.groupBy(
        parrains,
        (supporter) => supporter.sexe
    );

    return buildRawData(GENDER_LABELS, groups);
};

const buildCSPData = (parrains) => {
    const groups = _.groupBy(
        parrains,
        (supporter) => supporter.csp_name
    );

    return buildRawData(CSP_LABELS, groups);
};

const buildAgeData = (parrains) => {
    const groups = _.groupBy(
        parrains,
        (supporter) => supporter.age_category
    );

    return buildRawData(AGES_LABELS, groups);
};

const buildPopData = (parrains) => {
    const groups = _.groupBy(
        parrains,
        (supporter) => supporter.population
    );

    return buildRawData(POPULATION_LABELS, groups);
};

const buildUrbaniteData = (parrains) => {
    const groups = _.groupBy(
        parrains,
        (supporter) => supporter.urbainite
    );

    return buildRawData(URBANITE_LABELS, groups);
};

const buildChomageData = (parrains) => {
    const groups = _.groupBy(
        parrains,
        (supporter) => supporter.chomage
    );

    return buildRawData(CHOMAGE_LABELS, groups);
};

const buildTypeData = (parrains) => {
    const groups = _.groupBy(
        parrains,
        (supporter) => supporter.mandat
    );

    return buildRawData(TYPE_LABELS, groups);
};

const buildStatsAll = (parrains) => ({
    type:   buildTypeData(parrains),
    gender: buildGenderData(parrains),
});

const buildStatsMaires = (parrains) => ({
    gender:    buildGenderData(parrains),
    age:       buildAgeData(parrains),
    csp:       buildCSPData(parrains),
    pop:       buildPopData(parrains),
    urbainite: buildUrbaniteData(parrains),
    chomage:   buildChomageData(parrains),
});

module.exports = {
    buildStatsAll,
    buildStatsMaires,
};

