enum RadioMessage {
    message1 = 49434
}
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
let cmdVal = 0
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < 10) {
        if (input.buttonIsPressed(Button.A)) {
            cmdVal = 1
            basic.showLeds(`
                # # . . .
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (input.buttonIsPressed(Button.B)) {
            cmdVal = 2
            basic.showLeds(`
                . . . # #
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                `)
        } else {
            cmdVal = 3
            basic.showLeds(`
                . . # . .
                . # . # .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    } else if (input.rotation(Rotation.Pitch) < 40 && input.rotation(Rotation.Pitch) > 10) {
        cmdVal = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (input.rotation(Rotation.Pitch) > 70) {
        if (input.buttonIsPressed(Button.B)) {
            cmdVal = 4
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                # # . . .
                `)
        } else if (input.buttonIsPressed(Button.A)) {
            cmdVal = 5
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . #
                . . . # #
                `)
        } else {
            cmdVal = 6
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . # . # .
                . . # . .
                `)
        }
    }
    radio.sendNumber(cmdVal)
})
