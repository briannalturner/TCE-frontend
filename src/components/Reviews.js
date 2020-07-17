import React from 'react'
import career2 from '../pictures/career2.JPG'
import career4 from '../pictures/career4.JPG'

class Reviews extends React.Component {

    render() {
        return (
            <div>
                <div className="">
                    <div className="">
                        <div className='jumbotron jumbotron-fluid px-5 mb-2 reviews-background'>
                            <h1 className='display-2 text-center'>Read Reviews From Real Customers</h1>
                            <p className='lead'>
                                We strive to make every customer as satisifed as possible. If you
                                aren't happy with your product, reach out to us and we'll make it right.
                                If you're still not convinced, read these glowing reviews left by our past
                                customers!
                            </p>
                        </div>
                        <div>
                            <h1 className='m-5'>
                                This is What Customers Have to Say About Turner Concrete
                                <hr></hr>
                            </h1>
                            <div className="row mb-2">
                                <div className="col-7">
                                    <img style={{width: 'inherit'}} class='rounded' alt="" src={career4} />
                                </div>
                                <div className="col-5 review">
                                    <div className='vertical-center p-4'>
                                        <h3 className='text-left'>
                                        "I loved my experience working with Turner Concrete & Excavating, the entire process was seamless from start to finish. If you need a professional, dependable concrete company look no further."
                                        </h3>
                                        <p className='text-right'>- Jane Doe, Shenandoah, VA</p>
                                    </div>
                                </div>
                            </div>
                            <div className='m-5 text-left'>
                                <h3>
                                    "We pride ourselves on our ability to deliver a quality product each and every
                                    time we take on a job. We use trusted, local brands like Rockingham Redi-Mix.
                                    We only use brands that have been tried and held true, and we aren't satisfied
                                    if you aren't satisfied."
                                </h3>
                                <p>- Jon Turner, CEO</p>
                            </div>
                            <div className="row mb-4">
                                <div className="col-5 review">
                                    <div className='vertical-center p-4'>
                                        <h3 className="text-left">"We've depended on Turner Concrete & Excavating for years, and they have not yet let us down. Every time we need a project completed swiftly and professionally we call Turner Concrete."</h3>
                                        <p className='text-right'>- Town of Luray, VA</p>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <img style={{width: 'inherit'}} class='rounded review-image' alt="" src={career2} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reviews;