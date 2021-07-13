import React, { useState } from 'react';
import { connect } from 'react-redux';
import UsernameInput from './components/UsernameInput';
import SubmitButton from './components/SubmitButton';
import { useHistory } from 'react-router-dom';
import { setUsername } from '../store/actions/dashboardActions';
import { registerNewUser } from '../utils/wssConnection/wssConnection';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const LoginPage = ({ saveUsername }) => {

  const [username, setUsername] = useState('');

  const history = useHistory();

  const handleSubmitButtonPressed = () => {
    if(username!=='')
    {
    registerNewUser(username);
    saveUsername(username);
    history.push('/dashboard');
    }
  };  
  
  return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',}}>
                    
        <Avatar style={{marginTop: '64px',
                        marginBottom: '8px',
                        backgroundColor: '#eb427e'}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Welcome to Calls
        </Typography>
        <form style={{width: '100%',
                      marginTop: '12px'}} noValidate>
        <UsernameInput username={username} setUsername={setUsername} />
          
        <SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressed} />
          
        </form>
      </div>
      </Container>

  );
};


const mapActionsToProps = (dispatch) => {
  return {
    saveUsername: username => dispatch(setUsername(username))
  };
};

export default connect(null, mapActionsToProps)(LoginPage);


