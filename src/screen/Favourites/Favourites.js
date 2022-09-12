import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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

    borrarFav(id) {
        const arrayFiltrado = this.state.tracks.filter((oneTrack) => oneTrack.id !== id);

        this.setState({
            tracks: arrayFiltrado
        });
    };

    render(){
        return(
            <React.Fragment>
                <main className="main-playlist">
                <h1 className="Titulo">My Favourite Tracks</h1>
                <section className="playlist">
                <ul className="lista-playlist">
                {
                    this.state.tracks.length > 0 ?
                    this.state.tracks.map((oneTrack, idx) => <FavouriteCard key={oneTrack + idx} trackData={oneTrack} borrar={(id) => this.borrarFav(id)}/>)
                    :
                    <Link to = "/"> Go to Home </Link>
                } 
                 </ul>
                 </section>
                 </main>

    
              
            </React.Fragment>
        )
    }
}


export default Favourites;