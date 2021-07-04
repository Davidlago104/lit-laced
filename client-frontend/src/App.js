import React from 'react';
import {connect} from 'react-redux';
import SneakerContainer from './containers/SneakerContainer'
import SneakerInput from './components/SneakerInput'
import RatingContainer from './containers/RatingContainer';
import {fetchSneakers} from './actions/fetchSneakers'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchSneakers();
  }

  render() {
    return (
      <div className="App">
        <SneakerContainer sneakers = {this.props.sneakers}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sneakers: state.sneakers
  };
};


export default connect(mapStateToProps, {fetchSneakers})(App);
