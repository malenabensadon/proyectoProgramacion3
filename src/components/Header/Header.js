import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {

    return (
        <header>

            <section className="logo">
                <div className="imagenes-logo">
                    <img src="/img/anytime-slogan.PNG" alt="Music Anytime" className="slogan" />
                    <img src="/img/logo3.PNG" alt="Logo Planet Music" />
                    <img src="/img/anywhere-slogan.PNG" alt="Music Anywhere" className="slogan" />
                </div>
                <div className="alerta">
                    <p className="probando1">The field can't be empty</p>
                    <p className="probando2">You should enter at least three characters</p>
                </div>
            </section>
            <nav className="navegador">
                <img src="/img/logo3.PNG" alt="Logo Planet Music" />
                <form className="search">
                    {/* <input type="text" name="search" placeholder="Search..." onChange={(event) => this.buscarResultado(event)} value={this.state.busqueda} />
                    <button type="submit" onClick={(event) => this.buscarResultado(event)} value={this.state.busqueda}><i className="fa fa-search"></i></button>
                    <i className="fas fa-exclamation-circle closeIcon"></i> */}
                </form>
                <ul>
                    <li id="home"><Link to='/'>Home</Link></li>
                    <li id="vermas"><Link to='/hot-tracks'>Hot Tracks</Link></li>
                    <li id="vermas"> <Link to='/best-albums'>Best Albums</Link></li>
                    <li id="vermas"> <Link to='/favourite-artists'>Favourite Artists</Link></li>

                    <li id="my-playlist"> <Link to='/favoritos'>Favourites</Link></li>

                </ul>
            </nav>
        </header>
    )
}

export default Header;