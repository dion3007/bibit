function anagram(strs) {
    let result = {};
    for (let word of strs) {
        let grouping = word.split("")
        var done = false;
        while (!done) {
            done = true;
            for (var i = 1; i < grouping.length; i += 1) {
                if (grouping[i - 1] > grouping[i]) {
                    done = false;
                    var tmp = grouping[i - 1];
                    grouping[i - 1] = grouping[i];
                    grouping[i] = tmp;
                }
            }
        }
        let joinedWord = grouping.join("")
        if (result[joinedWord]) {
            result[joinedWord].push(word);
        } else {
            result[joinedWord] = [word];
        }
    }
    return Object.values(result);
};

console.log(anagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']))