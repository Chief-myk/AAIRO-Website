import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Chatbot Assistant",
      description: "An intelligent conversational AI built with natural language processing capabilities.",
      technologies: ["Python", "TensorFlow", "NLP"],
      status: "Completed",
      img: "/a.jpg"
    },
    {
      id: 2,
      title: "Autonomous Robot Navigation",
      description: "A self-navigating robot using computer vision and path planning algorithms.",
      technologies: ["ROS", "OpenCV", "Python"],
      status: "In Progress",
      img: "/b.jpg"
    },
    {
      id: 3,
      title: "Smart Home Automation",
      description: "IoT-based home automation system with voice control and mobile app integration.",
      technologies: ["Arduino", "IoT", "React Native"],
      status: "Completed",
      img: "/c.jpg"
    },
    {
      id: 4,
      title: "Machine Learning Predictor",
      description: "Predictive analytics system for student performance using machine learning algorithms.",
      technologies: ["Python", "Scikit-learn", "Pandas"],
      status: "In Progress",
      img: "/d.jpg"
    },
    {
      id: 5,
      title: "Computer Vision Security",
      description: "Facial recognition based security system with real-time monitoring capabilities.",
      technologies: ["OpenCV", "Deep Learning", "Flask"],
      status: "Planning",
      img: "/e.jpg"
    },
    {
      id: 6,
      title: "Robotic Arm Controller",
      description: "6-DOF robotic arm with precise control and pick-and-place functionality.",
      technologies: ["Arduino", "Servo Motors", "C++"],
      status: "Completed",
      img: "/f.jpg"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Progress': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Planning': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const ProjectCard = ({ project }) => (
    <div 
      key={project.id} 
      className="bg-gray-800/50 border  border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/50 group relative"
    >
      <div className="h-70 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 z-10"></div>
        <img 
          src={project.img} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          loading="lazy"
        />
        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)} z-20`}>
          {project.status}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium tracking-wide border border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mt-10 mb-12">
          {/* <span className="inline-block mb-4 text-blue-400 font-medium tracking-wider">OUR WORK</span> */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our cutting-edge projects in AI, robotics, and automation that push the boundaries of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-6 text-lg">
            Interested in contributing or starting your own project?
          </p>
          <button className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl group hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
            <span className="relative z-10">Join Our Team</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;