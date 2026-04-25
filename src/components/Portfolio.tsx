import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    type: "technical",
    category: "Technical Frameworks & Solutions",
    description: "Analytics dashboard with real-time insights.",
    image:
        "https://kommodo.ai/i/TWosC1GH4tfWyrHbbvTT",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Travel Booking App",
    type: "technical",
    category: "Technical Frameworks & Solutions",
    description: "Mobile-first booking platform.",
    image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
    tags: ["React Native", "Node"],
  },
  {
    id: 3,
    title: "Brand Identity",
    type: "creative",
    category: "Creative Design & Branding",
    description: "Luxury branding system design.",
    image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    tags: ["Figma", "Branding"],
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects =
      filter === "all"
          ? projects
          : projects.filter((p) => p.type === filter);

  return (
      // ✅ FIXED: Added ID + scroll offset
      <section
          id="portfolio"
          className="py-24 bg-[#0a0a1a] text-white scroll-mt-24"
      >
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-slate-400 mt-2">
            Explore categorized work across tech & design
          </p>
        </div>

        {/* FILTER */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {[
            { label: "All", value: "all" },
            { label: "Technical", value: "technical" },
            { label: "Creative", value: "creative" },
          ].map((cat) => (
              <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-5 py-2 rounded-full text-sm transition ${
                      filter === cat.value
                          ? "bg-purple-500 text-white"
                          : "bg-white/5 text-slate-400 hover:bg-white/10"
                  }`}
              >
                {cat.label}
              </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
              <div
                  key={project.id}
                  className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-500"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                    <button
                        onClick={() => setSelectedProject(project)}
                        className="px-5 py-2 bg-purple-500 rounded-full text-sm hover:bg-purple-600"
                    >
                      View Project
                    </button>

                    <button className="px-5 py-2 bg-white/10 border border-white/20 rounded-full text-sm hover:bg-white/20">
                      Live Demo
                    </button>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <p className="text-xs text-purple-400 uppercase mb-1">
                    {project.category}
                  </p>

                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {project.description}
                  </p>

                  <div className="flex gap-2 flex-wrap mt-3">
                    {project.tags.map((tag: string, i: number) => (
                        <span
                            key={i}
                            className="text-xs px-2 py-1 bg-purple-500/10 text-purple-300 rounded-full"
                        >
                    {tag}
                  </span>
                    ))}
                  </div>
                </div>
              </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProject && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50 p-4">
              <div className="bg-[#12122a] rounded-2xl max-w-2xl w-full overflow-hidden relative">
                {/* CLOSE BUTTON */}
                <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/10 w-10 h-10 rounded-full hover:bg-white/20"
                >
                  ✕
                </button>

                {/* ✅ PERFECT 16:9 IMAGE */}
                <div className="w-full aspect-video overflow-hidden">
                  <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
              <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                {selectedProject.category}
              </span>

                  <h2 className="text-2xl font-bold mt-3">
                    {selectedProject.title}
                  </h2>

                  <p className="text-slate-400 mt-3">
                    {selectedProject.description}
                  </p>

                  <div className="flex gap-2 flex-wrap mt-4">
                    {selectedProject.tags.map((tag: string, i: number) => (
                        <span
                            key={i}
                            className="text-xs px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full"
                        >
                    {tag}
                  </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button className="px-5 py-2 bg-purple-500 rounded-full hover:bg-purple-600">
                      Live Demo
                    </button>

                    <button className="px-5 py-2 border border-white/20 rounded-full hover:bg-white/10">
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            </div>
        )}
      </section>
  );
};

export default Portfolio;