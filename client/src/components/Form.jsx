import React from 'react';
import $ from 'jquery';
import axios from 'axios';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let { firstName, lastName, email, guests } = this.state;

    this.validate(() => {
      axios.post('/rsvps', { firstName, lastName, email, guests }, result => console.log(result));
    });
  }

  validate(callback) {
    this.setState({ hasError: false });

    // Check if all fields filled 
    $('input').each((id, field) => {
      if (field.value === '') {
        this.setState({
          hasError: true,
          errorMessage: 'All fields are required'
        });
      }
    });

    // Validate email address
    let email = $('#email').val();
    let emailValidate = /[a-zA-Z0-9._%+-]+@[a-zA-Za-z0-9.-]+(\.[A-Z]{2,})?/g;
    if (!emailValidate.test(email)) {
      this.setState(state => ({
        hasError: true,
        errorMessage: state.errorMessage + '. Email address invalid.'
      }));
    } else callback();
  }

  render() {
    return (
      <form className="container">
        {this.state.hasError && <div className='error'>{this.state.errorMessage}</div>}
        <label>First Name:</label>
        <input type="text" id="firstName" onChange={this.handleChange}></input>
        <label>Last Name:</label>
        <input type="text" id="lastName" onChange={this.handleChange}></input>
        <label>Email:</label>
        <input type="text" id="email" onChange={this.handleChange}></input>
        <label>Number of guests:</label>
        <input type="text" id="guests" onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;