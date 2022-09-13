import React, { Component } from 'react'
import CardAlbums from '../../components/CardAlbums/CardAlbums';
import Header from '../../components/Header/Header'


class BestAlbums extends Component {
    constructor() {
        super();
        this.state = {
            albums: [],
            filteredAlbums: [],
            q: 0,
            filtro: "",
            isLoading: true,
        }
    }
    componentDidMount() {

        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?limit=${this.state.q}`)


            .then(response => response.json())
            .then(data => this.setState(
                {
                    albums: data.data,
                    q: 10,
                    isLoading: false,

                }
            )).catch(error => console.log(error));

    }

    traerMas() {
        this.setState({ isLoading: true })
        //Traer la siguiente pagina de personajes 
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?limit=${this.state.q}`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    albums: data.data,
                    q: this.state.q + 10,
                    isLoading: false
                }
            ))
            .catch(error => console.log(error));
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    filtrar(event) {
        if (event.target.value !== "") {
            const resultadoFiltrado = this.state.albums.filter(album => album.title.toLowerCase().startsWith(event.target.value))
            this.setState({ filteredAlbums: resultadoFiltrado, filtro: event.target.value })
        } else {
            this.setState({ filteredAlbums: [], filtro: event.target.value })
        }
    }

    render() {
        return (
            <>
                <Header />
                <article className="lista-albums">
                    <h1 className="title-albums">BEST NEW ALBUMS</h1>
                    {this.state.isLoading === true ?
                        <div>Cargando...</div>
                        :
                        <>
                            <form className="search" onSubmit={this.evitarSubmit}>
                                <input type="text" name="filter" placeholder="Filter..." onChange={(event) => this.filtrar(event)} value={this.state.filtro} />
                            </form>
                            <ul className="ul-de-albums">
                                {this.state.filteredAlbums.length > 0 ?
                                    this.state.filteredAlbums.map((oneAlbum, idx) => <CardAlbums key={oneAlbum + idx} albumData={oneAlbum} />)
                                    : this.state.albums.map((oneAlbum, idx) => <CardAlbums key={oneAlbum + idx} albumData={oneAlbum} />)
                                }
                            </ul>
                        </>
                    }
                    <button onClick={() => this.traerMas()}> See More ...</button>
                </article>
            </>
        )
    }
}

export default BestAlbums;
