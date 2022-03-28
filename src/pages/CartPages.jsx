import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Cart from "./ShoppingCart/Cart";
import { CartProvider } from "react-use-cart";

function CartPages() {
    return (
        <>
            <CartProvider>
                <ShoppingCart />
                <Cart />
            </CartProvider>
        </>
    )
}

export default CartPages;