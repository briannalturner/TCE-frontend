import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../pictures/TCE3.png'

class Navbar extends React.Component {

    render() {
        return (
            <div>
                <nav class='navbar fixed-top navbar-expand-md navbar-dark' style={{backgroundColor:'#212427'}}>
                    <div class='container'>
                        <img src={logo} width="8%" className="mr-4" alt="" loading="lazy" />
                        {/* <div class='navbar-brand' href='#'>Turner Concrete</div> */}
                        <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>
                        <span class='navbar-toggler-icon'></span>
                        </button>
                        <div class='collapse navbar-collapse' id='navbarCollapse'>
                            <ul class='navbar-nav mr-auto'>
                                <li class='nav-item'>
                                    <NavLink to="/" activeClassName="active" className="nav-link">Home</NavLink>
                                </li>
                                <li class='nav-item'>
                                    <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
                                </li>
                                <li class='nav-item'>
                                    <NavLink to="/photos" activeClassName="active" className="nav-link">Photos</NavLink>
                                </li>
                            </ul>
                            <ul class='nav navbar-nav ml-auto'>
                                <li class='nav-item'>
                                    <NavLink to="/contact" activeClassName="active" className="nav-link">Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;