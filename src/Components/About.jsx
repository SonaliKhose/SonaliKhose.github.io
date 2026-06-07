import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-[#0F1422] overflow-hidden"
    >

      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.06),transparent_60%)]"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mb-16"
>
  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
    About <span className="text-[#22D3EE]">Me</span>
  </h2>

  <div className="mt-4 h-[2px] w-28 bg-gradient-to-r from-[#22D3EE] to-[#06B6D4]"></div>
</motion.div>


        {/* Glass Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-14 p-10 rounded-2xl border border-[#1F2937] bg-white/5 backdrop-blur-xl relative"
        >

          {/* Glowing Border Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#22D3EE]/10 to-[#60A5FA]/10 blur-xl -z-10"></div>

          {/* Main Description */}
          <p className="text-[#94A3B8] leading-relaxed text-lg max-w-4xl">
            I am a Full Stack Software Engineer with over 2+ years of
            professional experience designing and building scalable,
            high-performance digital systems. My work focuses on writing
            maintainable code, designing clean architectures, and delivering
            real-world solutions that balance performance, usability, and
            long-term scalability.
          </p>

          <p className="mt-6 text-[#94A3B8] leading-relaxed text-lg max-w-4xl">
            I specialize in the MERN stack, developing dynamic frontend
            interfaces using React.js while building robust backend systems
            with Node.js and Express. I have hands-on experience in designing
            RESTful APIs, optimizing database queries in MongoDB, implementing
            authentication flows, and deploying production-ready applications.
          </p>

          <p className="mt-6 text-[#94A3B8] leading-relaxed text-lg max-w-4xl">
            Beyond writing code, I focus deeply on system thinking —
            understanding data flow, performance bottlenecks, security layers,
            and scalability planning. I believe strong engineering is not just
            about building features, but about building systems that evolve.
          </p>

          {/* Capability Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">

            <div className="p-6 rounded-xl bg-[#0A0D14] border border-[#1F2937] hover:border-[#22D3EE]/40 transition duration-500">
              <h3 className="text-[#22D3EE] font-semibold text-lg mb-3">
                Frontend Engineering
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Building responsive and performance-driven UI using React,
                Tailwind CSS, component architecture, state management,
                reusable design systems, and modern UX practices.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0A0D14] border border-[#1F2937] hover:border-[#60A5FA]/40 transition duration-500">
              <h3 className="text-[#60A5FA] font-semibold text-lg mb-3">
                Backend & API Systems
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Designing secure REST APIs, authentication flows,
                role-based access systems, database schema planning,
                server optimization, and scalable backend architecture.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0A0D14] border border-[#1F2937] hover:border-[#22D3EE]/40 transition duration-500">
              <h3 className="text-[#22D3EE] font-semibold text-lg mb-3">
                Architecture & Performance
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Applying clean code principles, modular structure,
                performance tuning, API response optimization,
                lazy loading strategies, and production readiness practices.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0A0D14] border border-[#1F2937] hover:border-[#60A5FA]/40 transition duration-500">
              <h3 className="text-[#60A5FA] font-semibold text-lg mb-3">
                Professional Experience
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                2+ years delivering client-focused solutions, collaborating
                with cross-functional teams, handling real-world deployment
                challenges, debugging production issues, and continuously
                improving system quality.
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default About