import React, {useState, useEffect} from 'react';
import './CvPage.css';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


export function CvPage() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if (error) {
        return(
            <Container>
            <Row>
                <Col className="card-1">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                    <h3>Name Surname</h3>
                    <h4>Username</h4>
                    <h4>Email</h4>
                </Col>
                <Col className="card-2">
                    <Col className="color-1" > 
                        <h3>Education:</h3>
                    </Col>
                    <Col className="color-1" > 
                        <h3>Work experience:</h3>
                    </Col>
                    <Col className="color-1" > 
                        <h3>Technical skills:</h3>
                    </Col>
                    <Col className="color-1" > 
                        <h3>Interests:</h3>
                    </Col>
                    <Col className="color-1" > 
                        <h3>Personal qualities:</h3>
                    </Col>

                    <Col className="color-2">
                        <h4>Education</h4>
                    </Col>
                    <Col className="color-2">
                        <h4>Work experience</h4>
                    </Col>
                    <Col className="color-2">
                        <h4>Technical skills</h4>
                    </Col>
                    <Col className="color-2">
                        <h4>Interests</h4>
                    </Col>
                    <Col className="color-2">
                        <h4>Personal qualities</h4>
                    </Col>
                </Col>
                <Col className="msg">
                    <div>Ошибка: {error.message}</div>
                </Col>
            </Row>
        </Container>
        );
    } else if (!isLoaded) {
        return(
            <Container className="msg">
                <div>Загрузка...</div>
            </Container>
        ); 
    } else {
        return (
            <Container>
            <Row>
                <Col className="card-1">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                    <h3>Name Surname</h3>
                    <h4>Username</h4>
                    <h4>Email</h4>
                </Col>
                <Col className="card-2">
                    <Col className="color-1" > 
                        <h3>Education:</h3>
                    </Col>
                    <Col className="color-1" > 
                        <h3>Work experience:</h3>
                    </Col>
                    <Col className="color-1" > 
                        <h3>Technical skills:</h3>
                    </Col>
                    <Col className="color-1" > 
                        <h3>Interests:</h3>
                    </Col>
                    <Col className="color-1" > 
                        <h3>Personal qualities:</h3>
                    </Col>

                    <Col className="color-2">
                        <h4>Education</h4>
                    </Col>
                    <Col className="color-2">
                        <h4>Work experience</h4>
                    </Col>
                    <Col className="color-2">
                        <h4>Technical skills</h4>
                    </Col>
                    <Col className="color-2">
                        <h4>Interests</h4>
                    </Col>
                    <Col className="color-2">
                        <h4>Personal qualities</h4>
                    </Col>
                </Col>
            </Row>
        </Container>
        );
    }
}