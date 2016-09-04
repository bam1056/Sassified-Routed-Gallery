import React, { Component } from 'react'
import { Link } from 'react-router'

class PicturesDisplayed extends Component {
  render () {
    const { params, photoAlbums } = this.props
    let currentAlbum = photoAlbums.find((album) => album.Album.name === params.albumName)
    return <div className='PicturesDisplayed'>
      <header>
        <h1>{params.albumName}</h1>
      </header>
      <main>
        <Sidebar album={photoAlbums} />
        <div className='AlbumContainer'>
          { currentAlbum.Album.photos.map((picture, index) => <Picture picture={picture} albumName={params.albumName} id={index} key={index} />) }
        </div>
      </main>
    </div>
  }
}

class Picture extends Component {
  render () {
    const { albumName, id, picture } = this.props
    return <div className='Picture'>
      <Link to={`/${albumName}/${id}`}>
        <img src={picture} alt={`picture${id}`} />
      </Link>
      <h3><a href={picture}>{albumName} Picture {id}</a></h3>
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
              <Link to={`/${album.Album.name}`}>
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
  photoAlbums: React.PropTypes.array,
  params: React.PropTypes.object
}

Sidebar.propTypes = {
  album: React.PropTypes.array
}

Picture.propTypes = {
  picture: React.PropTypes.string,
  params: React.PropTypes.object,
  id: React.PropTypes.number,
  albumName: React.PropTypes.string
}
export default PicturesDisplayed
