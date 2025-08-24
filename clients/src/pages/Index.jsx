import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LightRays from '../components/LightRays';
import { FaGlobe, FaShieldAlt, FaUsers, FaCalendarAlt, FaRobot, FaBrain, FaGraduationCap, FaTrophy, FaMapMarkerAlt } from 'react-icons/fa';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Sample data for dynamic content
  const [buzzItems, setBuzzItems] = useState([
    {
      id: 1,
      title: "AAIRO Wins National Robotics Competition",
      excerpt: "Our team secured first place in the national robotics championship held in Bangalore.",
      date: "May 15, 2025",
      tag: "Achievement"
    },
    {
      id: 2,
      title: "New AI Workshop Series Announced",
      excerpt: "Starting next month, we'll host a 6-part workshop on machine learning fundamentals.",
      date: "May 10, 2025",
      tag: "Event"
    },
    {
      id: 3,
      title: "Collaboration with IEEE RAS",
      excerpt: "We're proud to announce our official partnership with IEEE Robotics and Automation Society.",
      date: "May 5, 2025",
      tag: "Partnership"
    }
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      img: "/robo arm.png",
      title: "Autonomous Delivery Robo Arm",
      description: "A self-navigating robot designed for last-mile delivery in urban environments.",
      technologies: ["ROS", "Python", "IOT"]
    },
    {
      id: 2,
      img: "/b.jpg",
      title: "Scrap Plastic Recycling Machine",
      description: "Machine that recycle plastic materials.",
      technologies: ["IoT"]
    },
    {
      id: 3,
      img: "/face_recognization_banner.png",
      title: "Face Detection Attandance System",
      description: "System that Marks Attandance automatically",
      technologies: ["Arduino", "Python", "Computer Vision", , "MediaPipe"]
    }
  ]);

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Robotics Bootcamp",
      date: "2025-06-10",
      location: "ADGIPS Campus",
      description: "3-day intensive workshop on robotics fundamentals"
    },
    {
      id: 2,
      title: "AI Hackathon",
      date: "2025-07-15",
      location: "Online",
      description: "24-hour coding competition with cash prizes"
    },
    {
      id: 3,
      title: "Guest Lecture: Ethics in AI",
      date: "2025-08-05",
      location: "ADGIPS Auditorium",
      description: "Dr. Smith from MIT will discuss ethical AI development"
    }
  ]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
   {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-[#0a0e1a] overflow-hidden pt-20">
        {/* Background for all screens */}
        <div className="absolute inset-0 z-0 bg-black"></div>

        {/* 3D Model Container - Only visible on large screens */}
        <div className="absolute inset-y-0 left-0 right-0 opacity-80 z-0 lg:left-auto lg:right-0 lg:w-1/2 xl:w-3/5 hidden lg:block">
          <spline-viewer
            url="https://prod.spline.design/N5qT8XCa4ypqhgCx/scene.splinecode"
            loading="eager"
            class="w-full h-full"
          ></spline-viewer>
        </div>

        {/* LightRays Container - Only visible on mobile/tablet */}
        <div className="lg:hidden absolute inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={2}
            lightSpread={3}
            rayLength={30}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.08}
            className="w-full h-full"
          />
        </div>

        {/* Content container with responsive positioning */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left max-w-4xl lg:max-w-2xl xl:max-w-3xl mx-auto lg:mx-0 py-8 lg:pr-10 xl:pr-0">
            <div className="mb-4 lg:mb-6 pb-6 lg:pb-10">
              <h1 className="text-lg sm:text-xl font-semibold text-[#94a3b8] mb-1 tracking-wider uppercase">AAIRO</h1>
              <h1 className="text-lg sm:text-xl font-semibold text-[#94a3b8] mb-2 tracking-wider uppercase">Robotics & AI Society</h1>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 lg:mb-8 leading-tight bg-gradient-to-r from-white to-[#cbd5e1] bg-clip-text text-transparent">
              Inspiring the Future with<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent bg-[length:200%_200%] animate-[gradient-shift_6s_ease_infinite]">
                Artificial Intelligence & Robotics
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#cbd5e1] mb-8 lg:mb-12 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              AAIRO is a student-driven society at Dr. Akhilesh Das Gupta Institute Of Professional Studies in Delhi dedicated to advancing knowledge and innovation in robotics and AI. We provide a platform for workshops, competitions, research, and hands-on learning.
            </p>

            <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start flex-wrap">
              <Link
                to="/membership"
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300 relative overflow-hidden z-10 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white shadow-lg shadow-[rgba(59,130,246,0.3)] hover:-translate-y-1 hover:shadow-xl hover:shadow-[rgba(59,130,246,0.4)] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-white/10 before:transition-all before:duration-300 before:ease-in before:z-[-1] hover:before:w-full text-sm sm:text-base"
              >
                Join Us
              </Link>

              {/* Additional CTA for mobile */}
              <Link
                to="/about"
                className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300 border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white text-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className='absolute z-10 w-24 h-8 sm:w-38 sm:h-10 bg-black rounded-full right-4 bottom-4 lg:right-4 lg:bottom-5'></div>
      </section>


      {/* Overview Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0e1a] to-[#1e293b] relative overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_70%)] animate-[rotate_60s_linear_infinite] z-0"></div>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-[#f1f5f9] relative z-10">AAIRO Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 relative z-10">
            <div
              onClick={() => window.location.href = '#about'}
              className="bg-[rgba(30,41,59,0.5)] border border-[rgba(59,130,246,0.2)] rounded-2xl p-8 text-center cursor-pointer transition-all duration-400 backdrop-blur-md relative overflow-hidden hover:-translate-y-2 hover:scale-102 hover:border-[#3b82f6] hover:shadow-lg hover:shadow-[rgba(59,130,246,0.2)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-[rgba(59,130,246,0.1)] before:to-transparent before:-translate-x-full before:transition-all before:duration-600 before:ease-in-out hover:before:translate-x-full"
            >
              <div className="w-18 h-18 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl shadow-lg shadow-[rgba(59,130,246,0.3)] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <FaGlobe />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#f1f5f9]">About Us</h3>
              <p className="text-[#94a3b8] leading-relaxed">Learn about our mission, vision, and the impact we're making in AI and robotics</p>
            </div>
            <div
              onClick={() => window.location.href = '#accreditations'}
              className="bg-[rgba(30,41,59,0.5)] border border-[rgba(59,130,246,0.2)] rounded-2xl p-8 text-center cursor-pointer transition-all duration-400 backdrop-blur-md relative overflow-hidden hover:-translate-y-2 hover:scale-102 hover:border-[#3b82f6] hover:shadow-lg hover:shadow-[rgba(59,130,246,0.2)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-[rgba(59,130,246,0.1)] before:to-transparent before:-translate-x-full before:transition-all before:duration-600 before:ease-in-out hover:before:translate-x-full"
            >
              <div className="w-18 h-18 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl shadow-lg shadow-[rgba(59,130,246,0.3)] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <FaShieldAlt />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#f1f5f9]">Accreditations</h3>
              <p className="text-[#94a3b8] leading-relaxed">Our certifications, partnerships, and recognition in the academic community</p>
            </div>
            <div
              onClick={() => window.location.href = '#membership'}
              className="bg-[rgba(30,41,59,0.5)] border border-[rgba(59,130,246,0.2)] rounded-2xl p-8 text-center cursor-pointer transition-all duration-400 backdrop-blur-md relative overflow-hidden hover:-translate-y-2 hover:scale-102 hover:border-[#3b82f6] hover:shadow-lg hover:shadow-[rgba(59,130,246,0.2)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-[rgba(59,130,246,0.1)] before:to-transparent before:-translate-x-full before:transition-all before:duration-600 before:ease-in-out hover:before:translate-x-full"
            >
              <div className="w-18 h-18 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl shadow-lg shadow-[rgba(59,130,246,0.3)] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <FaUsers />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#f1f5f9]">Membership</h3>
              <p className="text-[#94a3b8] leading-relaxed">Join our community of innovators and gain access to exclusive resources</p>
            </div>
            <div
              onClick={() => window.location.href = '#calendar'}
              className="bg-[rgba(30,41,59,0.5)] border border-[rgba(59,130,246,0.2)] rounded-2xl p-8 text-center cursor-pointer transition-all duration-400 backdrop-blur-md relative overflow-hidden hover:-translate-y-2 hover:scale-102 hover:border-[#3b82f6] hover:shadow-lg hover:shadow-[rgba(59,130,246,0.2)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-[rgba(59,130,246,0.1)] before:to-transparent before:-translate-x-full before:transition-all before:duration-600 before:ease-in-out hover:before:translate-x-full"
            >
              <div className="w-18 h-18 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl shadow-lg shadow-[rgba(59,130,246,0.3)] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <FaCalendarAlt />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#f1f5f9]">Calendar</h3>
              <p className="text-[#94a3b8] leading-relaxed">Stay updated with upcoming events, workshops, and competitions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Buzz Section */}
      <section className="py-24 bg-[#0a0e1a] relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(59,130,246,0.5)] to-transparent"></div>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent uppercase tracking-wider">LATEST BUZZ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {buzzItems.map(item => (
              <div key={item.id} className="bg-[rgba(30,41,59,0.3)] border border-[rgba(59,130,246,0.2)] rounded-2xl p-6 transition-all duration-400 relative overflow-hidden hover:bg-[rgba(59,130,246,0.1)] hover:-translate-y-1 hover:shadow-lg hover:shadow-[rgba(59,130,246,0.2)] before:absolute before:top-0 before:left-0 before:w-1 before:h-0 before:bg-gradient-to-b from-[#3b82f6] to-[#8b5cf6] before:transition-all before:duration-400 hover:before:h-full">
                <span className="text-[#3b82f6] text-sm font-semibold mb-3 flex items-center gap-2">
                  <span className="text-xs">🗓</span> {item.date}
                </span>
                <h3 className="text-xl font-bold mb-4 text-[#f1f5f9] leading-snug">{item.title}</h3>
                <p className="text-[#94a3b8] mb-5 leading-relaxed">{item.excerpt}</p>
                <span className="inline-block bg-[rgba(59,130,246,0.2)] text-[#3b82f6] px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-[#1e293b] to-[#0a0e1a]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-[#f1f5f9]">About AAIRO</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="text-[#cbd5e1]">
              <h3 className="text-2xl text-[#3b82f6] mt-8 mb-4 inline-block relative after:absolute after:-bottom-1 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-[#3b82f6] after:to-[#8b5cf6] after:rounded">
                Vision
              </h3>
              <p className="mb-6 leading-relaxed">
                To become a leading student-driven hub that fosters innovation, research, and ethical development in the fields of artificial intelligence and robotics, contributing to a smarter and more sustainable future.
              </p>
              <h3 className="text-2xl text-[#3b82f6] mt-8 mb-4 inline-block relative after:absolute after:-bottom-1 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-[#3b82f6] after:to-[#8b5cf6] after:rounded">
                Mission
              </h3>
              <ul className="mb-8 pl-6">
                <li className="mb-3 relative before:absolute before:-left-6 before:top-1 before:text-[#3b82f6] before:content-['✓']">
                  To create a collaborative environment where students can learn, experiment, and innovate in AI and robotics.
                </li>
                <li className="mb-3 relative before:absolute before:-left-6 before:top-1 before:text-[#3b82f6] before:content-['✓']">
                  To bridge the gap between academic knowledge and real-world applications through workshops, projects, competitions, and industry engagement.
                </li>
                <li className="mb-3 relative before:absolute before:-left-6 before:top-1 before:text-[#3b82f6] before:content-['✓']">
                  To encourage ethical awareness and responsible use of AI and robotics technologies for the betterment of society.
                </li>
                <li className="mb-3 relative before:absolute before:-left-6 before:top-1 before:text-[#3b82f6] before:content-['✓']">
                  To inspire leadership, teamwork, and a lifelong passion for emerging technologies.
                </li>
              </ul>
              <h3 className="text-2xl text-[#3b82f6] mt-8 mb-4 inline-block relative after:absolute after:-bottom-1 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-[#3b82f6] after:to-[#8b5cf6] after:rounded">
                Leadership
              </h3>
              <p className="mb-2"><strong>Director Sir:</strong> Dr. Niranjan Bhattacharyya </p>
              <p className="mb-2"><strong>Founder Faculty Member:</strong> Mr. Yashpal Chopra, Assistant Professor</p>
              <p className="mb-2"><strong>Founder Faculty Member:</strong> Dr. Pardeep Rohilla, Associate Professor</p>
              <p className="mb-2"><strong>Student Coordinator:</strong> Vishv Dhama & Mahak</p>
            </div>
            <div className="grid gap-6 relative pl-8 before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-transparent before:via-[#3b82f6] before:to-transparent">
              <div className="flex items-start gap-6 p-6 bg-[rgba(30,41,59,0.3)] rounded-xl border border-[rgba(59,130,246,0.1)] transition-all duration-300 hover:bg-[rgba(59,130,246,0.1)] hover:translate-x-2">
                <FaRobot className="text-3xl text-[#3b82f6] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-3 text-[#f1f5f9]">Robotics Innovation</h4>
                  <p className="text-[#94a3b8] leading-relaxed">Hands-on experience with cutting-edge robotics platforms and technologies</p>
                </div>
              </div>
              <div className="flex items-start gap-6 p-6 bg-[rgba(30,41,59,0.3)] rounded-xl border border-[rgba(59,130,246,0.1)] transition-all duration-300 hover:bg-[rgba(59,130,246,0.1)] hover:translate-x-2">
                <FaBrain className="text-3xl text-[#3b82f6] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-3 text-[#f1f5f9]">AI Research</h4>
                  <p className="text-[#94a3b8] leading-relaxed">Collaborative research projects in machine learning and artificial intelligence</p>
                </div>
              </div>
              <div className="flex items-start gap-6 p-6 bg-[rgba(30,41,59,0.3)] rounded-xl border border-[rgba(59,130,246,0.1)] transition-all duration-300 hover:bg-[rgba(59,130,246,0.1)] hover:translate-x-2">
                <FaGraduationCap className="text-3xl text-[#3b82f6] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-3 text-[#f1f5f9]">Skill Development</h4>
                  <p className="text-[#94a3b8] leading-relaxed">Comprehensive workshops and training programs for all skill levels</p>
                </div>
              </div>
              <div className="flex items-start gap-6 p-6 bg-[rgba(30,41,59,0.3)] rounded-xl border border-[rgba(59,130,246,0.1)] transition-all duration-300 hover:bg-[rgba(59,130,246,0.1)] hover:translate-x-2">
                <FaTrophy className="text-3xl text-[#3b82f6] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-3 text-[#f1f5f9]">Competitions</h4>
                  <p className="text-[#94a3b8] leading-relaxed">Participate in national and international robotics competitions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-[#0a0e1a] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(59,130,246,0.5)] to-transparent"></div>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6 text-center text-[#f1f5f9]">Our Projects</h2>
          <p className="text-xl text-[#cbd5e1] mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            At AAIRO, we actively foster innovation and technical excellence through hands-on projects that solve real-world problems using automation, robotics, and artificial intelligence. Below is a curated overview of our past achievements, ongoing developments, and future ambitions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-[rgba(30,41,59,0.3)] border border-[rgba(59,130,246,0.2)] rounded-2xl overflow-hidden transition-all duration-400 relative hover:-translate-y-2 hover:scale-102 hover:border-[#3b82f6] hover:shadow-xl hover:shadow-[rgba(59,130,246,0.2)] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-gradient-to-t after:from-[rgba(10,14,26,0.8)] after:to-transparent after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-100">
                <div className="h-48 overflow-hidden flex items-center justify-center">
                  <img src={project.img} alt={project.title} className="w-full h-full object-fill transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-[#f1f5f9]">{project.title}</h3>
                  <p className="text-[#94a3b8] mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-[rgba(59,130,246,0.2)] text-[#3b82f6] px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center mt-10 relative text-center mx-auto  gap-6 justify-center">
            <Link to="/projects" className=" px-8 py-4 mx-auto rounded-full font-semibold inline-flex items-center transition-all duration-300 relative overflow-hidden z-10 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white shadow-lg shadow-[rgba(59,130,246,0.3)] hover:-translate-y-1 hover:shadow-xl hover:shadow-[rgba(59,130,246,0.4)] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-white/10 before:transition-all before:duration-300 before:ease-in before:z-[-1] hover:before:w-full">
              See More
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      {/* <section className="py-24 bg-gradient-to-b from-[#1e293b] to-[#0a0e1a]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-[#f1f5f9]">Upcoming Events all over India</h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {events.map(event => {
              const eventDate = new Date(event.date);
              const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

              return (
                <div key={event.id} className="bg-[rgba(30,41,59,0.3)] border border-[rgba(59,130,246,0.2)] rounded-2xl p-6 flex gap-6 transition-all duration-400 items-center hover:border-[#3b82f6] hover:translate-x-2 hover:shadow-lg hover:shadow-[rgba(59,130,246,0.2)]">
                  <div className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-xl p-4 text-center text-white min-w-20 flex-shrink-0">
                    <div className="text-3xl font-extrabold leading-none">{eventDate.getDate()}</div>
                    <div className="text-sm opacity-90 uppercase tracking-wider">{monthNames[eventDate.getMonth()]}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-[#f1f5f9]">{event.title}</h3>
                    <p className="text-[#94a3b8] mb-3 leading-relaxed">{event.description}</p>
                    <div className="flex gap-6 text-sm text-[#64748b] items-center">
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-base" /> {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Blog Section */}
      <section className="py-24 bg-[#0a0e1a]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-[#f1f5f9]">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[rgba(30,41,59,0.3)] border border-[rgba(59,130,246,0.2)] rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-[#3b82f6] hover:shadow-xl hover:shadow-[rgba(59,130,246,0.2)]">
              <div className="h-48 bg-gradient-to-r from-[#1e293b] to-[#334155] flex items-center justify-center text-[#3b82f6] text-5xl transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#3b82f6] group-hover:to-[#8b5cf6] group-hover:text-white">
                <FaRobot />
              </div>
              <div className="p-6">
                <div className="flex gap-6 mb-4 text-sm text-[#64748b]">
                  <span>May 20, 2025</span>
                  <span>5 min read</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#f1f5f9] transition-colors duration-300 group-hover:text-[#3b82f6]">Getting Started with ROS for Robotics</h3>
                <p className="text-[#94a3b8] mb-6 leading-relaxed">A beginner's guide to setting up and using the Robot Operating System for your robotics projects.</p>
                <div className="flex gap-2">
                  <span className="bg-[rgba(139,92,246,0.2)] text-[#8b5cf6] px-3 py-1 rounded-full text-xs font-semibold tracking-wider">Tutorial</span>
                  <span className="bg-[rgba(139,92,246,0.2)] text-[#8b5cf6] px-3 py-1 rounded-full text-xs font-semibold tracking-wider">Robotics</span>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(30,41,59,0.3)] border border-[rgba(59,130,246,0.2)] rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-[#3b82f6] hover:shadow-xl hover:shadow-[rgba(59,130,246,0.2)]">
              <div className="h-48 bg-gradient-to-r from-[#1e293b] to-[#334155] flex items-center justify-center text-[#3b82f6] text-5xl transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#3b82f6] group-hover:to-[#8b5cf6] group-hover:text-white">
                <FaBrain />
              </div>
              <div className="p-6">
                <div className="flex gap-6 mb-4 text-sm text-[#64748b]">
                  <span>May 15, 2025</span>
                  <span>8 min read</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#f1f5f9] transition-colors duration-300 group-hover:text-[#3b82f6]">Ethical Considerations in AI Development</h3>
                <p className="text-[#94a3b8] mb-6 leading-relaxed">Exploring the moral implications and responsibilities when building artificial intelligence systems.</p>
                <div className="flex gap-2">
                  <span className="bg-[rgba(139,92,246,0.2)] text-[#8b5cf6] px-3 py-1 rounded-full text-xs font-semibold tracking-wider">AI Ethics</span>
                  <span className="bg-[rgba(139,92,246,0.2)] text-[#8b5cf6] px-3 py-1 rounded-full text-xs font-semibold tracking-wider">Discussion</span>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(30,41,59,0.3)] border border-[rgba(59,130,246,0.2)] rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-[#3b82f6] hover:shadow-xl hover:shadow-[rgba(59,130,246,0.2)]">
              <div className="h-48 bg-gradient-to-r from-[#1e293b] to-[#334155] flex items-center justify-center text-[#3b82f6] text-5xl transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#3b82f6] group-hover:to-[#8b5cf6] group-hover:text-white">
                <FaTrophy />
              </div>
              <div className="p-6">
                <div className="flex gap-6 mb-4 text-sm text-[#64748b]">
                  <span>May 10, 2025</span>
                  <span>6 min read</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#f1f5f9] transition-colors duration-300 group-hover:text-[#3b82f6]">Our Journey to Winning the National Robotics Championship</h3>
                <p className="text-[#94a3b8] mb-6 leading-relaxed">Behind-the-scenes look at how our team prepared and triumphed in the national competition.</p>
                <div className="flex gap-2">
                  <span className="bg-[rgba(139,92,246,0.2)] text-[#8b5cf6] px-3 py-1 rounded-full text-xs font-semibold tracking-wider">Competition</span>
                  <span className="bg-[rgba(139,92,246,0.2)] text-[#8b5cf6] px-3 py-1 rounded-full text-xs font-semibold tracking-wider">Team</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="/blog" className="px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300 relative overflow-hidden z-10 border border-[#475569] text-[#e2e8f0] hover:bg-[#475569] hover:text-white before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-white/10 before:transition-all before:duration-300 before:ease-in before:z-[-1] hover:before:w-full">
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      <div className="text-center bg-[#0a0e1a]">
        <div className="p-12">
          <h3 className="text-6xl font-bold mb-6 text-[hsl(180,100%,50%)]">Want to Join Our Team?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">We're always looking for passionate individuals who want to make a difference in the tech world. Join us and be part of something extraordinary.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="inline-flex items-center rounded-full border px-8 py-3 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-[hsl(180,100%,50%,0.2)] text-[hsl(180,100%,50%)]">Innovation</div>
            <div className="inline-flex items-center rounded-full border px-8 py-3 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-[hsl(150,100%,50%,0.2)] text-[hsl(150,100%,50%)]">Collaboration</div>
            <div className="inline-flex items-center rounded-full border px-8 py-3 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-[hsl(220,100%,50%,0.2)] text-[hsl(220,100%,50%)]">Learning</div>
            <div className="inline-flex items-center rounded-full border px-12 py-3 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-[hsl(270,100%,70%,0.2)] text-[hsl(270,100%,70%)]">Growth</div>
          </div>
          <button className="inline-flex items-center justify-center gap-2 text-lg hover:bg-primary/90 h-11 rounded-md bg-gradient-to-r from-[hsl(180,100%,50%)] to-[hsl(220,100%,50%)] text-[hsl(0,0%,4%)] hover:scale-105 transition-transform cursor-pointer animate-pulse font-semibold px-14 py-8">
            Join WhatsApp Group
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;