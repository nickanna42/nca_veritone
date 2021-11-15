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
      <Grid container sx={{height: '90vh', justifyContent: 'center', alignItems: 'center'}}>
        <Grid item>
          <Card sx={{height: '290px', width: '614px'}}>
            <Grid container sx={{height: '100%', flexFlow: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Grid item>
                Your Shopping List is empty :(
              </Grid>
              <Grid item>
                <Button
                  variant={'contained'}
                  onClick={() => {
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