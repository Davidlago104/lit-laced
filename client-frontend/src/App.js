import React from 'react';
import {connect} from 'react-redux';
import fetchSneakers from './actions/fetchSneakers'
import SneakerContainer from './containers/SneakerContainer'
import SneakerInput from './components/SneakerInput'
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <SneakerInput/>
        <SneakerContainer/>
      </div>
    );
  }
}


export default App;
