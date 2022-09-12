import React, { Component } from 'react'
import CardArtists from '../../components/CardArtists/CardArtists';
import Header from '../../components/Header/Header'


class FavouriteArtists extends Component {
    constructor() {
        super();
        this.state = {
            artists: [],
            q: [],
            filteredArtists: [],
            filtro: "",
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

    evitarSubmit(event) {
        event.preventDefault();
    }

    filtrar(event) {
        if (event.target.value !== "") {
            const resultadoFiltrado = this.state.artists.filter(artist => artist.name.toLowerCase().startsWith(event.target.value))
            this.setState({ filteredArtists: resultadoFiltrado, filtro: event.target.value })
        } else {
            this.setState({ filteredArtists: [], filtro: event.target.value})
        }
    }

    render() {
        return (
            <>
            <Header/>

                    <article className="lista-artist">
						<h1 className="title-artist">FAVOURITE ARTISTS</h1>
                        <form className="search" onSubmit={this.evitarSubmit}>
                            <input type="text" name="filter" placeholder="Filter..." onChange={(event) => this.filtrar(event)} value={this.state.filtro} />
                        </form>
						<ul className="ul-de-artist">
						    { this.state.filteredArtists.length > 0 ?
                                this.state.filteredArtists.map((oneArtist, idx) => <CardArtists key = {oneArtist + idx} artistData = {oneArtist}/>)
                                : this.state.artists.map((oneArtist, idx) => <CardArtists key = {oneArtist + idx} artistData = {oneArtist}/>)
                            }
                            </ul>
                        <button onClick={()=> this.traerMas()}> See More ...</button>
					</article>
            </>



            
        )
    }
}

export default FavouriteArtists;
