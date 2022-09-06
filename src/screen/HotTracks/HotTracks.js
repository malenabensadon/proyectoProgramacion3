import React, { Component } from 'react'


class HotTracks extends Component {
    constructor() {
        super();
        this.state = {
            tracks: [],
        }
    }
    componentDidMount(){
    
        fetch('https://cors-anywhere.herokuapp.com/fetch/https://api.deezer.com/chart/0/tracks')
			.then( response => response.json())
			.then( data => this.setState(
				{ tracks: data.data }
			)).catch( error => console.log(error));

    }

    render() {
        return (
            <>
            <div>Hot Tracks</div>
            
          <article className="lista-songs">
						<h1 className="title-songs">HOT TRACKS</h1>
						<ul className="ul-de-songs">
 							{this.state.tracks.map((Track, idx) => <HotTracks key = {Track + idx} trackData = {Track}/>)} 
 
						</ul>
					</article>
                    </>



            
        )
    }
}

export default HotTracks;
