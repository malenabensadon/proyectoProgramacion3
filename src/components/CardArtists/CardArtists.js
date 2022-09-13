import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../screen/Home/Home.css'


class CardArtists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: [],
            verMas: false
        }
    }

    // mostrarInfo (){
    //     this.setState({
    //         verMas: !this.state.verMas
    //     })
    // }

    render() {

        return (
            <li>
                <img src={this.props.artistData.picture_big} alt="Image of {oneArtist.name}" />
                <div className="text">
                    <h5><Link to={`/DetailArtist/id/${this.props.artistData.id}`}>{this.props.artistData.name}</Link> </h5>
                </div>
                {/* <button onClick = {() => this.mostrarInfo()}><i className="fas fa-plus-circle"></i></button> 
                {
                    this.state.verMas ? 
                    <p>{this.props.artistData.name}</p>
                    :
                    <></>
                
                } */}
            </li>


        )
    }
}



export default CardArtists;
