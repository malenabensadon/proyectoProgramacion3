import React, { Component } from 'react'
import CardTracks from '../../components/CardTracks/CardTracks';


class HotTracks extends Component {
    constructor() {
        super();
        this.state = {
            tracks: [],
            q: 10,
        }
    }
    componentDidMount(){
    
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?limit=${this.state.q}`)

    
			.then( response => response.json())
			.then( data => this.setState(
				{ tracks: data.data }
			)).catch( error => console.log(error));

    }

    traerMas(){
        //Traer la siguiente pagina de personajes 
        fetch(this.state.tracks)
        .then( response => response.json())
        .then( data => this.setState(
                                {
                                tracks: data.data,
                                q: 10}
        ))
        .catch( error => console.log(error));
    }


    render() {
        return (
            <>
            <div>Hot Tracks</div>
            
          <article className="lista-songs">
						<h1 className="title-songs">HOT TRACKS</h1>
						<ul className="ul-de-songs">
 							{this.state.tracks.map((Track, idx) => <CardTracks key = {Track + idx} trackData = {Track}/>)} 
 
						</ul>
                        <button onClick={()=> this.traerMas()}> See More ...</button>
					</article>
            </>



            
        )
    }
}

export default HotTracks;
