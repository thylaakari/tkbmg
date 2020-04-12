"use strict";

class Init {

    isDev = true // remove animations and sounds

    from = 1
    to = 6

    constructor() {
        if (!this.isDev) {
            this.rotateCrossLeft()
            this.rotateCrossRight()

            document.getElementById('lucifer_audio').play()
        }

        document.getElementById('generate_btn').style.display = 'none'
        document.getElementById('song').style.display = 'block'

        const title = this.generateSongTitle()
        const song = this.generateSong()

        document.getElementById('title').innerHTML = title
        document.getElementById('verse1').innerHTML = song[0]
        document.getElementById('chorus').innerHTML = song[1]
        document.getElementById('verse2').innerHTML = song[2]

        this.setTitle('Satan')
        window.location.href += "#song"
    }

    generateString() {
        const count = getRandInRange(this.from, this.to)
        if (count === 1) {
            const first = getRandWord(speeches)
            if (first.speech === predl) {
                const afterPredl = getRandWord(speechesAfterPredl)
                first.word = first.word + ' ' + afterPredl.word
            }
            return first.word;
        }
        if (count > 1) {
            const first = getRandWord(speeches)
            if (first.speech === predl) {
                const afterPredl = getRandWord(speechesAfterPredl)
                first.word = first.word + ' ' + afterPredl.word
            }
            let w = first
            let string = ''
            for (let i = 0; i < count; i++) {
                w = this.generateNextWordFromPrev(first);
                string += w.word + ' '
            }
            return string
        }
    }

    generateNextWordFromPrev(word) {
        const next = getRandWordDep(word.speech);
        const deps = checkDepBetweenWords(word.speech, next);
        if (deps.word === 'is') {
            const afterIs =  wordsAfterIs();
            deps.word += ' ' + afterIs.word;
            return deps;
        }
        if (deps.speech === predl) {
            const afterPredl = getRandWord(speechesAfterPredl);
            deps.word = deps.word + ' ' + afterPredl.word;
            return deps;
        }
        if (deps.word === 'I') {
            const after = getRandWord(speechesAfterSobsmest);
            if (after.word === 'be') {
                after.word = 'am';
                return after;
            }
        }
        if (deps.word === 'you') {
            const after = getRandWord(speechesAfterSobsmest);
            if (after.word === 'be') {
                after.word = 'are';
                return after;
            }
        }
        if (deps.word === 'he' ||
            deps.word === 'she' ||
            deps.word === 'it' ||
            deps.word === 'we' ||
            deps.word === 'they'
        ) {
            const after = getRandWord(speechesAfterSobsmest)
            if (after.speech === verbs) return verbAfterName(after)
            return after
        }
        return deps;
    }

    generateStrings(countWords) {
        let string = ''
        for (let i = 0; i < countWords; i++) {
            string += this.generateString() + '<br>'
        }
        return string
    }

    generateSong() {
        const verse1 = this.generateStrings(8)
        const chorus = this.generateStrings(4)
        const verse2 = this.generateStrings(8)
        return [verse1, chorus, verse2]
    }
    generateSongTitle() {
        return this.generateStrings(1)
    }

    setTitle(title) {
        // console.log(document.title)
        document.title = title
    }
    getRandomBetween(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        return Math.round(rand)
    }

    rotateCrossLeft() {
        document.getElementById('cross_left').setAttribute('class', 'content__cross-left animated rotateOutLeft')
        document.getElementById('cross_left_img').setAttribute('class', 'shake-little')
    }
    rotateCrossRight() {
        document.getElementById('cross_right').setAttribute('class', 'content__cross-right sm__hide animated rotateOutRight')
        document.getElementById('cross_right_img').setAttribute('class', 'shake-little')
    }

}

