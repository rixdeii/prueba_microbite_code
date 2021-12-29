input.onButtonPressed(Button.A, function () {
    soundExpression.mysterious.play()
})
input.onSound(DetectedSound.Loud, function () {
	
})
input.onButtonPressed(Button.B, function () {
    if (isPressed) {
        isPressed = false
        basic.showString("fernanda")
    } else {
        isPressed = true
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . # . . .
            . . # . .
            `)
    }
})
let isPressed : boolean;
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
