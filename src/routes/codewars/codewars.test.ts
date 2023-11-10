import { expect, test } from 'vitest';
import { diceRotation } from './solutions'

test('Dice rotation works as expected', () => {
  const dice1 = [1, 1, 1, 1, 1, 6];
  const label1 = 2;
  const dice2 = [1, 2, 3];
  const label2 = 2;
  const dice3 = [3, 3, 3];
  const label3 = 0;
  const dice4 = [1, 6, 2, 3];
  const label4 = 3;
  expect(diceRotation(dice1)).toBe(label1);
  expect(diceRotation(dice2)).toBe(label2);
  expect(diceRotation(dice3)).toBe(label3);
  expect(diceRotation(dice4)).toBe(label4);
})