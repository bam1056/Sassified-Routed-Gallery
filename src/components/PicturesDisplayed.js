import React, { Component } from 'react'
import { Link } from 'react-router'

class PicturesDisplayed extends Component {
  render () {
    console.log('Im PicturesDisplayed Component', this.props)
    let currentAlbum = this.props.PhotoAlbums.find((album) => album.Album.name === this.props.params.albumName)
    return <div className='PicturesDisplayed'>
      <header>
        <h1>{this.props.params.albumName}</h1>
      </header>
      <main>
        <Sidebar album={this.props.PhotoAlbums} />
        <div className='AlbumContainer'>
          { currentAlbum.Album.photos.map((picture, index) => <Picture picture={picture} albumName={this.props.params.albumName} id={index} key={index} />) }
        </div>
      </main>
      <footer>I am a footer</footer>
    </div>
  }
}

class Picture extends Component {
  render () {
    return <div className='Picture'>
      <Link to={`/albums/${this.props.albumName}/pictures/${this.props.id}`}>
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
          this.props.album.map(album => (
            <li key={album.Album.name}>
              <Link to={`/albums/${album.Album.name}`}>
                <button>{album.Album.name}</button>
              </Link>
            </li>
          ))
        }
        <li>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </li>
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
  picture: React.PropTypes.string,
  params: React.PropTypes.object,
  id: React.PropTypes.number
}
export default PicturesDisplayed
