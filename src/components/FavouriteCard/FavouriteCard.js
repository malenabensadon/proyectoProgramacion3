import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FavouriteCard.css'



class FavouriteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: [],
            verMas: false,
            fav: false,
            button: false
        } //recibe por props la info que le pasa el padre (Characters)
    }

    mostrarInfo() {
        this.setState({
            verMas: !this.state.verMas
        })
    }

    componentDidMount() {
        let favourites = [];
        let Storage = localStorage.getItem('favourites')

        if (Storage !== null) {
            let favoritos = JSON.parse(Storage);
            favourites = favoritos
        }

        if (favourites.includes(this.props.trackData.id)) {
            this.setState({
                fav: true
            })
        }

    }

    addFav(id) {
        let favourites = [];
        let Storage = localStorage.getItem('favourites')

        if (Storage !== null) {
            let favoritos = JSON.parse(Storage);
            favourites = favoritos
        }

        if (favourites.includes(id)) {
            favourites = favourites.filter(unId => unId !== id);

            this.props.borrar(id)

            this.setState({
                fav: false
            })
        } else {
            favourites.push(id);

            this.setState({
                fav: true
            })
        }
        let favoritos = JSON.stringify(favourites);
        localStorage.setItem('favourites', favoritos);

        console.log(localStorage);

    }


    render() {

        return (

            <li>
                <img src={this.props.trackData.album.cover_big} alt="" />
                <div>
                    <h5><Link to={`/DetailTrack/id/${this.props.trackData.id}`} className="link-playlist">{this.props.trackData.title}</Link>
                        <Link to={`/favoritos`}><i className="fas fa-trash" onClick={() => this.addFav(this.props.trackData.id)}></i></Link></h5>
                    <p><Link to={`/DetailArtist/id/${this.props.trackData.artist.id}`}>- {this.props.trackData.artist.name}</Link></p>
                </div>
            </li>


        )
    }
}



export default FavouriteCard;
