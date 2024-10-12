const fs = require("fs");

const warPlans = {};

warPlans.allPlans = function allPlans() {
    const fileContents = fs.readFileSync(`${__dirname}/warPlans.txt`, "utf-8");

    const arrOfContents = fileContents.split(/\r?\n/);

    return arrOfContents;
};


module.exports = warPlans;