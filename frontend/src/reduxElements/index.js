/**
Redux boostrapping. Sets the initial state.
Also provides the 'reducer' which takes 'actions` and returns
a new, updated state to the redux store
**/

// Initial State
const initState = {
  uiBusy: 0,
  list: [],
};

// This is the reducer
export default function(state = initState, action) {
  switch(action.type) {
    case 'INC_UI_BUSY':
      return {
        ...state,
        uiBusy: state.uiBusy + 1,
      };
    
    case 'DEC_UI_BUSY':
      return {
        ...state,
        uiBusy: state.uiBusy - 1,
      };
    
    case 'SET_LIST':
      return {
        ...state,
        list: action.data,
      };
    
    case 'ADD_ITEM':
      return {
        ...state,
        list: [
          ...state.list,
          action.data
        ],
      };
    
    default:
      return state;
  }
}