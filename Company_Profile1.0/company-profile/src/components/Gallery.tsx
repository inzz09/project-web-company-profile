// Komponen utama galeri
const Gallery = () => {
  const images = [
    "/images/services/s1.jpg",
    "/images/services/g2.jpg",
    "/images/services/j.png",
    "/images/services/ig1.jpg",
    "/images/services/h1.jpg",
    "/images/services/g9.jpg",
  ];

  return (
    <section id="galeri" className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-2">Galeri Kami</h2>
          <div className="border-b-4 border-black-600 w-20 mx-auto"></div>
        </div>

        {/* Grid Galeri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <GalleryCard key={idx} image={img} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Komponen kartu galeri tanpa overlay
interface GalleryCardProps {
  image: string;
}

const GalleryCard = ({ image }: GalleryCardProps) => (
  <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition duration-300">
    <img
      src={image}
      alt="Gallery Image"
      loading="lazy"
      decoding="async"
      onError={(e) => (e.currentTarget.src = "/images/fallback.jpg")}
      className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
    />
  </div>
);

export default Gallery;
export { GalleryCard };
export type { GalleryCardProps };
