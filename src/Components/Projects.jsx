import { motion } from "framer-motion"

const projects = [
  {
    title: "Safar – Car Booking Platform",
    description:
      "Full-stack ride booking system with authentication, dynamic listings and booking flow.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    live: "https://www.loom.com/share/356a71e3a4ea41aa98cb1454a88bb2c6?sid=62be1cc9-4d13-43f0-8748-010cef97f231",
    code: "https://github.com/SonaliKhose/SAFAR-AGENCY-Frontend",
  },
  {
    title: "Task Management System",
    description:
      "Workflow productivity app with REST API integration and secure user authentication.",
    tech: ["React.js", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    live: "https://www.loom.com/share/473c6247a5ef4c41a2f8ec6fbee94890?sid=7df17884-5d30-489e-a1ee-d4b0f2884527",
    code: "https://github.com/SonaliKhose/Task-Manager-PureSoft-Labs-Assignment",
  },
  {
    title: "Lifestyles.com",
    description:
      "Live production website built with performance optimization and responsive architecture.",
    tech: ["React.js", "API Integration", "Responsive UI"],
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    live: "https://sunny-macaron-712b25.netlify.app/",
    code: "https://github.com/SonaliKhose/jealous-increase-8161",
  },
  {
    title: "Naukari.com Clone",
    description:
      "Job listing platform with advanced search, filtering and scalable backend architecture.",
    tech: ["React.js", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    live: "https://clever-halva-980231.netlify.app/",
    code: "https://github.com/SonaliKhose/noukari.com_clone",
  },
  {
    title: "Fabbag.com Clone",
    description:
      "Developed a responsive e-commerce beauty subscription platform inspired by Fabbag, focusing on seamless product discovery, intuitive UI/UX, and optimized customer journey flow.",
    tech: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
    live: "https://sunny-macaron-712b25.netlify.app/",
    code: "https://github.com/SonaliKhose/Fabbag_Beauty_Brands",
  },
]

function Projects() {
  return (
     <section className="py-24 px-6 bg-[#0B1120]" 
     id='projects'
     >
      <div className="max-w-7xl mx-auto">

        {/* ===== SECTION HEADING (NOW PERFECTLY ALIGNED) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            My <span className="text-[#22D3EE]">Projects</span>
          </h2>

          <div className="mt-4 h-[2px] w-28 bg-gradient-to-r from-[#22D3EE] to-[#06B6D4]"></div>
        </motion.div>

        {/* ===== CARDS CENTERED ===== */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative w-[350px] bg-white/5 backdrop-blur-xl border border-cyan-400/10 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition duration-500"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs rounded-lg bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-semibold hover:scale-105 transition"
                    >
                      Live
                    </a>

                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
                    >
                      Code
                    </a>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects