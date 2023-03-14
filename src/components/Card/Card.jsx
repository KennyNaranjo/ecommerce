import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

function Card({ id, title, thumbnail }) {
  const { cart, updateCart, removeFromCart } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const handleBuy = () => {
    if (checkCart()) {
      const newCart = cart.filter((product) => product.id !== id);
      removeFromCart(newCart);
    } else {
      updateCart({ id, title, thumbnail });
    }
  };

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleRest = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const checkCart = () => {
    return cart.find((product) => product.id === id);
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '400px',
        border: '1px solid black',
        width: '10rem',
        flexDirection: 'column',
        boxShadow:'yellow',
        justifyContent: 'space-between',
        fontSize: '20px',
      }}
    >
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
      <p>Amount: {count}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleRest}>-</button>
      {!checkCart() ? (
        <button onClick={handleBuy}>BUY</button>
      ) : (
        <button onClick={handleBuy}>REMOVE</button>
      )}
    </div>
  );
}

export default Card;
