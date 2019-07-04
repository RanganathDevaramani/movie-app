import React from 'react'
import axios from 'axios'

class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            inputValue: '',
            movies: []
        }
    }

    filteredMovies = () => {
        axios.get(`http://training.mobignosis.net/movies`)
            .then(response => {
                this.setState({
                    //filtering out the movies which is equal to input value
                    movies: response.data.values.filter(movie => movie.title.toLowerCase() === this.state.inputValue)
                })
                this.props.handleSearch(this.state.movies)
            })
    }


    //getting an input value from the event
    handleChange = (e) => {
        e.preventDefault()
        const searchedInput = e.target.value
        //set the searchInput in the state with the input value
        this.setState({
            inputValue: searchedInput
        }, () => {

            // if the length of the value is greater than 1 , trigger the function filteredMovies()
            if (this.state.inputValue && this.state.inputValue.length > 1) {
                this.filteredMovies()
            }
        })
    }

    render() {
        return (
            <div align="center">
                <form >
                    <input
                        placeholder="Search here.."
                        name="search"
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar