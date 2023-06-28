import React, { Component } from "react";
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from "reactstrap";

export class Form1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            state: this.props.state || 'Alive',
            gender: this.props.gender || 'Female',
            chapters: this.props.chapters || ['1', '2']
        }
    }

    change = (value, e) => {
        let temp = this.state;
        temp[value] = e.target.value;
        this.setState(temp);
    }

    saveChar = (e) => {
        let cha = {
            name: this.state.name,
            state: this.state.state,
            gender: this.state.gender,
            episode: this.state.chapters
        }
        this.props.addNew(cha);
    }


    render() {
        return (
            <div>
                {/* <input onChange={this.change.bind(this, 'name')} type="text" placeholder="name" value={this.state.name}/>
                <input onChange={this.change.bind(this, 'state')} type="text" placeholder="State" value={this.state.state}/>
                <input onChange={this.change.bind(this, 'gender')} type="text" placeholder="Gender" value={this.state.gender}/> 
                <input onChange={this.change.bind(this, 'chapters')} type="text" placeholder="chapters" value={this.state.chapters}/> 
                <button onClick={this.saveChar}>Save</button> */}

                <Form className="shadow-lg p-3 mb-5 bg-white rounded mt-4 mx-auto col-md-6">
                    <FormGroup>
                        <Label for="exampleName">
                            Name:
                        </Label>
                        <Input
                            onChange={this.change.bind(this, 'name')} type="text" placeholder="name" value={this.state.name}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleName">
                            State:
                        </Label>
                        <Input
                            onChange={this.change.bind(this, 'state')} type="text" placeholder="State" value={this.state.state}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleName">
                            Gender:
                        </Label>
                        <Input
                            onChange={this.change.bind(this, 'gender')} type="text" placeholder="Gender" value={this.state.gender}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleName">
                            Chapters:
                        </Label>
                        <Input
                            onChange={this.change.bind(this, 'chapters')} type="text" placeholder="chapters" value={this.state.chapters}
                        />
                    </FormGroup>

                    <Button onClick={this.saveChar}>
                        Save
                    </Button>
                </Form>

            </div>
        );
    }
}