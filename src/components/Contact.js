import { Col, FormControl, Image, InputGroup, Row, Button } from "react-bootstrap"
import { useState } from "react";
const Contact = () => {

    const imageArray = [
        'https://cdn.dribbble.com/users/3822476/screenshots/13953499/contact_us_illustration_4x.png',
    ];
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const sendMessage = () => {
        if (email | message === undefined){
            alert('Missing!');
        }
        else {
            let object = {
                'email':'',
                'message': ''
            }
            object['email'] = email;
            object['message'] = message;
    
            try {
                fetch('http://127.0.0.1/dbs-website/api/insertMessage', {
                    method: 'POST',
                    body: JSON.stringify(object)
                })
                .then( (result) => {
                })
            }
            catch(error){
            }
        }
    }

    return (
        <div className='pb-4'>
            <Row className='mb-5'>
                <Col>
                    <h1>Contact Us</h1>
                </Col>
                <Col>
                    <Image src={imageArray[0]} alt='Contact Us Image' thumbnail className='border-0' />
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col className='col-8'>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">Your email</InputGroup.Text>
                        <FormControl
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={ event => setEmail( event.target.value )}
                        />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroup.Text>Message</InputGroup.Text>
                        <FormControl 
                        as="textarea" 
                        aria-label="With textarea"
                        onChange={ event => setMessage( event.target.value )}
                         />
                    </InputGroup>
                    <br />
                    <div className='d-flex justify-content-center'>
                        <Button 
                        className='bg-dark border-0'
                        onClick={ sendMessage }
                        >Send</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Contact
