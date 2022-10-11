import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar
} from '@mui/material';
import BlogPost from './components/BlogPost';
import CreatePost from './components/CreatePost';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="createPost" element={<CreatePost/>} />
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

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate('createPost')} variant="contained" color="primary">New Post</Button>
      <BlogPost post={{
        'id': 123,
        'text': 'This is the text',
        'timestamp': 'Sat Jul 01 09:46:02 EST 2017',
        'title': 'Title'
      }}/>
    </div>
  )
}

export default App;
