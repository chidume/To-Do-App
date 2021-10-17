import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      character: {}
    }
  }

  componentDidMount() {
    this.setState({loading: true});

    fetch("https://swapi.dev/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.loading ? "Loading..." : this.state.character.name}</h1>
      </div>
    );
  }
}

export default App;