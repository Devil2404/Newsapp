import React, { Component } from 'react'
import './App.css'
import Bgposter from './Components/Bgposter'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  category = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology"
  ]
  country = [
    'gb',
    'nz',
    'us',
    'my',
    'in',
    'ph',
    'sg',
    'za',
    'au',
    'ca'
  ]
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar
            height={4}
            color='#000000'
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Bgposter
                    category="general"
                  />
                  <News
                    progress={this.setProgress}
                    category="general"
                  />
                </>
              }
            >
            </Route>
            {
              this.category.map((element) => {
                return <Route
                  key={element}
                  exact
                  path={`/${element}`}
                  element={
                    <>
                      <Bgposter
                        key={element}
                        category={element}
                      />
                      <News
                        progress={this.setProgress}
                        key={`${element}-news`}
                        category={element}
                      />
                    </>
                  }
                >
                </Route>
              })
            }
          </Routes>
          <Footer />
        </div>
      </Router>
    )
  }
}

