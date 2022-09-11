import React, { Component } from 'react';


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
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.props.match.params.id}`)
        .then( response => response.json())
        .then( data => this.setState(
                                { detail: data.title }
        ))
        .catch( error => console.log(error));
        }

 
    render(){
        console.log(this.props.match.params.id)
        console.log(this.props)
		// hacemos un bind para que el setState llamado desde NavBar no tire error por ser llamado desde otro componente 
        return (
			<>
				<p>Hola</p>
                
			</>
        )
    }
}

export default DetailTrack;