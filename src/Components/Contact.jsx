import React, { useRef } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Contact = () => {
  const formRef = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  const form = formRef.current;

  const name = form.from_name.value.trim();
  const email = form.from_email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  emailjs
    .sendForm(
        "service_dhynegl",
        "template_d4kb0gm",
        formRef.current,
        "bTkuRD6ZcbG8zfQ69"
      )
    .then(
      () => {
        alert("Message sent successfully!");
        form.reset();
      },
      (error) => {
        console.error(error);
        alert("Failed to send message");
      }
    );
};

const particlesInit = async (engine) => {
  await loadSlim(engine);
};

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#0B0F1A] text-white overflow-hidden"
    >
      <Toaster position="top-right" />

      {/* ===== Animated Particles Background ===== */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0B0F1A" },
          particles: {
            number: { value: 45 },
            size: { value: 2 },
            move: { speed: 1 },
            opacity: { value: 0.4 },
            color: { value: "#06b6d4" },
            links: {
              enable: true,
              color: "#06b6d4",
              distance: 150,
              opacity: 0.2,
            },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* ===== TITLE ===== */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mb-16"
>
  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
    Contact <span className="text-[#22D3EE]">Me</span>
  </h2>

  <div className="mt-4 h-[2px] w-28 bg-gradient-to-r from-[#22D3EE] to-[#06B6D4]"></div>
</motion.div>

        {/* ===== GRID ===== */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-cyan-400">
              Let's Build Something Amazing 🚀
            </h3>

            <p className="text-slate-400 leading-relaxed">
              I’m open to freelance projects, collaborations, and exciting
              full-time opportunities. Feel free to reach out — I usually reply
              within 24 hours.
            </p>

            <div className="space-y-6 text-slate-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                  📞
                </div>
                <span>+91 8080363716</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                  📧
                </div>
                <a
                  href="mailto:sonalikhose600@gmail.com"
                  className="hover:text-cyan-400 transition"
                >
                  sonalikhose600@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                  📍
                </div>
                <span>Pune, Maharashtra</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                  💻
                </div>
                <a
                  href="https://github.com/SonaliKhose"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  GitHub 
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                  🔗
                </div>
                <a
                  href="https://linkedin.com/in/sonali-khose-981946245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE FORM ================= */}
          <motion.form
  ref={formRef}
  onSubmit={sendEmail}
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="bg-[#111827] p-10 rounded-3xl border border-cyan-500/20 shadow-2xl backdrop-blur-xl space-y-8"
>
  {/* Floating Name */}
  <div className="relative">
    <input
      type="text"
      name="from_name"   // ✅ MUST match template
      required
      className="peer w-full bg-transparent border-b border-slate-600 focus:border-cyan-400 outline-none py-3 placeholder-transparent"
      placeholder="Name"
    />
    <label className="absolute left-0 top-3 text-slate-400 text-sm transition-all 
      peer-focus:-top-3 peer-focus:text-xs peer-focus:text-cyan-400 
      peer-valid:-top-3 peer-valid:text-xs">
      Your Name
    </label>
  </div>

  {/* Floating Email */}
  <div className="relative">
    <input
      type="email"
      name="from_email"   // ✅ MUST match template
      required
      className="peer w-full bg-transparent border-b border-slate-600 focus:border-cyan-400 outline-none py-3 placeholder-transparent"
      placeholder="Email"
    />
    <label className="absolute left-0 top-3 text-slate-400 text-sm transition-all 
      peer-focus:-top-3 peer-focus:text-xs peer-focus:text-cyan-400 
      peer-valid:-top-3 peer-valid:text-xs">
      Your Email
    </label>
  </div>

  {/* Floating Message */}
  <div className="relative">
    <textarea
      name="message"   // ✅ this one is already correct
      required
      rows="4"
      className="peer w-full bg-transparent border-b border-slate-600 focus:border-cyan-400 outline-none py-3 placeholder-transparent resize-none"
      placeholder="Message"
    />
    <label className="absolute left-0 top-3 text-slate-400 text-sm transition-all 
      peer-focus:-top-3 peer-focus:text-xs peer-focus:text-cyan-400 
      peer-valid:-top-3 peer-valid:text-xs">
      Your Message
    </label>
  </div>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    type="submit"
    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold shadow-lg hover:shadow-cyan-500/40 transition-all"
  >
    Send Message 🚀
  </motion.button>
</motion.form>
        </div>

        {/* ===== Footer ===== */}
        <p className="text-center text-slate-500 mt-20 text-sm">
          © 2026 | Designed & Developed by Sonali Khose
        </p>
      </div>
    </section>
  );
};

export default Contact;