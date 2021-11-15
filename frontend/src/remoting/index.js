/**
*** This file handles all calls to external API's.
*** All function exported from here should be
*** asyncronous
**/
import { incUiBusy, decUiBusy, setList, addItem } from '../reduxElements/actions';

const fetchWrapper = (url, options={}) => async (dispatch) =>{
  dispatch(incUiBusy);
  const output = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    }, 
  });
  dispatch(decUiBusy)

  return output;
}

export const fetchList = () => async (dispatch) => {
  const fetchedList = await dispatch(fetchWrapper(
    '/api/list',
  )).then(resp => resp.json());

  dispatch(setList(fetchedList))
};

export const postItem = (newItem) => async (dispatch) => {
  const sendItem = {...newItem};
  delete sendItem.id;
  
  const newId = await dispatch(fetchWrapper(
    '/api/list/item',
    {
      method: "POST",
      data: JSON.stringify(sendItem),
    }
  )).then(resp => resp.json);

  sendItem.id = newId;

  dispatch(addItem(sendItem));
};