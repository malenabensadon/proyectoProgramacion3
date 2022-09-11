import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DetailArtistCard.css'

class DetailArtistCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topSongs: []
        } 
    }

    componentDidMount(){
        let artistSong = []
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/artist/${this.props.artistData.id}/top`)
        .then( response => response.json())
        .then( data => this.setState(
                                { topSongs: data.data}
        ))
        .catch( error => console.log(error));
        }
    
    render(){
        
        return (
            <>
            <main className="main-detail-artist">
        <div className="banner-detail-artist">
                <img className="banner-artist" src={this.props.artistData.picture_xl} />
                <img className="banner-artist-responsive" src={this.props.artistData.picture_xl} />
        </div>  
        <article className="artist-detail">
            <h1 className="title-artist-responsive">{this.props.artistData.name}</h1>
            <img src={this.props.artistData.picture_big} alt="" className="img-miley"/>
            <img src={this.props.artistData.picture_xl} alt="" className="img-miley-responsive"/>
            <section className="description-miley">
                <h1>{this.props.artistData.name}</h1>
                <ul className="popular-songs">
                    <h6>Popular Songs</h6>
                    {/* {topSongs.map(onePopularSong => <li><Link to={`/`}>{onePopularSong.name}</Link></li>)} */}

                </ul>
            </section>
            <section className="description-album">
                <ul className="artist-albums">
                    <h6>Albums </h6>
                    
                </ul>
            </section>
        </article>
    </main>
</>

        )
    }
}



export default DetailArtistCard;