"use strict";

class Init {

    constructor() {
        // this.rotateCrossLeft()
        // this.rotateCrossRight()
        //
        // document.getElementById('lucifer_audio').play()

        document.getElementById('generate_btn').setAttribute('class', 'content__btn d-none')
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
