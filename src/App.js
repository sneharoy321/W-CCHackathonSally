import React from 'react';
import KommunicateChat from './chat';
import './App.css';
import { TextField, List, ListItem, ListItemText, Divider, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const inputProps = {
  step: 30,
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
}));

function App() {
  const classes = useStyles;
  return (
    <div>
      <Container>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,display=swap" />
      <Grid container spacing={1} direction="column" justify="center" alignItems="center">
        <Grid item>
          <img src="https://mail.google.com/mail/u/0?ui=2&ik=437c77d5ea&attid=0.1&permmsgid=msg-f:1680050445074596826&th=1750bcfa7f6883da&view=att&disp=safe&realattid=f_kg1syyzu0" alt="logo"/>
        </Grid>
        <Grid item>
          <TextField id="Name" type="int" inputProps={inputProps} placeholder="How Old Are You?" />
        </Grid>
        <Grid item>
          <h3>
            Topics we can talk about:
          </h3>
        </Grid>
          <Grid item>
            <List className={classes.root}>
            <ListItem >
                <ListItemText primary="Nutrition" />
              </ListItem>
              <Divider />
              <ListItem  divider>
                <ListItemText primary="Period" />
              </ListItem>
              <ListItem >
                <ListItemText primary="Birth Control" />
              </ListItem>
              <Divider light />
              <ListItem >
                <ListItemText primary="Contraceptives" />
              </ListItem>
          </List>
        </Grid>
      </Grid>
      <h3>
        Please Note I am not a Doctor
      </h3>
    <KommunicateChat/>
      </Container>
      
    </div>
  );
}

export default App;
