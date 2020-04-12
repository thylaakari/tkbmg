const speeches = [
    'names',
    'verbs',
    'predl',
    'pril',
    'sobsmest'
];

// return obj = .word && .speech
function getRandWord(arr) {
    if (!arr) console.log('Array is not defined! Arr: ' + arr);
    const numSpeech = Math.floor(Math.random() * arr.length);
    const speech = getSpeechFromArray(arr[numSpeech]);
    if (!speech) console.log('Speech is not defined! Speech: ' + speech + '. From array: ' + arr[numSpeech]);
    const numWord = Math.floor(Math.random() * speech.length);
    return obj = {
        word: speech[numWord],
        speech: speech
    };
}

// return obj
function checkDepBetweenWords(speech, second) {
    if (speech === names && second.speech === verbs) return verbAfterName(second);
    return second;
}

//return string
function getRandWordDep(arr) {
    const rules = checkRulesAfter(arr);
    return getRandWord(rules);
}

// return string
function checkRulesAfter(arr) {
    switch (arr) {
        case names:
            return speechesAfterNames;
            break;
        case verbs:
            return speechesAfterVerbs;
            break;
        case predl:
            return speechesAfterPredl;
            break;
        case pril:
            return speechesAfterPril;
            break;
        case sobsmest:
            return speechesAfterSobsmest;
            break;
    }
}

//return arr
function getSpeechFromArray(arr) {
    switch (arr) {
        case 'names':
            return names;
            break;
        case 'verbs':
            return verbs;
            break;
        case 'predl':
            return predl;
            break;
        case 'pril':
            return pril;
            break;
        case 'sobsmest':
            return sobsmest;
            break;
    }
}

//return int
function getRandInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}