import React, { Component } from 'react';
import { registerUser } from "../../actions/user_actions";
import { connect } from 'react-redux';


class Register extends Component {

  state = {
    lastname: '',
    name: '',
    email: '', 
    password: '', 
    passwordConfirmation: '', 
    errors: [],
  }

  displayErrors = errors => {
    errors.map((error, i)=><p style={{color:"red"}}key={i}>{error}</p>)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  isFormvalid = () => {
    let errors = [];
    let error;

    if(this.isFormEmpty(this.state)){
      error = {message : "Fill in all fields"};
      this.setState({ errors: errors.concat(error) });
    }else if(!this.isPasswordValid(this.state)){
      error = {message: "password is invalid"};
      this.setState({ errors: errors.concat(error) });
    }else {
      return true
    }
  }

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if(password.length < 6 || passwordConfirmation.length < 6){
      return false;
    }else if(password !== passwordConfirmation){
      return false
    }else {
      return true;
    }
  }

  isFormEmpty = ({lastname, name, email, password, passwordConfirmation}) => {
    return(
     !name.length ||
     !lastname.length ||
     !email.length ||
     !password.length ||
     !passwordConfirmation.length
    );
  }

  submitForm =event => {
    event.preventDefault();

    let datoToSubmit = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email, 
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation 
    } 

    if(this.isFormvalid()){
      this.setState({ errors:[] });
      this.props.dispatch(registerUser(datoToSubmit))
        .then(response=>{
          if(response.payload.success){
            this.props.history.push('/login');
          }else{
            this.setState({ 
              errors:this.state.errors.concat("your attempt to send data to DB was failed") 
            })
          }
        })
        .catch(err=>{
          this.setState({
            errors: this.state.errors.concat(err)
          })
        })
    }else{
      this.setState({ 
        errors: this.state.errors.concat(
          "Form is not valid"
        )
      })
    }
  }


  render() {
    return (
      <div className="container">
        <h2>Sign up</h2>
        <div className="row">
          <form className="col s12" onSubmit={event => this.submitForm(event)}>
            <div className="row">
              <div className="input-field col s12">
              <label htmlFor="name" className="active">Name</label>
                <input 
                  name="name" 
                  value={this.state.name}
                  onChange={e=>this.handleChange(e)}
                  id="name"
                  type="text" 
                  className="validate"
                />
                <span 
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="lastname" className="active">Last name</label>
                <input 
                  name="lastname" 
                  value={this.state.lastname}
                  onChange={e=>this.handleChange(e)}
                  id="lastname"
                  type="text" 
                  className="validate"
                />
                <span 
                  className="helper-text"
                  data-error="Type a right type last name"
                  data-success="right"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
              <label htmlFor="email" className="active">Email</label>
                <input 
                  name="email" 
                  value={this.state.email}
                  onChange={e=>this.handleChange(e)}
                  id="email"
                  type="email" 
                  className="validate"
                />
                <span 
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
              <label htmlFor="password" className="active">Password</label>
                <input 
                  name="password" 
                  value={this.state.password}
                  onChange={e=>this.handleChange(e)}
                  id="password"
                  type="password" 
                  className="validate"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
              <label htmlFor="passwordConfirmation" className="active">Password confirmation</label>
                <input 
                  name="passwordConfirmation" 
                  value={this.state.passwordConfirmation}
                  onChange={e=>this.handleChange(e)}
                  id="passwordConfirmation"
                  type="password" 
                  className="validate"
                />
              </div>
            </div>

            {this.state.errors.length > 0 && (
              <div>
                {this.displayErrors(this.state.errors)}
              </div>
            )}

            <div className="row">
              <div className="col s12">
                <button 
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                  onClick={this.submitForm}
                >
                  Create an account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Register);