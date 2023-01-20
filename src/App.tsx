import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movie-details/MovieDetails";
import Login from './pages/admin/Login';
import EmptyComponent from './pages/admin/index';
import Upload from 'pages/admin/Upload';
import Dashboard from "pages/admin/Dashboard";
import Movies from "pages/admin/Movies";
import Users from "pages/admin/Users";
import ErrorPage from "pages/ErrorPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie-detail' element={<MovieDetails />} />
        <Route path="login" element={<Login />} />
        {
          localStorage.getItem('user') && (
            <Route path="admin" element={<EmptyComponent />}>
              <Route path="upload" element={<Upload />} />
              <Route path="home" element={<Dashboard />} />
              <Route path="movies" element={<Movies />} />
              <Route path="users" element={<Users />} />
            </Route>
          )
        }
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
