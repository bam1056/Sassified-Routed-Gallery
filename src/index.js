import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { App, AlbumsDisplayed, IndividualImageView, PicturesDisplayed } from './components'

const router = <Router history={browserHistory} >
  <Route path='/' component={App} >
    <Route path='albums' component={AlbumsDisplayed}>
      <Route path='/:albumName' component={PicturesDisplayed} />
    </Route>
    <Route path='picture' component={IndividualImageView} />
  </Route>
</Router>
render(router, document.getElementById('root'))
