import React from 'react';
import {connect} from 'react-redux';
import SneakerInput from '../components/SneakerInput'
import SneakerList from '../components/SneakerList'
import { fetchSneakers } from '../actions/fetchSneakers';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Sneaker from '../components/Sneaker';
import SneakerListItem from "../components/SneakerListItem";
import {useState} from  'react';
import Counting from '../components/counting.js'

class SneakerContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
    }
    
    editSearchTerm = (e)  => {
        this.setState({search: e.target.value}, 
        ()=> this.setState(this.dynamicSearch()))
    }

    dynamicSearch = () => {
        return this.props.sneakers.filter(sneaker => 
            sneaker.name.toLowerCase().includes(this.state.search.toLowerCase())
            )
    }

    render() {
        return (
            <div>
                <input type="text" value= {this.state.search} placeholder="enter sneaker name here!" onChange={this.editSearchTerm}/>
                {/* <Counting /> */}
                <Route path='/sneakers/:id' render={(routerProps) => <Sneaker {...routerProps} sneakers={this.props.sneakers}/>}/>
                <Route exact path='/sneakers/new' component={SneakerInput}/>
                <Route exact path='/sneakers' render={() => <SneakerList sneakers={this.dynamicSearch()}/>}/>
            </div>
        )        
    }
}

export default connect(null, {fetchSneakers})(SneakerContainer);