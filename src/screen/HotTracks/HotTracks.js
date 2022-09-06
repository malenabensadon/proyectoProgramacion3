import React, { Component } from 'react'

class HotTracks extends Component {
    constructor() {
        super();
        this.state = {
            tracks: [],
        }
    }
    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks')
			.then( response => response.json())
			.then( data => this.setState(
				{ tracks: data.data }
			))

    }

    render() {
        return (
            <div>Hot Tracks</div>
            


            
        )
    }
}

export default HotTracks;
