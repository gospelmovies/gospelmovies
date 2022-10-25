import React from 'react';
import styled from 'styled-components'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movie-details/MovieDetails";

const Container = styled.div``;

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie-detail' element={<MovieDetails />} />
        </Routes>
    </Router>
  );
}

export default App;
