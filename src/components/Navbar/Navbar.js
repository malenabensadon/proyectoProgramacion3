import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = { busqueda: "" }
    }
    evitarSubmit(event) {
        event.preventDefault();
    }
    buscarResultado(event) {
        this.setState({ busqueda: event.target.value });
        if (event.target.value === "") {
            this.props.buscarResultados()
        } else {
            this.props.buscarResultados(this.state.busqueda)
        }
        
    }
    render() {
        return (
            <div className='container'>
                <div className='search-container'>
                    <form>
                        <input type="text" className='search-input' onChange={(event) => this.buscarResultado(event)} value={this.state.busqueda} />
                    </form>
                </div>
                <div className='links-container'>
                    <Link to='/'>Home</Link>
                    <Link to='/favoritos'>Favoritos</Link>
                    <Link to='/hot-tracks'>Hot Tracks</Link>
                    <Link to='/best-albums'>Best Albums</Link>
                    <Link to='/favourite-artists'>Favourite Artists</Link>
                </div>
            </div>
        )
    }
}

export default NavBar;