import React from 'react';
import {connect} from 'react-redux';
import fetchSneakers from './actions/fetchSneakers'
import SneakerContainer from './containers/SneakerContainer'
import SneakerInput from './components/SneakerInput'
import RatingContainer from './containers/RatingContainer';
class App extends React.Component {

  render() {
    return (
      <div className="App">
        {/* <RatingContainer/> */}
        <SneakerContainer/>
      </div>
    );
  }
}


export default App;
