import React, { Component } from 'react';
import DetailAlbumCard from '../../components/DetailAlbumCard/DetailAlbumCard';
import Header from '../../components/Header/Header'

class DetailAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = 
		{
			detail: []
        }
    }

    componentDidMount(){
        let album = []
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.props.match.params.id}`)
        .then( response => response.json())
        .then( data => album.push(data))
        .then( data => this.setState(
                                { detail: album }
        ))
        .catch( error => console.log(error));
        }

 
    render(){
       
        console.log(this.props.match.params.id)
        console.log(this.props.detail)
        console.log(this.state.detail)
        return (
            
			<>
           <Header/>
                {this.state.detail.map((oneDetail, idx) => <DetailAlbumCard key={oneDetail + idx} albumData={oneDetail}/>)}
                
			</>
        )
    }
}

export default DetailAlbum;