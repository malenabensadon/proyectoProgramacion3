import React, { Component } from 'react'
import CardArtists from '../../components/CardArtists/CardArtists';


class FavouriteArtists extends Component {
    constructor() {
        super();
        this.state = {
            artists: [],
        }
    }
    componentDidMount(){
    
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists`)

    
			.then( response => response.json())
			.then( data => this.setState(
				{ artists: data.data }
			)).catch( error => console.log(error));

    }

    traerMas(){
        //Traer la siguiente pagina de personajes 
        fetch(this.state.artists)
        .then( response => response.json())
        .then( data => this.setState(
                                {
                                artists: data.data,
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
