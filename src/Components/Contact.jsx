import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Contact = () => {
    function inputEvent() {
        
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
    <>
      <div className='paddingdiv my-3'></div>
      <h1 className='mx-auto text-center mb-4'>Contact Us</h1>
      <Form style={{marginBottom:"50px"}}>
        <div className='row formrowmargin' >
          <div className='col-md-5 formdiv col-10 mx-auto'>


            {/* Name Input */}
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text" 
                    name='name'
                    onChange={inputEvent}
                    placeholder="Enter Your Name" 
                />
            </Form.Group>

            {/* Email Input */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    name='email'
                    onChange={inputEvent}
                    
                    placeholder="Enter your Email"
                />
            </Form.Group>

            {/* Message Input */}
            <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                    type="text" 
                    name='message'
                    onChange={inputEvent}
                    
                    placeholder="Enter your message" 
                />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit" onSubmit={submitHandler}>
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
}

export default Contact;
