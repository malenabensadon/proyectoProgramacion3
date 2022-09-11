import React, { Component } from 'react';
import DetailArtistCard from '../../components/DetailArtistCard/DetailArtistCard';


class DetailArtist extends Component {
    constructor(props) {
        super(props);
        this.state = 
		{
			detail: [],
            artists: [],
            albums: []
        }
    }

    componentDidMount(){
        let artista = []
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/artist/${this.props.match.params.id}`)
        .then( response => response.json())
        .then( data => artista.push(data))
        .then( data => this.setState(
                                { detail: artista }
        ))
        .catch( error => console.log(error));
        }

 
    render(){
        console.log(this.props.match.params.id)
        console.log(this.props.detail)
        console.log(this.state.detail)
        return (
			<>
                {this.state.detail.map((oneDetail, idx) => <DetailArtistCard key={oneDetail + idx} artistData={oneDetail}/>)}
                
			</>
        )
    }
}

export default DetailArtist;