import React from 'react';
import TextField from '@material-ui/core/TextField';

const UsernameInput = (props) => {
  const { username, setUsername } = props;

  return (
      <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Nickname"
                    name="name"
                    autoComplete="nickname"
                    autoFocus
                    onChange={(event) => { setUsername(event.target.value); }}
                    value={username}
                    style={{marginTop: '12px'}}
                  />


  );
};

export default UsernameInput;
