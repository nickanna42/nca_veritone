import React from 'react';

import Dialog from '@mui/material/Dialog';

const AddDialog = ({open, openSet, value, setValue, submitFunction}) => {
  return (
    <Dialog
      open={open}
      onClose={() => {
        openSet(false);
      }}
    >
      Derp
    </Dialog>
  );
};

export default AddDialog;