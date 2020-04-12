"use strict";

class Init {

    isDev = false

    constructor() {
        if (!this.isDev) {
            this.rotateCrossLeft()
            this.rotateCrossRight()

            document.getElementById('lucifer_audio').play()
        }

        document.getElementById('generate_btn').style.display = 'none'
        document.getElementById('song').style.display = 'block'

        const song = this.generateSong()

        document.getElementById('verse1').innerHTML = song[0]
        document.getElementById('chorus').innerHTML = song[1]
        document.getElementById('verse2').innerHTML = song[2]

        this.setTitle('Satan')
        window.location.href += "#song"
    }

    generateString() {
        return 'Levushka krasa toka esli'
    }

    generateWords(countWords) {
        let string = ''
        for (let i = 0; i < countWords; i++) {
            string += this.generateString() + '<br>'
        }
        return string
    }

    generateSong() {
        const verse1 = this.generateWords(8)
        const chorus = this.generateWords(4)
        const verse2 = this.generateWords(8)
        return [verse1, chorus, verse2]
    }

    setTitle(title) {
        // console.log(document.title)
        document.title = title
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

