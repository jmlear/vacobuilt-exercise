import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar
} from '@mui/material';
import CreatePost from './components/CreatePost';
import Home from './components/Home';
import DeletePost from './components/DeletePost';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="createPost" element={<CreatePost/>} />
              <Route path="delete/:id" element={<DeletePost/>} />
            </Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

function Layout() {
  return (
    <div>
      <AppBar>
        <Toolbar>Title</Toolbar>
      </AppBar>
      <Outlet/>
    </div>
  )
}

export default App;
