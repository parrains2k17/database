
SELECT
	# infos sur le maire
	p.NOM											as nom,
	p.Prenom										as prenom,
	p.Civilite 										as civilite,
	p.Date_de_publication							as date_publication,
	m.naissance										as date_naissance,
	m.csp,
	e.codnualiste									as liste,

	# commune
	p.Circonscription			as nom_commune,
	ca.CODGEO					as code_insee,
	c.Population				as pop_commune,
	c.Urbanite_Ruralite			as urbanite_ruralite,
	c.Score_Urbanite			as score_urbanite,
	co.C_2015 					as taux_chomage,

	# département
	d.code_int 					as code_departement,
	d.nom 						as nom_departement,

	# candidat
	p.Candidate_parrainee 		as candidat

FROM parrainages p
LEFT JOIN departements d 			ON p.Departement = d.nom
LEFT JOIN communes c     			ON p.Circonscription = c.LIBGEO AND (c.DEP = d.code_departement OR CONCAT('0', c.DEP) = d.code_departement)

LEFT JOIN maires m					ON m.codeinsee = c.CODGEO
LEFT JOIN elus e 		 			ON p.Nom = e.nompsn AND p.Prenom = e.prepsn AND p.Circonscription = e.libsubcom AND d.code_departement = e.coddpt

LEFT JOIN communes_appartenance ca  ON (c.CODGEO = ca.CODGEO OR CONCAT('0', c.CODGEO) = ca.CODGEO)
LEFT JOIN chomage co				ON ca.ZONE_EMPLOI = co.ZONE_EMPLOI

WHERE
	p.Mandat = 'Maire';
