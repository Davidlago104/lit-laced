import React from 'react';
import {connect} from 'react-redux';
import { postRating } from '../actions/postRatings';
class RatingInput extends React.Component {

    state = {
        stars: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.postRating(this.state, this.props.id)
        this.setState({
            stars: '',
            description: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Stars</label>
                    <select name="stars" value={this.state.stars} onChange={this.handleChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select><br/>
                    <label>Description:</label>
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {postRating})(RatingInput)