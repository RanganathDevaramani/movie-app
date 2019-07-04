import React from 'react';
import {AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
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
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight : '20px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class NavigationBar extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>

          <AppBar position="static" style={{ backgroundColor : '#a83960',}}>
            <Toolbar>
              <Typography className={classes.title} variant="h5">
                <Link to='/' style={{ color : "white", fontSize : "30px", fontWeight:"bold"}}>HopeYouEnjoy</Link>
              </Typography>
              <div>
              <Link to='/' style={{ color : "white", marginRight: "15px"}}><Home/></Link>
              </div>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  onChange = {this.handleSearch}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'Search' }}
                />
              </div>
              
              <div>
                  <AccountCircle/>
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
