import { winner } from "./game";
const p1 = 0
const p2 = 2
describe('rock-paper-scissors', () => {
    it('should show winner', () => {
        expect(winner(p1, p2)).toBe('p1 wins')
    });
});