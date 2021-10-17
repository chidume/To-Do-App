import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      textAreaValue: "Some default value",
      isFriendly: true,
      gender: "",
      favoriteColor: "blue",
    }
  }

  handleChange = event => {
    const {name, value, type} = event.target
    type === "checkbox" ? this.setState({[name]: !this.state.isFriendly}) : 
      this.setState({[name]: value});
  }

  handleSubmit = event => {
    alert("Form Submitted!")
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />

          <br />

          <input 
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />

          <br />

          <textarea 
            name="textAreaValue"
            onChange={this.handleChange}
            value={this.state.textAreaValue} 
          />

          <br />

          <label>
            <input 
              type="checkbox"
              name="isFriendly"
              onChange={this.handleChange}
             checked={this.state.isFriendly}
            /> Is Friendly?
          </label>

          <br />

          <label>
            <input 
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            /> Male
          </label>

          <br />

          <label>
            <input 
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            /> Female
          </label>

          <br />

          <select 
            value={this.state.favoriteColor} 
            onChange={this.handleChange} 
            name="favoriteColor"
          >
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
          </select>

          <h1>{this.state.firstName} {this.state.lastName}</h1> 
          <h2>You are a {this.state.gender}</h2>
          <h2>Your favorite color is {this.state.favoriteColor}</h2> 
          <h2>Is friendly? {this.state.isFriendly + ""}</h2>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
export default App;