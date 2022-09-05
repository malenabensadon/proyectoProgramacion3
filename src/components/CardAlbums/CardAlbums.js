import React, { Component } from 'react';
import '../../screen/Home/Home.css'


class CardAlbums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: [],
            verMas: false
        } //recibe por props la info que le pasa el padre (Characters)
        console.log(props.albumData);
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
                    <h5><a href="detail-album.html?id={oneAlbum.id}"> {this.props.albumData.title}</a></h5>
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
