import * as types from './types';

export function charAdded(index, letter, wordList) {
  return {
    type: types.EXAMPLE,
    index,
    letter,
    wordList,
  };
}
