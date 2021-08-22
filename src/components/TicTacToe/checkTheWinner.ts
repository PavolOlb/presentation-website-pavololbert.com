import { AnyARecord } from "dns";

const TIC_TAC_TOE_WINNER_ROW_COUNT = 5;

/**
 * this function reverse order of columns
 */

const reverseColsMatrix = <T>(matrix: T[][]): T[][] =>
  matrix.map((row) => [...row].reverse());

/**
 * inspiration
 * https://stackoverflow.com/a/59171026/8995887
 */
const transpose = <T>(array: T[][]): T[][] =>
  array.map((_r, i) => array.map((c) => c[i]));

const getDiagonals = <T>(matrix: T[][]): T[][] => {
  const result: T[][] = [];
  const matrixSize = matrix.length;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      const rowIndex = matrixSize - 1 + i - j;
      result[rowIndex] = result[rowIndex] === undefined ? [] : result[rowIndex];
      result[rowIndex].push(matrix[i][j]);
    }
  }
  return result;
};

const getSecondaryDiagonals = <T>(matrix: T[][]): T[][] =>
  getDiagonals(reverseColsMatrix(matrix));

/**
 * inspiration:
 * https://stackoverflow.com/a/64535426/8995887
 */
const nonNullableLongestSequence = <T>(seq: T[]): [number, T | null] => {
  let maxCount = 0;
  let maxValue: T | null = null;
  let curCount = 0;
  let curItem: T | null = null;
  let prevItem: T | null = null;
  let l = seq.length + 2; // +1+1 to finish last sequence and compare 'undefined' with previous

  for (let i = 0; i < l; ++i) {
    curItem = seq[i];
    if (curItem === null || curItem === undefined) {
      if (curCount > maxCount) {
        maxCount = curCount;
        maxValue = prevItem;
      }
      curCount = 0;
      prevItem = curItem;
    } else if (curItem === prevItem) {
      curCount++;
    } else {
      if (curCount > maxCount) {
        maxCount = curCount;
        maxValue = prevItem;
      }
      curCount = 1;
      prevItem = curItem;
    }
  }
  return [maxCount, maxValue];
};
//Checking if there is a winning combinations
const checkWinnerMatrixSequence = <T>(matrix: T[][]) => {
  const res = matrix
    .map((row) => nonNullableLongestSequence(row))
    .find(([maxCount]) => maxCount! >= TIC_TAC_TOE_WINNER_ROW_COUNT);
  if (res === undefined) {
    return;
  }
  return res !== null ? res[1] : null;
};
export const checkWinner = (
  matrix: (null | "X" | "O")[][],
  winnerIsFound: (arg: "X" | "O") => void
) => {
  const rows = matrix;
  const columns = transpose(matrix);
  const mainDiagonals = getDiagonals(matrix);
  const secondaryDiagonals = getSecondaryDiagonals(matrix);

  const winner1 = checkWinnerMatrixSequence(rows);
  const winner2 = checkWinnerMatrixSequence(columns);
  const winner3 = checkWinnerMatrixSequence(mainDiagonals);
  const winner4 = checkWinnerMatrixSequence(secondaryDiagonals);

  if (winner1) {
    winnerIsFound(winner1);
  }
  if (winner2) {
    winnerIsFound(winner2);
  }
  if (winner3) {
    winnerIsFound(winner3);
  }
  if (winner4) {
    winnerIsFound(winner4);
  }
  return null;
};
