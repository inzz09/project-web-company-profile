const News = () => {
  const news = [
    { id: 1, image: '/images/services/h.jpg', title: 'Jelang Idulfitri, SIG Pererat Silaturahmi dengan Stakeholder dan Salurkan Bantuan di 6 Provinsi', date: '30 Maret 2025' },
    { id: 2, image: '/images/services/s.jpg', title: 'Di Tengah Tantangan Industri 2024, SIG Jaga Konsistensi Menuju Bisnis Bahan Bangunan Berkelanjutan', date: '30 Maret 2025' },
    { id: 3, image: '/images/services/t.jpg', title: 'Jalankan Peran Vital sebagai Bandara Tersibuk Saat Lebaran 2025, Yogyakarta International Airport Jadi Mahakarya Keunggulan Semen SIG', date: '10 April 2025'}, 
    { id: 4, image: '/images/services/ig.jpg', title: 'Jadi Tempat Ibadah Favorit Saat Ramadan, Masjid Istiqlal Buktikan Komitmen SIG dalam Membangun Negeri', date: '17 Maret 2025'}, 
    { id: 5, image: '/images/services/b.jpg', title: 'Dukung Ketersediaan Air Bersih dan Listrik Terbarukan bagi Warga Bali, SIG Pasok Semen pada Proyek Pembangunan Bendungan Sidan', date: '14 Maret 2025'}, 
    { id: 6, image: '/images/services/fo.jpg', title: 'Sukses Turunkan Rasio Lost Time Injury, SIG Dukung Pembangunan Berkelanjutan Melalui Penguatan Budaya K3', date: '07 Maret 2025'},    
  ];

  return (
    <section id="berita" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-2">Berita Terbaru</h2>
          <div className="border-b-4 border-black-600 w-20 mx-auto"></div>
        </div>

        {/* Grid Berita */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
              {/* Gambar dengan rasio aspek 16:9 */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                />
              </div>

              {/* Konten yang terpusat */}
              <div className="flex-grow p-6 flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-4">{item.date}</p>
                  {/* Garis bawah di setiap huruf judul */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 underline">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
