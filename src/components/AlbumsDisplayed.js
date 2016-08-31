import React, { Component } from 'react'

class AlbumsDisplayed extends Component {
  render () {
    const albumGroup = this.props.albums.PhotoAlbums.map((album, index) => {
      return <AlbumPicture album={album.Album} navigate={this.props.navigate} key={index} />
    })
    console.log(this.props.albums)
    return <div className='AlbumsDisplayed'>
      <header>
        <h1>Albums</h1>
      </header>
      <div className='AlbumContainer'>
        {albumGroup}
      </div>
      <footer>I am a footer</footer>
    </div>
  }
}

class AlbumPicture extends Component {
  displayAlbum = () => {
    this.props.navigate('PicturesDisplayed', this.props.album)
  }

  render () {
    return <div className='AlbumPicture'>
      <img onClick={this.displayAlbum} src={this.props.album.coverPhoto} alt='cover' />
      <h3>Description: {this.props.album.name}</h3>
    </div>
  }
}

AlbumsDisplayed.propTypes = {
  albums: React.PropTypes.object.isRequired,
  navigate: React.PropTypes.func
}
AlbumPicture.propTypes = {
  navigate: React.PropTypes.func
}
export default AlbumsDisplayed
