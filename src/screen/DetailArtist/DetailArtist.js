import React, { Component } from 'react';
import DetailArtistCard from '../../components/DetailArtistCard/DetailArtistCard';
import Header from '../../components/Header/Header'


class DetailArtist extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            detail: {},
            artists: [],
            albums: [],
            isLoading: true
        }
    }

    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/artist/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    detail: data,
                    isLoading: false

                }
            ))
            .catch(error => console.log(error));
    }


    render() {
        return (
            <>
                <Header />
                {this.state.isLoading === true ?
                    <div>Cargando...</div>
                    :
                    <DetailArtistCard artistData={this.state.detail} />
                }
            </>
        )
    }
}

export default DetailArtist;