import React, { Component } from 'react'
import CardTracks from '../../components/CardTracks/CardTracks';

class Favourites extends Component {

    constructor(){
        super();
        this.state = {
            tracks: []
        }
    }

    componentDidMount(){
        let favourites = [];
        let Storage = localStorage.getItem('favourites')

        if(Storage !== null){
            favourites = JSON.parse(Storage)
            let canciones = [];


            favourites.forEach(idFav => {
                let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${idFav}`
                fetch(url)
                    .then(response => response.json())
                    .then(data => canciones.push(data))
                    .then(()=> this.setState(
                        {tracks: canciones}
                        ))
                    .catch(error => console.log(error))

            })
        }
    }


    render() {
       console.log(this.state.tracks)
        return(
            <>
                    <h1>Favourite Tracks</h1>
                    <section>
                        {this.state.tracks.map((oneTrack, idx) => <CardTracks key={oneTrack + idx} trackData={oneTrack} />)}
                    </section>

            </>
        )
    }
}

export default Favourites;