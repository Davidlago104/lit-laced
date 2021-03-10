import React from 'react';
import {connect} from 'react-redux';
import SneakerInput from '../components/SneakerInput'
import SneakerList from '../components/SneakerList'
import { fetchSneakers } from '../actions/fetchSneakers';

class SneakerContainer extends React.Component {

    componentDidMount(){
        this.props.fetchSneakers()
    }

    render() {
        return (
            <div>
                {/* <SneakerInput/> */}
                <SneakerList sneakers={this.props.sneakers}/>
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