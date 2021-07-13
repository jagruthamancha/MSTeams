import React from 'react';
import Button from '@material-ui/core/Button';

const SubmitButton = ({ handleSubmitButtonPressed }) => {
  return (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmitButtonPressed}
          style={{marginTop: '18px'}}
         >
               Enter
        </Button>
  );
};

export default SubmitButton;
