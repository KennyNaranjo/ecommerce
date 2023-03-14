import './App.css';
import Router from './routes/Router';
import CartProvider from './context/CartProvider';
import UserProvider from './context/user/UserProvider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserProvider>
          <CartProvider>
            <Router />
          </CartProvider>
        </UserProvider>
      </header>
    </div>
  );
}

export default App;
