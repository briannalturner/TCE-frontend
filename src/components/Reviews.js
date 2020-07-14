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
                        </div>
                        <div>
                            <div className="row mb-2">
                                <div className="col-7">
                                    <img style={{width: 'inherit'}} class='rounded' alt="" src={career4} />
                                </div>
                                <div className="col-5">
                                    <p class="vertical-center triangle-border left">"I loved my experience working with Turner Concrete & Excavating, the entire process was seamless from start to finish. If you need a professional, dependable concrete company look no further." - Jane Doe, Shenandoah, VA</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5">
                                    <p class=" vertical-center triangle-border right">"We've depended on Turner Concrete & Excavating for years, and they have not yet let us down. Every time we need a project completed swiftly and professionally we call Turner Concrete." - Town of Luray, VA</p>
                                </div>
                                <div className="col-7">
                                    <img style={{width: 'inherit'}} class='rounded' alt="" src={career2} />
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