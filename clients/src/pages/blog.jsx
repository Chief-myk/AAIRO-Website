import React from 'react';
import { 
  FaNewspaper, 
  FaUser, 
  FaCalendarAlt, 
  FaClock
} from 'react-icons/fa';

const BLOG_DATA = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence in Healthcare",
    excerpt: "Exploring how AI is revolutionizing medical diagnosis and treatment through machine learning algorithms and data analysis.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    tags: ["AI", "Healthcare", "Machine Learning"],
    fullContent: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is transforming healthcare in unprecedented ways. From early disease detection to personalized treatment plans, AI is making healthcare more efficient and effective.</p>
      
      <h2>Current Applications</h2>
      <p>Today, AI is being used in various healthcare applications including medical imaging analysis, drug discovery, and patient monitoring systems.</p>
      
      <h2>Future Prospects</h2>
      <p>The future holds even more promise with AI-powered surgical robots, predictive analytics for preventive care, and personalized medicine based on genetic data.</p>
    `
  },
  {
    id: 2,
    title: "Robotics in Industrial Automation: A Game Changer",
    excerpt: "How modern robotics is transforming manufacturing processes and increasing efficiency across various industries.",
    author: "Prof. Michael Chen",
    date: "March 10, 2024",
    readTime: "6 min read",
    tags: ["Robotics", "Automation", "Manufacturing"],
    fullContent: `
      <h2>The Evolution of Industrial Robotics</h2>
      <p>Industrial robotics has come a long way from simple assembly line tasks to complex manufacturing processes that require precision and intelligence.</p>
      
      <h2>Benefits of Automation</h2>
      <p>Robotic automation brings numerous benefits including increased productivity, reduced human error, and the ability to work in hazardous environments.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>While implementation can be challenging, proper planning and gradual integration help companies successfully adopt robotic automation.</p>
    `
  },
  {
    id: 3,
    title: "Machine Learning Algorithms: From Theory to Practice",
    excerpt: "A comprehensive guide to understanding different machine learning algorithms and their real-world applications.",
    author: "Dr. Emily Rodriguez",
    date: "March 8, 2024",
    readTime: "12 min read",
    tags: ["Machine Learning", "Algorithms", "Data Science"],
    fullContent: `
      <h2>Understanding Machine Learning</h2>
      <p>Machine learning is a subset of artificial intelligence that enables computers to learn and improve from experience without being explicitly programmed.</p>
      
      <h2>Types of Algorithms</h2>
      <p>There are three main types: supervised learning, unsupervised learning, and reinforcement learning, each with its own use cases and applications.</p>
      
      <h2>Practical Implementation</h2>
      <p>Implementing ML algorithms requires understanding data preprocessing, model selection, and evaluation metrics to ensure optimal performance.</p>
    `
  },
  // {
  //   id: 4,
  //   title: "Quantum Computing: The Next Frontier",
  //   excerpt: "Exploring the revolutionary potential of quantum computing in solving complex problems that classical computers cannot handle.",
  //   author: "Dr. James Wilson",
  //   date: "March 5, 2024",
  //   readTime: "10 min read",
  //   tags: ["Quantum Computing", "Technology", "Innovation"],
  //   fullContent: `
  //     <h2>What is Quantum Computing?</h2>
  //     <p>Quantum computing leverages quantum mechanical phenomena to process information in ways that classical computers cannot.</p>
      
  //     <h2>Current State and Challenges</h2>
  //     <p>While still in early stages, quantum computing faces challenges like quantum decoherence and error correction.</p>
      
  //     <h2>Future Applications</h2>
  //     <p>Potential applications include cryptography, drug discovery, financial modeling, and solving optimization problems.</p>
  //   `
  // },
  // {
  //   id: 5,
  //   title: "Computer Vision: Teaching Machines to See",
  //   excerpt: "How computer vision technology is enabling machines to interpret and understand visual information from the world around them.",
  //   author: "Prof. Lisa Park",
  //   date: "March 1, 2024",
  //   readTime: "9 min read",
  //   tags: ["Computer Vision", "AI", "Image Processing"],
  //   fullContent: `
  //     <h2>Introduction to Computer Vision</h2>
  //     <p>Computer vision is a field of AI that enables computers and systems to derive meaningful information from digital images, videos, and other visual inputs.</p>
      
  //     <h2>Key Technologies</h2>
  //     <p>Technologies like convolutional neural networks, image segmentation, and object detection are fundamental to computer vision systems.</p>
      
  //     <h2>Real-world Applications</h2>
  //     <p>From autonomous vehicles to medical imaging, computer vision is transforming numerous industries and applications.</p>
  //   `
  // },
  // {
  //   id: 6,
  //   title: "Natural Language Processing: Bridging Human-Computer Communication",
  //   excerpt: "Understanding how NLP enables computers to process, analyze, and generate human language in meaningful ways.",
  //   author: "Dr. Alex Thompson",
  //   date: "February 28, 2024",
  //   readTime: "7 min read",
  //   tags: ["NLP", "AI", "Language Processing"],
  //   fullContent: `
  //     <h2>What is NLP?</h2>
  //     <p>Natural Language Processing combines computational linguistics with statistical and machine learning methods to help computers understand human language.</p>
      
  //     <h2>Core Components</h2>
  //     <p>Key components include tokenization, parsing, semantic analysis, and language generation.</p>
      
  //     <h2>Applications and Future</h2>
  //     <p>From chatbots to language translation, NLP is making human-computer interaction more natural and intuitive.</p>
  //   `
  // }
];


const Blog = () => {
  const renderBlogContent = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOG_DATA.map((post) => (
          <a href={`/blog?id=${post.id}`} className="group" key={post.id}>
            <div className="bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
              <div className="text-blue-400 text-4xl mb-4">
                <FaNewspaper />
              </div>
              <div className="flex flex-wrap gap-3 text-gray-400 text-sm mb-4">
                <span className="flex items-center gap-1"><FaUser className="text-xs" /> {post.author}</span>
                <span className="flex items-center gap-1"><FaCalendarAlt className="text-xs" /> {post.date}</span>
                <span className="flex items-center gap-1"><FaClock className="text-xs" /> {post.readTime}</span>
              </div>
              <h3 className="text-blue-400 text-xl font-semibold mb-3 group-hover:text-blue-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {post.excerpt.substring(0, 150)}...
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-12 bg-gray-900">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Our Blog
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights, innovations, and stories from the world of AI and Robotics         
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {renderBlogContent()}          
        </div>
      </section>
    </div>
  );
};

export default Blog;