import React from 'react';
import {connect} from 'react-redux';
import SneakerInput from '../components/SneakerInput'
import SneakerList from '../components/SneakerList'
import { fetchSneakers } from '../actions/fetchSneakers';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Sneaker from '../components/Sneaker';

class SneakerContainer extends React.Component {

    componentDidMount(){
        this.props.fetchSneakers()
    }

    render() {
        return (
            <div>
                <Switch>
                <Route exact path='/sneakers/:id' render={(routerProps) => <Sneaker {...routerProps} sneakers={this.props.sneakers}/>}/>
                <Route exact path='/sneakers/new' component={SneakerInput}/>
                <Route exact path='/sneakers' render={() => <SneakerList sneakers={this.props.sneakers}/>}/>
                </Switch>
            </div>
        )        
    }
}

const mapStateToProps = state => {

    return {
        sneakers: state.sneakers
    }
}

export default connect(mapStateToProps, {fetchSneakers})(SneakerContainer);

//contains all sneaker props and helps create pathing using react-router-dom

// what is s