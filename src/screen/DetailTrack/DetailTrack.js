import React, { Component } from 'react';
import DetailTrackCard from '../../components/DetailTrackCard/DetailTrackCard';


class DetailTrack extends Component {
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
        let cancion = []
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.props.match.params.id}`)
        .then( response => response.json())
        .then( data => cancion.push(data))
        .then( data => this.setState(
                                { detail: cancion }
        ))
        .catch( error => console.log(error));
        }

 
    render(){
        // console.log(this.props.match.params.id)
        // console.log(this.props.detail)
        // console.log(this.state.detail)
        return (
			<>
                {this.state.detail.map((oneDetail, idx) => <DetailTrackCard key={oneDetail + idx} trackData={oneDetail}/>)}
                
			</>
        )
    }
}

export default DetailTrack;