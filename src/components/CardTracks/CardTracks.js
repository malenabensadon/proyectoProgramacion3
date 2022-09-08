import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <h5><Link to={`/DetailTrack/${this.props.trackData.id}`}>  {this.props.trackData.title}</Link> </h5>
                  {/*   <p><Link to={`/DetailArtist/${this.props.artistData.id}`}> </Link></p> */}
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
