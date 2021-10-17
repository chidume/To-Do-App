import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "Alabama",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false,
      }
    };
  }

  handleChange = (event) => {
    const {name, value, type} = event.target;
    if(type !== "checkbox") {
      this.setState({[name] : value})
    } else {
      const restrictions = {...this.state.dietaryRestrictions};
      restrictions[name] = !restrictions[name];
      this.setState({dietaryRestrictions : restrictions});
    }
  }

  handleSubmit = () => {
    alert("Form submitted!");
  }

  dietaryRestrictions() {
    const {dietaryRestrictions} = this.state;
    let listOfRestrictions = [];

    for(const key of Object.keys(dietaryRestrictions)) {
      if(dietaryRestrictions[key]) listOfRestrictions.push(key.substring(2)); 
    }

    return listOfRestrictions.join(", ");
  }

  render() {
    return( 
      <main>
        <form onSubmit={this.handleSubmit}>
          <input 
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />

          <br />

          <input 
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />

          <br />

          <input 
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />

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

          <select name="destination" onChange={this.handleChange}>
            <option value="">Please Choose a destination</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
          </select>

          <br />

          <label>
            <input
              type="checkbox"
              name="isVegan"
              checked={this.state.dietaryRestrictions.isVegan}
              onChange={this.handleChange}
            /> Vegan
          </label>

          <br />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              checked={this.state.dietaryRestrictions.isKosher}
              onChange={this.handleChange}
            /> Kosher
          </label>

          <br />

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              checked={this.state.dietaryRestrictions.isLactoseFree}
              onChange={this.handleChange}
            /> Lactose Free
          </label>

          <br />

          <button>Submit</button>

        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>Your dietary restrictions: {this.dietaryRestrictions()}</p>
      </main>
    );
  }
}

export default App;