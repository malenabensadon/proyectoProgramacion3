import React, { Component } from 'react'
import CardAlbums from '../../components/CardAlbums/CardAlbums';


class BestAlbums extends Component {
    constructor() {
        super();
        this.state = {
            albums: [],
        }
    }
    componentDidMount(){
    
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albumss`)

    
			.then( response => response.json())
			.then( data => this.setState(
				{ albums: data.data }
			)).catch( error => console.log(error));

    }

    traerMas(){
        //Traer la siguiente pagina de personajes 
        fetch(this.state.albums)
        .then( response => response.json())
        .then( data => this.setState(
                                {
                                albums: data.data,
                                }
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
