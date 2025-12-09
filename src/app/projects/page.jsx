"use client";

const projects = [
  {
    title: "Custom Sliding Gate Fabrication",
    image: "/projects/gate1.jpg",
    location: "Johannesburg",
    category: "Welding",
    description:
      "A fully welded steel sliding gate with a clean modern design and powder-coated finish.",
  },
  {
    title: "Solar Gate Motor Installation",
    image: "/projects/solar_gate.jpg",
    location: "Pretoria",
    category: "Gate Motor",
    description:
      "Installed a high-efficiency solar gate motor system for reliable off-grid gate automation.",
  },
  {
    title: "Electric Fence Installation",
    image: "/projects/electric_fence.jpg",
    location: "Rustenburg",
    category: "Electric Fence",
    description:
      "Full perimeter electric fencing installation for improved residential security.",
  },
  {
    title: "Burglar Proofing & Security Bars",
    image: "/projects/burglarproof.jpg",
    location: "Soweto",
    category: "Welding",
    description:
      "Custom burglar bars and security gates delivered with strong, durable steel work.",
  },
  {
    title: "Gate Motor Repair & Setup",
    image: "/projects/gate_motor_repair.jpg",
    location: "Midrand",
    category: "Gate Motor",
    description:
      "Repaired and reprogrammed an electric sliding gate motor for optimal performance.",
  },
  {
    title: "Steel Carport Welding Project",
    image: "/projects/carport.jpg",
    location: "Nelspruit",
    category: "Welding",
    description:
      "A durable steel carport structure welded and installed for long-lasting protection.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-16 relative overflow-hidden">

      {/* Background abstract shapes */}
      <div className="absolute top-0 left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
            Our Projects
          </h1>
          <p className="text-blue-700 mt-4 text-lg">
            A showcase of our recent installations, repairs, and custom welding work.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden hover:shadow-2xl transition-all"
            >
              {/* Project Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm text-blue-700">{project.location}</span>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-blue-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CALL TO ACTION */}
        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Want to start a project with us?
          </h2>
          <p className="text-blue-700 mb-6">
            Contact our team today for a free quote and professional advice.
          </p>

          <a
            href="/quote"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-md transition-all"
          >
            Get a Free Quote
          </a>
        </div>

      </div>
    </div>
  );
}
