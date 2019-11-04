import React, { Component } from 'react'
import './MainPageBody.css'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Logo from '../TalkiusLogo.jpeg'
import TalkiusImage1 from '../TalkiusImage1.jpeg'
import TalkiusImage2 from '../TalkiusImage2.jpeg'







class MainPageBody extends Component {

    render() {
        return (
            <div>
                <Jumbotron id='jumbotron'>
                    <Image id='logo' src={Logo} thumbnail></Image>
                    <p id="jumbotronText">
                        Talkius is a platform where language enthusiasts meet tutors. Talkius offers language practices for 
                        different languages.
                    </p>

                </Jumbotron>
                <Container>
                    <Row>
                        <Col md='auto' className="justify-content-md-center">
                            <h4 id='mainPageTitle'>Get Fluent with Languages</h4>
                        </Col>
                    </Row>
                </Container>
                <Container id="mainPageImages">
                    <Row>
                        <Col>
                            <Image src={TalkiusImage1} rounded ></Image>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src={TalkiusImage2} rounded></Image>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}


export default MainPageBody;  