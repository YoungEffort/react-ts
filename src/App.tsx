import * as React from 'react';
import './App.scss';

import Header from './components/header/header'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
