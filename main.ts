input.onSound(DetectedSound.Loud, function () {
    clapNum += 1
    if (clapNum >= 3) {
        basic.showString("Hi, ho, lets go!")
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        for (let index = 0; index < 3; index++) {
            basic.clearScreen()
            basic.pause(200)
            basic.showIcon(IconNames.Heart)
            basic.pause(200)
        }
        clapNum = 0
    } else {
        basic.clearScreen()
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    basic.showString("Shaking, shaking!")
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(100)
        basic.showIcon(IconNames.Square)
        basic.pause(100)
    }
    basic.clearScreen()
})
let clapNum = 0
input.setSoundThreshold(SoundThreshold.Loud, 128)
clapNum = 0
led.setDisplayMode(DisplayMode.Greyscale)
