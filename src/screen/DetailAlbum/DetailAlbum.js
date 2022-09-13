import React, { Component } from 'react';
import DetailAlbumCard from '../../components/DetailAlbumCard/DetailAlbumCard';
import Header from '../../components/Header/Header'

class DetailAlbum extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            detail: {},
            isLoading: true
        }
    }

    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.props.match.params.id}`)
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

        /*  console.log(this.props.match.params.id)
         console.log(this.props.detail)
         console.log(this.state.detail) */
        return (
            <>
                <Header />
                {this.state.isLoading === true ?
                    <div>Cargando...</div>
                    :
                    <DetailAlbumCard albumData={this.state.detail} />
                }
            </>
        )
    }
}

export default DetailAlbum;