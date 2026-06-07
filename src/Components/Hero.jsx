import { motion } from "framer-motion";
import profile from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 md:pt-28 overflow-hidden bg-[#0A0D14]"
     id='home'
    >

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08)_0,transparent_70%)]"></div>

      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-[#22D3EE]/15 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-[#60A5FA]/15 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl grid md:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >

          <span className="inline-block mb-5 px-4 py-1 text-[11px] tracking-widest bg-white/5 text-[#22D3EE] border border-[#22D3EE]/20 rounded-full">
            2+ Years • Full Stack Developer
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] text-[#E5E7EB] tracking-tight">
            Engineering
            <br />
            <span className="bg-gradient-to-r from-[#22D3EE] to-[#60A5FA] bg-clip-text text-transparent">
              Scalable & Future-Ready
            </span>
            <br />
            Digital Systems
          </h1>

          <p className="mt-6 text-[#94A3B8] text-base md:text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
            I build high-performance, scalable web applications using modern
            technologies like MERN and clean architecture principles.
            Focused on performance, usability, and real-world impact.
          </p>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#60A5FA] blur-2xl opacity-40 animate-pulse"></div>

            <img
              src={profile}
              alt="Profile"
              className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/10 shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5">

            <a
              href="#contact"
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#22D3EE] to-[#60A5FA] text-black font-semibold hover:scale-105 transition text-center"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              className="px-7 py-3 rounded-xl border border-[#22D3EE] text-[#22D3EE] hover:bg-[#22D3EE] hover:text-black transition text-center"
            >
              Resume
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;