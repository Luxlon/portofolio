"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  // Fungsi untuk scroll ke ID tertentu
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0D0D0D] text-white py-10 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Profil */}
        <div>
          <h2 className="text-2xl font-bold">Paris Achmad Fauzan</h2>
          <p className="text-gray-400 mt-2">
            Fullstack Developer | Creating scalable and innovative digital solutions.
          </p>
        </div>

        {/* Navigasi */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-lg font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <button onClick={() => scrollToSection("home")} className="hover:text-white">Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("skills")} className="hover:text-white">Skills</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")} className="hover:text-white">My Projects</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="hover:text-white">Contact</button>
            </li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex flex-wrap gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/Luxlon"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <FaGithub size={20} />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/paris-achmad-fauzan/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <FaLinkedin size={20} />
            </a>
            {/* Email */}
            <a
              href="mailto:parisafauzan@gmail.com"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <FaEnvelope size={20} />
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/6282295849260"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <FaWhatsapp size={20} />
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/parisafauzan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <FaInstagram size={20} />
            </a>
            
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Paris Achmad Fauzan. All rights reserved.
      </div>
    </footer>
  );
}
