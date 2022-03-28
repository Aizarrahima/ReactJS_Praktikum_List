import React, { Component } from "react";
import $ from "jquery";
import Card from "../components/CardEnvironment";
import 'bootstrap/dist/css/bootstrap.min.css';

class EnvironmentDay extends Component {
    constructor() {
        super()
        this.state = {
            agenda: [
                {
                nama: "Hari Peduli Sampah Nasional",
                tanggal: "2022-02-21",
                },
                {
                nama: "Hari Air Sedunia",
                tanggal: "2022-03-22",
                },
            ],
            action: "",
            nama: "",
            tanggal: "",
            selectedItem: null,
        }
        this.state.filterAgenda = this.state.agenda
    }

    add = () => {
        $("#modal_agenda").show()
        this.setState({
            nama: "",
            tanggal: "",
            action: "insert"
        })
    }

    edit = (item) => {
        $("#modal_agenda").show()
        this.setState({
            nama: item.nama,
            tanggal: item.tanggal,
            action: "update",
            selectedItem: item
        })
    }

    save = (event) => {
        event.preventDefault();
        let tempAgenda = this.state.agenda

        if (this.state.action === "insert") {
            tempAgenda.push({
                nama: this.state.nama,
                tanggal: this.state.tanggal
            })
        } else if (this.state.action === "update") {
            let index = tempAgenda.indexOf(this.state.selectedItem)
            tempAgenda[index].nama = this.state.nama
            tempAgenda[index].tanggal = this.state.tanggal
        }
        this.setState({ agenda: tempAgenda })
        
        $("#modal_agenda").hide()
    }

    drop = (item) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
            let tempAgenda = this.state.agenda
            let index = tempAgenda.indexOf(item)

            tempAgenda.splice(index, 1)

            this.setState({ agenda: tempAgenda })
        }
    }

    searching = event => {
        if (event.keyCode === 13) {
            let keyword = this.state.keyword.toLowerCase()
            let tempAgenda = this.state.agenda
            let result = tempAgenda.filter(item => {
                return item.nama.toLowerCase().includes(keyword) ||
                item.tanggal.toLowerCase().includes(keyword)
            })
            this.setState({ filterAgenda: result })
        }
    }

    close = () => {
        $("#modal_agenda").hide()
    }

    render() {
        return (
            <div className="container"><br />
                <h1 className="text-center">Events</h1>
                <input type="text" className="form-control my-2" placeholder="Pencarian"
                    value={this.state.keyword}
                    onChange={ev => this.setState({ keyword: ev.target.value })}
                    onKeyUp={ev => this.searching(ev)}
                />
                <div className="row">
                    {this.state.filterAgenda.map((item, index) => (
                        <Card
                            key={index}
                            nama={item.nama}
                            tanggal={item.tanggal}
                            onEdit={() => this.edit(item)}
                            onDrop={() => this.drop(item)}
                        />
                    ))}
                </div>

                <button className="btn btn-success" onClick={() => this.add()} data-toggle="modal" data-target="#modal_agenda">
                    Tambah Data
                </button>

                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_agenda">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title"><b>Modal Agenda</b></h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => this.close()}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={ev => this.save(ev)}>
                                    Nama Event
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.nama}
                                    onChange={ ev => this.setState({nama: ev.target.value})} required />
                                    
                                    Tanggal Event
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.tanggal}
                                    onChange={ ev => this.setState({tanggal: ev.target.value})} required />
                                    
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

export default EnvironmentDay;