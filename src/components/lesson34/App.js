import React from 'react';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    );
  }
}

export default App;