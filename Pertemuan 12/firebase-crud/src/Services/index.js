import GetAPI from './Get';
import PostAPI from './Post';
import DeleteAPI from './Delete'; 

// Daftar API - GET
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc'); 

// Daftar API - POST
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);

// Daftar API - DELETE
const deleteNewsBlog = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);

// Daftar API GET, POST, DELETE - Tugas 
const getNewsMahasiswa = () => GetAPI('mahasiswa?_sort=id&_order=desc');
const postNewsMahasiswa = (dataYgDikirim) => PostAPI('mahasiswa', dataYgDikirim);
const deleteNewsMahasiswa = (dataYgDihapus) => DeleteAPI('mahasiswa', dataYgDihapus);

const API = {       // inisialisasi function-function yang akan disediakan global API. 
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog,
    // inisialisasi function untuk tugas 
    getNewsMahasiswa,
    postNewsMahasiswa,
    deleteNewsMahasiswa
}

export default API; 

/* const domainPath = 'http://localhost:3001'; // simpan url domain server API pada variabel, sehingga bisa dinamis, (diganti) 

const GetAPI = (path) => {                  // path digunakan untuk menunjuk alamat API mana yang akan di-request 
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`)              // alamat url domain + path untuk mengakses full alamat API yg di-request 
            .then(response => response.json())      // response dari server harus dijadikan json  
            .then((result) => { 
                resolve(result);                    // jika success menerima response dari server maka resolve response e user  
            }, (err) => { 
                reject(err);                        // jika terjadi error dari server (server down, dll), 
            })                                      // Maka kirim pesan error ke user melalui reject.   
    })
    return promise; 
}

const PostAPI = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`, {
                method: 'post',                     // method POST untuk input/insert data
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)      // kirimkan ke body request untuk data artikel yang akan ditambahkan (insert)
            })
            .then((result) => {
                resolve(result);                // jika success menerima response dari server maka resolve response e user  
            }, (err) => {
                reject(err);                    // jika terjadi error dari server (server down, dll), 
            })
    })
    return promise;
}

const DeleteAPI = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}/${data}`, { method: "DELETE" })    // alamat url API yang ingin kita HAPUS datanya
            .then((result) => {
                resolve(result);                // jika success menerima response dari server maka resolve response e user
            }, (err) => {
                reject(err);                    // jika terjadi error dari server (server down, dll),
            })
    })
    return promise;
} */

