module.exports = {
	name: "CAC40", // optional, falls back to object key - Liste officielle au 18/12/2022 : https://www.boursier.com/indices/composition/cac-40-FR0003500008,FR.html
	description: "Sites institutionnels - CAC40",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	//skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	skip: false,
	options: {
		//frequency: 60 * 23, // 24 hours
		frequency: 1, // 1 mn
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://www.airliquide.com/fr",
		"https://www.airbus.com/en",
		"https://www.alstom.com/fr",
		"https://france.arcelormittal.com",
		"https://www.axa.com/fr/",
		"https://group.bnpparibas",
		"https://www.bouygues.com",
		"https://www.capgemini.com/fr-fr/",
		"https://www.carrefour.com/fr",
		"https://www.credit-agricole.com",
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
		"https://www.teleperformance.com/fr-fr/",
		"https://www.thalesgroup.com/fr",
		"https://totalenergies.com/fr",
		"https://www.urw.com/fr-FR",
		"https://www.veolia.com/fr",
		"https://www.vinci.com",
		"https://www.vivendi.com",
		"https://fr.worldline.com/fr/home.html",
		
		

	]
};