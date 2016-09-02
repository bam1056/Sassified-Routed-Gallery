import React, { Component } from 'react'
import { Link } from 'react-router'

class PicturesDisplayed extends Component {
  render () {
    let currentAlbum = this.props.PhotoAlbums.find((album) => {
      album.Album.name === this.props.params.albumName
    })
    return <div className='PicturesDisplayed'>
      <header>
        <h1>{this.props.params.albumName}</h1>
      </header>
      <main>
        <Sidebar album={this.props.PhotoAlbums} />
        <div className='AlbumContainer'>
          { currentAlbum.photos.map((picture, index) => <Picture picture={picture} key={index} />) }
        </div>
      </main>
      <footer>I am a footer</footer>
    </div>
  }
}

class Picture extends Component {
  render () {
    return <div className='Picture'>
      <Link >
        <img src={this.props.picture} alt='' />
      </Link>
      <h3>Description</h3>
    </div>
  }
}

class Sidebar extends Component {
  render () {
    return <div className='Sidebar'>
      <ul>
        {
          this.props.album.PhotoAlbums.map(album => (
            <li key={album.Album.name}>
              <Link to={`/${album.Album.name}`}>
                <button>{album.Album.name}</button>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  }
}
PicturesDisplayed.propTypes = {
  PhotoAlbums: React.PropTypes.array,
  params: React.PropTypes.object
}

Sidebar.propTypes = {
  album: React.PropTypes.array
}

Picture.propTypes = {
  picture: React.PropTypes.string
}
export default PicturesDisplayed
