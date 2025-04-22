const DarkenedHeroSection = () => {
  return (
    <section
    id="beranda" className="relative overflow-hidden min-h-[100vh] flex items-center"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
          url(https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1516270611/r2wzve37elneidac3osc.jpg)
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll'
      }}
    >
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 
                     bg-clip-text text-transparant bg-gradient-to-r from-red-500 to-orange-500 
                     animate-fade-in-up">
          Solusi Konstruksi Berkelanjutan
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto 
                    animate-fade-in-up delay-300">
          Menyediakan material bangunan berkualitas tinggi dengan teknologi ramah lingkungan 
          untuk pembangunan infrastruktur masa depan
        </p>

        <div className="flex justify-center animate-fade-in-up delay-600">
          <a href="#tentang" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full 
                            shadow-lg transform hover:scale-105 transition-all 
                            flex items-center space-x-2 ">
            <span>Get Started</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 5v14m0 0l-5-5m5 5l5-5" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 
                    bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </section>
  );
};

export default DarkenedHeroSection;