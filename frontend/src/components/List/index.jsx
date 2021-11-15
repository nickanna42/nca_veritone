import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {default as MaterialList } from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { DeleteOutlined, EditOutlined } from '@mui/icons-material';

import DeleteDialog from './DeleteDialog';
import AddDialog from '../AddDialog';
import { postItem, updateItem } from '../../remoting';

const itemStyle = {
  width: '100%',
  my: 3,
  '&:first-child': {
    marginTop: 6,
  }
};

const List = ({list}) => {
  const [ addOpen, setAddOpen ] = useState(false);
  const [ editOpen, setEditOpen ] = useState(false);
  const [ pendingDelete, setPendingDelete ] = useState(null);
  const [ newItem, setNewItem ] = useState({
    name: '',
    description: '',
    quantity: 1,
  });

  return (
    <Container maxWidth="sm">
      <Grid container sx={{height: '90vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', my: 5}}>
        
        <Grid item sx={itemStyle}>
          <Grid container sx={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}}>
            <Grid item>
              <Typography sx={{fontWeight: 600, fontSize: '18px'}}>Your Items</Typography>
            </Grid>
            <Grid item>
              <Button
                variant={'contained'}
                onClick={() => {
                  setNewItem({
                    name: '',
                    description: '',
                    quantity: 1,
                  });
                  setAddOpen(true);
                }}
              >
                Add Item
              </Button>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item sx={itemStyle}>
          <MaterialList>
            {list.map((currentItem) => {
              return (
                <ListItem
                  key={`itemRow-${currentItem.id}`}
                  secondaryAction={
                    <>
                      <IconButton
                        onClick={() => {
                          setNewItem({...currentItem});
                          setEditOpen(true);
                        }}
                      >
                        <EditOutlined />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setPendingDelete(currentItem.id);
                        }}
                      >
                        <DeleteOutlined />
                      </IconButton>
                    </>
                  }
                >
                  <ListItemText primary={currentItem.name} />

                </ListItem>
              );
            })}
          </MaterialList>
        </Grid>
       
      </Grid>
      <AddDialog
        open={addOpen}
        openSet={setAddOpen}
        value={newItem}
        setValue={setNewItem}
        submitFunction={postItem}
      />
      <AddDialog
        open={editOpen}
        openSet={setEditOpen}
        value={newItem}
        setValue={setNewItem}
        submitFunction={updateItem}
        addOrEdit={'edit'}
      />
      <DeleteDialog pendingDelete={pendingDelete} setPendingDelete={setPendingDelete} />
    </Container>
  );
};

export default List;