import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import PageHome from './containers/PageHome'

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
        <div className="App">
          <Header />
          <Route exact path="/" component={PageHome}/>
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
