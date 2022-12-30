import React from 'react';
import styled from 'styled-components'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movie-details/MovieDetails";
import Login from './pages/admin/Login';
import EmptyComponent from './pages/admin/index';

const Container = styled.div``;

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie-detail' element={<MovieDetails />} />
            <Route path="admin" element={<EmptyComponent />}>
              <Route path="login" element={<Login />} />
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
