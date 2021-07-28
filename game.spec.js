import { paper, players, rock, scissors, winner } from "./game";
let rockWins = new Map([
    ['player1', 0],
    ['player2', 2]
])
let paperWins = new Map([
    ['player1', 0],
    ['player2', 1]
])
let scissorsWins = new Map([
    ['player1', 2],
    ['player2', 1]
])
let draw = new Map([
    ['player1', 2],
    ['player2', 2]
])
describe('rock-paper-scissors', () => {
    // it('should show winner', () => {
    //     expect(winner(players)).toBe('p1 wins')
    // });
    it('rock should win', () => {
        expect(winner(rockWins)).toBe('rock wins')
    });
    it('paper should win', () => {
        expect(winner(paperWins)).toBe('paper wins')
    });
    it('scissors should win', () => {
        expect(winner(scissorsWins)).toBe('scissors wins')
    });
    it('should be draw', () => {
        expect(winner(draw)).toBe('its draw')
    });
    
});