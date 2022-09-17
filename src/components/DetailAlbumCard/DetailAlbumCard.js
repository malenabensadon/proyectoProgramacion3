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

                    {/* <article className="justice-title">
                        <h1> {this.props.albumData.title}</h1>
                    </article> */}

                    <article className="article-main-album">
                        <section className="section1-album">
                            <ul>
                                <img className="fotoalbum" src={this.props.albumData.cover_big} alt="Album" />
                                <h6> </h6>
                                <a href="detail-genres.html" className="genres-album">  </a>
                            </ul>
                        </section>
                        <article className="justice-title">
                        <h1> {this.props.albumData.title}</h1>
                        
                        <section className="section2-album">
                            <a href="detail-artist.html"><h3 className="detalles-album"> <Link to={`/detailArtist/id/${this.props.albumData.artist.id}`}>{this.props.albumData.artist.name}</Link></h3></a>
                            <ul className="songs-album">
                                {this.props.albumData.tracks.data.map(oneAlbumTrack => <li><Link to={`/detailTrack/id/${oneAlbumTrack.id}`}> {oneAlbumTrack.title}</Link></li>)}

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