const Portfolio = () => {
  const projects = [
    "/images/services/s.png",
    "/images/services/b.png",
    "/images/services/p.png",
    "/images/services/j.png",
  ];

  return (
    <section id="portofolio" className="py-5 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Portofolio Kami</h2>
          <div className="border-b-4 border-black-600 w-24 mx-auto"></div>
        </div>

        {/* Grid Proyek */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg 
              shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Gambar dengan Efek */}
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project}
                  alt={`Proyek ${index + 1}`}
                  className="w-full h-75 object-cover transform transition-all 
                  group-hover:scale-105 group-hover:brightness-90"
                  loading="lazy"
                />
              </div>

              {/* Overlay dengan Efek Hover */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"
              >
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
