import React from 'react' 
import axios from 'axios'
import AddMovie from './addMovie'

class EditMovie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {},
        }
    }

    componentDidMount() {
        //getting perticular movie id
        const matchId = this.props.match.params.id

        //Making an http get request with the matched id
        axios.get(`http://training.mobignosis.net/movies/${matchId}`)
            .then(response => {
                this.setState(() => ({ movie: response.data.values }))
            })
    }

    handleSubmit = (formData) => {
        const id = this.state.movie.id
        //after updating the fields , making a put request to the server
        axios.put(`http://training.mobignosis.net/movies/${id}`, formData)
            .then(() => this.props.history.push(`/movie/${this.state.movie.id}`))
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.movie, "edit movie")
        return (
            <div>
                {/* When we want to update movie, the movie form should render and the values should be populated in the field */}
                <AddMovie 
                    movie={this.state.movie} 
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default EditMovie