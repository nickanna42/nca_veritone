/**
Functions that return actions.
These actions can be `dispatched` by mapping them
to a property of a react component.
**/

export const incUiBusy = () => ({
  type: 'INC_UI_BUSY',
});

export const decUiBusy = () => ({
  type: 'DEC_UI_BUSY',
});

export const setList = (newList) => ({
  type: 'SET_LIST',
  data: newList,
});

export const addItem = (newItem) => ({
  type: 'ADD_ITEM',
  data: newItem,
});