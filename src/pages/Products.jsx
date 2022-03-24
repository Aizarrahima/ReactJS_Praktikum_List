import React, { Component } from "react";
import $ from "jquery";
import Card from "../components/CardProducts";
import 'bootstrap/dist/css/bootstrap.min.css';

class Products extends Component {
    constructor() {
        super()
        this.state = {
            dessert: [
                {
                    nama: "Cheese Cake",
                    harga: 20000,
                    img : "https://i.pinimg.com/564x/0c/1e/d1/0c1ed1fe588b01dd038617c1792c32ea.jpg"
                },
                {
                    nama: "Brownies",
                    harga: 30000,
                    img: "https://i.pinimg.com/564x/81/f5/6b/81f56b4e1ec0b3d0d129e03be8470b33.jpg"
                },
                {
                    nama: "Pudding",
                    harga: 10000,
                    img: "https://i.pinimg.com/564x/fa/6f/ac/fa6fac92148ac5e2782ac41e6c6fc9d0.jpg"
                },
                {
                    nama: "Cookies",
                    harga: 5000,
                    img: "https://i.pinimg.com/564x/85/20/24/852024e24e51f6eb81f6f7a9fc1e8170.jpg"
                },
            ],
            action: "",
            nama: "",
            harga: 0,
            img:"",
            selectedItem: null,
        }
        this.state.filterDessert = this.state.dessert
    }

    add = () => {
        $("#modal_dessert").show()
        this.setState({
            nama: "",
            harga: 0,
            img: "",
            action: "insert"
        })
    }

    edit = (item) => {
        $("#modal_dessert").show()
        this.setState({
            nama: item.nama,
            harga: item.harga,
            img: item.img,
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
                harga: this.state.harga,
                img: this.state.img
            })
        } else if (this.state.action === "update") {
            let index = tempDessert.indexOf(this.state.selectedItem)
            tempDessert[index].nama = this.state.nama
            tempDessert[index].harga = this.state.harga
            tempDessert[index].img = this.state.img
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

    // menambahkan item yang dipilih user ke keranjang belanja
    addToCart = (selectedItem) => {
        // membuat sebuah variabel untuk menampung cart sementara
        let tempCart = []

        // cek eksistensi dari data cart pada localStorage
        if (localStorage.getItem("cart") !== null) {
            tempCart = JSON.parse(localStorage.getItem("cart"))
            // JSON.parse() digunakan untuk mengonversi dari string -> array object
        }

        // cek data yang dipilih user ke keranjang belanja
        let existItem = tempCart.find(item => item.nama === selectedItem.nama)
        if (existItem) {
            // jika item yang dipilih ada pada keranjang belanja
            window.alert("Anda telah memilih item ini")
        } else {
            // user diminta memasukkan jumlah item yang dibeli
            let promptJumlah = window.prompt("Masukkan jumlah item yang dibeli", "")
            if (promptJumlah !== null && promptJumlah !== "") {
                // jika user memasukkan jumlah item yang dibeli
                
                // menambahkan properti "jumlahBeli" pada item yang dipilih
                selectedItem.jumlahBeli = promptJumlah
                
                // masukkan item yang dipilih ke dalam cart
                tempCart.push(selectedItem)

                // simpan array tempCart ke localStorage
                localStorage.setItem("cart", JSON.stringify(tempCart))
            }
        }
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
                        <Card
                            key={index}
                            nama={item.nama}
                            harga={item.harga}
                            img={item.img}
                            onEdit={() => this.edit(item)}
                            onDrop={() => this.drop(item)}
                            onCart={() => this.addToCart(item)}
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

export default Products;