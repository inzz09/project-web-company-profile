const Partners = () => {
  const partners = [
    "/images/services/mm.png",
    "/images/services/m2.png",
    "/images/services/m3.png",
    "/images/services/m4.png",
  ];
  return (
    <section id="mitra" className="py-20 bg-gray-50">
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-red-600 mb-4">Mitra Kami</h2>
          <div className="border-b-4 border-black-600 w-28 mx-auto"></div>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center bg-white rounded-3xl 
              overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
            >
              {/* Logo */}
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="w-48 h-auto object-contain z-10 
                transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Partners;