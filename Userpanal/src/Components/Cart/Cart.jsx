import { FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Sercvices/Actions/productsActions";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartReducer.cart || []); // Ensure correct path to your cart

    const handleRemove = (productId) => {
        useDispatch(removeFromCart(productId));
    };

    return (
        <div className="cart">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cartimg" />
                            <h3>{item.name}</h3>
                            <p>
                                Price: <FaRupeeSign />{item.price}
                            </p>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h3>
                        Total: <FaRupeeSign />
                        {cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0)} {/* Calculate total */}
                    </h3>
                </div>
            )}
        </div>
    );
};

export default Cart;
