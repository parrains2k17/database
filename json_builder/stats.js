
const _ = require('underscore');

const SELECTOR_GENDER   = 'SELECTOR_GENDER';
const SELECTOR_AGE      = 'SELECTOR_AGE';
const SELECTOR_CSP      = 'SELECTOR_CSP';
const SELECTOR_POP      = 'SELECTOR_POP';
const SELECTOR_URBANITE = 'SELECTOR_URBANITE';
const SELECTOR_CHOMAGE  = 'SELECTOR_CHOMAGE';
const SELECTOR_LISTE    = 'SELECTOR_LISTE';

const SELECTOR_TYPE       = 'SELECTOR_TYPE';
const SELECTOR_GENDER_ALL = 'SELECTOR_GENDER_ALL';

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

const buildStats = (allParrains, maires) => ({
    SELECTOR_GENDER:     buildGenderData(maires),
    SELECTOR_AGE:        buildAgeData(maires),
    SELECTOR_CSP:        buildCSPData(maires),
    SELECTOR_POP:        buildPopData(maires),
    SELECTOR_URBANITE:   buildUrbaniteData(maires),
    SELECTOR_CHOMAGE:    buildChomageData(maires),
    SELECTOR_TYPE:       buildTypeData(allParrains),
    SELECTOR_GENDER_ALL: buildGenderData(allParrains),
});

module.exports = buildStats;

