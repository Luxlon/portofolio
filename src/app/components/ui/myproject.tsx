import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "EcoHealth",
    img: "/ecohealth.png",
    desc: "Plant Disease Detection using Machine Learning.",
    link: "https://github.com/Luxlon/ECOHEALTH"
  },
  {
    title: "PKLot Detection",
    img: "/pklotdetection.png",
    desc: "Computer vision model for detecting parking lot occupancy using YOLO.",
    link: "https://github.com/Luxlon/PKLot-Detection"
  },
  {
    title: "DocRank (Temu Balik)",
    img: "/temubalik.png",
    desc: "Document retrieval system with optimized search relevance using NLP.",
    link: "https://github.com/Luxlon/datamining_aplikasi-temu-balik"
  },
  {
    title: "E-commerce Food Platform",
    img: "/Ecommers.png",
    desc: "Laravel-based food e-commerce platform with full CRUD admin dashboard.",
    link: "https://github.com/Syadda-Abdullah/Delicipad"
  },
  {
    title: "Expert System",
    img: "/expertsystem.png",
    desc: "Expert system prototype for decision support using rule-based logic.",
    link: "https://github.com/Luxlon/sispak_expertsystem_prototypt"
  },
  {
    title: "Fitness App",
    img: "/fitnessapp.png",
    desc: "Mobile app for tracking fitness goals and progress.",
    link: "https://github.com/Luxlon/FitnessAPP"
  },
  {
    title: "Abu Robot",
    img: "/robot.png",
    desc: "Harvest robot for efficient farming.",
    link: "https://github.com/Luxlon/AbuRobot-"
  },
  {
    title: "Aquadex",
    img: "/IOT.png",
    desc: "IoT-based water quality monitoring system.",
    link: "https://github.com/Luxlon/Aquadex"
  },
];

export function MyProjects() {
  return (
    <div className="bg-[#0D0D0D] text-white px-10 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            {/* Background Image */}
            <div
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.img})` }}
            ></div>

            {/* Content */}
            <div className="p-5 bg-[#111] flex flex-col justify-between h-48">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.desc}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <FaGithub size={20} /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
