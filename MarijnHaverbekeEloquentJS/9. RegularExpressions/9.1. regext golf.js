//'cat'.match(/ca[rt]/);

//'prop'.match(/pr?op/);

//'ferrari'.match(/ferr(et|y|ari)/)[0];

//'dafds as;dlfjasl;kfjaeious, kekioous'.match(/\w+ous\b/g);

//'hello : Vlad'.match(/ [\.\,\:\;]/);

//'vlad'.match(/[\w]{6,}/);

//'eaefaksEEEd;ljweiofj;oasivale'.match(/[^e]+/i);

function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source === "...") return;
    for (let str of yes) if (!regexp.test(str)) {
        console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
        console.log(`Unexpected match for '${str}'`);
    }
}

verify(/ca[rt]/, ["my car", "bad cats"],
    ["camper", "high art"])

verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(/ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/ [.,:;]/,
    ["bad punctuation ."],
    ["escape the period"]);

verify(/[\w]{7}/,
    ["Siebentausenddreihundertzweiundzwanzig"],
    ["no", "three small words"]);

verify(/\b[^\We]+\b/i,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);
