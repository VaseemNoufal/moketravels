import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Undefined from './Pages/Undefined';
import ViewSingle from './Pages/PlaceView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/places/:id' element={<ViewSingle />}/>
        <Route path='*' element={<Undefined />}/>
      </Routes>
    </Router>
  );
}

export default App;
