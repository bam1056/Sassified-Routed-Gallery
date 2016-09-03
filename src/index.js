import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { App, AlbumsDisplayed, IndividualImageView, PicturesDisplayed } from './components'
import './styles/screen.sass'

const router =
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={AlbumsDisplayed} />
      <Route path='/albums/:albumName' component={PicturesDisplayed} />
      <Route path='/albums/:albumName/pictures/:pictureId' component={IndividualImageView} />
    </Route>
  </Router>

render(router, document.getElementById('root'))
