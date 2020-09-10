import React from 'react';

import Dialog from '@material-ui/core/Dialog';


export default function TransitionsModal(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

 

  
  return (
      
      <Dialog
     
       
        open={props.isOpen}
        onClose={handleClose}
       
        aria-labelledby="draggable-dialog-title"
        aria-describedby="alert-dialog-description"
       
      >
          <div>
              
              {props.children}
              </div>
        
      </Dialog>
  
  );
}
