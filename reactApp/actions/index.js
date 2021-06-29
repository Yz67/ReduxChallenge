const updateSlot = (dayNum, slotNum, name, num) => {
  return {
    type: 'UPDATE_SLOT',
    day: dayNum,
    slot: slotNum,
    newName: name,
    newNum: num
  };
};

const openModal = (dayNum, slotNum) => {
  return {
    type: 'OPEN_MODAL',
    day: dayNum,
    slot: slotNum
  }
};


module.exports = {
  updateSlot: updateSlot,
  openModal: openModal
}
