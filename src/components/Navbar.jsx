import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset to account for fixed navbar
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold">C</span>
                </div>
                <span className="ml-2 text-xl font-semibold text-gray-800">CreativeHub</span>
              </div>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#" onClick={(e) => handleNavClick(e, 'hero')} className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Services</a>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Projects</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-900 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            <div className="hidden md:block">
              <button className="ml-4 bg-white p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" onClick={(e) => handleNavClick(e, 'hero')} className="block pl-3 pr-4 py-2 text-base font-medium text-gray-900 bg-gray-50">Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">About</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Services</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Projects</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 