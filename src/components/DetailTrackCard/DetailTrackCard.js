import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DetailTrackCard.css'

class DetailTrackCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        } 
    }

    
    render(){
        
        return (
            <>
            
            <main className="main-detail-track">
        <div className="banner-detail-track">
            <img className="banner-track" src={this.props.trackData.album.cover_xl} />
            <img className="banner-track-responsive" src={this.props.trackData.album.cover_xl} />
        </div>
        <article className="track-detail">
            <img src={this.props.trackData.album.cover_big} alt="" className="img-dua"/>
            <section className="description-track">
                <div className="title-track info-track">
                    <p className="add-playlist"> Add to Favourites </p>
                    <h1>{this.props.trackData.title}</h1>
                    <p className="album-detail-track"><Link to={`/detailAlbum/id/${this.props.trackData.album.id}`}>{this.props.trackData.album.title}</Link></p>
                    <h3><Link to={`/detailArtist/id/${this.props.trackData.artist.id}`}>{this.props.trackData.artist.name}</Link></h3>
                </div>
            </section>
            <section className="player">
                <p><Link to="/favoritos">Go to my Favourites</Link></p>
                <p className="player-deezer"><iframe title="deezer-widget" src={`https://widget.deezer.com/widget/dark/track/${this.props.trackData.id}`} width="1050" height="125" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe></p>
            </section>
        </article>
    </main>
</>

        )
    }
}



export default DetailTrackCard;