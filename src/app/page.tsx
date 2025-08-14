"use client";

import Spline from '@splinetool/react-spline/next';
import { TextGenerateEffectDemo } from "../app/components/generatetext";
import ProfileCard from '../app/components/ui/ProfileCard/ProfileCard';
import { GlowingEffectDemoSecond } from '../app/components/GlowingEffectDemo';
import { MyProjects } from '../app/components/ui/myproject';
import Footer from '../app/components/ui/footer/footer';

// Carousel import
import Carousel, { CarouselItem } from "../app/components/ui/cardskill/CardSkill";
import { FiCode, FiCpu, FiTool } from "react-icons/fi";

export default function Home() {
  const frameworks: CarouselItem[] = [
    { id: 1, title: "Next.js", description: "React framework for production", icon: <FiCode /> },
    { id: 2, title: "React", description: "UI library for building interfaces", icon: <FiCode /> },
    { id: 3, title: "Laravel", description: "PHP web framework", icon: <FiCode /> },
    { id: 4, title: "Flask", description: "Lightweight Python web framework", icon: <FiCode /> },
    { id: 5, title: "Tailwind", description: "Frontend toolkit", icon: <FiCode /> }
  ];

  const programmingLanguages: CarouselItem[] = [
    { id: 1, title: "JavaScript", description: "Frontend & backend scripting", icon: <FiCpu /> },
    { id: 2, title: "PHP", description: "Server-side scripting", icon: <FiCpu /> },
    { id: 3, title: "Python", description: "AI, ML, and automation", icon: <FiCpu /> },
    { id: 4, title: "Dart", description: "Language for Flutter", icon: <FiCpu /> },
    { id: 5, title: "C++", description: "Embedded systems & Arduino", icon: <FiCpu /> },
    { id: 6, title: "C#", description: ".NET and game dev", icon: <FiCpu /> },
    { id: 7, title: "Java", description: "Cross-platform applications", icon: <FiCpu /> }
  ];

  const tools: CarouselItem[] = [
    { id: 1, title: "Git", description: "Version control system", icon: <FiTool /> },
    { id: 2, title: "VS Code", description: "Code editor", icon: <FiTool /> },
    { id: 3, title: "MySQL", description: "Database management", icon: <FiTool /> },
    { id: 4, title: "Postman", description: "API testing tool", icon: <FiTool /> },
    { id: 5, title: "Figma", description: "UI/UX design tool", icon: <FiTool /> }
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <div id="home" className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/InB6U5yjrd85QfWm/scene.splinecode" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white text-center pointer-events-none">
          <h1 className="text-4xl font-bold mb-4">Hi, Welcome to my portfolio</h1>
          <p className="text-lg">Please scroll for more</p>
        </div>
        <div className="absolute bottom-4 right-4 w-30 h-10 bg-[#E0E0E0] rounded-md  z-20">
    <h1 className='text-[#E0E0E0]'>asdasdadwadsadwasdwaawd</h1>
  </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="w-full h-screen overflow-x-hidden bg-[#0D0D0D] text-white flex items-center justify-center px-12">
        <div className="flex md:flex-row items-center relative">
          <div className="relative flex items-center">
            <div className="w-1/2">
              <TextGenerateEffectDemo />
            </div>
            <div className="absolute left-full ml-[-28rem]">
              <ProfileCard
                avatarUrl="/pasfotonobg.png"
                iconUrl="/iconcodeprofile.png"
                className="m-0 p-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div id="skills" className="flex flex-col justify-center items-center px-20 py-12 bg-[#0D0D0D] text-white">
        <h2 className="text-3xl font-bold mb-10">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-8 w-full">
          <div className="flex flex-col items-center bg-[#111] rounded-xl p-4 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
            <div style={{ height: "350px", width: "300px" }}>
              <Carousel items={frameworks} baseWidth={280} autoplay autoplayDelay={3000} pauseOnHover loop={true} />
            </div>
          </div>
          <div className="flex flex-col items-center bg-[#111] rounded-xl p-4 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
            <div style={{ height: "350px", width: "300px" }}>
              <Carousel items={programmingLanguages} baseWidth={280} autoplay autoplayDelay={3000} pauseOnHover loop={true} />
            </div>
          </div>
          <div className="flex flex-col items-center bg-[#111] rounded-xl p-4 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <div style={{ height: "350px", width: "300px" }}>
              <Carousel items={tools} baseWidth={280} autoplay autoplayDelay={3000} pauseOnHover loop={true} />
            </div>
          </div>
        </div>
      </div>

      {/* EXTRA SECTION */}
      <div className='w-full h-screen bg-[#111] text-white'>
        <GlowingEffectDemoSecond />
      </div>

      {/* PROJECTS SECTION */}
      <div id="projects" className='bg-[#111]'>
        <MyProjects />
      </div>

      {/* CONTACT SECTION */}
      <div id="contact" className="bg-[#0D0D0D] text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-400">Feel free to reach out through any of the platforms below.</p>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
