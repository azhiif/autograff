export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            className="text-2xl font-bold text-gray-900 italic cursor-pointer"
            target="_blank" rel="noopener noreferrer"
          >
            Autograff
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="https://www.autograff.in" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer" target="_blank" rel="noopener noreferrer">Cars</a>
            <a href="/coming-soon" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer" target="_blank" rel="noopener noreferrer">Yachts</a>
            <a href="/coming-soon" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer" target="_blank" rel="noopener noreferrer">Jets</a>
            <a href="/coming-soon" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer" target="_blank" rel="noopener noreferrer">Watches</a>
            <a href="/coming-soon" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer" target="_blank" rel="noopener noreferrer">Real Estate</a>
            <a href="/coming-soon" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer" target="_blank" rel="noopener noreferrer">Art</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.autograff.in" className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-gray-900 cursor-pointer" target="_blank" rel="noopener noreferrer">
              <i className="ri-search-line"></i>
            </a>
            <a href="https://www.autograff.in" className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-gray-900 cursor-pointer" target="_blank" rel="noopener noreferrer">
              <i className="ri-heart-line"></i>
            </a>
            <a href="https://www.autograff.in" className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-gray-900 cursor-pointer" target="_blank" rel="noopener noreferrer">
              <i className="ri-user-line"></i>
            </a>
            <a href="https://www.autograff.in" className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer" target="_blank" rel="noopener noreferrer">
              List Item
            </a>
          </div>
          
          <a href="https://www.autograff.in" className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer" target="_blank" rel="noopener noreferrer">
            <i className="ri-menu-line"></i>
          </a>
        </div>
      </div>
    </header>
  );
}