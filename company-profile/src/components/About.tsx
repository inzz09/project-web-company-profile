import logo from "../assets/logo.png";

const About = () => {
  return (
    <section id="tentang" className="py-20 bg-gradient-to-r from-gray-100 to-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center md:justify-start mb-8 md:mb-0">
            <img 
              src={logo} 
              alt="Semen Indonesia" 
              className="h-48 md:h-64 w-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
              Tentang <span className="text-red-600"> Semen<span className="text-red-400">Indonesia</span></span>
            </h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-lg">
                <p className="text-blue-700 font-semibold text-lg">50%+</p>
                <p className="text-blue-600">Pangsa Pasar Domestik</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-green-700 font-semibold text-lg">Multi-Nasional</p>
                <p className="text-green-600">Jangkauan Distribusi</p>  
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-justify md:text-left">
            PT Semen Indonesia (Persero) Tbk, yang dikenal sebagai SIG,
                adalah perusahaan milik negara Indonesia yang bergerak di bidang
                penyediaan solusi bahan bangunan. Perusahaan ini memiliki 17
                anak perusahaan yang beroperasi di Indonesia dan Vietnam, dengan
                jangkauan pasar yang meliputi Asia, Australia, dan Oseania.
            </p>
            
            <div className="flex space-x-4 mt-6 font-semibold">
              <a href="#layanan" className="bg-green-100 hover:bg-green-300 text-green-700 px-6 py-3 rounded-lg transition duration-200">
                Produk Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;