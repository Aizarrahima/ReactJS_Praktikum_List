import React, { Component } from "react";
import $ from "jquery";
import CardShopping from "../components/CardShopping";
import 'bootstrap/dist/css/bootstrap.min.css';

class ShoppingCart extends Component {
    constructor() {
        super()
        this.state = {
            dessert: [
                {
                    nama: "Cheese Cake",
                    harga: 20000,
                },
                {
                    nama: "Brownies",
                    harga: 30000,
                },
                {
                    nama: "Pudding",
                    harga: 10000
                },
                {
                    nama: "Cookies",
                    harga: 5000,
                },
            ],
            action: "",
            nama: "",
            harga: 0,
            selectedItem: null,
        }
        this.state.filterDessert = this.state.dessert
    }

    add = () => {
        $("#modal_dessert").show()
        this.setState({
            nama: "",
            harga: 0,
            action: "insert"
        })
    }

    edit = (item) => {
        $("#modal_dessert").show()
        this.setState({
            nama: item.nama,
            harga: item.harga,
            action: "update",
            selectedItem: item
        })
    }

    save = (event) => {
        event.preventDefault();
        let tempDessert = this.state.dessert

        if (this.state.action === "insert") {
            tempDessert.push({
                nama: this.state.nama,
                harga: this.state.harga
            })
        } else if (this.state.action === "update") {
            let index = tempDessert.indexOf(this.state.selectedItem)
            tempDessert[index].nama = this.state.nama
            tempDessert[index].harga = this.state.harga
        }
        this.setState({ dessert: tempDessert })

        $("#modal_dessert").hide()
    }

    drop = (item) => {
        if (window.confirm("Apakah Anda yakin menghapus data ini?")) {
            let tempDessert = this.state.dessert
            let index = tempDessert.indexOf(item)

            tempDessert.splice(index, 1)

            this.setState({ dessert: tempDessert })
        }
    }

    searching = event => {
        if (event.keyCode === 13) {
            let keyword = this.state.keyword.toLowerCase()
            let tempDessert = this.state.dessert
            let result = tempDessert.filter(item => {
                return item.nama.toLowerCase().includes(keyword)
            })
            this.setState({ filterDessert: result })
        }
    }

    close = () => {
        $("#modal_dessert").hide()
    }

    render() {
        return (
            <div className="container"><br />
                <input type="text" className="form-control my-2" placeholder="Pencarian"
                    value={this.state.keyword}
                    onChange={ev => this.setState({ keyword: ev.target.value })}
                    onKeyUp={ev => this.searching(ev)}
                />
                <div className="row">
                    {this.state.filterDessert.map((item, index) => (
                        <CardShopping
                            key={index}
                            nama={item.nama}
                            harga={item.harga}
                            onEdit={() => this.edit(item)}
                            onDrop={() => this.drop(item)}
                        />
                    ))}
                </div>

                <button className="btn btn-success" onClick={() => this.add()} data-toggle="modal" data-target="#modal_dessert">
                    Tambah Data
                </button>

                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_dessert">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title"><b>Modal Dessert</b></h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => this.close()}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={ev => this.save(ev)}>
                                    Nama Dessert
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.nama}
                                    onChange={ ev => this.setState({nama: ev.target.value})} required />
                                    
                                    Harga
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.harga}
                                    onChange={ ev => this.setState({harga: ev.target.value})} required />
                                    
                                    <button className="btn btn-info btn-block" type="submit">
                                        Simpan
                                    </button>
                                </form>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoppingCart;