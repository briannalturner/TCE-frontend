import React from 'react'
import {Link} from 'react-router-dom'

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <div className='jumbotron jumbotron-fluid px-5'>
                    <h1 className='display-2 text-left'>Let Us Make Your Dreams Concrete.</h1>
                    <br></br>
                    <p className='lead text-left'>Call us at (540)742-3180 for a free consultation.</p>
                    <p className="text-left">At Turner Concrete & Excavating we strive to deliver a quality product each and every day, and our team will do their utmost to ensure your satisfaction. We have provided our services throughout the Shenandoah Valley and we are proud to be family owned and operated.</p>
                    <br></br>
                    <Link to="/photos" className='btn btn-lg btn-primary float-left'>View Our Past Work</Link>
                </div>
                <div class="row mx-3 mb-4">
                    <div class="col-md card-grow rounded m-1 py-2 blue-background white-text clickable" onClick={() => window.location = "/about"}>
                        <h3 class="display-4">The Turner Concrete Philosophy</h3>
                        <p>
                        Get to know us as a company.
                        </p>
                    </div>
                    <div class="col-md card-grow rounded m-1 py-2 blue-background white-text clickable" onClick={() => window.location = "/reviews"}>
                        <h3 class="display-4">What Our Customers Have To Say</h3>
                        <p>
                        Find out what it's like to hire us.
                        </p>
                    </div>
                    <div class="col-md card-grow rounded m-1 py-2 blue-background white-text clickable" onClick={() => window.location = "/careers"}>
                        <h3 class="display-4">Interested in Working With Us?</h3>
                        <p>
                        Learn more about careers at Turner Concrete.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;