import React from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Home from '@material-ui/icons/Home';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
});

class NavigationBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>

          <AppBar position="static" style={{ backgroundColor: '#a83960', }}>
            <Toolbar>
              <Typography className={classes.title} variant="h5">
                <Link to='/' style={{ color: "white", fontSize: "20px", fontWeight: "bold", float:'right'}}>Hope You Enjoy</Link>
              </Typography>
                <div>
                  <Link to='/' style={{ color: "white", marginRight: "15px" }}><Home /></Link>
                </div>
                <div>
                  <Link to='/search' style={{ color: "white", marginRight: "15px" }}><SearchIcon /></Link>
                </div>
                <div>
                  <AccountCircle style={{ float : "right"}}/>
                </div>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBar);
