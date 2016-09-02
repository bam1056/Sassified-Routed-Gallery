import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { App, AlbumsDisplayed, IndividualImageView, PicturesDisplayed } from './components'

const router =
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={AlbumsDisplayed}>
        <Route path='/:albumName' component={PicturesDisplayed}>
          <Route path='/:picture' component={IndividualImageView} />
        </Route>
      </Route>
    </Route>
  </Router>

render(router, document.getElementById('root'))
