import { Col, Row, Image } from "react-bootstrap"

const About = () => {

    const imageArray = [
        'https://miro.medium.com/max/800/1*u-BzZCCIvPKuRysWBVe5nQ.png',
        'https://media.istockphoto.com/vectors/money-bag-vector-icon-moneybag-flat-simple-cartoon-illustration-vector-id528069240?k=20&m=528069240&s=170667a&w=0&h=rETXeS0ONmPxCEeF4S7vhubsw4QN5kt222iOEdAUahk=',
        'https://t3.ftcdn.net/jpg/02/82/65/68/360_F_282656875_IDAZtlq9ztXjcs1i9u9I83Bc7Qy9iYxq.jpg'
    ];

    return (
        <div>
            <h1>About</h1>
            <Row>
                <Col>
                    <Image src={imageArray[0]} alt='Happy Men Image' thumbnail className='border-0'/>
                </Col>
                <Col>
                    <h2> Some Title</h2>
                   <p>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                   </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={imageArray[1]} alt='Dollar Bag Image' thumbnail className='border-0'/>
                </Col>
                <Col>
                    <h2> Some Title</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                   </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={imageArray[2]} alt='Pesos Image' thumbnail className='border-0'/>
                </Col>
                <Col>
                    <h2> Some Title</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                   </p>
                </Col>
            </Row>
        </div>
    )
}

export default About
