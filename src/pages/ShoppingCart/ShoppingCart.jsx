import React from "react";
import CardProducts from "./CardProducts";
import Products from "./Products";

const ShoppingCart = () => {
    return (
        <>
            <h1 className="mt-3 text-center">All Items</h1>
            <section className="py-4 container">
                <div className="row">
                    {Products.dessert.map((item, index) => (
                        <CardProducts
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            item={item}
                            key={index}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default ShoppingCart;