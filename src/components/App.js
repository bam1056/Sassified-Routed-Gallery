import React, { Component } from 'react'
import albums from './albums.json'

class App extends Component {

  render () {
    return <div className='App'>
      {this.props.children && React.cloneElement(this.props.children, albums)}
    </div>
  }
}
App.propTypes = {
  children: React.PropTypes.object,
  location: React.PropTypes.object
}
export default App
