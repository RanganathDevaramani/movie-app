import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import {Card, Container,Typography, Grid, CardMedia, CardContent, CardActionArea} from '@material-ui/core';
import PropTypes from 'prop-types';
import ModalComp from './modal'

const styles = theme => ({
  card: {
    maxWidth: 500
  },
  media: {
    height: 140,
  },
  root: {
    flexGrow: 1,
  },
  grid : {
      marginTop : 20
  },
  genre : {
      fontSize : "40px",
      marginTop : '20px',
      fontWeight : 600
  },
  fab : {
    maxWidth : '40px',
    maxHeight : "40px",
    float : 'right',
    marginTop : "20px",
    color : "white"
  },
  titlename : {
      fontSize : "20px",
      color : "black"
  }
});

class ModalMovieList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movies : [],
            show : false,
            moviez : {}
        } 
    }

    //Getting all the movies in the page 1884 
    componentDidMount(){
        axios.get('http://training.mobignosis.net/movies?page=1884&limit=10')
        .then(response => this.setState(() => ({ movies : response.data.values })))
    }

    handleShow = (movie) => {
        this.setState({ show : true , moviez : movie})
    }

    handleClose = () => {
        this.setState({ show : false })
    }

    render(){
        const lastNMovies = 10
        //Filtering the last 10 elements from movie array
        const movielist = this.state.movies.reverse().slice((this.state.movies.length - lastNMovies), this.state.movies.length)
        const { classes } = this.props;
        return(
            <div className={classes.grid}>
                <Container fixed>
                    <span className={classes.genre}>Comedy</span>
                    <Fab style={{ backgroundColor: "#a83960"}} aria-label="Add" className={classes.fab}>
                        <Link to='/movies/new'><AddIcon /></Link>
                    </Fab>
                    <Grid
                        container
                        spacing={3}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        {/* Mapping over the movie list */}
                        {
                            movielist.map( movie => {
                                return (
                                        <Grid item xs={12} sm={4} md={3}>
                                            <div onClick={() => this.handleShow(movie)}>
                                                <Card className={classes.card} >
                                                    <CardActionArea>
                                                        <CardMedia
                                                        component="img"
                                                        alt="dummy pics"
                                                        height="140"
                                                        image="https://via.placeholder.com/600/810b14"
                                                        title="dummy picss"
                                                        />
                                                        <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2" className={classes.titlename} noWrap>
                                                            <div>{movie.title}</div>
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p" noWrap>
                                                            {movie.year}
                                                        </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </div>
                                        </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
                <ModalComp 
                    handleClose={this.handleClose}
                    show = {this.state.show}
                    movies = {this.state.moviez}
                />
            </div>
        )
    }
}

ModalMovieList.propTypes = {
    classes: PropTypes.object.isRequired,
  }; 

export default withStyles(styles)(ModalMovieList);