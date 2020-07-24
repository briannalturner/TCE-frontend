import React from 'react'
import Logo from '../pictures/TCE3.png'
import {Link} from 'react-router-dom'
import FacebookLogo from '../pictures/fb_logo.png'

class Footer extends React.Component {

    render() {
        return (
            <footer class='footer white-text p-2' style={{width: "100%"}}>
                <div class='row'>
                    <div class='col'>
                        <img src={Logo} className="float-center" style={{maxHeight: "100px"}} alt="small business logo" />
                    </div>
                    <div class='col'>
                        <img style={{width:'20%'}} alt='' onClick={() => window.location='https://www.facebook.com/turnerconcreteandexcavating/'}  className='vertical-center clickable' src={FacebookLogo} />
                    </div>
                    <div class='col p-2'>
                        <p class='d-block'><small><Link activeClassName="active" className="footer-text" to='/about'>About Us</Link></small></p>
                        <p class='d-block'><small><Link activeClassName="active" className="footer-text" to='/careers'>Careers</Link></small></p>
                        <p class='d-block'><small><Link activeClassName="active" className="footer-text" to='/photos'>Photo Gallery</Link></small></p>
                        <p class='d-block'><small><Link activeClassName="active" className="footer-text" to='/contact'>Contact Us</Link></small></p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;