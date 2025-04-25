const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl transform hover:-translate-y-2">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <button className="text-purple-600 hover:text-purple-800 text-sm font-medium transition duration-300 ease-in-out hover:underline">
          View Project
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Homepage Redesign",
      description: "A sleek design for a company's platform.",
      image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Fitness Tracker App",
      description: "User-friendly app to track health and fitness goals.",
      image: "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Analytics Dashboard",
      description: "Interactive dashboard for data visualization.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <section id="projects" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 animate-slide-up">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 