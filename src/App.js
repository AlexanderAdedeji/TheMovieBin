import React from 'react';
import Header from './components/Header/header'
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

const  App =()=>  (
    <Router>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:movieId' element={<Movie/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      
      <GlobalStyle/>
    </Router>
  );


export default App;
 