import React, { Component } from 'react'
import AlbumsDisplayed from './AlbumsDisplayed'
import PicturesDisplayed from './PicturesDisplayed'
import albums from './albums.json'
import '../styles/screen.sass'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentScreen: 'AlbumsDisplayed',
      albums: albums,
      currentAlbum: {}
    }
  }

  navigateToAlbum = (scr, currAlbum) => {
    this.setState({
      currentScreen: scr,
      currentAlbum: currAlbum
     })
  }

  render () {
    let screen
    switch (this.state.currentScreen) {
      case 'AlbumsDisplayed': screen = <AlbumsDisplayed albums={this.state.albums} navigate={this.navigateToAlbum} />
        break
      case 'PicturesDisplayed': screen = <PicturesDisplayed currentAlbum={this.state.currentAlbum} />
        break
      default: screen = <AlbumsDisplayed albums={this.state.albums} navigate={this.navigateToAlbum} />
    }
    return <div className='App'>
      {screen}
    </div>
  }
}
export default App
