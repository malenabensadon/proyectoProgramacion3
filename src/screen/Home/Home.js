import React, { Component } from 'react';
import './Index.css'


class Home extends Component {
    constructor() {
        super();
        this.state = {
            valor: [],
        }
    }
    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks')
        .then( response => response.json())
        .then( data => this.setState(
                                { valor: data.data }
        ))
        .catch( error => console.log(error));

        // fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists')
        // .then( response => response.json())
        // .then( data => this.setState(
        //                         {valor: data.results,
        //                         nextUrl: data.info.next}
        // ))
        // .catch( error => console.log(error));

        // fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums')
        // .then( response => response.json())
        // .then( data => this.setState(
        //                         {valor: data.results,
        //                         nextUrl: data.info.next}
        // ))
        // .catch( error => console.log(error));

    }
    traerMas(){
        //Traer la siguiente pagina de personajes 
        fetch(this.state.nextUrl)
        .then( response => response.json())
        .then( data => this.setState(
                                {valor: data.results.concat(this.state.valor),
                                nextUrl: data.info.next}
        ))
        .catch( error => console.log(error));
    }

    render(){
        console.log(this.state.valor)
        return (
        <React.Fragment>

           <h1>hola</h1>
        </React.Fragment>
        )
    }
}



export default Home;