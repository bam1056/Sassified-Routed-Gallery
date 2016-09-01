import React, { Component } from 'react'
import { Link } from 'react-router'

class PicturesDisplayed extends Component {
  render () {
    return <div className='PicturesDisplayed'>
      <header>
        <h1>Album #</h1>
      </header>
      <main>
        <Sidebar album={this.props.albums} />
        <div className='AlbumContainer'>
          {
            this.props.currentAlbum.photos.map((picture, index) => {
              return <Picture navToImage={this.props.navToImage} picture={picture} key={index} />
            })
          }
        </div>
      </main>
      <footer>I am a footer</footer>
    </div>
  }
}

class Picture extends Component {
  displayImage = () => {
    this.props.navToImage('IndividualImageView', this.props.picture)
  }
  render () {
    return <div className='Picture'>
      <img onClick={this.displayImage} src={this.props.picture} alt='' />
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
              <Link to={`/album/${album.Album.name}`}>
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
  currentAlbum: React.PropTypes.object.isRequired
}
export default PicturesDisplayed
