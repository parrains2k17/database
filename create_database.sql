CREATE TABLE `elus` (
  `coddpt` VARCHAR(255) ,
  `codmindpt` VARCHAR(255),
  `coddpt3car` VARCHAR(255) ,
  `libdpt` varchar(255) ,
  `codsubcom`  VARCHAR(255) ,
  `libsubcom` varchar(255) ,
  `libcom` varchar(255) DEFAULT NULL,
  `libextarr` varchar(255) DEFAULT NULL,
  `typcom` varchar(255) ,
  `popsubcom` INTEGER ,
  `modescrutin` varchar(255) ,
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
  `candidatelucom` varchar(255) ,
  `tour` INTEGER ,
  `nompsn` varchar(255) ,
  `prepsn` varchar(255) ,
  `sexe` varchar(255) ,
  `naissance` date ,
  `csp` INTEGER ,
  `libcsp` varchar(255) ,
  `nat` varchar(255) ,
  `codeinsee` varchar(255) ,
  `age_lors_elec` INTEGER ,
  `codnualisteinitiale` varchar(255) DEFAULT NULL,
  `liblisextinitiale` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS parrainages (
   Civilite              VARCHAR(255)
  ,Nom                   VARCHAR(255)
  ,Prenom                VARCHAR(255)
  ,Mandat                VARCHAR(255)
  ,Circonscription       VARCHAR(255)
  ,Departement           VARCHAR(255)
  ,Candidate_parrainee   VARCHAR(255)
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

CREATE TABLE IF NOT EXISTS parrainages_yannc (
   Candidate                  VARCHAR(255)
  ,Date_de_publication        VARCHAR(255)
  ,Localisation               VARCHAR(255)
  ,Representation             VARCHAR(255)
  ,Mandat                     VARCHAR(255)
  ,Sexe                       VARCHAR(255)
  ,Prenom                     VARCHAR(255)
  ,Nom                        VARCHAR(255)
  ,Identifiant_region         VARCHAR(255)
  ,Region                     VARCHAR(255)
  ,Identifiant_departement    VARCHAR(255)
  ,Departement                VARCHAR(255)
  ,Commune_ou_circonscription VARCHAR(255)
  ,Identifiant                VARCHAR(255)
  ,Population_en_2014         FLOAT
  ,Taille_de_la_commune       VARCHAR(255)
  ,Geocode                    VARCHAR(255)
  ,Prenom_de_ladu_candidate   VARCHAR(255)
  ,Nom_de_ladu_candidate      VARCHAR(255)
  ,Image                      VARCHAR(255)
  ,Credit_de_limage           VARCHAR(255)
  ,Candidate_image_droit      VARCHAR(255)
  ,Source_de_limage           VARCHAR(255)
  ,Site_internet_candidate    VARCHAR(255)
  ,Partimouvement_candidate   VARCHAR(255)
  ,Page_wikipedia_candidate   VARCHAR(255)
  ,Zone_geographique          VARCHAR(255)
  ,Publication                VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS poste (
   Code_commune_INSEE   VARCHAR(255)
  ,Nom_commune          VARCHAR(255)
  ,Code_postal          VARCHAR(255)
  ,Libelle_acheminement VARCHAR(255)
  ,Ligne_5              VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS votes_communes_tour1 (
   Date_de_lexport          VARCHAR(255)
  ,Code_du_departement      VARCHAR(255)
  ,Libelle_du_département   VARCHAR(255)
  ,Code_de_la_commune       VARCHAR(255)
  ,Libelle_de_la_commune    VARCHAR(255)
  ,Inscrits                 INTEGER
  ,Abstentions              INTEGER
  ,_AbsIns                  FLOAT
  ,Votants                  INTEGER
  ,_VotIns                  FLOAT
  ,Blancs_et_nuls           INTEGER
  ,_BlNulsIns               FLOAT
  ,_BlNulsVot               FLOAT
  ,Exprimés                 INTEGER
  ,_ExpIns                  FLOAT
  ,_ExpVot                  FLOAT
  ,Voix_JOLY                INTEGER
  ,_VoixIns_JOLY            FLOAT
  ,_VoixExp_JOLY            FLOAT
  ,Voix_LE_PEN              INTEGER
  ,_VoixIns_LE_PEN          FLOAT
  ,_VoixExp_LE_PEN          FLOAT
  ,Voix_SARKOZY             INTEGER
  ,_VoixIns_SARKOZY         FLOAT
  ,_VoixExp_SARKOZY         FLOAT
  ,Voix_MELENCHON           INTEGER
  ,_VoixIns_MELENCHON       FLOAT
  ,_VoixExp_MELENCHON       FLOAT
  ,Voix_POUTOU              INTEGER
  ,_VoixIns_POUTOU          FLOAT
  ,_VoixExp_POUTOU          FLOAT
  ,Voix_ARTHAUD             INTEGER
  ,_VoixIns_ARTHAUD         FLOAT
  ,_VoixExp_ARTHAUD         FLOAT
  ,Voix_CHEMINADE           INTEGER
  ,_VoixIns_CHEMINADE       FLOAT
  ,_VoixExp_CHEMINADE       FLOAT
  ,Voix_BAYROU              INTEGER
  ,_VoixIns_BAYROU          FLOAT
  ,_VoixExp_BAYROU          FLOAT
  ,Voix_DUPONTAIGNAN        INTEGER
  ,_VoixIns_DUPONTAIGNAN    FLOAT
  ,_VoixExp_DUPONTAIGNAN    FLOAT
  ,Voix_HOLLANDE            INTEGER
  ,_VoixIns_HOLLANDE        FLOAT
  ,_VoixExp_HOLLANDE        FLOAT
);

CREATE TABLE IF NOT EXISTS votes_communes_tour2 (
   date_publication                        VARCHAR(255)
  ,type_election                           VARCHAR(255)
  ,annee_election                          INTEGER
  ,code_region                             VARCHAR(255)
  ,code_region_3car                        VARCHAR(255)
  ,nom_region                              VARCHAR(255)
  ,code_departement                        VARCHAR(255)
  ,code_mon_dep                            VARCHAR(255)
  ,code_departement_3car                   VARCHAR(255)
  ,nom_departement                         VARCHAR(255)
  ,code_commune                            VARCHAR(255)
  ,nom_commune                             VARCHAR(255)
  ,num_tour                                INTEGER
  ,jour                                    INTEGER
  ,mois                                    INTEGER
  ,annee                                   INTEGER
  ,nb_inscrits                             INTEGER
  ,nb_abstentionnistes                     INTEGER
  ,rapport_abstentionsurinscrits           FLOAT
  ,nb_votants                              INTEGER
  ,rapport_votantssurinscrits                 FLOAT
  ,nb_blancs_et_nuls                       INTEGER
  ,rapport_blancsnulssurinscrits              FLOAT
  ,rapport_blancsnulssurvotants               FLOAT
  ,nb_exprimes                             INTEGER
  ,rapport_exprimessurinscrits                FLOAT
  ,rapport_exprimessurvotants                 FLOAT
  ,nb_voix_candidat_HOLLANDE               INTEGER
  ,rapport_voix_candidat_HOLLANDEexprimes  FLOAT
  ,nb_voix_candidat_SARKOZY                INTEGER
  ,rapport_voix_candidat_SARKOZYexprimes   FLOAT
  ,Resultat                                VARCHAR(255)
);

CREATE TABLE maires (
   codeinsee VARCHAR(255)
  ,libdpt    VARCHAR(255)
  ,libsubcom VARCHAR(255)
  ,popsubcom INTEGER
  ,nompsn    VARCHAR(255)
  ,prepsn    VARCHAR(255)
  ,civpsn    VARCHAR(255)
  ,naissance VARCHAR(255)
  ,csp       INTEGER
  ,libcsp    VARCHAR(255)
);

CREATE TABLE departements (
    code_int INTEGER,
    code_departement VARCHAR(255),
    nom VARCHAR(255),
    nom_upper VARCHAR(255),
    nom_lower VARCHAR(255),
    matricule VARCHAR(255)
);

CREATE TABLE regions (
    REGION INTEGER,
    CHEFLIEU VARCHAR(255),
    TNCC INTEGER,
    NCC VARCHAR(255),
    NCCENR VARCHAR(255)
);

CREATE TABLE communes_appartenance (
    CODGEO VARCHAR(255),
    LIBGEO VARCHAR(255),
    DEP VARCHAR(255),
    REG VARCHAR(255),
    EPCI VARCHAR(255),
    NATURE_EPCI VARCHAR(255),
    ARR VARCHAR(255),
    CANTON_VILLE VARCHAR(255),
    ZONE_EMPLOI VARCHAR(255),
    UNITE_URBAINE VARCHAR(255),
    TRANCHE_UNITE_URBAINE VARCHAR(255),
    TRANCHE_DETAILLEE_UNITE_URBAINE VARCHAR(255),
    AIRE_URBAINE VARCHAR(255),
    TRANCHE_AIRE_URBAINE VARCHAR(255),
    CATEGORIE_COMMUNE_AIRE_URBAINE VARCHAR(255),
    BASSIN_VIE VARCHAR(255)
);

CREATE TABLE chomage (
    ZONE_EMPLOI VARCHAR(255),
    LIB_ZONE_EMPLOI VARCHAR(255),
    C_2003 FLOAT,
    C_2004 FLOAT,
    C_2005 FLOAT,
    C_2006 FLOAT,
    C_2007 FLOAT,
    C_2008 FLOAT,
    C_2009 FLOAT,
    C_2010 FLOAT,
    C_2011 FLOAT,
    C_2012 FLOAT,
    C_2013 FLOAT,
    C_2014 FLOAT,
    C_2015 FLOAT
);

CREATE TABLE parrainages_enrichis (
	nom VARCHAR(255),
	prenom VARCHAR(255),
	sexe BOOLEAN,
	date_publication VARCHAR(255),
	date_naissance VARCHAR(255),
	csp VARCHAR(255),
	liste VARCHAR(255),

	nom_commune VARCHAR(255),
	code_insee VARCHAR(255),
	pop_commune VARCHAR(255),
	urbanite_ruralite VARCHAR(255),
	score_urbanite VARCHAR(255),
	taux_chomage VARCHAR(255),

	code_departement VARCHAR(255),
	nom_departement VARCHAR(255),

	candidat VARCHAR(255)
);
