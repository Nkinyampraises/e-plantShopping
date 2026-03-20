import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import Redux hooks
import { addItem } from './CartSlice'; // Import the action
import './ProductList.css';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const dispatch = useDispatch();
    
    // Task: Access Redux store to see what's in the cart
    const cartItems = useSelector(state => state.cart.items);

    // Task: Calculate total quantity for the cart icon badge
    const calculateTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const handleAddToCart = (product) => {
        dispatch(addItem(product)); // Task: Dispatch the addItem action
    };

    // ... existing plantsArray and styles ...

    return (
        <div>
            <div className="navbar" style={styleObj}>
                {/* ... existing logo section ... */}
                
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div> 
                        <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
                            <h1 className='cart'>
                                {/* Total quantity display */}
                                <span className="cart_quantity_count">{calculateTotalQuantity()}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                                    {/* ... existing svg path ... */}
                                </svg>
                            </h1>
                        </a>
                    </div>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1>{category.category}</h1>
                            <div className="product-list">
                                {category.plants.map((plant, i) => (
                                    <div className="product-card" key={i}>
                                        <img src={plant.image} alt={plant.name} />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-description">{plant.description}</div>
                                        <div className="product-cost">{plant.cost}</div>
                                        {/* Task: Disable button if item is already in cart */}
                                        <button 
                                            className="product-button" 
                                            disabled={cartItems.some(item => item.name === plant.name)}
                                            onClick={() => handleAddToCart(plant)}
                                        >
                                            {cartItems.some(item => item.name === plant.name) ? 'Added to Cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;