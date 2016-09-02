import React, { Component } from 'react'
import { Link } from 'react-router'

class IndividualImageView extends Component {
  render () {
    let currentAlbum = this.props.PhotoAlbums.find((album) => album.Album.name === this.props.params.albumName)
    let currentImage = currentAlbum.Album.photos[this.props.params.pictureId]
    return <div className='IndividualImageView'>
      <Link to={`/albums/${this.props.params.albumName}`}>
        <img src={currentImage} alt='some picture' width='500' height='500' />
      </Link>
    </div>
  }
}
IndividualImageView.propTypes = {
  PhotoAlbums: React.PropTypes.array,
  params: React.PropTypes.object
}
export default IndividualImageView
