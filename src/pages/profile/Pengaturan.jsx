
export default function Pengaturan() {
  return (
    <section id="pengaturan">
      <div className="card" style={{ borderRadius: '10px' }}>
        <div className="card-body">
          <img
            src="assets/profil/user.png"
            alt="avatar"
            className="rounded-circle img-fluid mt-3 mx-4"
            style={{ width: '70px' }}
          />
          <button
            type="button"
            className="btn btn-outline-dark btn-sm mt-3"
            style={{ borderRadius: '10px' }}
          >
            Upload Foto
          </button>
          <div className="row mt-4 mx-3">
            <div className="col-md-12 my-3">
              <label className="labels">Nama (Maks. 50 karakter)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan Nama"
                value="Ani"
                style={{ backgroundColor: '#DCDCDC' }}
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Alamat Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan Alamat Email"
                value="Ani.food@gmail.com"
                style={{ backgroundColor: '#DCDCDC' }}
              />
            </div>
            <div className="col-md-12 my-3">
              <label className="labels">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan Username"
                value="Ani.food"
                style={{ backgroundColor: '#DCDCDC' }}
              />
            </div>
            <div className="col-md-12">
              <label className="labels">No Telepon</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan No Telepon"
                value="08129834765"
                style={{ backgroundColor: '#DCDCDC' }}
              />
            </div>
            <div className="col-md-12 my-3">
              <label className="labels">Domisili</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan Domisili"
                value="Bandung"
                style={{ backgroundColor: '#DCDCDC' }}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block btn-sm mx-3"
              style={{ width: '96%' }}
            >
              Simpan Profil Anda
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
