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
            
            <main class="main-detail-track">
        <div class="banner-detail-track">
            
        </div>
        <article class="track-detail">
            <img src={this.props.trackData.album.cover_big} alt="" class="img-dua"/>
            <section class="description-track">
                <div class="title-track info-track">
                    <p class="add-playlist">Add to Playlist</p>
                    <h1>{this.props.trackData.title}</h1>
                    <p class="album-detail-track"><Link to={`/detailAlbum`}>{this.props.trackData.album.title}</Link></p>
                    <h3><Link to={`/detailArtist`}>{this.props.trackData.artist.name}</Link></h3>
                </div>
            </section>
            <section class="player">
                <p><a href="playlist.html">Go to my Playlist</a></p>
                <p class="player-deezer"><iframe title="deezer-widget" src={`https://widget.deezer.com/widget/dark/track/${this.props.trackData.id}`} width="1050" height="125" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe></p>
            </section>
        </article>
    </main>
</>

        )
    }
}



export default DetailTrackCard;