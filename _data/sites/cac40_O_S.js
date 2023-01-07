module.exports = {
	name: "CAC40_O_S", // optional, falls back to object key - Liste officielle au 18/12/2022 : https://www.boursier.com/indices/composition/cac-40-FR0003500008,FR.html
	description: "Sites institutionnels des valeurs du CAC40 - O à S",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	//skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		// Lancer la génération manuellement sur netlify par tranche de 10 sites sinon le BUILD ne se fait pas
		//frequency: 60 * 23, // 24 hours
		frequency: 1, // 1 mn
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://www.orange.com/fr",
		"https://www.pernod-ricard.com/fr",
		"https://www.publicisgroupe.com/fr",
		"https://www.renaultgroup.com",
		"https://www.safran-group.com/fr",
		"https://www.saint-gobain.com/fr",
		"https://www.sanofi.fr/fr/",
		"https://www.se.com/fr/fr/",
		"https://www.societegenerale.com/fr",
		"https://www.stellantis.com/fr",
		"https://www.st.com/content/st_com/en.html",
	]
};