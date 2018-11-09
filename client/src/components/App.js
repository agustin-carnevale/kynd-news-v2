import '../styles/App.css';
import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import TitlesList from './news/TitlesList';
import Article from './news/Article';
import {connect} from 'react-redux';
import * as actions from '../actions';

class App extends Component {

  componentDidMount(){
    this.props.fetchTitles();
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          KYND - NEWS
        </header>

        <Route exact path="/" component={TitlesList} />
        <Route path="/article/:id" component={Article} />
      </div>
      </BrowserRouter>
    );
  }
}

export default connect(null,actions)(App);
