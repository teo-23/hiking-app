import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   useParams,
// } from "react-router-dom";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import AuthService from '../../service/auth-service';




// var prevScrollpos = window.pageYOffset;
//     window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//     } else {
//     document.getElementById("navbar").style.top = "-50px";
//     }
//     prevScrollpos = currentScrollPos;
//     }

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }
 
  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]});
  }
 
  logoutUser = () =>{
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);  
    })
  }
 
  render(){
    if(this.state.loggedInUser){
      return(

        // <>
        // <div>
        //     <Navbar collapseOnSelect expand="lg" id="navbar" className="smart-scroll navbar-expand-lg fixed-top navbar-light bg-white border-0 mb-5">
        //     <Navbar.Brand id="navbar-title" className="navbar-brand font-weight-bold" href="/">Hiking <span
        //                 className="navbar-text font-italic text-left"> Welcome, {this.state.loggedInUser.username}</span></Navbar.Brand>
        //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />            
        //     <Navbar.Collapse className="test" id="responsive-navbar-nav">
        //         <Nav className="ml-auto nav-item">
        //         <Nav.Link className="nav-link text-info" href="#profile">My profile</Nav.Link>
        //         <Nav.Link className="nav-link text-info" href="/trails">Trails</Nav.Link>
        //         <Nav.Link className="nav-link text-info" href="/"><button onClick={() => this.logoutUser()}>Logout</button></Nav.Link>
        //         </Nav>
        //     </Navbar.Collapse>
        //     </Navbar>
        // </div>
        // </> 

        <nav className="nav-style">
          <ul>
            <li>Welcome, {this.state.loggedInUser.username}</li>
            <li><Link to='/trails' style={{ textDecoration: 'none' }}>Trails</Link></li>
            <li>
              <Link to='/'>
                <button onClick={() => this.logoutUser()}>Logout</button>
              </Link>
            </li>
          </ul>
        </nav>
      )
    } else {
      return ( 

        // <>
        // <div>
        //     <Navbar collapseOnSelect expand="lg" id="navbar" className="smart-scroll navbar-expand-lg fixed-top navbar-light bg-white border-0 mb-5">
        //     <Navbar.Brand id="navbar-title" className="navbar-brand font-weight-bold" href="/">Hiking <span
        //                 className="navbar-text font-italic text-left"> walk in freedom</span></Navbar.Brand>
        //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />            
        //     <Navbar.Collapse className="test" id="responsive-navbar-nav">
        //         <Nav className="ml-auto nav-item">
        //         {/* <Nav.Link className="nav-link text-info" href="#home">Home</Nav.Link> */}
        //         <Nav.Link className="nav-link text-info" href="/login">Login</Nav.Link>
        //         <Link className="nav-link text-info" href="/login">LoginTest</Link>
        //         <Nav.Link className="nav-link text-info" href="/signup">Signup</Nav.Link>
        //         </Nav>
        //     </Navbar.Collapse>
        //     </Navbar>
        // </div>
        // </> 

        <nav className="nav-style">
          <ul>
            <li><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></li>
            <li><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
          </ul>
        </nav>
      )
    }
  }
}
 
export default Navigation;