import React, { Component } from "react";
import './Mahasiswas.css';
import Post from "../../component/Mahasiswa/Mahasiswa";
import API from "../../Services";

class Mahasiswas extends Component {
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            id: 1,
            NIM: 1,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: 1,
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        API.getMahasiswa().then(result => {
            this.setState({
                listMahasiswa: result
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        API.deleteMahasiswa(data)
            .then(response => {
                this.ambilDataDariServerAPI();
            })
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = { ...this.state.insertMahasiswa };
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        API.postMahasiswa(this.state.insertMahasiswa)
            .then((response) => {
                this.ambilDataDariServerAPI();
            })
    }

    render() {
        return (
            <div className="post-mahasiswa">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="nim" className="col-sm-2 col-form-label">Nim</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="NIM" name="NIM" placeholder="Masukkan NIM" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" placeholder="Masukkan Nama" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">hp</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="hp" name="hp" placeholder="Masukkan No. HP" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" placeholder="Masukkan Tahun Angkatan" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <select name="status" id="status" className="form-control" onChange={this.handleTambahMahasiswa}>
                                <option selected hidden>Pilih Status</option>
                                <option value="Aktif">Aktif</option>
                                <option value="Lulus">Lulus</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <textarea placeholder="Masukkan Alamat" name="alamat" id="body" rows="3" className="form-control" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(mahasiswa => {
                        return <Post key={mahasiswa.id} id={mahasiswa.id} nama={mahasiswa.nama} nim={mahasiswa.NIM} alamat={mahasiswa.alamat} hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status} hapusMahasiswa={this.handleHapusMahasiswa} />
                    })
                }
            </div>
        )
    }
}

export default Mahasiswas;