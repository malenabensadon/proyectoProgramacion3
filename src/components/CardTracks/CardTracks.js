import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../screen/Home/Home.css'


class CardTracks extends Component {
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
                <img src={this.props.trackData.album.cover_big} alt="Image of {oneTrack.title} Song" />
                <div className="text">
                    <h5><Link to={`/DetailTrack/id/${this.props.trackData.id}`}>  {this.props.trackData.title}</Link> </h5>
                    <p><Link to={`/DetailArtist/id/${this.props.trackData.artist.id}`}> {this.props.trackData.artist.name}</Link></p>
                </div>
                {
                    this.state.fav ?
                        <> <i className="fas fa-trash" onClick={() => this.addFav(this.props.trackData.id)}></i></>
                        :
                        <button><i className="fa-solid fa-heart" onClick={() => this.addFav(this.props.trackData.id)}></i></button>

                }
                {
                    this.state.verMas ?
                        <p>{this.props.trackData.title}</p>
                        :
                        <></>

                }
                <button onClick={() => this.mostrarInfo()}><i className="fas fa-plus-circle"></i></button>

            </li>



        )
    }
}



export default CardTracks;
