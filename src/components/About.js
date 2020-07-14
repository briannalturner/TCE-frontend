import React from 'react'
import Carol from '../pictures/carol.jpg'
import Ronnie from '../pictures/ronnie.jpg'
import Jonny from '../pictures/jonny.jpg'


class About extends React.Component {

    render() {
        return (
            <div className="container">
                <div className='jumbotron jumbotron-fluid px-5 mb-2 reviews-background'>
                    <h1 className='display-2 text-center'>Family Owned And Operated Since 1997</h1>
                    <p className='lead'>We've been serving the Shenandoah Valley for over 20 years and we're excited to help you take your private or professional project to the next level.</p>
                </div>

                <h2 style={{textAlign:'center'}}>Meet Our Team</h2>

                    <div class="row" style={{width: '100%'}}>
                    <div class="col-3">
                        <div class="card float-left">
                            <img src={Ronnie} alt="Mike" className="card-img-top" style={{height: '250px', objectFit: 'cover'}}/>
                            <div class="card-body">
                                <h2>Ronnie Turner</h2>
                                <p class="title">Founder</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-3 float-center">
                        <div class="card">
                            <img src={Jonny} alt="John" className="card-img-top" style={{height: '250px', objectFit: 'cover'}}/>
                            <div class="card-body">
                                <h2>Jon Turner</h2>
                                <p class="title">CEO</p>
                            </div>
                        </div>
                    </div>
                        <div class="col-3 float-right">
                            <div class="card">
                            <img src={Carol} alt="Jane" className="card-img-top" style={{height: '250px', objectFit: 'cover'}}/>
                            <div class="card-body">
                                <h2>Carol Turner</h2>
                                <p class="title">CFO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;