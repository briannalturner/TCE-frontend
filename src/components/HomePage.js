import React from 'react'
import {Link} from 'react-router-dom'
import Greenway from '../pictures/greenway2.jpg'
// import Pic2 from '../pictures/reviews.jpeg'

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <div className='jumbotron jumbotron-fluid px-5 mb-4 birch-background'>
                    <h1 className='display-2 text-left'><strong>Let Us Make Your Dreams Concrete.</strong></h1>
                    <br></br>
                    <h4 className='text-left mb-4'>Call us at <strong>(540) 742-3180</strong> for a free consultation.</h4>
                    <p className="text-left">Turner Concrete & Excavating, Inc. has built a reputation for quality you can count on. As a VA Class A Contractor, we have provided exceptional quality and service to homeowners and business in Virginia's Shenandoah Valley and surrounding areas for over 20 years. </p>
                    <p className="text-left">We specialize in residential and commercial concrete construction including site excavation, placement of sidewalks, driveways, curbs and gutters, footers, drainage solutions, and more.</p>
                    {/* <p className="text-left">At Turner Concrete & Excavating we strive to deliver a quality product each and every day, and our team will do their utmost to ensure your satisfaction. We have provided our services throughout the Shenandoah Valley and we are proud to be family owned and operated.</p> */}
                    <br></br>
                    <Link to="/photos" className='btn btn-lg btn-primary float-left'>View Our Past Work</Link>
                    <br></br>
                </div>
                <div className='row px-5 text-left'>
                    <div className='col-4'>
                        <img alt='' className='rounded border vertical-center greenway' id='greenway' src={Greenway} style={{width:'inherit'}} />
                    </div>
                    <div className='col ml-4'>
                        <h2>Why Choose Concrete?</h2>
                        <p><strong>Concrete is a Green Material!</strong>  Concrete is made from abundant, sustainable and natural resources including, water, rock, sand, cement and the most abundant mineral on earth, limestone.</p>
                        <p><strong>Concrete is an Energy-Saver!</strong>  Concrete is naturally brighter and more reflective than asphalt, reducing the need for lighting at night.  Up to 27% of light falling on a concrete surface will be reflected, compared to asphalt which will reflect as little as 5%. </p>
                        <p><strong>Concrete lasts longer!</strong>  A properly poured concrete driveway will last two to three times longer than an asphalt driveway and they are virtually maintenance free.</p>
                        <p><strong>Concrete is Recyclable!</strong>  If concrete ever needs to be removed or replaced, it can be crushed and recycled for use as granular fill or as aggregate in new concrete.</p>
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