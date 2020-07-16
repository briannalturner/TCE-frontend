import React from 'react'
import swal from 'sweetalert'

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            phone: '', 
            name: '', 
            email: '', 
            message: '' 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <div className="blp-background p-3">
                    <h1 className="text-left">Contact Us</h1>
                </div>
                <form className="m-5">
                    <p className="text-left">Make sure to include your <strong>email</strong> or <strong>phone number</strong> and we'll get back to you as soon as possible.</p>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputEmail4">Name</label>
                            <input type="text" class="form-control" name="name" id="inputEmail4" onChange={this.handleChange} value={this.state.name} placeholder="Name"/>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputEmail4">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email"/>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputPassword4">Phone Number</label>
                            <input type="text" class="form-control" id="inputPassword4" name="phone" onChange={this.handleChange} value={this.state.phone} placeholder="Phone Number"/>
                        </div>
                    </div>
                    <div class="form-group">
                        {/* <label for="inputAddress">Address</label> */}
                        <textarea type="text" name="message" class="form-control" onChange={this.handleChange} id="inputAddress" rows="7" value={this.state.message} placeholder="write a message..."/>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Send</button>
                </form>
            </div>
        )
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit (event) {
        event.preventDefault()

        const templateId = 'template_JO7ydMzw';
        this.sendFeedback(templateId, {
            message_html: this.state.message, 
            from_name: this.state.name, 
            reply_to: this.state.email, 
            from_phone: this.state.phone})
        this.setState({ 
            phone: '', 
            name: '', 
            email: '', 
            message: '' })

    }
    
    sendFeedback (templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
            ).then(res => {
            swal('Your Message Has Been Sent!', 'We\'ll get back to you as soon as possible.', 'success')
            })
            .catch(err => console.error('Error:', err)
        )
    }
}

export default Contact;