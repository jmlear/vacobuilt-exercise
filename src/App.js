import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import {
  AppBar,
  Toolbar
} from '@mui/material';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="custom" element={<h2>Custom</h2>} />
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
  return (
    <h1>Home</h1>
  )
}

export default App;
