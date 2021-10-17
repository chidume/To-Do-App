import React from 'react';
import randomcolor from 'randomcolor';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: "",
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      const newColor = randomcolor();
      this.setState({color: newColor});
    }
  }

  render() {
    console.log("Render");

    return (
      <div>
        <h1 style={{color: this.state.color}}>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    );
  }
}

export default App;