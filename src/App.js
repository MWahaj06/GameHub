import React, { Component } from 'react'
import Navbar from './mycomps/Navbar'
import News from './mycomps/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export class App extends Component {
  pageS = 12;
  apiKey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News key="gaming" pageSize={this.pageS} category="Gaming" api={this.apiKey} />
            </Route>
            <Route exact path="/pcgaming">
              <News key="pcgaming" pageSize={this.pageS} category="PC gaming" api={this.apiKey} />
            </Route>
            <Route exact path="/playstation">
              <News key="playstation" pageSize={this.pageS} category="Playstation" api={this.apiKey} />
            </Route>
            <Route exact path="/xbox">
              <News key="xbox" pageSize={this.pageS} category="Xbox" api={this.apiKey} />
            </Route>
            <Route exact path="/tech">
              <News key="tech" pageSize={this.pageS} category="Technology" api={this.apiKey} />
            </Route>
            <Route exact path="/Covid">
              <News key="Covid" pageSize={this.pageS} category="Covid" api={this.apiKey} />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
