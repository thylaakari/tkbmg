const verbs = [
    'go',
    'kill',
    'try',
    'cry',
    'lie',
    'pray',
    'born',
    'fuck',
    'break',
    'can',
    'watch',
    'catch',
    'be',
    'like',
    'approach',
    'take',
    'stop',
    'lay',
    'pull',
    'end',
    'see',
    'sink',
];

const specialVerbs = [
    'can',
    'be'
];

const speechesAfterVerbs = [
    'names',
    'predl',
    'pril',
    'sobsmest'
];

const speechesAfterIs = [
    'names',
    'pril'
];

// return obj
function verbAfterName(word) {
    if (checkSpecialVerbs(word)) return getRulesForSpecialVerbs(word);
    if (word.word.slice(-2) === 'ss' ||
        word.word.slice(-2) === 'zz' ||
        word.word.slice(-2) === 'sh' ||
        word.word.slice(-2) === 'ch' ||
        word.word.slice(-1) === 'x' ||
        word.word.slice(-1) === 'o' ||
        word.word.slice(-3) === 'tch') {
        word.word = word.word + 'es';
        return word;
    }
    if (word.word.slice(-2) === 'ay' ||
        word.word.slice(-2) === 'ey' ||
        word.word.slice(-2) === 'oy' ||
        word.word.slice(-2) === 'uy' ||
        word.word.slice(-2) === 'iy' ||
        word.word.slice(-2) === 'yy') {
        word.word = word.word + 's';
        return word;
    }
    if (word.word.slice(-1) === 'y' && (
        word.word.slice(-2) !== 'ay' ||
        word.word.slice(-2) !== 'ey' ||
        word.word.slice(-2) !== 'oy' ||
        word.word.slice(-2) !== 'uy' ||
        word.word.slice(-2) !== 'iy' ||
        word.word.slice(-2) !== 'yy'
        )) {
        word.word = word.word.substr(0, word.word.length - 1) + 'ies';
        return word;
    }
    word.word = word.word + 's';
    return word;
}

// return obj
function checkSpecialVerbs(word) {
    return specialVerbs.indexOf(word.word) > -1;
}

// return obj
function wordsAfterIs() {
    return getRandWordFromArr(speechesAfterIs);
}

//return obj
function getRulesForSpecialVerbs(word) {
    switch (word.word) {
        case 'can':
            return verbCan(word);
            break;
        case 'be':
            return verbBe(word);
            break;
    }
}

// return string
function verbCan(word) {
    word.word = 'can';
    return word;
}

// return string
function verbBe(word) {
    word.word = 'is';
    return word;
}