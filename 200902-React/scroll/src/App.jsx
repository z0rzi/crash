import React, {Component} from 'react';
import Nav from './Nav';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.scrollRefs = [
      React.createRef(),
      React.createRef(),
      React.createRef(),
    ];
    this.state = {};
  }

  navClickHandle(idx) {
    const height = this.scrollRefs[idx].current.offsetTop;
    window.scrollTo({top: height, behavior: "smooth"});
  }

  onCompMounted(idx, fn) {
    this.heightGetters[idx] = fn;
  }

  render() {
    return (
      <div className="App">
        <Nav onClick={idx => this.navClickHandle(idx)}/>
        <Comp1 scrollRef={this.scrollRefs[0]}/>
        <Comp2 scrollRef={this.scrollRefs[1]}/>
        <Comp3 scrollRef={this.scrollRefs[2]}/>
      </div>
    );
  }
}

export default App;
