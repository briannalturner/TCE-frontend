import React from 'react'
import career2 from '../pictures/career2.JPG'
import swal from 'sweetalert'

class Careers extends React.Component {

    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            experience: '',
            position: ''
        }
        // this.onChange = this.onChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
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
                    <div className='col-8'>
                        <img className="rounded" style={{width:'inherit', height:'450px', objectFit:'cover'}} id='picId' src={career2} alt="" />
                    </div>
                </div>
                <hr></hr>
                <div className='m-5'>
                    <h1>Ready To Apply?</h1>
                    <p className='lead'>Fill out the form below and we'll get back to you as soon as possible.</p>
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Choose from our available positions:</label>
                            <select class="form-control" id="exampleFormControlSelect1" name="position" value={this.state.position} onChange={(e) => this.onChange(e)} >
                                <option>Select a position...</option>
                                <option>Concrete Finisher</option>
                            </select>
                        </div>
                        <div class="form-row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="First name" name="firstName" value={this.state.firstName} onChange={(e) => this.onChange(e)}/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name" name="lastName" value={this.state.lastName} onChange={(e) => this.onChange(e)} />
                            </div>
                        </div>
                        <br></br>
                        <div class="form-row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Phone Number" name="phone" value={this.state.phone} onChange={(e) => this.onChange(e)}/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Email" name="email" value={this.state.email} onChange={(e) => this.onChange(e)}/>
                            </div>
                        </div>
                        <br></br>
                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="experience" value={this.state.experience} placeholder='Please describe relevant experience (1-3 sentences).'  onChange={(e) => this.onChange(e)}></textarea>
                        </div>
                        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.handleSubmit}>Submit Application</button>
                    </form>
                </div>
            </div>
        )
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        let fullName = this.state.firstName + ' ' + this.state.lastName

        if(this.state.position !== '' && this.state.position !== 'Select a position...' && this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && this.state.phone !== '' && this.state.experience !== '') {
            const templateId = 'application';
            this.sendFeedback(templateId, {
                position: this.state.position, 
                from_name: fullName, 
                email: this.state.email, 
                phone: this.state.phone,
                experience: this.state.experience
            })
            this.setState({ 
                firstName: '', 
                lastName: '', 
                phone: '', 
                email: '',
                experience: '',
                position: ''
            })
        } else {
            swal('','Please fill out each field.', 'error')
        }
    }
    
    sendFeedback (templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
            ).then(res => {
            swal('Your Application Has Been Received!', 'We\'ll get back to you as soon as possible.', 'success')
            })
            .catch(err => console.error('Error:', err)
        )
    }
}

export default Careers;