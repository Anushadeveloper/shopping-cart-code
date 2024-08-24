
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../ContextCart/ContextCart';
import './CartItems.css';
import { Link } from 'react-router-dom';
import CarouselCom from '../Carousel/Carousel';

function Product(){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchItem, setSearchItem] = useState('');
  const { addToCart, addToOrders } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) {
          throw new Error('Error in the API');
        }
        return res.json();
      })
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredproducts = products.filter(product => 
    product.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div>
      
      <h1 className='main-heading'>Shopping Cart</h1>
      <div className='btn-cart'>
        <Link to='/Cart'>
          <button>Go to Cart</button>
        </Link>
        <Link to='/Orders'>
          <button>Orders</button>
        </Link>
      
      </div>
      <CarouselCom />
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search'
          value={searchItem}
          onChange={handleSearchChange}
          className='search'
        />
      </div>
      <div className='cart-list'>
        {filteredproducts.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
            addToOrders={addToOrders}
          />
        ))}
      </div>
    </div>
  );
};

const ProductItem = ({ product, addToCart, addToOrders }) => {
  return (
    <div className="cart-items">
      <div className="img-div">
        <img src={product.image} alt={product.title} /> <br />
      </div>
      <h5 className="title-txt">{product.title}</h5>
      <p className="title-txt">&#8377;{product.price}</p>
      <div className="btn">
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <button onClick={() => addToOrders(product)}>Buy Now</button>
      </div>
    </div>
  );
};

export default Product;



