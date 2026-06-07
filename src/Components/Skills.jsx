import { motion } from "framer-motion"

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-[#0B0F1A] overflow-hidden"
    >
      {/* subtle glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.06),transparent_60%)]"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mb-16"
>
  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
    Technical <span className="text-[#22D3EE]">Expertise</span>
  </h2>

  <div className="mt-4 h-[2px] w-28 bg-gradient-to-r from-[#22D3EE] to-[#06B6D4]"></div>
</motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* FRONTEND */}
          <SkillCard
            title="Frontend Engineering"
            accent="text-[#22D3EE]"
            border="hover:border-[#22D3EE]/40"
            skills={[
              "React.js (Hooks, Context API, Component Architecture)",
              "Next.js (SSR, Routing, Performance Optimization)",
              "Tailwind CSS, Responsive UI Systems",
              "Framer Motion & Interactive UI Effects",
              "State Management (Redux, Context)",
              "Performance Optimization & Lazy Loading",
              "Clean UI Architecture & Reusable Components"
            ]}
          />

          {/* BACKEND */}
          <SkillCard
            title="Backend Engineering"
            accent="text-[#06B6D4]"
            border="hover:border-[#06B6D4]/40"
            skills={[
              "Node.js & Express.js",
              "RESTful API Design & Development",
              "Authentication (JWT, OAuth, Role-based access)",
              "Middleware & Modular Architecture",
              "API Performance Optimization",
              "Error Handling & Production Debugging",
              "Microservice-ready System Design"
            ]}
          />

          {/* DATABASE & DEVOPS */}
          <SkillCard
            title="Database & DevOps"
            accent="text-[#38BDF8]"
            border="hover:border-[#38BDF8]/40"
            skills={[
              "MongoDB (Schema Design, Indexing, Optimization)",
              "Mongoose ORM",
              "SQL Fundamentals (MySQL)",
              "Deployment (Vercel, Netlify, Render)",
              "Git & GitHub Version Control",
              "Environment Configuration & Production Builds",
              "Basic CI/CD Concepts"
            ]}
          />

          {/* AI & INTELLIGENT SYSTEMS */}
          <SkillCard
            title="AI & Intelligent Systems"
            accent="text-[#0EA5E9]"
            border="hover:border-[#0EA5E9]/40"
            skills={[
              "OpenAI API Integration",
              "Prompt Engineering for AI Systems",
              "AI-assisted Web Features (Chatbots, Automation)",
              "Natural Language Processing Basics",
              "AI-powered UX Enhancements",
              "Understanding of ML Concepts & Data Flow",
              "Building AI-integrated Web Applications"
            ]}
          />

        </div>
      </div>
    </section>
  )
}

/* Reusable Skill Card */
function SkillCard({ title, skills, accent, border }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-slate-800 transition-all duration-500 ${border}`}
    >
      <h3 className={`text-xl font-semibold mb-6 ${accent}`}>
        {title}
      </h3>

      <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="relative pl-5 before:absolute before:left-0 before:top-[7px] before:w-2 before:h-2 before:bg-[#22D3EE] before:rounded-full before:opacity-70"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Skills