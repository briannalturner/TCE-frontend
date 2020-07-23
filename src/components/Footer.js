import React from 'react'
import Logo from '../pictures/TCE3.png'
import {Link} from 'react-router-dom'

class Footer extends React.Component {

    render() {
        return (
            <footer class='footer white-text p-2' style={{width: "100%"}}>
                <div class='row'>
                    <div class='col'>
                        <img src={Logo} className="" style={{maxHeight: "100px"}} alt="small business logo" />
                    </div>
                    <div class='col'>
                        <p class=''><small>At Turner Concrete & Excavating we strive to deliver a quality product each and every day. We have provided our services throughout the Shenandoah Valley and we are proud to be family owned and operated.</small></p>
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