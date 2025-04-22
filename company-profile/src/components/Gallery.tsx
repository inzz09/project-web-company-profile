// Komponen utama galeri
const Gallery = () => {
  const images = [
    "/images/services/s1.jpg",      // kiri atas besar
    "/images/services/g2.jpg",     // kanan atas kecil kiri
    "/images/services/j.png",       // kanan atas kecil kanan
    "/images/services/ig1.jpg",      // kiri bawah besar
    "/images/services/h1.jpg",      // kanan bawah kecil kiri
    "/images/services/g9.jpg",     // kanan bawah kecil kanan
  ];

  return (
    <section id="galeri" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-red-600 mb-4">Galeri Kami</h2>
          <div className="border-b-4 border-black-600 w-28 mx-auto"></div>
        </div>

        {/* Baris 1 */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Kiri: Gambar besar */}
          <GalleryCard image={images[0]} title="Foto 1" desc="Deskripsi singkat foto ini." />

          {/* Kanan: Dua gambar kecil horizontal */}
          <div className="flex gap-6">
            <GalleryCard image={images[1]} title="Foto 2" desc="Deskripsi singkat foto ini." />
            <GalleryCard image={images[2]} title="Foto 3" desc="Deskripsi singkat foto ini." />
          </div>
        </div>

        {/* Baris 2 */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Kiri: Gambar besar */}
          <GalleryCard image={images[3]} title="Foto 4" desc="Deskripsi singkat foto ini." />

          {/* Kanan: Dua gambar kecil horizontal */}
          <div className="flex gap-6">
            <GalleryCard image={images[4]} title="Foto 5" desc="Deskripsi singkat foto ini." />
            <GalleryCard image={images[5]} title="Foto 6" desc="Deskripsi singkat foto ini." />
          </div>
        </div>
      </div>
    </section>
  );
};

// Komponen reusable kartu galeri
interface GalleryCardProps {
  image: string;
  title: string;
  desc: string;
}

const GalleryCard = ({ image, title, desc }: GalleryCardProps) => (
  <div className="group relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg w-full">
    {/* Overlay saat hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
      <div className="text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{desc}</p>
      </div>
    </div>

    {/* Gambar */}
    <img
      src={image}
      alt={title}
      loading="lazy"
      decoding="async"
      onError={(e) => (e.currentTarget.src = "/images/fallback.jpg")}
      className="w-full h-[260px] object-cover object-center transform transition-transform group-hover:scale-105"
    />
  </div>
);

export default Gallery;
export { GalleryCard };
export type { GalleryCardProps };
