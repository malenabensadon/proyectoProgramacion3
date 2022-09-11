import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DetailAlbumCard.css'

class DetailAlbumCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        } 
    }

    
    render(){
        
        return (
            <>
            <main class="main-detail-album">

                <div class="banner-detail-album">
                    <img class="banner-album" src={this.props.albumData.cover_xl} />
                    <img class="banner-album-responsive" src={this.props.albumData.cover_xl}/>
                </div>

                <article class="justice-title">
                <h1> {this.props.albumData.title}</h1>
                </article>

                <article class="article-main-album">
                <section class="section1-album">
                <ul>
                    <img class="fotoalbum" src={this.props.albumData.cover_big} alt="Album"/>
                    <h6> </h6>
                    <a href="detail-genres.html" class="genres-album">  </a>
                </ul>
                </section>

                <section class="section2-album">
                <a href="detail-artist.html"><h3 class="detalles-album"> <Link to={`/detailArtist/id/${this.props.albumData.artist.id}`}>{this.props.albumData.artist.name}</Link> SONGS</h3></a>
                <ul class="songs-album">
                    {/* hacer un map */}
                    {this.props.albumData.tracks.data.map(oneAlbumTrack => <li><Link to={`/detailTrack/id/${oneAlbumTrack.id}`}> {oneAlbumTrack.title}</Link></li> )}
                
                </ul>

                </section>

                </article>

                </main>
            <p>hoal</p>
</>

        )
    }
}



export default DetailAlbumCard;