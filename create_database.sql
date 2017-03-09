CREATE TABLE `elus` (
  `coddpt` int(11) ,
  `codmindpt` int(11) ,
  `coddpt3car` int(11) ,
  `libdpt` varchar(255) ,
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
  ,Date_de_publication   VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS communes (
   CODGEO                                                             varchar(10) PRIMARY KEY
  ,Nb_Pharmacies_et_parfumerie                                        INTEGER
  ,Dynamique_Entrepreneuriale                                         INTEGER
  ,Dynamique_Entrepreneuriale_Service_et_Commerce                     INTEGER
  ,Synergie_Medicale_COMMUNE                                          INTEGER
  ,Orientation_Economique                                             VARCHAR(255)
  ,Indice_Fiscal_Partiel                                              FLOAT
  ,Score_Fiscal                                                       FLOAT
  ,Indice_Evasion_Client                                              FLOAT
  ,Score_Evasion_Client                                               FLOAT
  ,Indice_Synergie_Medicale                                           FLOAT
  ,Score_Synergie_Medicale                                            FLOAT
  ,SEG_Croissance_POP                                                 VARCHAR(255)
  ,LIBGEO                                                             VARCHAR(255)
  ,REG                                                                INTEGER
  ,DEP                                                                varchar(10)
  ,Nb_Omnipraticiens_BV                                               INTEGER
  ,Nb_Infirmiers_Liberaux_BV                                          INTEGER
  ,Nb_dentistes_Liberaux_BV                                           INTEGER
  ,Nb_pharmaciens_Liberaux_BV                                         INTEGER
  ,Densite_Medicale_BV                                                INTEGER
  ,Score_equipement_de_sante_BV                                       INTEGER
  ,Indice_Demographique                                               FLOAT
  ,Score_Demographique                                                FLOAT
  ,Indice_Menages                                                     FLOAT
  ,Score_Menages                                                      FLOAT
  ,Population                                                         INTEGER
  ,Evolution_Population                                               INTEGER
  ,Evolution_Pop_                                                     INTEGER
  ,Nb_Menages                                                         INTEGER
  ,Nb_Residences_Principales                                          INTEGER
  ,Nb_proprietaire                                                    INTEGER
  ,Nb_Logement                                                        INTEGER
  ,Nb_Residences_Secondaires                                          INTEGER
  ,Nb_Log_Vacants                                                     INTEGER
  ,Nb_Occupants_Residence_Principale                                  INTEGER
  ,Nb_Femme                                                           INTEGER
  ,Nb_Homme                                                           INTEGER
  ,Nb_Mineurs                                                         INTEGER
  ,Nb_Majeurs                                                         INTEGER
  ,Nb_Etudiants                                                       INTEGER
  ,Nb_Entreprises_Secteur_Services                                    INTEGER
  ,Nb_Entreprises_Secteur_Commerce                                    INTEGER
  ,Nb_Entreprises_Secteur_Construction                                INTEGER
  ,Nb_Entreprises_Secteur_Industrie                                   INTEGER
  ,Nb_Creation_Enteprises                                             INTEGER
  ,Nb_Creation_Industrielles                                          INTEGER
  ,Nb_Creation_Construction                                           INTEGER
  ,Nb_Creation_Commerces                                              INTEGER
  ,Nb_Creation_Services                                               INTEGER
  ,Moyenne_Revenus_Fiscaux_Departementaux                             INTEGER
  ,Moyenne_Revenus_Fiscaux_Regionaux                                  INTEGER
  ,Dep_Moyenne_Salaires_Horaires                                      FLOAT
  ,Dep_Moyenne_Salaires_Cadre_Horaires                                FLOAT
  ,Dep_Moyenne_Salaires_Prof_Intermediaire_Horaires                   FLOAT
  ,Dep_Moyenne_Salaires_Employe_Horaires                              FLOAT
  ,Dep_Moyenne_Salaires_Ouvrie_Horaires                               FLOAT
  ,Reg_Moyenne_Salaires_Horaires                                      FLOAT
  ,Reg_Moyenne_Salaires_Cadre_Horaires                                FLOAT
  ,Reg_Moyenne_Salaires_Prof_Intermediaire_Horaires                   FLOAT
  ,Reg_Moyenne_Salaires_Employe_Horaires                              FLOAT
  ,Reg_Moyenne_Salaires_Ouvrie_Horaires                               FLOAT
  ,Valeur_ajoutee_regionale                                           FLOAT
  ,Urbanite_Ruralite                                                  VARCHAR(255)
  ,Score_Urbanite                                                     FLOAT
  ,Nb_Atifs                                                           INTEGER
  ,Nb_Actifs_Salaries                                                 INTEGER
  ,Nb_Actifs_Non_Salaries                                             INTEGER
  ,Nb_Logement_Secondaire_et_Occasionnel                              INTEGER
  ,Nb_Hotel                                                           INTEGER
  ,Capacite_Hotel                                                     INTEGER
  ,Nb_Camping                                                         INTEGER
  ,Capacite_Camping                                                   INTEGER
  ,Dynamique_Demographique_BV                                         VARCHAR(255)
  ,Taux_etudiants                                                     INTEGER
  ,Taux_Propriete                                                     INTEGER
  ,Dynamique_Demographique_INSEE                                      INTEGER
  ,Capacite_Fisc                                                      INTEGER
  ,Capacite_Fiscale                                                   INTEGER
  ,Moyenne_Revnus_fiscaux                                             VARCHAR(255)
  ,Taux_Evasion_Client                                                INTEGER
  ,Nb_Education_sante_action_sociale                                  INTEGER
  ,Nb_Services_personnels_et_domestiques                              INTEGER
  ,Nb_Sante_action_sociale                                            INTEGER
  ,Nb_Industries_des_biens_intermediaires                             INTEGER
  ,Nb_de_Commerce                                                     INTEGER
  ,Nb_de_Services_aux_particuliers                                    INTEGER
  ,Nb_institution_de_Education_sante_action_sociale_administration    INTEGER
  ,PIB_Regionnal                                                      INTEGER
  ,SEG_Environnement_Demographique_ObsolËte                           VARCHAR(255)
  ,Score_Croissance_Population                                        FLOAT
  ,Score_Croissance_Entrepreneuriale                                  FLOAT
  ,Score_VA_Region                                                    FLOAT
  ,Score_PIB                                                          FLOAT
  ,Environnement_Demographique                                        VARCHAR(255)
  ,Fidelite                                                           VARCHAR(255)
  ,SYN_MEDICAL                                                        VARCHAR(255)
  ,Seg_Cap_Fiscale                                                    VARCHAR(255)
  ,Seg_Dyn_Entre                                                      VARCHAR(255)
  ,DYN_SetC                                                           VARCHAR(255)
  ,CP                                                                 VARCHAR(10)
) DEFAULT CHARSET=latin1_general_ci;
