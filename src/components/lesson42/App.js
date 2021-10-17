import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }

  handleClick = () => {
    this.setState({isLoggedIn : !this.state.isLoggedIn});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isLoggedIn ? "Log Out" : "Log In"}
        </button>

        <h1>{this.state.isLoggedIn ? "Logged In" : "Logged Out"}</h1>
      </div>
    )
  }
}
export default App;