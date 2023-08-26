function back () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 130)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 120)
}
function forward () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 220)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 220)
}
function doinitial () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 180)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 180)
}
let x = 0
doinitial()
basic.showIcon(IconNames.Heart)
basic.pause(5000)
basic.forever(function () {
    while (ModuleWorld_Digital.Collision(ModuleWorld_Digital.mwDigitalNum.P0P1, ModuleWorld_Digital.enCollision.OCollision)) {
        for (let index = 0; index < 2; index++) {
            back()
            basic.pause(500)
            forward()
            basic.pause(500)
        }
    }
    doinitial()
})
basic.forever(function () {
    while (ModuleWorld_Digital.Collision(ModuleWorld_Digital.mwDigitalNum.P0P1, ModuleWorld_Digital.enCollision.OCollision)) {
        basic.showIcon(IconNames.Skull)
        basic.showIcon(IconNames.No)
    }
    basic.showIcon(IconNames.Happy)
})
basic.forever(function () {
    x = 200
    while (ModuleWorld_Digital.Collision(ModuleWorld_Digital.mwDigitalNum.P0P1, ModuleWorld_Digital.enCollision.OCollision)) {
        music.setVolume(255)
        while (x < 800) {
            x = x + 1
            music.play(music.tonePlayable(x, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        while (x > 200) {
            x = x - 1
            music.play(music.tonePlayable(x, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        }
    }
    music.setVolume(0)
})
