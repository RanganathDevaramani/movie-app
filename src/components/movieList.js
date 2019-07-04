import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import {Card, Container,Typography, Grid, CardMedia, CardContent, CardActionArea} from '@material-ui/core';
import PropTypes from 'prop-types';
import SearchBar from './searchBar'

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
      fontSize : "13px",
      color : "black"
  }
});

class MovieList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movies : []
        } 
    }

    //Getting all the movies in the page 1884 
    componentDidMount(){
        axios.get('http://training.mobignosis.net/movies?page=1884&limit=10')
        .then(response => this.setState(() => ({ movies : response.data.values })))
    }

    //gettign an filtered movie details to render, then set the state with the filtered movies
    handleSearch  = (movies)=>{
        this.setState(()=>({
            movies
        }))
    }

    render(){
        const lastNMovies = 10
        //Filtering the last 10 elements from movie array
        const movielist = this.state.movies.reverse().slice((this.state.movies.length - lastNMovies), this.state.movies.length)
        const { classes } = this.props;
        return(
            <div className={classes.grid}>
                
                {/*Importing searchBar component to recieve the props */}
                <SearchBar handleSearch={this.handleSearch}/>
                <Container fixed>
                    <span className={classes.genre}>Action</span>
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
                                        <Grid item xs={4} sm={3} md={2}>
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
                                                <Typography gutterBottom variant="h5" component="h2" noWrap>
                                                <div className={classes.titlename} > 
                                                    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                                                </div>
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p" noWrap>
                                                    {movie.year}
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            </Card>
                                        </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </div>
        )
    }
}

MovieList.propTypes = {
    classes: PropTypes.object.isRequired,
  }; 

export default withStyles(styles)(MovieList);