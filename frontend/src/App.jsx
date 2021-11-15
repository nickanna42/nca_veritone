import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import { fetchList } from './remoting';

import EmptyList from './components/EmptyList';

const listSelector = createSelector(
  (state) => state.list,
  (localList) => localList
);

const App = () => {
  const dispatch = useDispatch();

  const list = useSelector(listSelector);
  
  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);



  let pageContents = '';
  if (list.length === 0) {
    pageContents = <EmptyList />;
  }

  return (
    <>
      <CssBaseline />
      <AppBar color={'secondary'}>
        <Toolbar>
          <span style={{fontFamily: 'Dosis', fontWeight: 600, fontSize: '18px'}}>Shopping List</span>
        </Toolbar>
      </AppBar>
      <Box sx={{height: '64px'}} />
      {pageContents}
    </>
  );
};

export default App