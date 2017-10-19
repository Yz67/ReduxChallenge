import * as types from './types';

export function openModal(day, time) {
  return {
    type: types.OPEN_MODAL,
    day,
    time,
  };
}

export function closeModal(day, time) {
  return {
    type: types.CLOSE_MODAL,
    day,
    time,
  };
}

export function changeName(day, time, name) {
  return {
    type: types.CHANGE_NAME,
    day,
    time,
    name,
  };
}

export function changeNumber(day, time, number) {
  return {
    type: types.CHANGE_NUMBER,
    day,
    time,
    number,
  };
}

export function clearAll() {
  return {
    type: types.CLEAR_ALL,
  };
}
