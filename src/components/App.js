import React, { Component } from 'react'
import AlbumsDisplayed from './AlbumsDisplayed'
import PicturesDisplayed from './PicturesDisplayed'
import IndividualImageView from './IndividualImageView'
import albums from './albums.json'
import '../styles/screen.sass'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentScreen: 'AlbumsDisplayed',
      albums: albums
    }
  }

  navigateToAlbum = (scr, currAlbum) => {
    this.setState({
      currentScreen: scr,
      currentAlbum: currAlbum
     })
  }

  navigateToImage = (scr, currImage) => {
    this.setState({
      currentScreen: scr,
      currentImage: currImage
    })
  }

  render () {
    let screen
    switch (this.state.currentScreen) {
      case 'AlbumsDisplayed': screen = <AlbumsDisplayed albums={this.state.albums} navigate={this.navigateToAlbum} />
        break
      case 'PicturesDisplayed': screen = <PicturesDisplayed currentAlbum={this.state.currentAlbum} navToImage={this.navigateToImage}/>
        break
      case 'IndividualImageView': screen = <IndividualImageView currentImage={this.state.currentImage} />
        break
      default: screen = <AlbumsDisplayed albums={this.state.albums} navigate={this.navigateToAlbum} />
    }
    return <div className='App'>
      {screen}
    </div>
  }
}
export default App
