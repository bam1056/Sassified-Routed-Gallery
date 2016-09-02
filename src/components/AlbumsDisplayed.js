import React, { Component } from 'react'
import { Link } from 'react-router'

class AlbumsDisplayed extends Component {
  render () {
    console.log("I'm AlbumsDisplayed Component", this.props)
    return <div className='AlbumsDisplayed'>
      <header>
        <h1>Albums</h1>
      </header>
      <div className='AlbumContainer'>
        { this.props.PhotoAlbums.map((album, index) => <AlbumPicture album={album.Album} key={index} />) }
      </div>
      <footer>I am a footer</footer>
    </div>
  }
}

class AlbumPicture extends Component {
  render () {
    return <div className='AlbumPicture'>
      <Link to={`/albums/${this.props.album.name}`}>
        <img src={this.props.album.coverPhoto} alt='cover' />
      </Link>
      <h3>Description: {this.props.album.name}</h3>
    </div>
  }
}

AlbumsDisplayed.propTypes = {
  PhotoAlbums: React.PropTypes.array,
  navigate: React.PropTypes.func
}
AlbumPicture.propTypes = {
  navigate: React.PropTypes.func,
  album: React.PropTypes.object.isRequired
}
export default AlbumsDisplayed
