import React from 'react';
import {connect} from 'react-redux';
import { postRatings } from '../actions/postRatings';
import { deleteRating } from "../actions/deleteRating";

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
        this.props.postRatings(this.state, this.props.sneaker.id)
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
// render is happening within a moment of the lifecycle, look into the comp life cycle
// rendering vs re-rendering, class vs function, life cycle vs none
// sate and lifecycle (setState)
// arrow function gets assigned when defined
// reg function gets assigned when called upon
// setstate vs. this.state  - 
export default connect(null, {postRatings})(RatingInput)


//comfortable with local state, this.setstate is working and handling events

// create a search bar that filters the sneakers which filtering the props
// add some type of reducer action (delete) a filter of sort