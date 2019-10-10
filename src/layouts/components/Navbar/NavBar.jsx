import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(2),
    variant: 'body2'
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  console.log('props',props);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
            Trainee Portal
          </Typography>
          <Link color="inherit" href='/Trainee' className={classes.link} >Trainee</Link>
          <Link color="inherit" href='/textFieldDemo' className={classes.link}>Textfield Demo</Link>
          <Link color="inherit" href='/math' className={classes.link}>Childern Demo</Link>
          <Link color="inherit" href='/inputDemo' className={classes.link}>Input Demo</Link>
          <Link color="inherit"  href='/login' className={classes.link}>Logout</Link>
                 </Toolbar>
      </AppBar>
    </div>
  );
}