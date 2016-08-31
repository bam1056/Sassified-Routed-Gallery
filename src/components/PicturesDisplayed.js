import React, { Component } from 'react'

class PicturesDisplayed extends Component {
  render () {
    let pictures = this.props.currentAlbum.photos.map((picture, index) => {
      return <Picture picture={picture} key={index} />
    })
    return <div className='PicturesDisplayed'>
      <header>
        <h1>Album #</h1>
      </header>
      <main>
        <Sidebar />
        <div className='AlbumContainer'>
          {pictures}
        </div>
      </main>
      <footer>I am a footer</footer>
    </div>
  }
}

class Picture extends Component {
  render () {
    return <div className='Picture'>
      <img src={this.props.picture} alt='' />
      <h3>Description</h3>
    </div>
  }
}

class Sidebar extends Component {
  render () {
    return <div className='Sidebar'>
      <ul>
        <li><button>Album#</button></li>
        <li><button>Album#</button></li>
        <li><button>Album#</button></li>
        <li><button>Album#</button></li>
        <li><button>Album#</button></li>
        <li><button>Album#</button></li>
      </ul>
    </div>
  }
}
PicturesDisplayed.propTypes = {
  currentAlbum: React.PropTypes.object.isRequired
}
export default PicturesDisplayed
