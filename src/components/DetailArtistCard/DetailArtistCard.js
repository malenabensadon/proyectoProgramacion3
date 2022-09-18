import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DetailArtistCard.css'

class DetailArtistCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topSongs: [],
            topAlbums: [],
            q: 5
        }
    }

    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/artist/${this.props.artistData.id}/top`)
            .then(response => response.json())
            .then(data => this.setState(
                { topSongs: data.data }
            ))
            .catch(error => console.log(error));
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/artist/${this.props.artistData.id}/albums?limit=${this.state.q}`)
            .then(response => response.json())
            .then(data => this.setState(
                { topAlbums: data.data }
            ))
            .catch(error => console.log(error));
    }

    render() {

        return (
            <>
                <main className="main-detail-artist">
                    <div className="banner-detail-artist">
                        <img className="banner-artist" src={this.props.artistData.picture_xl} />
                        <img className="banner-artist-responsive" src={this.props.artistData.picture_xl} />
                    </div>
                    <article className="artist-detail">
                        <h1 className="title-artist-responsive">{this.props.artistData.name}</h1>
                        <img src={this.props.artistData.picture_big} alt="" className="img-miley" />
                        <img src={this.props.artistData.picture_xl} alt="" className="img-miley-responsive" />
                        <section className="description-miley">
                            <h1>{this.props.artistData.name}</h1>
                            <ul className="popular-songs">
                                <h6>Popular Songs</h6>
                                {this.state.topSongs.map((onePopularSong, idx) => <li key={onePopularSong + idx}><Link to={`/DetailTrack/id/${onePopularSong.id}`}>{onePopularSong.title}</Link></li>)}

                            </ul>
                        </section>
                        <section className="description-album">
                            <ul className="artist-albums">
                                <h6>Albums </h6>
                                {this.state.topAlbums.map((onePopularAlbum, idx) =>
                                    <li key={onePopularAlbum + idx}>
                                        <Link to={`/DetailAlbum/id/${onePopularAlbum.id}`}>
                                            <img src={onePopularAlbum.cover_big} alt="Image of ${arrayInfo[i].title} Album" />
                                        </Link>
                                        <div className="contenedor-albumes-da">
                                            <h4><Link to={`/DetailAlbum/id/${onePopularAlbum.id}`}>{onePopularAlbum.title} </Link></h4>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </section>
                    </article>
                </main>
            </>

        )
    }
}



export default DetailArtistCard;