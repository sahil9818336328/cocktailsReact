import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// importing pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// importing components
import Navbar from './components/Navbar'
import $ from 'jquery'

const App = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    $(function () {
      $('#loader').delay(2000).fadeOut('slow')
      $('#overlayer').delay(2000).fadeOut('slow')
      setLoading(false)
    })
  }, [])
  return (
    <>
      <div id='overlayer'>
        <span id='loader'>
          <span id='loader-inner'></span>
        </span>
      </div>
      {!loading && (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/cocktail/:id'>
              <SingleCocktail />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  )
}

export default App
