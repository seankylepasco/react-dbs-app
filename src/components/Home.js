import React, { useEffect, useState} from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaMoneyBillWave } from 'react-icons/fa';
import FlagIcon from '../components/FlagIcon';

const Home = () => {

    useEffect(() => {
        const fetchData = async () =>{
          try {
            const response = await fetch('http://127.0.0.1/dbs-website/api/rates', {
              method: 'POST',
              mode : 'cors',
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
            });
            const result = await response.json();
            const array = result.payload;
            setArray(array);
          }
          catch(error){
          }
        }
        fetchData();
      }, []);
    
      const [data, setArray] = useState([]);
    
      useEffect(() => {
      }, [data]);
    
      let imgArray = [
        'https://i.pinimg.com/originals/7d/f2/ea/7df2eabd60ff40d4ddbae3dcd7bfed66.jpg',
      ];
    
    return (
        <div>
            <div className='mb-4'>
                <h1>Rates</h1>
            </div>
            { data && data.length
                ? 
                (
                <Row>
                    <Col>
                        {
                            data.map(
                                value => 
                                <Row key={value.id}>
                                <Col>
                                    <Card className='mb-3 bg-dark text-light'>
                                    <Card.Body>
                                        <Card.Title>
                                        <FaMoneyBillWave />
                                        &nbsp;
                                        {value.name}
                                        </Card.Title>
                                        <hr />
                                        <Card.Text className='text-rate'>                              
                                        RATE: &nbsp; {value.rate}
                                        </Card.Text>  
                                    </Card.Body>    
                                    </Card>
                                </Col>
                                <Col>
                                    <FlagIcon flagNationCode={value.code} />
                                </Col>
                                </Row>
                            )
                        }
                    </Col>
                    <Col>
                        <img className='w-100' src={imgArray[0]} alt='Money Exchange'/>
                    </Col>
                </Row>
                )
                : <div>Data is still loading...</div>
            }
        </div>
    )
}

export default Home
