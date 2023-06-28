import React, { Component } from "react";
import characters from './../character.json'
import './../App.css'

//Vamos a importar el json de la api..


import { library } from "@fortawesome/fontawesome-svg-core";

import { faSkull, faHeart, faQuestion, faCoffee, faMale, faFemale } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

library.add(faSkull, faHeart, faQuestion, faCoffee, faMale, faFemale)

export class Events extends Component {
    constructor(props) {
        super(props)

        this.state = {
            state: this.props.state,
            chapters: this.props.chapters,
            characters: characters.results
        }

        //Es el contexto..
        //this.kill = this.kill.bind(this);
    }

    // kill(){
    //     this.setState({state: 'Dead'})
    // }

    //Un arrow fuction
    kill = (e) => {
        console.log(e.target.value)
        this.setState({ state: e.target.value })
        // this.setState({state: 'Dead'})
    }

    //Pasar parametros a la funcion 

    kill2 = (param, e) => {
        console.log(e.target.vaule, param)
    }

    removeC = (e) => {
        this.props.removeC(this.props.titulo)
    }

    render() {
        console.log(this.state.characters)
        return (
            <>
                {/* <button onClick={this.removeC}>Remove</button>
                {/* <App/> */}
                {/* {this.state.app ? <App/> : <span></span>} */}

                {/* <App titulo = 'R Y M'/> */}
                {/* <App1 titulo={this.props.titulo} /> */}
                {/* <h2>Nombre del personaje</h2> */}
                {/* <p>
                    <FontAwesomeIcon
                        icon={this.state.state === 'Alive' ? faHeart : this.state.state === 'Dead' ? faSkull : faQuestion}
                    /> */}
                {/* {this.state.state} */}
                {/* </p>
                <p> */}
                {/* <FontAwesomeIcon icon={this.props.gender === 'Female' ? faFemale : faMale} /> */}
                {/* {this.props.gender} */}
                {/* </p> */}
                {/* <p>{this.state.chapters}</p>
                <button onClick={this.kill}>Kill</button>
                <input onChange={this.kill}></input>
                <input onChange={this.kill2.bind(this, "Hola como estas.")}></input>  */}


                {/* 
                <Card
                    style={{
                        width: '18rem'
                    }}
                >
                    <img
                        alt="Sample"
                        src={this.props.img}
                    />
                    <CardBody>
                        <Link to={'/index/' + this.props.titulo}>
                            <CardTitle tag="h5">
                                {this.props.titulo}
                            </CardTitle>
                        </Link>
                        <CardSubtitle>
                            <Container className="text-center">
                                <Row xs="2">
                                    <Col className="bg-light border">
                                        <FontAwesomeIcon
                                            icon={this.state.state === 'Alive' ? faHeart : this.state.state === 'Dead' ? faSkull : faQuestion} />
                                    </Col>
                                    <Col className="bg-light border">
                                        <FontAwesomeIcon icon={this.props.gender === 'Female' ? faFemale : faMale} />

                                    </Col>

                                </Row>
                            </Container>


                        </CardSubtitle>

                        <CardText>
                            Mi name is <strong>{this.props.titulo}</strong> and I'm a <strong>{this.props.gender}</strong>.
                        </CardText>
                        <Button color="danger" onClick={this.removeC}>
                            Remove
                        </Button>
                    </CardBody>
                </Card> */}




                {/* <Row>
                    <Col sm="15"> */}
                <Card body
                >


                    <Container className="text-center">  <img
                        alt="Sample"
                        src={this.props.img}
                        width={200}
                    /></Container>

                    <CardBody>
                        <Link to={'/index/' + this.props.titulo}>
                            <CardTitle tag="h5">
                                {this.props.titulo}
                            </CardTitle>
                        </Link>
                        <CardSubtitle>
                            <Container className="text-center">
                                <Row xs="2">
                                    <Col className="bg-light border">
                                        <FontAwesomeIcon
                                            icon={this.state.state === 'Alive' ? faHeart : this.state.state === 'Dead' ? faSkull : faQuestion} />
                                    </Col>
                                    <Col className="bg-light border">
                                        <FontAwesomeIcon icon={this.props.gender === 'Female' ? faFemale : faMale} />

                                    </Col>

                                </Row>
                            </Container>


                        </CardSubtitle>

                        <CardText>
                            Mi name is <strong>{this.props.titulo}</strong> and I'm a <strong>{this.props.gender}</strong>.
                        </CardText>
                        <Button color="danger" onClick={this.removeC}>
                            Remove
                        </Button>
                    </CardBody>
                </Card>
                {/* </Col>
                  
                </Row> */}
            </>
        )
    }
}




// export default Events


