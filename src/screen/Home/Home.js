import React, { Component } from 'react';
import CardTracks from '../../components/CardTracks/CardTracks';
import './Home.css'


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
            <main className="main-home">
        <article className="lista-songs">
            <h1 className="title-songs">HOT TRACKS</h1>
            <ul className="ul-de-songs">
                {this.state.tracks.map((oneTrack, idx) => <CardTracks key = {oneTrack + idx} trackData = {oneTrack}/>)} 

            </ul>
        </article>
        <article className="lista-albums">
            <h1 className="title-albums">BEST NEW ALBUMS</h1>
            <ul className="ul-de-albums">
            {this.state.albums.map((oneAlbum, idx) => 
            <li  key = {oneAlbum + idx}>
            <img src={oneAlbum.cover_big} alt="Image of {oneAlbum.title} Album"/>
            <div className="text">
              <h5><a href="detail-album.html?id={oneAlbum.id}">{oneAlbum.title}</a></h5>
              <p><a href="detail-artist.html?id={oneAlbum.artist.id}">- {oneAlbum.artist.name}</a></p>
            </div>
         </li>
            
            )} 
                
            </ul>
        </article>
        <article className="lista-artist">
            <h1 className="title-artist">FAVOURITE ARTISTS</h1>
            <ul className="ul-de-artist">
            {this.state.artists.map((oneArtist, idx) => 
            <li key = {oneArtist + idx}>
            <img src={oneArtist.picture_big} alt="Image of {oneArtist.name}"/>
            <div className="text">
                <h5><a href="detail-artist.html?id={oneArtist.id}">{oneArtist.name}</a></h5>
            </div>
        </li>)}

            </ul>
        </article>
    </main>
        </React.Fragment>
        )
    }
}



export default Home;