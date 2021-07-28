import { paper, rock, scissors, winner } from "./game";
let rockWins = new Map([
    ['player1', rock],
    ['player2', scissors]
])
let paperWins = new Map([
    ['player1', rock],
    ['player2', paper]
])
let scissorsWins = new Map([
    ['player1', scissors],
    ['player2', paper]
])
let draw = new Map([
    ['player1', scissors],
    ['player2', scissors]
])
describe('rock-paper-scissors', () => {
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