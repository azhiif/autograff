export default function Footer() {
  const FaceBook = () => {
    window.open("https://www.facebook.com/autograff.india/", "_blank");
  };
  const InstaGram = () => {
    window.open("https://instagram.com/autograff.in", "_blank");
  };
  const WhatsApp = () => {
    window.open("https://wa.me/918111890101", "_blank"); 
  };
  

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6 italic cursor-pointer">
              Autograff
            </h3>
            <p className="text-gray-300 mb-6">
              The world's leading luxury marketplace for cars, yachts, jets,
              watches, real estate, and art.
            </p>
            <div className="flex space-x-4">
             <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700" onClick={FaceBook}>
              <i className="ri-facebook-fill"></i>
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700" onClick={InstaGram}>
             <i className="ri-instagram-fill"></i>
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700" onClick={WhatsApp}>
              <i className="ri-whatsapp-fill"></i>
            </div>
            </div>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-3 gap-8 lg:col-span-3">
            <div>
              <h4 className="font-semibold mb-6">Categories</h4>
              <div className="space-y-3">
                <a className="block text-gray-300 hover:text-white">Cars</a>
                <a className="block text-gray-300 hover:text-white">Yachts</a>
                <a className="block text-gray-300 hover:text-white">Jets</a>
                <a className="block text-gray-300 hover:text-white">Watches</a>
                <a className="block text-gray-300 hover:text-white">
                  Real Estate
                </a>
                <a className="block text-gray-300 hover:text-white">Art</a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-6">Services</h4>
              <div className="space-y-3">
                <a className="block text-gray-300 hover:text-white">
                  Sell Your Item
                </a>
                <a className="block text-gray-300 hover:text-white">Financing</a>
                <a className="block text-gray-300 hover:text-white">
                  Insurance
                </a>
                <a className="block text-gray-300 hover:text-white">Shipping</a>
                <a className="block text-gray-300 hover:text-white">
                  Authentication
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-6">Company</h4>
              <div className="space-y-3">
                <a className="block text-gray-300 hover:text-white">About Us</a>
                <a className="block text-gray-300 hover:text-white">Careers</a>
                <a className="block text-gray-300 hover:text-white">Press</a>
                <a className="block text-gray-300 hover:text-white">Contact</a>
                <a className="block text-gray-300 hover:text-white">
                  Terms of Service
                </a>
                <a className="block text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
          <p>© 2025 Autograff. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
