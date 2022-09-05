import React, { Component } from 'react';
import './Index.css'


class Home extends Component {
    constructor() {
        super();
        this.state = {
            tracks: [],
            artists: [],
            albums: []
        }
    }

    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks')
        .then( response => response.json())
        .then( data => this.setState(
            { tracks: data.data }
        ))
        .then(() => {
            fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists')
            .then( response => response.json())
            .then( data => this.setState(
                { artists: data.data }
            ))
            .then(() => {
                fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums')
                .then( response => response.json())
                .then( data => this.setState(
                    { albums: data.data }
                ))
                .catch( error => console.log(error));
            })
            .catch( error => console.log(error));
        })
        .catch( error => console.log(error));

    }
    // traerMas(){
    //     //Traer la siguiente pagina de personajes 
    //     fetch(this.state.nextUrl)
    //     .then( response => response.json())
    //     .then( data => this.setState(
    //                             {valor: data.results.concat(this.state.valor),
    //                             nextUrl: data.info.next}
    //     ))
    //     .catch( error => console.log(error));
    // }

    render(){
        return (
        
        <React.Fragment>
            <main class="main-home">
        <article class="lista-songs">
            <h1 class="title-songs">HOT TRACKS</h1>
            <ul class="ul-de-songs">
                

            </ul>
        </article>
        <article class="lista-albums">
            <h1 class="title-albums">BEST NEW ALBUMS</h1>
            <ul class="ul-de-albums">
                
                
            </ul>
        </article>
        <article class="lista-artist">
            <h1 class="title-artist">FAVOURITE ARTISTS</h1>
            <ul class="ul-de-artist">
                

            </ul>
        </article>
    </main>
           <ul>{this.state.tracks.map((oneTrack, idx) => <li key = {oneTrack + idx}> {oneTrack.title} </li>)} </ul>
        </React.Fragment>
        )
    }
}



export default Home;