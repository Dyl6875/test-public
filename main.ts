radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.onReceivedValue(function (name, value) {
    basic.showString("" + (input.temperature()))
    basic.showString(name)
    basic.showString("" + (value))
})
radio.setGroup(105)
