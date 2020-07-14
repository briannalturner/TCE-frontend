import React from 'react'
import career2 from '../pictures/career2.JPG'
// import career3 from '../pictures/career3.JPG'
// import career4 from '../pictures/career4.JPG'


class Careers extends React.Component {

    constructor() {
        super()

        this.state = {
            currentPic: 'career2'
        }
    }

    grabPic = () => {
        return career2
    }

    next = () => {

        if (this.state.currentPic === 'career2') {
            this.setState({currentPic: 'career3'})
            console.log(document.getElementById('picId'))
            // document.getElementById('picId').src = career3
            return null
        } else if (this.state.currentPic === 'career3') {
            this.setState({currentPic: 'career4'})
            // document.getElementById('picId').src = career4
            return null
        } else {
            this.setState({currentPic: 'career2'})
            // document.getElementById('picId').src = career2
            return null
        }
        
    }

    render() {
        return (
            <div className='float-middle'>
                <div className='jumbotron jumbotron-fluid px-5 mb-2 careers-background'>
                    <h1 className='display-2 text-center'>Careers at Turner Concrete & Excavating</h1>
                </div>
                <div className="row my-3 mx-4">
                    <div className='col-4 text-left p-3'>
                        <h3 className='m-1 text-center'><strong>Work With Us</strong></h3>
                        <hr></hr>
                        <div className="mb-3">Turner Concrete & Excavating has been recognized as a top employer by Fortune, The Washington Post, and Great Place to Work. We top the charts as an organization that focuses on team member well-being and the shared values and pride among our team. </div>
                        <div className='mb-3'>We're always looking for friendly and highly motivated potential Inkers who are ready to roll up their sleeves and work with a great team.</div>
                        <div className='mb-3'>If you think you’ve got what it takes to be an integral part of our internal community and succeed in a results-driven and fun environment, we’d love to hear from you.</div>
                    </div>
                    <div className='col-8 carousel'>
                        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                        <img className="career2 rounded float-center" id='picId' src={this.grabPic()} alt="" />
                        <svg onClick={this.next()} width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}

export default Careers;