"use client"
export default function Profil() {
 
              <div className="card mb-4" style={{ borderRadius: '10px' }}>
                <div className="card-body text-center">
                  <img src="assets/profil/user.png" alt="avatar" className="rounded-circle img-fluid" style={{ width: '100px' }} />
                  <p className="mt-2">Halo, Ani</p>
                  <hr />
                  <div className="sidebar">
                    <a
                      onClick={() => handleTabChange('kursus-saya')}
                      className={activeTab === 'kursus-saya' ? 'active' : ''}
                    >
                      Kursus Saya
                    </a>
                    <a
                      onClick={() => handleTabChange('transaksi')}
                      className={activeTab === 'transaksi' ? 'active' : ''}
                    >
                      Transaksi
                    </a>
                    <a href="/profil/bantuan"
                      
                      className={activeTab === 'pusat-bantuan' ? 'active' : ''}
                    >
                      Pusat Bantuan
                    </a>
                    <a
                      onClick={() => handleTabChange('pengaturan')}
                      className={activeTab === 'pengaturan' ? 'active' : ''}
                    >
                      Pengaturan
                    </a>
                    <a
                      onClick={() => handleTabChange('keluar')}
                      className={activeTab === 'keluar' ? 'active' : ''}
                    >
                      Keluar
                    </a>
                  </div>
                </div>
              </div>
           
}
