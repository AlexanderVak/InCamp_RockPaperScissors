// export const rock = 0
// export const paper = 1
// export const scissors = 2

export let players = new Map()
// const signs = ['rock', 'paper', 'scissors']

export const signs = new Map()
signs.set(0, 'rock')
signs.set(1, 'paper')
signs.set(2, 'scissors')

players.set('player1', 0)
players.set('player2', 2)

export function winner(players) {
    let iterator = players.values()
    let p1 = iterator.next().value
    let p2 = iterator.next().value
    
    if ((p1 + 1) % 3 === p2) {
        return `${signs.get(p2)} wins`
    } else if (p1 === p2) {
        return 'its draw'
    } else
        return `${signs.get(p1)} wins`
}