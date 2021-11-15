import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import AddDialog from './AddDialog';
import { postItem } from '../remoting';

const EmptyList = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const [ newItem, setNewItem ] = useState({
    name: '',
    description: '',
    quantity: 1,
  });

  return (
    <>
      <Grid container sx={{height: '90vh', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Grid item>
          <Card variant={'outlined'} sx={{height: '290px', width: '614px'}}>
            <Grid container sx={{height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
              <Grid item>
                Your Shopping List is empty :(
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
                    setDialogOpen(true);
                  }}
                >
                  Add your first item
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <AddDialog
        open={dialogOpen}
        openSet={setDialogOpen}
        value={newItem}
        setValue={setNewItem}
        submitFunction={postItem}
      />
    </>
  );
}

export default EmptyList