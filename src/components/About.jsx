const About = () => {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About us
          </h2>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="animate-slide-up">
            <p className="text-lg text-gray-500 mb-6">
              CreativeHub is a dynamic platform empowering artists and designers to
              showcase their creativity, connect with peers, and explore cutting-edge
              tools and technologies. Our mission is to foster innovation and
              collaboration in the creative community.
            </p>
            <p className="text-lg text-gray-500">
              We believe in the power of creative expression to transform ideas into impactful
              experiences. Our team of passionate designers and developers work together
              to build tools that help creators bring their vision to life.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 animate-fade-in">
            <img
              className="mx-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Team working together"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 