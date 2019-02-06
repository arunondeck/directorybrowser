import React, { Component } from 'react';
import {connect} from 'react-redux';
import DirectoryView from './components/DirectoryView';

class App extends Component {

  render() {
    return (
      <div className="app-root">
        <DirectoryView/>
      </div>
    );
  }
}

export default App;