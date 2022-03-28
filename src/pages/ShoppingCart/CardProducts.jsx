import React from "react";
import { useCart } from "react-use-cart";

const CardProducts = (props) => {
    // CART
    const { addItem } = useCart();

    return (
        <div className="col-lg-4 col-sm-4 p-2">
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.img} className="card-img-top" alt="" style={{ height: "20rem" }} />
                <div className="card-body">
                    <h5 className="card-title">
                        {props.name}
                    </h5>
                    <p className="card-text">
                        Rp {props.price}
                    </p>
                </div>
                <div className="card-body">
                    {/* button untuk mengedit */}
                    {/* <button className="btn btn-sm btn-primary m-1"
                        onClick={this.props.onEdit} data-toggle="modal" data-target="#modal">
                        Edit
                    </button> */}

                    {/* button untuk menghapus */}
                    {/* <button className="btn btn-sm btn-danger m-1"
                        onClick={this.props.onDrop}>
                        Hapus
                    </button> */}

                    {/* button untuk menambah ke keranjang belanja */}
                    <button class="btn btn-success m-1" onClick={() => addItem(props.item)}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}


export default CardProducts;