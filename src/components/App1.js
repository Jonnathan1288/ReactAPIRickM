import React, { Component } from "react";

export default class App1 extends Component{
    render(){
       return(
           <h1 className='App'>{this.props.titulo}</h1>        );
    }
}