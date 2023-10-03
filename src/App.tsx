import React from 'react'
import css from '@emotion/css/macro'
import './App.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'

import Header from '../src/components/layout/Header'
import ItemHome from '../src/components/items/ItemHome'

const paperCss = css`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <main className="App">
          <Paper elevation={3} css={paperCss}>
            <Switch>
              <Route path="/">
                <ItemHome />
              </Route>
              <Route path="/wishlist">
                <div>Here will be dragaons aka the wish list</div>
              </Route>
              <Route path="/shoppinglist">
                <div>This will be the shopping list</div>
              </Route>
            </Switch>
          </Paper>
        </main>
      </Router>
    </div>
  )
}

export default App
