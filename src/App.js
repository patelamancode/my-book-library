import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import Read from './pages/Read';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorite' element={<Favorite />}/>
        <Route path='/read' element={<Read />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;
