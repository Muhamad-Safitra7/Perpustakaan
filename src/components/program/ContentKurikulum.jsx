import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

export default function KurikulumProgram() {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    {
      title: 'Pengantar',
      meetings: [
        'Selamat Datang Di Kelas!',
        'Definisi Pengelolaan Keuangan',
        'Pentingnya Pengelolaan Keuangan Bisnis',
      ],
    },
    {
      title: 'Pengelolaan Pendapatan & Biaya',
      meetings: [
        'Konsep Pendapatan & Biaya',
        'Pendapatan vs Biaya',
        'Accrual vs Cash Basis',
        'Pendapatan vs Penerimaan',
        'Biaya vs Pengeluaran',
        'Rangkuman',
      ],
    },
    {
      title: 'Pemahaman Dana Darurat',
      meetings: [
        'Konsep dan Pentingnya Dana Darurat',
        'Cara Menghitung Jumlah Dana Darurat',
        'Strategi Pengelolaan Dana Darurat Bisnis',
        'Rangkuman',
      ],
    },
    {
      title: 'Pengenalan Investasi untuk Bisnis',
      meetings: [
        'Jenis-jenis Investasi',
        'Risiko dan Manfaat Investasi',
        'Cara Memilih Investasi yang Tepat',
        'Rangkuman',
      ],
    },
    {
      title: 'Mengelola Keuangan Bisnis',
      meetings: [
        'Pengantar Mengelola Keuangan Bisnis',
        'Membuat Anggaran',
        'Kas',
        'Piutang',
        'Persediaan',
        'Utang',
        'Monitor Aset',
        'Evaluasi Pengeluaran',
        'Perpajakan Bisnis',
        'Rangkuman',
      ],
    },
    {
      title: 'Pembukuan & Laporan Keuangan',
      meetings: [
        'Simulasi Laporan Keuangan pada Bisnis',
        'Laporan Keuangan UMKM di Bidang Jasa',
        'Laporan Keuangan UMKM di Bidang Dagang',
        'Laporan Keuangan UMKM di Bidang Manufaktur',
        'Catatan Atas Laporan Keuangan',
        'Rangkuman',
      ],
    },
    {
      title: 'Analisa Laporan Keuangan',
      meetings: [
        'Konsep Analisa Laporan Keuangan',
        'Metode & Rasio Analisa Laporan Keuangan',
        'Analisa dengan Metode Analisis Horizontal & Vertikal',
        'Analisa Rasio Likuiditas',
        'Analisa Rasio Aktivitas',
        'Analisa Rasio Profitabilitas',
        'Analisa Rasio Cakupan / Coverage Ratio',
        'Rangkuman',
      ],
    },
    {
      title: 'Digitalisasi Pembayaran',
      meetings: [
        'Pengantar Penggunaan QRIS',
        'Penerapan QRIS dalam Bisnis Retail dan Layanan',
        'Analisis Data melalui QRIS',
        'Rangkuman',
      ],
    },
    {
      title: 'Pemasaran dan Promosi',
      meetings: [
        'Pengantar Pemasaran dan Promosi Bisnis',
        'Penyusunan Rencana Pemasaran',
        'Analisis Data melalui QRIS',
        'Rangkuman',
      ],
    },
    {
      title: 'Penutup',
      meetings: [
        'Refleksi dan Penutup',
        'Rangkuman',
      ],
    },
  ];

  const handleModuleClick = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  return (
    <div id="program-content">
      {modules.map((module, index) => (
        <div key={index} className="card mb-3">
          <div
            className="card-header d-flex justify-content-between align-items-center"
            onClick={() => handleModuleClick(index)}
            style={{ cursor: 'pointer' }}
          >
            <h5>{module.title}</h5>
            <FontAwesomeIcon icon={activeModule === index ? faChevronUp : faChevronDown} />
          </div>
          {activeModule === index && (
            <div className="card-body">
              {module.meetings.map((meeting, meetingIndex) => (
                <div key={meetingIndex} className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faSquareCheck} className="text-success me-2" />
                  <p>
                    <p>{meeting}</p>
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
