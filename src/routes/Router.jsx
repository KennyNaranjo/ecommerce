import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import HomePage from '../pages/HomePage/HomePage';
import CartPage from '../pages/CartPage/CartPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

function Router() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '1rem', color: 'white' }}>
        <Link to={'/'}>LOGIN</Link>
        <Link to={'/home'}>HOME</Link>
        <Link to={'/cart'}>CART</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LoginPage user />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
