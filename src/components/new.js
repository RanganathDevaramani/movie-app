import React from 'react' 
import axios from 'axios'
import AddMovie from './addMovie'

class NewMovie extends React.Component {
    //getting a form data from addMovie component
    handleSubmit = (formData) =>  {
        axios.post('http://training.mobignosis.net/movies', formData)
        //Once the formData is submitted, the page will redirect to movie list component
            .then(() => this.props.history.push('/'))
            .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <AddMovie handleSubmit={this.handleSubmit} /> 
            </div>
        )
    }
}

export default NewMovie