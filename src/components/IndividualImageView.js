import React, { Component } from 'react'

class IndividualImageView extends Component {
  render () {
    return <div className='IndividualImageView'>
      <img src={this.props.currentImage} alt='some picture' width='500' height='500' />
    </div>
  }
}
IndividualImageView.propTypes = {
  currentImage: React.PropTypes.string.isRequired
}
export default IndividualImageView
