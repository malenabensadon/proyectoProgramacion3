import React, {Component} from 'react';
import FavouriteCard from "../../components/FavouriteCard/FavouriteCard"



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
                 <main class="main-playlist">
                <h1 className="Titulo">My Favourite Tracks</h1>
                 <section className="playlist">
                 <ul class="lista-playlist">
                 {this.state.tracks.map((oneTrack, idx) => <FavouriteCard key={oneTrack + idx} trackData={oneTrack} />)} 
                 </ul>
                 </section>
                 </main>

    
              
            </React.Fragment>
        )
    }
}


export default Favourites;