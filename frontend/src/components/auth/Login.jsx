import React, { Component } from 'react';
import AuthService from '../../service/auth-service';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render(){
    return(
      <>
        <section className="section-login">

          <div className="login container login-form">
            <h3 className="header">welcome back</h3>

            <form onSubmit={this.handleFormSubmit}>
              <label className="username">Username:</label>
              <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
              <br></br>
              <br></br>
              <label className="password">Password:</label>
              <input name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
              <br></br>
              <input type="submit" value="Login" className="button"/>
            </form>
            <p className="form-footer">Don't have an account? 
                <Link to={"/signup"} className="signup-call"> Signup</Link>
            </p>
          </div>
        </section>
      </>
    )
  }
}

export default Login;
