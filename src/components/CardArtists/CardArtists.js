import React, { Component } from 'react';
import '../../screen/Home/Home.css'


class CardArtists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: [],
            verMas: false
        } //recibe por props la info que le pasa el padre (Characters)
        console.log(props)
    }

    mostrarInfo (){
        this.setState({
            verMas: !this.state.verMas
        })
    }
    
    render(){
        
        return (
            <li>
                <img src={this.props.artistData.picture_big} alt="Image of {oneArtist.name}"/>
            <div className="text">
                <h5><a href="detail-artist.html?id={oneArtist.id}"> {this.props.artistData.name}</a></h5>
            </div>
                <button onClick = {() => this.mostrarInfo()}><i className="fas fa-plus-circle"></i></button> 
                {
                    this.state.verMas ? 
                    <p>{this.props.artistData.name}</p>
                    :
                    <></>
                
                }
            </li>


        )
    }
}



export default CardArtists;
