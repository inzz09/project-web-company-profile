interface Service {
  icon: string; // Nama file tanpa ekstensi
  title: string;
  description: string;
}

const Services = () => {
  const services: Service[] = [
    { 
      icon: 's', 
      title: 'SEMEN', 
      description: 'Penyedia kantong semen yang menggunakan bahan kertas kraft dan PP Woven untuk berbagai kebutuhan.' 
    },
    { 
      icon: 'b', 
      title: 'BETON', 
      description: ' Produk beton SIG dapat meningkatkan efisiensi dalam aktivitas pembuatan konstruksi bangunan secara optimal. ' 
    },
    { 
      icon: 'j', 
      title: 'SEMEN CURAH ', 
      description: 'SIG memberikan jaminan produk semen curah berkualitas, melalui kontrol akurasi tingkat tinggi untuk memberikan kepuasan.' 
    },
    { 
      icon: 'p', 
      title: 'PRODUK PRECAST ', 
      description: 'recast concrete merupakan salah satu produk hilir SIG Group yang diproduksi berdasarkan standarisasi khusus ' 
    },
    { 
      icon: 'y', 
      title: 'JASA KONSTRUKSI', 
      description: 'SIG hadir sebagai solusi lengkap dalam dunia konstruksi, menyediakan jasa bangun, semen, beton, semen curah, dan precast untuk segala kebutuhan proyek.' 
    },
    {  
      icon: 'd', 
      title: 'JASA PERDAGANGAN INTERNASIONAL ', 
      description: 'melayani jasa perdagangan & penyediaan bahan bangunan serta produk industri.' 
    },
  ];

  return (
    <section id="layanan" className="py-20 bg-gray-50">
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-red-600 mb-4">Layanan Kami</h2>
          <div className="border-b-4 border-black-600 w-28 mx-auto"></div>
          <p className="text-gray-600 max-w-4xl mx-auto mt-4">
            Kami Merupakan Penyedia :
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              className="group relative p-6 rounded-3xl bg-white 
              overflow-hidden shadow-md transition-all duration-300 
              hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image with Hover Effect */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={`/images/services/${service.icon}.png`}
                  alt={service.title}
                  className="w-full h-85 object-cover transform transition-transform 
                  group-hover:scale-105"
                />
              </div>

              {/* Title and Description */}
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;