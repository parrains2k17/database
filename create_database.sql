CREATE TABLE `elus` (
  `coddpt` int(11) NOT NULL,
  `codmindpt` int(11) NOT NULL,
  `coddpt3car` int(11) NOT NULL,
  `libdpt` varchar(255) NOT NULL,
  `codsubcom` int(11) NOT NULL,
  `libsubcom` varchar(255) NOT NULL,
  `libcom` varchar(255) DEFAULT NULL,
  `libextarr` varchar(255) DEFAULT NULL,
  `typcom` varchar(255) NOT NULL,
  `popsubcom` int(11) NOT NULL,
  `modescrutin` varchar(255) NOT NULL,
  `typsubcom` varchar(255) DEFAULT NULL,
  `numliste` varchar(255) DEFAULT NULL,
  `codnualiste` varchar(255) DEFAULT NULL,
  `nomliste` varchar(255) DEFAULT NULL,
  `liblisext` varchar(255) DEFAULT NULL,
  `numordcand` varchar(255) DEFAULT NULL,
  `teteliste` varchar(255) DEFAULT NULL,
  `candidatepci` varchar(255) DEFAULT NULL,
  `elucom` varchar(255) DEFAULT NULL,
  `eluepci` varchar(255) DEFAULT NULL,
  `elusecteur` varchar(255) DEFAULT NULL,
  `candidatelucom` varchar(255) NOT NULL,
  `tour` int(11) NOT NULL,
  `nompsn` varchar(255) NOT NULL,
  `prepsn` varchar(255) NOT NULL,
  `sexe` varchar(255) NOT NULL,
  `naissance` date NOT NULL,
  `csp` int(11) NOT NULL,
  `libcsp` varchar(255) NOT NULL,
  `nat` varchar(255) NOT NULL,
  `codeinsee` int(11) NOT NULL,
  `age_lors_elec` int(11) NOT NULL,
  `codnualisteinitiale` varchar(255) DEFAULT NULL,
  `liblisextinitiale` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS parrainages (
   Civilite              VARCHAR(255) NOT NULL
  ,Nom                   VARCHAR(255) NOT NULL
  ,Prenom                VARCHAR(255) NOT NULL
  ,Mandat                VARCHAR(255) NOT NULL
  ,Circonscription       VARCHAR(255)
  ,Departement           VARCHAR(255) NOT NULL
  ,Candidate_parrainee   VARCHAR(255) NOT NULL
  ,Date_de_publication   DATE  NOT NULL
);
