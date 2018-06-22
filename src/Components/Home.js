import React from 'react';
import Banner from './Banner';
import ArtistList from './ArtistList';

const URL_ARTISTS = 'http://localhost:3001/artists'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            artists: []
        }

    }

    componentDidMount() {
        fetch(URL_ARTISTS, {
            method: 'GET'
        }).then(resp => resp.json())
          .then(data => {
              this.setState({
                  artists: data
              })
          })
    }

    render() {
        return (
            <div>
                <Banner />
                <ArtistList artistList={this.state.artists}  />
            </div>
        )
    }
}

export default Home;