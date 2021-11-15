import React from 'react';
import { useDispatch } from 'react-redux';

import { Button, Grid, Paper, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';

const AddDialog = ({open, openSet, value, setValue, submitFunction, addOrEdit='add' }) => {
  const dispatch = useDispatch();

  const widthStyle = {
    // width:'80%',
    margin: 1,
  };
  
  return (
    <Dialog
      open={open}
      onClose={() => {
        openSet(false);
      }}
    >
      <Card variant={'outlined'} sx={{width: '560px'}}>
        <CardContent>
          <Paper
            sx={{
              backgroundColor: 'grey.400',
              width: '100%',
              padding: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Dosis',
              }}
            >
              {addOrEdit === 'add' ? 'Add' : 'Edit'} An Item
            </Typography>
          </Paper>
          <Grid
            container
            sx={{
              margin: 1,
              flexDirection: 'column',
            }}
          >
            <TextField
              label={'Name'}
              value={value.name}
              onChange={(event) => {
                setValue({
                  ...value,
                  name: event.target.value,
                });
              }}
              sx={widthStyle}
            />
            <TextField
              label={'Description'}
              minRows={3}
              value={value.description}
              onChange={(event) => {
                setValue({
                  ...value,
                  description: event.target.value,
                });
              }}
              sx={widthStyle}
            />
            <TextField
              label={'Quantity'}
              value={value.quantity.toString()}
              type={'number'}
              min={0}
              step={1}
              onChange={(event) => {
                setValue({
                  ...value,
                  quantity: parseInt(event.target.value),
                });
              }}
              sx={widthStyle}
            />
          </Grid>
        </CardContent>
        <CardActions sx={{alignItems: 'flex-end'}}>
            <Button
              onClick={() => {
                openSet(false);
              }}
            >
              Cancel
            </Button>
            <Button
              variant={'contained'}
              onClick={async () => {
                if (value.name && value.description) {}
                await dispatch(submitFunction(value));
                openSet(false);
              }}
              disabled={!value.name || value.quantity < 0}
            >
              {addOrEdit === 'add' ? 'Add' : 'Save'}
            </Button>
        </CardActions>
      </Card>
    </Dialog>
  );
};

export default AddDialog;