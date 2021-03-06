import React from 'react';
import {connect} from 'react-redux';
import fetchSneakers from './actions/fetchSneakers'
import SneakerContainer from './containers/SneakerContainer'
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <SneakerContainer/>
      </div>
    );
  }
}


export default connect()(App);
