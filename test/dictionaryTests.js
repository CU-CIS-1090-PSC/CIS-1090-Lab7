import linear from "../dictionary-linear-search.js";
import indexed from "../dictionary-index-search.js";
import binary from "../dictionary-binary-search.js";

import assert from "assert";

const searches = {
    "Linear": linear,
    //❓ Question 5, uncomment the following line
    "Indexed": indexed,
    
    //❓ Question 7, uncomment the following line.
    "Binary": binary
}

const goodWords = [
    "aardvark",
    "fermenting",
    "photograph",
    "zygotes",
];

const badWords = [
    "squanchy",
    "cromulent"
]

describe("Dictionary Functional Tests:", function () {

    for (const name in searches) {
        const search = searches[name];

        describe(`Testing ${name} functionality...`, function () {
            for (const word of goodWords) {
                it(`Finds the word ${word}`, function () {
                    assert.ok(search(word));
                });
            }

            for (const word of badWords) {
                it(`Does not find the word ${word}`, function () {
                    assert.ok(!search(word));
                });
            }
        });
    }

});

/*
describe("Dictionary Speed Tests:", function(){
    this.timeout(5000); 
    for (const name in searches) {
        const search = searches[name];

        it(`Testing ${name} speed...`, function () {
            for ( let i = 0; i < 10000; i++ ){
                for (const word of goodWords)
                    search(word);
                for (const word of badWords)
                    search(word);
            }
        });
    };
});*/