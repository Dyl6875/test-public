radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.onReceivedValue(function (name, value) {
    basic.showString("" + (input.temperature()))
})
radio.setGroup(105)
led.plotBarGraph(
radio.receivedPacket(RadioPacketProperty.SignalStrength),
128
)
