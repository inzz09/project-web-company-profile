import { MapPinIcon, BriefcaseIcon } from "@heroicons/react/24/solid";

interface Career {
  id: number;
  title: string;
  location: string;
  type: string;
}

const Career = () => {
  const careers: Career[] = [
    { id: 1, title: "Operator Produksi", location: "Indramayu, Jawa Barat", type: "Pegawai Tetap" },
    { id: 2, title: "Tax Officer", location: "Gresik, Jawa Timur", type: "Pegawai Tetap" },
    { id: 3, title: "Accounting Officer", location: "Rembang, Jawa Tengah", type: "Pegawai Tetap" },
  ];

  return (
    <section id="karir" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Bergabung Dengan Kami</h2>
          <div className="border-b-4 border-black-600 w-24 mx-auto"></div>
        </div>

        {/* Career Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careers.map((career) => (
            <div
              key={career.id}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-shadow 
              transform hover:-translate-y-1 hover:scale-105 duration-300 relative overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 
                group-hover:opacity-50 transition-opacity duration-300"
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{career.title}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-200">
                    <MapPinIcon className="w-5 h-5 mr-2 text-red-600" />
                    <span>{career.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-200">
                    <BriefcaseIcon className="w-5 h-5 mr-2 text-red-600" />
                    <span>{career.type}</span>
                  </div>
                </div>

                {/* Button */}
                <a href="https://www.sig.id/lowongan-kerja"
                  className="w-full py-3 px-6 rounded-full text-white font-medium 
                  bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 
                  transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 block text-center"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;