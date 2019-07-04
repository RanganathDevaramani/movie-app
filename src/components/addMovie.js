import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Typography, Input, Grid, Button, FormControl, InputLabel} from '@material-ui/core';

const styles = theme => ({
    input: {
        margin: theme.spacing(2),
    },
    text : {
        marginTop : "50px"
    },
    submit : {
        marginTop : "40px",
        marginBottom : "40px"
    }
});


class AddMovie extends React.Component{
    constructor(){
        super()
            this.state = {
                title : "",
                year : "",
                director : "",
                cast : "",
                genre : "",
                notes : ""
            }
    }

    //gettign an input value and set the state with that value
    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name] : e.target.value
        }))
    }

    //getting a value from dropdown menu
    handleSelect = (e) => {
        const genre = e.target.value
        this.setState(() => ({ genre }))
    }

    // We have the movie data in the parent component (EditMovie), then we want to set the state in the child component(AddMovie)
    //To set the state in the child component, we use componentWillReceiveProps()
    componentWillReceiveProps(nextProps) {
        console.log('component will receive props - form', nextProps)
        const { title, year, director, cast, genre, notes } = nextProps.movie
        this.setState(() => ({
            title, year, director, cast,  genre, notes
        }))
    }

    handleSubmit = (e) => {
        // e.preventDefault() is to prevent the default behaviour of the browser, 
        //that means the browser will not refresh on submit the form
        e.preventDefault()
        const formData = this.state
        console.log(formData)
        this.props.handleSubmit(formData)

        this.setState(() => ({ 
            title: '', year: '', director: '', cast : "", genre : '', notes : ''
        }))
    }
    
    render(){
        const { classes } = this.props;
        return(
            <div>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography component="h1" variant="h5" className={classes.text}>
                        Add Movie
                        </Typography>
                        <form onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                    <InputLabel >Movie Title</InputLabel>
                                    <Input type="text" className={classes.input} value={this.state.title} onChange={this.handleChange} name="title" placeholder="Movie title"/> 
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel >Year</InputLabel>
                                <Input type="text" className={classes.input} value={this.state.year} onChange={this.handleChange} name="year" placeholder="Year"/> 
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel >Director</InputLabel>
                                <Input type="text" className={classes.input} value={this.state.director || ''} onChange={this.handleChange} name="director" placeholder="Director"/> 
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel >Cast</InputLabel>
                                <Input type="text" className={classes.input} value={this.state.cast || ''} onChange={this.handleChange} name="cast" placeholder="Cast"/> 
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel>Tell us about the Movie</InputLabel>
                                <Input type="text" className={classes.input} value={this.state.notes || ''} onChange={this.handleChange} name="notes" placeholder="Tell us about Movie"/> 
                            </FormControl>

                            <FormControl  variant="filled" required fullWidth>
                            Genre{' '}
                                <select value={this.state.genre || ''} name='genre' onChange={this.handleSelect}>
                                    <option>select</option>
                                    <option value="Action">Action</option>
                                    <option value="Horror">Horror</option>
                                    <option value="Drama">Drama</option>
                                    <option value = "sci-fi">Sci-Fi</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="Comedy">Comedy</option>
                                </select>
                            </FormControl>
                            <br/>
                            <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Submit
                                </Button>
                        </form> 
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </div>
        )
    }
}
AddMovie.propTypes = {
    classes: PropTypes.object.isRequired,
  }; 

export default withStyles(styles)(AddMovie)