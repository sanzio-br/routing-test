import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <Navbar/>
    <Routes>
      <Route exact path="/routing-test" element={<Home/>}/>
      <Route exact path="/routing-test/about" element={<About/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
