import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './containers/Index'
import Search from './containers/Search'
import Listing from './containers/Listing'
import Record from './containers/Record'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      menus: null
    }
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_ROOT}/menu`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            menus: result.data
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, menus } = this.state
    const mainMenu = menus ? menus.main : null

    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/search" component={Search}/>
            <Route path="/:contentType/:id" component={Record}/>
            <Route path="/:contentType" component={Listing}/>
          </Switch>
          <Footer
            menuItems={mainMenu}
            menuError={error}
            menuLoaded={isLoaded}
          />
        </div>
      </Router>
    )
  }
}

export default App
