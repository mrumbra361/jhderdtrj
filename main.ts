let número_aleatorio: number = []
let nivel: number = []
let jugadas_microbit: number[] = []
let números_jugadas_hechas: number = []
let índice: number = []
let jugadas_usuario: number[] = []
function llamada_crear_secuencia () {
	
}
input.onPinPressed(TouchPin.P0, function () {
    llamada_evaluar_jugada_de_usario(0)
})
function crear_frecuencia () {
    número_aleatorio = randint(0, 2)
    nivel = nivel + 2
    basic.showString("N")
    basic.showNumber(nivel)
    jugadas_microbit.push(número_aleatorio)
    for (let value of jugadas_microbit) {
        if (value == 0) {
            basic.clearScreen()
            basic.pause(200)
            basic.showIcon(IconNames.Giraffe)
            basic.pause(200)
            basic.clearScreen()
        }
        if (value == 0) {
            basic.clearScreen()
            basic.pause(200)
            basic.showIcon(IconNames.Giraffe)
            basic.pause(200)
            basic.clearScreen()
        }
        if (value == 1) {
            basic.clearScreen()
            basic.pause(200)
            basic.showIcon(IconNames.Ghost)
            basic.pause(200)
            basic.clearScreen()
        }
        if (value == 2) {
            basic.clearScreen()
            basic.pause(200)
            basic.showIcon(IconNames.House)
            basic.pause(200)
            basic.clearScreen()
        }
    }
    números_jugadas_hechas = 0
    índice = 0
    jugadas_usuario = []
}
function llamada_reiniciar_juego () {
    índice = 0
    nivel = 0
    números_jugadas_hechas = 0
    jugadas_microbit = []
    jugadas_usuario = []
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
}
input.onButtonPressed(Button.A, function () {
    llamada_reiniciar_juego()
})
input.onPinPressed(TouchPin.P2, function () {
    llamada_evaluar_jugada_de_usario(2)
})
function llamada_evaluar_jugada_de_usario (núm: number) {
	
}
input.onPinPressed(TouchPin.P1, function () {
    llamada_evaluar_jugada_de_usario(1)
})
function evaluar_jugada_de_usuario (núm: number) {
    let núm: number = []
    jugadas_usuario.push(núm)
    if (jugadas_usuario[índice] || jugadas_microbit[índice]) {
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        números_jugadas_hechas += 1
        índice = índice + 1
        if (números_jugadas_hechas || nivel) {
            llamada_crear_secuencia()
        }
    } else {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        basic.showString("Game Over")
        control.reset()
    }
}
