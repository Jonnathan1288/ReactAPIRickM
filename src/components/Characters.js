import React, { Component } from "react";
import characters from './../character.json'
import { Form1 } from "./Form";
import { Events } from "./EventComponent";
import { Col, Container, InputGroup, InputGroupText, Row, Input, Form, Label, FormGroup, FormFeedback, FormText, Card, CardTitle, CardText, Button, Spinner } from "reactstrap";


export default class Characters extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // characters: characters.results,
            characters: [],
            filter_name: ''
        }


    }

    componentDidMount() {
        setTimeout(() => {
            fetch('https://rickandmortyapi.com/api/character').then(r => r.json()).then(d => {
                this.setState({ characters: d.results })
            })
        }, this.state.characters !== -1);
    }



    estractCharapters = (c) => {
        let res = [];
        c.forEach(ca =>
            res.push(ca.split('/').slice(-1)[0])
        );

        return res.join(',');
    }


    addNew = (e) => {
        this.setState({ characters: [...this.state.characters, e] });
    }


    removeC = (name) => {
        let copy = [...this.state.characters];
        let index = -1;
        copy.forEach((ch, i) => {
            if (ch.name === name) {
                index = i;
            }
        })

        if (index !== -1) {
            copy.splice(index, 1);

            this.setState({ characters: copy })
        }

    }

    filtern = (e) => {
        let valor = e.target.value;

        const list = this.state.characters.filter((data) =>
            // console.log(data)
            (data.name.toLowerCase().includes(valor))
        )
        this.setState({ characters: [...list] })
    }

    anotherFilter = (e) => {
        this.setState({ filter_name: e.target.value })
    }

    render() {
        return (
            <div className="container">
                <Row>
                    <Col sm="4">

                    </Col>
                    <Col sm="4">

                    </Col>

                    <Col sm="4">

                    </Col>
                </Row>



                {/* Vamos a comentar por el momento */}
                {/* <Form1 addNew={this.addNew.bind(this)} /> */}


                <Form className="shadow-lg p-3 mb-5 bg-white rounded mt-4 mx-auto col-md-6">
                    <FormGroup>
                        <Label for="exampleEmail">
                            Find by name:
                        </Label>
                        <Input placeholder="Search by name..." valid onChange={this.anotherFilter} />


                    </FormGroup>
                </Form>


                <Row  >
                    {/* {this.state.characters.map((e, i) =>

                            <Col className=" mb-4">
                                <Events removeC={this.removeC} key={i} titulo={e.name} state={e.status} gender={e.gender} chapters={this.estractCharapters(e.episode)} img={e.image} />

                            </Col>
                        )}; */}

                    {this.state.characters.length === 0 && <div className="text-center">
      <Spinner color="primary" />
      <div>Cargando...</div>
    </div>}

                    {this.state.characters.map((e, i) => {
                        if (e.name.toLowerCase().includes(this.state.filter_name)) {
                            return (<Col className=" mb-4" sm="4">
                                <Events removeC={this.removeC} key={i} titulo={e.name} state={e.status} gender={e.gender} chapters={this.estractCharapters(e.episode)} img={e.image} />

                            </Col>)
                        } else {
                            return;
                        }
                    }
                    )};
                </Row>

                {/* <Form addNew={this.addNew} /> */}
                {/* {this.state.characters.map((e, i) =>
                    <Events removeC={this.removeC} key={i} titulo={e.name} state={e.status} gender={e.gender} chapters={this.estractCharapters(e.episode)} img={e.image} />
                )} */}
            </div>
        );
    }
}