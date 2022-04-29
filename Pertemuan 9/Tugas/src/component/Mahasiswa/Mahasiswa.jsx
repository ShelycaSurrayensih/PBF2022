import React from "react";

const Mahasiswa = (props) => {
    return (
        <div className="mahasiswa">
            <div className="gambar-mahasiswa">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Mahasiswa" />
            </div>
            <div className="konten-mahasiswa">
                <div className="judul-mahasiswa">Nama : {props.nama}</div>
                <p className="isi-mahasiswa">
                    NIM : {props.nim}<br/>
                    Alamat : {props.alamat}<br/>
                    HP : {props.hp}<br/>
                    Angkatan : {props.angkatan}<br/>
                    Status : {props.status}<br/>
                </p>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.id)}>Hapus</button>
            </div>
        </div>
    )
}

export default Mahasiswa;