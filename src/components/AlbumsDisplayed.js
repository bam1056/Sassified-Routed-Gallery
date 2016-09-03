import React, { Component } from 'react'
import { Link } from 'react-router'

class AlbumsDisplayed extends Component {
  render () {
    const { photoAlbums } = this.props
    return <div className='AlbumsDisplayed row'>
      <header>
        <h1>Albums</h1>
      </header>
      <hr />
      <div className='AlbumContainer col-lg-4'>
        {photoAlbums.map((album, index) => <AlbumPicture album={album.Album} key={index} />)}
      </div>
    </div>
  }
}

class AlbumPicture extends Component {
  render () {
    const { album } = this.props
    return <div className='AlbumPicture'>
      <Link to={`/${album.name}`}>
        <img src={album.coverPhoto} alt='cover' />
      </Link>
      <h3>{album.name}</h3>
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
