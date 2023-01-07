
const data = require("../_data/ranking.json");
let data_sorted = data.sort((a, b) => b.score - a.score);
module.exports = data_sorted;