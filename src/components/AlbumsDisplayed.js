import React, { Component } from 'react'
import { Link } from 'react-router'

class AlbumsDisplayed extends Component {
  render () {
    const { photoAlbums } = this.props
    return <div className='AlbumsDisplayed'>
      <header>
        <h1>Albums</h1>
      </header>
      <div className='AlbumContainer'>
        {photoAlbums.map((album, index) => <AlbumPicture album={album.Album} key={index} />)}
      </div>
      <footer>I am a footer</footer>
    </div>
  }
}

class AlbumPicture extends Component {
  render () {
    const { album } = this.props
    return <div className='AlbumPicture'>
      <Link to={`/albums/${album.name}`}>
        <img src={album.coverPhoto} alt='cover' />
      </Link>
      <h3>Description: {album.name}</h3>
    </div>
  }
}

AlbumsDisplayed.propTypes = {
  photoAlbums: React.PropTypes.array,
  navigate: React.PropTypes.func
}
AlbumPicture.propTypes = {
  navigate: React.PropTypes.func,
  album: React.PropTypes.object.isRequired
}
export default AlbumsDisplayed
