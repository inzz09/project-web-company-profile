const Awards = () => {
  const awards = [
    { 
      year: 2024, 
      title: 'Konsisten Tingkatkan Penggunaan Produk Dalam Negeri, SIG Raih Penghargaan The Indonesia Best Companies in Local Content',
      icon: '🏆'
    },
    { 
      year: 2024, 
      title: 'Inovasi Pengelolaan Lahan Pascatambang SIG Raih Penghargaan Utama pada Ajang Anugerah Inovasi Indonesia 2024',
      icon: '💎'
    },
    { 
      year: 2024, 
      title: 'Unggul dalam Tata Kelola, SIG Raih Penghargaan Best State-Owned Enterprises pada Ajang The 15th IICD Corporate Governance Conference and Award 2024',
      icon: '🥇'
    }
  ];

  return (
    <section id="penghargaan" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Penghargaan</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>
        
        {/* Grid Penghargaan */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
              transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Header Card */}
              <div className="flex items-center justify-center mb-6">
                <div className="text-4xl mr-4">{award.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-red-600">{award.year}</h3>
                  <p className="text-gray-600">Penghargaan</p>
                </div>
              </div>

              {/* Konten */}
              <h4 className="text-lg font-medium text-gray-800 leading-relaxed">
                {award.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
