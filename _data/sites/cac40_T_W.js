module.exports = {
	name: "CAC40_T_W", // optional, falls back to object key - Liste officielle au 18/12/2022 : https://www.boursier.com/indices/composition/cac-40-FR0003500008,FR.html
	description: "Sites institutionnels des valeurs du CAC40 - T à W",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	//skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		// Lancer le build sur netlify par tranche de 10 sites sinon le BUILD ne se fait pas (retry with latest commit branch)
		frequency: 60 * 23, // 24 hours
		//frequency: 1, // 1 mn
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://www.teleperformance.com/fr-fr/",
		"https://www.thalesgroup.com/fr",
		"https://totalenergies.com/fr",
		"https://www.urw.com/fr-FR",
		"https://www.veolia.com/fr",
		"https://www.vinci.com",
		"https://fr.worldline.com/fr/home.html",
	]
};