import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#efeeee] to-[#fff2f2] text-gray-800 mt-15">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          {/* Kolom Kiri */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tentang Kami */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Tentang Kami
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                PT Semen Indonesia (Persero) Tbk, yang dikenal sebagai SIG,
                adalah perusahaan milik negara Indonesia yang bergerak di bidang
                penyediaan solusi bahan bangunan. Perusahaan ini memiliki 17
                anak perusahaan yang beroperasi di Indonesia dan Vietnam, dengan
                jangkauan pasar yang meliputi Asia, Australia, dan Oseania.
              </p>
            </div>

            {/* Kontak */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <MapPinIcon className="w-14 h-14 mr-2 text-gray-900"/>
                  <span className="">
                    Jl. DR. Ide Anak Agung Gde Agung No.01 Lt 18, Kuningan,
                    Kuningan Tim., Kecamatan Setiabudi, Kota Jakarta Selatan,
                    Daerah Khusus Ibukota Jakarta 12950
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <PhoneIcon className="w-5 h-5 mr-2 text-gray-900 " />
                  <span className="">+62 21 5261174-5</span>
                </div>
                <div className="flex items-center text-gray-700 ">
                  <EnvelopeIcon className="w-5 h-5 mr-2 text-gray-900 " />
                  <span className="">info@sig.id</span>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Peta */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Lokasi Kami</h3>
            <div className="rounded-lg overflow-hidden shadow-lg relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030725.562444297!2d104.51774597167969!3d-6.229299114609261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4926b6b59%3A0x5a83c96660a58540!2sPT.%20Semen%20Indonesia%20Tbk!5e0!3m2!1sid!2sid!4v1741670165148!5m2!1sid!2sid"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-300 pt-6 text-center text-xs text-gray-600">
          <p>SIG © Copyright 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;