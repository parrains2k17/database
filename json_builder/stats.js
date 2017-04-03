
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

const selectors = [
    SELECTOR_GENDER,
    SELECTOR_AGE,
    SELECTOR_CSP,
    SELECTOR_POP,
    SELECTOR_URBANITE,
    SELECTOR_CHOMAGE,
    SELECTOR_LISTE,
    SELECTOR_TYPE,
    SELECTOR_GENDER_ALL,
];

const GENDER_LABELS = [
    'Men',
    'Women',
];

const CSP_LABELS = [
    'Agricultural',
    'Private sector employees',
    'Liberal profession',
    'Education',
    'Public sector employees',
    'Industrial and commercial',
    'Various',
    'Retired',
    'Unknown',
];

const AGES_LABELS = [
    'Less than 29',
    '30 to 44',
    '45 to 59',
    '60 to 74',
    '75 and more',
    'Unknown',
];

const POPULATION_LABELS = [
    'Unknown',
    '0 to 199',
    '200 to 399',
    '400 to 999',
    '1 000 to 2 000',
    '2 000 to 10 000',
    'More than 10 000',
];

const URBANITE_LABELS = [
    'Unknown',
    'Urban',
    'Rural',
];

const CHOMAGE_LABELS = [
    'Unknown',
    'Less than 5%',
    'Between 5 and 10%',
    'Between 10 and 15%',
    'More than 15%',
];

const TYPE_LABELS = [
    'Other',
    'Mayor',
    'Departmental councillor',
    'Regional councillor',
    'Deputy Mayor',
    'Deputy',
    'Senator',
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

const buildCandidateStats = (allParrains, maires) => ({
    SELECTOR_GENDER:     buildGenderData(maires),
    SELECTOR_AGE:        buildAgeData(maires),
    SELECTOR_CSP:        buildCSPData(maires),
    SELECTOR_POP:        buildPopData(maires),
    SELECTOR_URBANITE:   buildUrbaniteData(maires),
    SELECTOR_CHOMAGE:    buildChomageData(maires),
    SELECTOR_TYPE:       buildTypeData(allParrains),
    SELECTOR_GENDER_ALL: buildGenderData(allParrains),
});

const averageStats = (candidats) => {
    const stats = {};
    const nbCandidats = Object.values(candidats).length;

    selectors.forEach((selector) => {
        console.log(selector);
        const selectorStat = Object.values(candidats)
            .reduce((stat, candidat) => {
                const selectorData = candidat.stats[selector];

                if (!selectorData) {
                    return stat;
                }

                Object.keys(selectorData).forEach((key) => {
                    if (!stat[key]) {
                        stat[key] = 0;
                    }
                    stat[key] += selectorData[key] / nbCandidats;
                });

                return stat;
            }, {});


        stats[selector] = selectorStat;
    });

    return stats;
};

module.exports = {
    buildCandidateStats,
    averageStats,
};

