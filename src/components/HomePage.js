import React from 'react'
import {Link} from 'react-router-dom'
import Greenway from '../pictures/greenway2.jpg'

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <div className='jumbotron jumbotron-fluid px-5 mb-4 birch-background'>
                    <h1 className='display-2 text-left'><strong>Let Us Make Your Dreams Concrete.</strong></h1>
                    <br></br>
                    <p className='lead text-left'>Call us at <strong>(540) 742-3180</strong> for a free consultation.</p>
                    <p className="text-left">At Turner Concrete & Excavating we strive to deliver a quality product each and every day, and our team will do their utmost to ensure your satisfaction. We have provided our services throughout the Shenandoah Valley and we are proud to be family owned and operated.</p>
                    <br></br>
                    <Link to="/photos" className='btn btn-lg btn-primary float-left'>View Our Past Work</Link>
                    <br></br>
                </div>
                <div className='row px-5 text-left'>
                    <div className='col-4'>
                        <img alt='' className='rounded border' style={{width:'inherit'}} src={Greenway}/>
                    </div>
                    <div className='col'>
                        <p>Turner Concrete & Excavating, Inc. has built a reputation for quality you can count on. As a VA Class A Contractor, we have provided exceptional quality and service to homeowners and business in Virginia's Shenandoah Valley and surrounding areas for over 20 years. </p>
                        <p>We specialize in residential and commercial concrete construction including site excavation, placement of sidewalks, driveways, curbs and gutters, footers, drainage solutions, and more.</p>
                    </div>
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