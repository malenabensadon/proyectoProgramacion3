import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../screen/Home/Home.css'


class CardAlbums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: [],
            verMas: false
        }
    }

    mostrarInfo (){
        this.setState({
            verMas: !this.state.verMas
        })
    }
    
    render(){
        
        return (
            <li>
                <img src={this.props.albumData.cover_big} alt="Image of {oneAlbum.title} Album"/> 
                <div className="text">
                    <h5><Link to={`/DetailAlbum/id/${this.props.albumData.id}`}> {this.props.albumData.title}</Link></h5>
                    <p><a href="detail-artist.html?id={oneAlbum.artist.id}"> - {this.props.albumData.artist.name}</a></p>
                </div>
                <button onClick = {() => this.mostrarInfo()}><i className="fas fa-plus-circle"></i></button> 
                {
                    this.state.verMas ? 
                    <p>{this.props.albumData.title}</p>
                    :
                    <></>
                
                }
            </li>


        )
    }
}



export default CardAlbums;
