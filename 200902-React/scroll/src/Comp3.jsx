import React, {Component} from 'react';

class Comp3 extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div style={{height: 1000}} className="Comp3">
        <h1 ref={this.props.scrollRef}>This is the end!</h1>
        <p>The end of the word as we know it dude</p>
      </div>
    );
  }
}

export default Comp3;
