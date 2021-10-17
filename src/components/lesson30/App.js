import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    const status = this.state.isLoggedIn ? "in" : "out";

    return (
      <div>
        <h1>You are currently logged {status}</h1>
      </div>
    );
  }
}

export default App;