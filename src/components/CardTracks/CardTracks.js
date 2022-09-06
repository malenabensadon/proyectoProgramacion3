import React, { Component } from 'react';
import '../../screen/Home/Home.css'


class CardTracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: [],
            verMas: false
        } //recibe por props la info que le pasa el padre (Characters)
    }

    mostrarInfo (){
        this.setState({
            verMas: !this.state.verMas
        })
    }
    
    render(){
        
        return (
            <li>
                <img src={this.props.trackData.album.cover_big} alt="Image of {oneTrack.title} Song"/> 
                <div className="text"> 
                    <h5><a href="detail-track.html?id={oneTrack.id}"> {this.props.trackData.title}</a> </h5>
                    <p><a href="detail-artist.html?id={oneTrack.artist.id}"> - {this.props.trackData.artist.name}</a></p>
                </div>
                <button onClick = {() => this.mostrarInfo()}><i className="fas fa-plus-circle"></i></button> 
                <button><i className="fa-solid fa-heart"></i></button>
                {
                    this.state.verMas ? 
                    <p>{this.props.trackData.title}</p>
                    :
                    <></>
                
                }
            </li>


        )
    }
}



export default CardTracks;
