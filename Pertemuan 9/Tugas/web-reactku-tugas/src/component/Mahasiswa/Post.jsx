import React from "react";

const Post = (props) => {
    return (
        <div className="post-mahasiswa">
            <div className="mahasiswa">
                <div className="gambar-mahasiswa">
                    <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail mahasiswa" />
                </div>
                <div className="konten-mahasiswa">
                    <p className="isi-mahasiswa"><b>NIM Mahasiswa : </b>{props.nim_mhs}</p>
                    <p className="isi-mahasiswa"><b>Nama Mahasiswa : </b>{props.nama_mhs}</p>
                    <p className="isi-mahasiswa"><b>Alamat Mahasiswa : </b>{props.alamat_mhs}</p>
                    <p className="isi-mahasiswa"><b>Hp. Mahasiswa : </b>{props.hp_mhs}</p>
                    <p className="isi-mahasiswa"><b>Angkatan Mahasiswa : </b>{props.angkatan_mhs}</p>
                    <p className="isi-mahasiswa"><b>Status Mahasiswa : </b>{props.status_mhs}</p>
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.id_mhs)}>Hapus</button>
                </div>
            </div>
        </div>
    )
}

export default Post;