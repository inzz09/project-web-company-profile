interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const Team = () => {
  const team: TeamMember[] = [
    { id: 1, name: "Dony Arsal", position: "Direktur Utama", image: "/images/services/pa1.png" },
    { id: 2, name: "Reni Wulandari", position: "Direktur Operasi", image: "/images/services/bu1.png" },
    { id: 3, name: "Yosviandri", position: "Direktur Supply Chain", image: "/images/services/pa2.png" },
    { id: 4, name: "Budi Waseso", position: "Komisaris Utama merangkap Komisaris Independen", image: "/images/services/Kom1.png" },
    { id: 5, name: "Sony Subrata", position: "Komisaris", image: "/images/services/Kom2.png" },
    { id: 6, name: "Yustinus Prastowo", position: "Komisaris", image: "/images/services/Kom3.png" },
  ];

  return (
    <section id="tim" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Tim Kami</h2>
          <div className="border-b-4 border-black-600 w-24 mx-auto"></div>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow 
              duration-300 text-center overflow-hidden"
            >
              {/* Image with Hover Effect */}
              <div className="relative group mb-6 overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-120 object-cover transform transition-transform 
                  group-hover:scale-105"/>
              </div>
              {/* Name and Position */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;