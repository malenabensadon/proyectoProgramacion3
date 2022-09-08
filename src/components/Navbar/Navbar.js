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
            <header>
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
            
            {/* <section className="logo">
                <div className="imagenes-logo">
                    <img src="img/anytime-slogan.PNG" alt="Music Anytime" className="slogan"/>
                    <img src="img/logo3.PNG" alt="Logo Planet Music"/>
                    <img src="img/anywhere-slogan.PNG" alt="Music Anywhere" className="slogan"/>
                </div>
                <div className="alerta">
                    <p className="probando1">The field can't be empty</p>
                    <p className="probando2">You should enter at least three characters</p>
                </div>  
            </section>
            <nav className="navegador">
                <img src="img/logo3.PNG" alt="Logo Planet Music"/>
                <form className="search">
                    <input type="text" name="search" placeholder="Search..." onChange={(event) => this.buscarResultado(event)} value={this.state.busqueda} />
                    <button type="submit"><i className="fa fa-search"></i></button>
                    <i className="fas fa-exclamation-circle closeIcon"></i>
                </form>
                <ul>
                    <li id="home"><Link to='/'>Home</Link></li>
                    <li id="vermas"><Link to='/hot-tracks'>Hot Tracks</Link></li>
                    <li id="vermas"> <Link to='/best-albums'>Best Albums</Link></li>
                    <li id="vermas"> <Link to='/favourite-artists'>Favourite Artists</Link></li>

                    <li id="my-playlist"> <Link to='/favoritos'>Favourites</Link></li>
                    
                </ul> */}
            {/* </nav> */}
        </header>
        )
    }
}

export default NavBar;