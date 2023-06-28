import React, { Component } from 'react';
import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <h1>Hola como estas</h1>
//     </div>
//   );
// }


//Hemos creado otro componente el cual va ser las tarjetas que vamos renderizar por pantalla..
class CharacterCard extends Component{
  constructor(props){
    super(props)
    // this.state = {app: true}
    console.log('constructor')

    //Añadir estados siempre al constructor..
    this.state ={
      state: this.props.state,
      chapters: this.props.chapters
    }

   
  }

  componentDidMount(){
    // this.setState({app: false})
    console.log('componentDidMount')

    this.setState({
      state: 'Dead'
    });
  }

  componentDidUpdate(prePro, preState, snapshot){
    console.log('componentDidUpdate')
  }


  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  shouldComponentUpdate(nextP, nextS){
    console.log('shouldComponentUpdate')

    //en este coso si ponemos el fale la app se renderizar si no 
    return false;
    // return true;
  }

  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps')
    return null;
  }

  getSnapshotBeforeUpdate(preP, preS){
    console.log('getSnapshotBeforeUpdate')
  }


  render(){
    console.log('render')
    return (
      <div className='card'>
        {/* <App/> */}
        {/* {this.state.app ? <App/> : <span></span>} */}

            {/* <App titulo = 'R Y M'/> */}
            <App titulo = {this.props.titulo}/>
        {/* <h2>Nombre del personaje</h2> */}
        <p>{this.props.state}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.chapters}</p>
      </div>
    );
  }
}

class App extends Component{
  render() {
    return (
      <h1 className='App'>{this.props.titulo}</h1>
      // <h1 className='App'>RICK MORTIN</h1>
      
    );
  }
}

//otro ejemplo que voy hacer..

//Cabe recalcar que podemos poner tambien 
//export defaul class ..mas lo que venga... y en el princiapn del renombrado vamos a poner el nombre del renombrado +default
export class Prueba extends Component {
  render(){
    return(
      <div className='App'>Hola esto es un ejemplo de la clase por defecto</div>
    );
  }
}

//Para exportar a la principal hemos cambiado el nombre de la funcion..
export default CharacterCard;
