let Tempo = 0
servos.P0.setAngle(0)
let TimeRef = 0
basic.forever(function () {
    Tempo = input.runningTime() - TimeRef
    if (Tempo < 10000) {
        servos.P0.setAngle(0)
    } else {
        servos.P0.setAngle(90)
        basic.pause(1000)
        TimeRef = input.runningTime()
    }
})
