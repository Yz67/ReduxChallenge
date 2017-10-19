const updateSlot = function (name, phone, day, hour){
  return {
    type: 'UPDATE_SLOT',
    name,
    phone,
    day,
    hour
  };
};

export { updateSlot };
