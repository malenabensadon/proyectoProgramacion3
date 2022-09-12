import React, {Component} from 'react';
import CardTracks from "../../components/CardTracks/CardTracks"



class Favourites extends Component{
    constructor(){
        super();
        this.state = {
            tracks: [],
        }
    }

    componentDidMount(){
        let favourites = [];
        let Storage = localStorage.getItem('favourites')

        if(Storage !== null){
            favourites = JSON.parse(Storage) 
            let favs = [];

            
            favourites.forEach(unId => {
           
                let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${unId}`
                fetch(url)
                    .then(response => response.json())
                    .then(data => favs.push(data))
                    .then(() => this.setState(
                        {
                            tracks: favs }
                            
                    ))
                    .catch(error => console.log('El error es' + error))
                  
            }) 
            
        }
}

    
        render(){
            console.log(this.state.tracks)
        return(
            <React.Fragment>
                <h2 className="Titulo">My Favourite Tracks</h2>
                 <section className="card-container-favs">
                 {this.state.tracks.map((oneTrack, idx) => <CardTracks key={oneTrack + idx} trackData={oneTrack} />)} 
                 </section>
              
            </React.Fragment>
        )
    }
}


export default Favourites;