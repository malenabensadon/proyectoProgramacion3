import React, { Component } from 'react'
import CardTracks from '../../components/CardTracks/CardTracks';
import Header from '../../components/Header/Header'


class HotTracks extends Component {
    constructor() {
        super();
        this.state = {
            tracks: [],
            q: [],
            filteredTracks: [],
            filtro: "",
        }
    }
    componentDidMount(){
    
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?limit=${this.state.q}`)

			.then( response => response.json())
			.then( data => this.setState(
				{ tracks: data.data,
                    q: 10
                 }
			)).catch( error => console.log(error));

    }

    traerMas(){
        //Traer la siguiente pagina de personajes 
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?limit=${this.state.q}`)
        //this.state.tracks)
        .then( response => response.json())
        .then( data => this.setState(
                                {
                                tracks: data.data,
                                q: this.state.q + 10}
        ))
        .catch( error => console.log(error));
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    filtrar(event) {
        if (event.target.value !== "") {
            const resultadoFiltrado = this.state.tracks.filter(track => track.title.toLowerCase().startsWith(event.target.value))
            this.setState({ filteredTracks: resultadoFiltrado, filtro: event.target.value })
        } else {
            this.setState({ filteredTracks: [], filtro: event.target.value})
        }
    }


    render() {
        return (
            
             <>


<Header/>
            
            <article className="lista-songs">
                <h1 className="title-songs">HOT TRACKS</h1>
                <form className="search" onSubmit={this.evitarSubmit}>
                    <input type="text" name="filter" placeholder="Filter..." onChange={(event) => this.filtrar(event)} value={this.state.filtro} />
                </form>
                <ul className="ul-de-songs">
                    { this.state.filteredTracks.length > 0 ?
                        this.state.filteredTracks.map((Track, idx) => <CardTracks key = {Track + idx} trackData = {Track}/>)
                        : this.state.tracks.map((Track, idx) => <CardTracks key = {Track + idx} trackData = {Track}/>)
                    } 

                </ul>
                <button onClick={()=> this.traerMas()}> See More ...</button>
            </article>
            </>
        )
    }
}

export default HotTracks;
