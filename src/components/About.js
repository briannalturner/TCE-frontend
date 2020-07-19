import React from 'react'
import Carol from '../pictures/carol.jpg'
import Ronnie from '../pictures/ronnie.jpg'
import Jonny from '../pictures/jonny.jpg'
import Review from '../pictures/review-main.JPG'


class About extends React.Component {

    render() {
        return (
            <div className="">
                <div className='jumbotron jumbotron-fluid px-5 mb-2 about-background'>
                    <h1 className='display-2 text-center'>Family Owned And Operated Since 1997</h1>
                    <p className='lead'>We've been serving the Shenandoah Valley for over 20 years and we're excited to help you take your private or professional project to the next level.</p>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <h1><strong>Our Story</strong></h1>
                        <hr></hr>
                        <p className='text-left'>The Custom Ink story began in 1999 when three former college classmates got the bug to start a business about a year after graduating. Co-founder and CEO Marc Katz was hard at work in a Wall Street job that he says “didn’t have a lot of heart” and was itching to do something entrepreneurial and meaningful.</p>
                        <p className='text-left'>Meanwhile, Marc’s former college roommate Mike Driscoll was tinkering with the earliest iteration of the customink.com website, which would let people upload graphics onto t-shirts and buy them as special keepsakes. Though Mike was returning to grad school, he had a handful of eager customers, and talked with Marc about launching the “design online” website into a legitimate business.</p>
                        <p className='text-left'>Marc contacted another former classmate and computer whiz, Dave Christensen. Marc spent long hours on his green couch (a hand-me-down from his big brother) talking to Dave on the phone and planning the business, and figuring out ways to make designing and buying custom t-shirts fun, easy, and reliable. In March 2000, Custom Ink was officially launched with a small team of “Inkers” running the show - all from different backgrounds - but with big hearts.</p>
                    </div>
                    <div className='col-6'>
                        <img alt='' className='vertical-align' style={{width: 'inherit'}} src={Review} />
                    </div>
                </div>
                <div className='m-1 p-1'>
                    <h1 className=''>Meet Our Team</h1>

                    <div class="row" style={{width: '100%'}}>
                        <div class="col-4 float-left">
                            <div className='card-flip'>
                                <div className='flip'>
                                    <div class="front">
                                        <div className='card'>
                                            <img src={Ronnie} alt="Mike" className="card-img-top" style={{height: '250px', objectFit: 'cover'}}/>
                                            <div class="card-body">
                                                <h2>Ronnie Turner</h2>
                                                <p class="title">Founder</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='back'>
                                        <div className='card p-5'>
                                            <p>Ronnie began Turner Concrete & Excavating in 1997, around the time his first son, Jonathan, was born.</p>
                                            <p>Nowadays Ronnie can be found helping out around the job site and hanging out with his granddaughter, Kinsley.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-4 float-center">
                        <div className='card-flip'>
                                <div className='flip'>
                                    <div class="front">
                                        <div className='card'>
                                            <img src={Jonny} alt="Mike" className="card-img-top" style={{height: '250px', objectFit: 'cover'}}/>
                                            <div class="card-body">
                                                <h2>Jon Turner</h2>
                                                <p class="title">CEO</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='back'>
                                        <div className='card p-5'>
                                            <p>Ronnie began Turner Concrete & Excavating in 1997, around the time his first son, Jonathan, was born.</p>
                                            <p>Nowadays Ronnie can be found helping out around the job site and hanging out with his granddaughter, Kinsley.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div class="col-4 float-right">
                                <div className='card-flip'>
                                    <div className='flip'>
                                        <div class="front">
                                            <div className='card'>
                                                <img src={Carol} alt="Mike" className="card-img-top" style={{height: '250px', objectFit: 'cover'}}/>
                                                <div class="card-body">
                                                    <h2>Carol Turner</h2>
                                                    <p class="title">CFO</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='back'>
                                            <div className='card p-5'>
                                                <p>Ronnie began Turner Concrete & Excavating in 1997, around the time his first son, Jonathan, was born.</p>
                                                <p>Nowadays Ronnie can be found helping out around the job site and hanging out with his granddaughter, Kinsley.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            // </div>
        )
    }
}

export default About;