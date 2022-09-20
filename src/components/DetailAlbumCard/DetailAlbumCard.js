import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DetailAlbumCard.css'

class DetailAlbumCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <>
                <main className="main-detail-album">

                    <div className="banner-detail-album">
                        <img className="banner-album" src={this.props.albumData.cover_xl} />
                        <img className="banner-album-responsive" src={this.props.albumData.cover_xl} />
                    </div>

                    <article className="article-main-album">
                        <section className="section1-album">
                            <ul>
                                <img className="fotoalbum" src={this.props.albumData.cover_big} alt="Album" />
                            </ul>
                        </section>
                        <article className="justice-title">
                        <h1> {this.props.albumData.title}</h1>
                        
                        <section className="section2-album">
                            <h3 className="detalles-album"> <Link to={`/detailArtist/id/${this.props.albumData.artist.id}`}>{this.props.albumData.artist.name}</Link></h3>
                            <ul className="songs-album">
                                {this.props.albumData.tracks.data.map( (oneAlbumTrack, idx) => <li key={oneAlbumTrack.title + idx}><Link to={`/detailTrack/id/${oneAlbumTrack.id}`}> {oneAlbumTrack.title}</Link></li>)}
                            </ul>
                        </section>
                        </article>

                    </article>

                </main>
            </>

        )
    }
}



export default DetailAlbumCard;