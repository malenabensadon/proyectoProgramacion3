import React, { Component } from 'react';
import CardTracks from '../../components/CardTracks/CardTracks';
import CardArtists from '../../components/CardArtists/CardArtists';
import CardAlbums from '../../components/CardAlbums/CardAlbums';
import './Home.css'
import NavBar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

class Home extends Component {
	constructor() {
		super();
		this.state =
		{
			tracks: [],
			artists: [],
			albums: [],
			search: [],
			isLoading: true,
		}
	}

	componentDidMount() {
		this.buscarResultados();
	}

	buscarResultados(busqueda = "") {
		if (busqueda === "") {
			fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks')
				.then(response => response.json())
				.then(data => this.setState(
					{
						tracks: data.data,
						moreTracks: data.data
					}
				))
				.then(() => {
					fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists')
						.then(response => response.json())
						.then(data => this.setState(
							{ artists: data.data }
						))
						.then(() => {
							fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums')
								.then(response => response.json())
								.then(data => this.setState(
									{ albums: data.data, isLoading: false }
								))
								.catch(error => console.log(error));
						})
						.catch(error => console.log(error));
				})
				.then(() => {
					this.setState({ search: [] })
				})
				.catch(error => console.log(error));
		} else {
			this.setState({ isLoading: true })
			fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${busqueda}`)
				.then(response => response.json())
				.then(data => this.setState(
					{ search: data.data, isLoading: false }
				))
				.catch(error => console.log(error));
		}
	}

	renderizarContenido() {
		if (this.state.isLoading === true) {
			return (
				<div>Cargando...</div>
			)
		}
		if (this.state.search.length > 0) {
			return (
				<article className="lista-songs">
					<h1 className="title-songs">SEARCH RESULTS</h1>
					<ul className="ul-de-songs">
						{this.state.search.map((oneSearch, idx) => <CardTracks key={oneSearch + idx} trackData={oneSearch} />)}
					</ul>
				</article>
			)
		} else {
			return (
				<>
					<article className="lista-songs">
						<h1 className="title-songs">HOT TRACKS</h1>
						<ul className="ul-de-songs">
							{this.state.tracks.map((oneTrack, idx) => <CardTracks key={oneTrack + idx} trackData={oneTrack} />)}

						</ul>
						<p><Link to="/hot-tracks">See All ...</Link></p>
					</article>
					<article className="lista-albums">
						<h1 className="title-albums">BEST NEW ALBUMS</h1>
						<ul className="ul-de-albums">
							{this.state.albums.map((oneAlbum, idx) => <CardAlbums key={oneAlbum + idx} albumData={oneAlbum} />)}

						</ul>
						<p><Link to="/best-albums">See All ...</Link></p>
					</article>
					<article className="lista-artist">
						<h1 className="title-artist">FAVOURITE ARTISTS</h1>
						<ul className="ul-de-artist">
							{this.state.artists.map((oneArtist, idx) => <CardArtists key={oneArtist + idx} artistData={oneArtist} />)}

						</ul>
						<p><Link to="/favourite-artists">See All ...</Link></p>
					</article>
				</>
			)
		}
	}

	render() {
		// hacemos un bind para que el setState llamado desde NavBar no tire error por ser llamado desde otro componente 
		// buscarResultados se une al contexto de Home, aunque la llame desde NavBar
		return (
			<>
				<NavBar buscarResultados={this.buscarResultados.bind(this)} />
				<main className="main-home">
					{this.renderizarContenido()}
				</main>
			</>
		)
	}
}

export default Home;