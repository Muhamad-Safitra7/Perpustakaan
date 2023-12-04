
export default function Pengaturan() {
    return(
            <div class="card"  style={{borderRadius: '10px'}}>
                <div class="card-body">
                    <img src="assets/profil/user.png" alt="avatar" class="rounded-circle img-fluid mt-3  mx-4" style={{width:'70px'}}/>
                    <button type="button" class="btn btn-outline-dark btn-sm mt-3"  style={{borderRadius: '10px'}}>Upload Foto</button>
                    <div class="row mt-4 mx-3">
                        <div class="col-md-12 my-3">
                            <label class="labels ">Nama (Maks. 50 karakter)</label>
                            <input type="text" class="form-control" placeholder="Masukkan Nama" value="Ani" style={{backgroundColor:'#DCDCDC'}}/>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Alamat Email</label>
                            <input type="text" class="form-control" placeholder="Masukkan Alamat Email" value="Ani.food@gmail.com" style={{backgroundColor:'#DCDCDC'}}/>
                        </div>
                        <div class="col-md-12 my-3">
                            <label class="labels">Username</label>
                            <input type="text" class="form-control" placeholder="Masukkan Username" value="Ani.food" style={{backgroundColor:'#DCDCDC'}}/>
                        </div>
                        <div class="col-md-12 ">
                            <label class="labels">No Telepon</label>
                            <input type="text" class="form-control" placeholder="Masukkan No Telepon" value="08129834765" style={{backgroundColor:'#DCDCDC'}}/>
                        </div>
                        <div class="col-md-12 my-3">
                            <label class="labels">Domisili</label>
                            <input type="text" class="form-control" placeholder="Masukkan Domisili" value="Bandung" style={{backgroundColor:'#DCDCDC'}}/>
                        </div>
                        <button type="button" class="btn btn-primary btn-lg btn-block btn-sm mx-3"  style={{width: '96%'}}>Simpan Profil Anda</button>
                    </div>
                </div>
            </div>
    )
}
