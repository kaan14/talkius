import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



class Languages extends Component {



    render() {
        console.log(this.props)
        return (
            <div>
                <Container>
                    <Row sm={4}>
                        
                            {
                                this.props.langs.map(lang =>
                                    <Col><Button>{lang}</Button></Col>)
                            }
                       
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Languages; 