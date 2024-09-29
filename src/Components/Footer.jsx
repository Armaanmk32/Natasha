function Footer() {
    return (
      <footer className="bg-black mt-3 px-20 text-white py-10">
        <div className="container mx-auto  grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo iyo About Us */}
          <div>
            <h2 className="text-xl font-serif font-bold">NATASHA ABDI</h2>
            <p className="mt-2">Your Fashion Destination</p>
            <h3 className="mt-6 font-semibold">About Us</h3>
            <p className="mt-2 text-sm">
              We specialize in offering the best collection of modest and elegant clothing for women. Our designs are inspired by the latest trends and tailored for any occasion.
            </p>
          </div>
  
          {/* Information */}
          <div>
            <h3 className="font-semibold mb-3">Information</h3>
            <ul>
              <li>About Our Fashion</li>
              <li>New Arrivals</li>
              <li>Blog</li>
              <li>Customer Reviews</li>
              <li>Events & Fashion Shows</li>
            </ul>
          </div>
  
          {/* Helpful Links */}
          <div>
            <h3 className="font-semibold mb-3">Helpful Links</h3>
            <ul>
              <li>Our Services</li>
              <li>Customer Support</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
  
          {/* Subscribe */}
          <div>
            <h3 className="font-semibold mb-3">Stay Updated</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your Email"
                className="px-4 py-2 w-full rounded-full text-black"
              />
              <button className="bg-orange-500 px-6 py-2 rounded-full text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
          <div className="flex justify-center space-x-4 mb-5">
            <i className="fa-brands fa-facebook text-lg"></i>
            <i className="fa-brands fa-twitter text-lg"></i>
            <i className="fa-brands fa-instagram text-lg"></i>
            <i className="fa-brands fa-linkedin text-lg"></i>
          </div>
          <p>© 2024 Natasha Ltd. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  


