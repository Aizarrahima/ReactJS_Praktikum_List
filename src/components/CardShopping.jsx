import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class CardShopping extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-sm-4 p-2">
                <div className="card" style={{width: '18rem'}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.nama}
                        </h5>
                        <p className="card-text">
                           Rp {this.props.harga}
                        </p>
                    </div>
                    <div className="card-body">
                        {/* button untuk mengedit */}
                            <button className="btn btn-sm btn-primary m-1"
                            onClick={this.props.onEdit} data-toggle="modal" data-target="#modal">
                                Edit
                            </button>
 
                            {/* button untuk menghapus */}
                            <button className="btn btn-sm btn-danger m-1"
                            onClick={this.props.onDrop}>
                                Hapus
                            </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardShopping;