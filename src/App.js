import React from 'react';
import './App.css';
import NavigationBar from './components/header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MovieShow from './components/movieShow'
import Home from './components/home'
import NewMovie from './components/new'
import EditMovie from './components/editMovie'
import FilteredMovie from './components/filteredMovie'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>

        {/* All the routings to the components are made here */}
        <Route path='/' component={Home} exact={true}></Route>
        <Route path='/movie/:id' component={MovieShow} exact={true}></Route>
        <Route path="/movies/new" component={NewMovie} exact={true}></Route>
        <Route path="/movie/edit/:id" component={EditMovie} exact={true}></Route>
        <Route path="/search" component={FilteredMovie} exact={true} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
