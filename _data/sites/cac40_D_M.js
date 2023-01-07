module.exports = {
	name: "CAC40", // optional, falls back to object key - Liste officielle au 18/12/2022 : https://www.boursier.com/indices/composition/cac-40-FR0003500008,FR.html
	description: "Sites institutionnels des valeurs du CAC40 - D à M",
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
		"https://www.danone.com/fr.html",
		"https://www.3ds.com/fr/",
		"https://www.engie.com",
		"https://www.essilor.com/fr/",
		"https://www.eurofins.com/",
		"https://www.hermes.com/fr/fr",
		"https://www.kering.com/fr/",
		"https://www.legrand.fr",
		"https://www.loreal.com/fr/",
		"https://www.lvmh.fr",
		"https://www.michelin.fr",
	]
};