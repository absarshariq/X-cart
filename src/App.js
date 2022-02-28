import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} exact>
          </Route>
          <Route path='/cart' element={<Cart />} exact>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;