import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-gray-800">
      <div className="container mx-auto flex flex-wrap p-4 md:p-5 flex-col md:flex-row items-center">
        {/* Logo and Title */}
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-400 hover:text-pink-300">
            Nadia Ikram
          </h2>
         
        </Link>
        
        {/* Navigation Links */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-4 md:space-x-8">
          <Link href="/" className="text-white font-bold underline-offset-8 underline hover:text-pink-300">
            Home
          </Link>
          <Link href="/about" className="text-white font-bold underline-offset-8 underline hover:text-pink-300">
            About
          </Link>
          <Link href="/projects" className="text-white font-bold underline-offset-8 underline hover:text-pink-300">
            Projects
          </Link>
          <Link href="/contact" className="text-white font-bold underline-offset-8 underline hover:text-pink-300">
            Contact
          </Link>
        </nav>
        
        {/* Download CV Button */}
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mt-4 md:mt-0 focus:outline-none hover:bg-pink-300 rounded text-sm md:text-base">
          Download CV
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
