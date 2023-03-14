import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Card from '../../components/Card/Card';

function CartPage() {
  const { cart } = useContext(CartContext);

  console.log({ cart });

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginTop: '2rem',
      }}
    >
      {cart.map((game) => {
        const { id, title, thumbnail } = game;
        return <Card key={id} id={id} thumbnail={thumbnail} title={title} />;
      })}
    </div>
  );
}

export default CartPage;
