import React, { Component } from 'react'
import CardArtists from '../../components/CardArtists/CardArtists';


class FavouriteArtists extends Component {
    constructor() {
        super();
        this.state = {
            artists: [],
            q: []
        }
    }
    componentDidMount(){
    
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists?limit=${this.state.q}`)

    
			.then( response => response.json())
			.then( data => this.setState(
				{ artists: data.data,
                    q: 10
                }
			)).catch( error => console.log(error));

    }

    traerMas(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists?limit=${this.state.q}`) //no se si esta bien volver a copiar el endpoint
        .then( response => response.json())
        .then( data => this.setState(
                                {
                                artists: data.data,
                                q: this.state.q + 10
                                }
        ))
        .catch( error => console.log(error));
    }


    render() {
        return (
            <>
            <div>Favourite Artists</div>


                    <article className="lista-artist">
						<h1 className="title-artist">FAVOURITE ARTISTS</h1>
						<ul className="ul-de-artist">
						{this.state.artists.map((oneArtist, idx) => <CardArtists key = {oneArtist + idx} artistData = {oneArtist}/>)}

						</ul>
                        <button onClick={()=> this.traerMas()}> See More ...</button>
					</article>
            </>



            
        )
    }
}

export default FavouriteArtists;
