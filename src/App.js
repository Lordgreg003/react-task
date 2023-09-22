import logo from './logo.svg';
import './App.css';
import { image1 } from './images/index.js';
import Greg from './Greg.jsx';
import { toggle1 } from './images/index.js';
import { image2 } from './images/index.js';
import { LoginScreen } from './screens/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signupscreen } from './screens/index';
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/signup' element={<Signupscreen />} />
          <Route path='/' element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
