import React, { Component } from 'react';
import DetailTrackCard from '../../components/DetailTrackCard/DetailTrackCard';
import Header from '../../components/Header/Header'


class DetailTrack extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            detail: [],
            isLoading: true

        }
    }

    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.props.match.params.id}`)
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
                    <DetailTrackCard trackData={this.state.detail} />
                }
            </>
        )
    }
}

export default DetailTrack;