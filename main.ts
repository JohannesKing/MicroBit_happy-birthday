input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1; index++) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Quarter))
    }
    for (let index = 0; index < 1; index++) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Quarter))
    }
    for (let index = 0; index < 1; index++) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
    }
    for (let index = 0; index < 1; index++) {
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Double))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # # # .
        # # . # #
        # . . . #
        # # . # #
        . # # # .
        `)
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(622, music.beat(BeatFraction.Quarter))
    music.playTone(740, music.beat(BeatFraction.Whole))
    basic.clearScreen()
    radio.sendString("fuck off unity")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # . # # #
        # . # . .
        # . # # #
        # . # . #
        # . # # #
        `)
})
