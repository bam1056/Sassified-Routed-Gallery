import React, { Component } from 'react'
import { Link } from 'react-router'

class IndividualImageView extends Component {
  render () {
    const { photoAlbums, params } = this.props
    let currentAlbum = photoAlbums.find((album) => album.Album.name === params.albumName)
    let currentImage = currentAlbum.Album.photos[params.pictureId]
    return <div className='IndividualImageView'>
      <Link to={`/albums/${params.albumName}`}>
        <img src={currentImage} alt='some picture' width='500' height='500' />
      </Link>
    </div>
  }
}
IndividualImageView.propTypes = {
  photoAlbums: React.PropTypes.array,
  params: React.PropTypes.object
}
export default IndividualImageView
