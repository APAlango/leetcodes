export const diceRotation = (dice: number[]): number => {
  // Leia parim target, milleks teised muuta, koige sagedasem v koige lahedasem teistele
  // Sort dice by occourence count, highest to lowest
  // Convert resulting array to a set.
  // We are left with best candidates to try to rotate everything else to
  // Calculate rotations using each one and return the once with the lowest rotation score
  if (dice.every(f => f === dice[0])) return 0;
  
  const diceSortedByOccourence = dice.sort((a, b) => countOccourences(b, dice) - countOccourences(a, dice));
  const idealFaces = new Set(diceSortedByOccourence);
  let minScore = 9999;
  for (const face of idealFaces) {
    const score = dice.reduce((acc, a) => acc + distanceOfDice(a, face), 0);
    if (score < minScore) minScore = score;
  }
  return minScore;  
}

const countOccourences = (el: number, arr: number[]): number => {
  let count = 0;
  arr.forEach(a => {
    if (a == el) count++;
  })
  return count;
}

const distanceOfDice = (ofFace: number, fromFace: number): number => {
  // Opposites
  // 1-6  --> 2
  // 2-5  --> 2
  // 3-4  --> 2
  if (ofFace === fromFace) return 0;
  const faces = [ofFace, fromFace];
  if (faces.includes(1) && faces.includes(6)) return 2;
  if (faces.includes(2) && faces.includes(5)) return 2;
  if (faces.includes(3) && faces.includes(4)) return 2;
  return 1;
}

const reverseSentenceWords = (sentence: string): string => {
  return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}