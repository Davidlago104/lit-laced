import React from 'react';
import {connect} from 'react-redux';
import {postSneaker} from '../actions/postSneaker'
class SneakerInput extends React.Component {

    state = {name: "", price: ""}

    change = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    submit = (event) => {
        event.preventDefault()
        this.props.postSneaker(this.state)
        this.setState({
            name: '',
            price: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label>Sneaker Name</label><br/>
                    <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.change}/>
                    <br/>
                    <br/>
                    <label>Sneaker Price</label><br/>
                    <input type="text" placeholder="price" name="price" value={this.state.price} onChange={this.change}/>
                    <br/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {postSneaker})(SneakerInput);