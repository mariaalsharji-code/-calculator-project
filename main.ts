let A = 0
let B = 0
input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    A += 1
    basic.showNumber(A)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(A + B)
})
input.onButtonPressed(Button.B, function () {
    B += 1
    basic.showNumber(B)
})
