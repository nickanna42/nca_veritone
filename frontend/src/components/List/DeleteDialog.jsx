import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';

import { deleteItem } from '../../remoting';

const DeleteDialog = ({pendingDelete, setPendingDelete}) => {
  const dispatch = useDispatch();
  return (
    <Dialog
      open={pendingDelete ? true : false}
      onClose={() => setPendingDelete(null)}
    >
      <Card>
        <CardHeader
          title={'Delete Item?'}
          titleTypographyProps={{sx: {
            fontWeight: 600,
            fontSize: '18px',
          }}}
        />
        <CardContent>
          Are you sure you want to delete this item? This can not be undone.
        </CardContent>
        <CardActions>
          <Button
            onClick={() => setPendingDelete(null)}
            variant={'outlined'}
          >
            Cancel
          </Button>
          <Button
            variant={'contained'}
            onClick={async () => {
              await dispatch(deleteItem(pendingDelete));
              setPendingDelete(null);
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Dialog>
  )
}

export default DeleteDialog;