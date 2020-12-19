import React, {Component} from 'react';
import './CvPage.css';
import Grid from '@material-ui/core/Grid';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


export class CvPage extends Component {

    render() {
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
    };
}