import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
    console.log("constructor method called!")
  }

  componentDidMount() {
    //does something after component is rendered for the first time only
    console.log("component mounted!");
  }
  
  componentWillMount() {
    //called before initial render 
    console.log("component will mount!");
  }

  /*
  componentWillReceiveProps(nextProps) {
    //does something based on props being passed down to component
    console.log("props received!");
  }
  */

  shouldComponentUpdate(nextProps, nextState) {
    //returns true if we want to re-render, false otherwise
    console.log("should component update!");
  }

  componentWillUnmount() {
    //tear down or cleanup your code before your component disappears
  }

  render() {
    console.log("component rendered!");

    return(
      <div>
        <h1>Successful render!</h1>
      </div>
    );
  }
}

export default App;