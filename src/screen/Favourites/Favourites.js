import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FavouriteCard from "../../components/FavouriteCard/FavouriteCard"
import Header from '../../components/Header/Header'


class Favourites extends Component {
    constructor() {
        super();
        this.state = {
            tracks: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        let favourites = [];
        let Storage = JSON.parse(localStorage.getItem('favourites'));

        if (Storage !== null) {
            if (Storage.length > 0) {
                favourites = Storage
                let favs = [];
                
                favourites.forEach(unId => {
    
                    let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${unId}`
                    fetch(url)
                        .then(response => response.json())
                        .then(data => favs.push(data))
                        .then(() => this.setState(
                            {
                                tracks: favs,
                                isLoading: false
                            }
    
                        ))
                        .catch(error => console.log('El error es' + error))
                })
            } else {
                this.setState({
                    isLoading: false
                })
            }
        } else {
            this.setState({
                isLoading: false
            })
        }
    }

    borrarFav(id) {
        const arrayFiltrado = this.state.tracks.filter((oneTrack) => oneTrack.id !== id);

        this.setState({
            tracks: arrayFiltrado
        });
    };

    renderizarContenido() {
        if (this.state.isLoading === true) {
            return (
                <div>Cargando...</div>
            )
        }
    }

    render() {
        return (
            <>
                <Header />
                <main className="main-playlist">
                    <h1 className="Titulo">My Favourite Tracks</h1>
                    {this.state.isLoading === true ?
                        <div>Cargando...</div>
                        :
                        <section className="playlist">
                            <ul className="lista-playlist">
                                {
                                    this.state.tracks.length > 0 ?
                                        this.state.tracks.map((oneTrack, idx) => <FavouriteCard key={oneTrack + idx} trackData={oneTrack} borrar={(id) => this.borrarFav(id)} />)
                                        :
                                        <Link to="/"> Go to Home </Link>
                                }
                            </ul>
                        </section>
                    }
                </main>
            </>
        )
    }
}


export default Favourites;