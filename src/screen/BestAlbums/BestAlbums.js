import React, { Component } from 'react'
import CardAlbums from '../../components/CardAlbums/CardAlbums';


class BestAlbums extends Component {
    constructor() {
        super();
        this.state = {
            albums: [],
            q: []
        }
    }
    componentDidMount(){
    
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?limit=${this.state.q}`)

    
			.then( response => response.json())
			.then( data => this.setState(
				{ albums: data.data,
                    q: 10
                
                }
			)).catch( error => console.log(error));

    }

    traerMas(){
        //Traer la siguiente pagina de personajes 
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?limit=${this.state.q}`)
        .then( response => response.json())
        .then( data => this.setState(
                                { albums: data.data,
                                    q: this.state.q + 10}
        ))
        .catch( error => console.log(error));
    }


    render() {
        return (
            <>
            <div>Best Albums</div>

            <article className="lista-albums">
						<h1 className="title-albums">BEST NEW ALBUMS</h1>
						<ul className="ul-de-albums">
						{this.state.albums.map((oneAlbum, idx) => <CardAlbums  key = {oneAlbum + idx} albumData = {oneAlbum}/>)} 
							
						</ul>
                        <button onClick={()=> this.traerMas()}> See More ...</button>
					</article>
                       
					
            </>



            
        )
    }
}

export default BestAlbums;
