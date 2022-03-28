import React from "react";
import { useCart } from "react-use-cart";
import { UilPlusCircle } from '@iconscout/react-unicons';
import { UilMinusCircle } from '@iconscout/react-unicons';
import { UilTrashAlt } from '@iconscout/react-unicons';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;
    return (
        <div className="container">
            <div className="card col-12 mt-2 ">
                <div className="card-header bg-primary text-white text-center">
                    <h4>Data Keranjang Belanja</h4>
                    <h5>
                        Cart ({totalUniqueItems}) total items: ({totalItems})
                    </h5>
                </div>

                <div className="card-body">
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src={item.img} alt="product" style={{ height: "6rem" }} />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>Rp {item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>Rp {item.price * item.quantity}</td>
                                    <td>
                                        <button
                                            className="btn btn-secondary ms-2"
                                            onClick={() =>
                                                updateItemQuantity(item.id, item.quantity - 1)
                                            }
                                        >
                                            <UilMinusCircle />
                                        </button>
                                        <button
                                            className="btn btn-secondary ms-2"
                                            onClick={() =>
                                                updateItemQuantity(item.id, item.quantity + 1)
                                            }
                                        >
                                            <UilPlusCircle />
                                        </button>
                                        <button
                                            className="btn btn-danger ms-2"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            <UilTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h4 className="col-auto ms-auto">
                        Total Harga: Rp {cartTotal}
                    </h4>
                    <div className="col-auto">
                        <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
                            <UilTrashAlt /> Clear All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Cart;