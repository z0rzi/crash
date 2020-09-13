import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import MainVue from './MainVue';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact={true} path={'/'} component={MainVue}></Route>
        <Route path={'/about'} component={About}></Route>
      </Router>
    );
  }
}

export default App;
