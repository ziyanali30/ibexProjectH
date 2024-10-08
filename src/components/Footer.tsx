function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding and Logo Section */}
        <div>
<<<<<<< HEAD
          <img src="https://derhjzjgqhzkqefjmrer.supabase.co/storage/v1/object/public/assets/logo.jpg" alt="Ibex Logo" className="w-32 mb-4" />
=======
          <img src="https://derhjzjgqhzkqefjmrer.supabase.co/storage/v1/object/public/assets/logo.jpg" alt="AXIMO Logo" className="w-32 mb-4" />
>>>>>>> b07b170c0495b7d7ba6996b7ab0d4be60ed3f3cd
          <p className="text-sm">
            AXIMO helps businesses achieve exceptional customer engagement and drive growth.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/home" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
          </ul>
        </div>

        {/* Contact and Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>Phone: +1-800-123-4567</li>
            <li>Email: contact@AXIMO.co</li>
          </ul>
          <div className="mt-4 flex space-x-4">
            {/* Social Media Icons */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              {/* <img src="facebook-icon.png" alt="Facebook" className="w-6" /> */}
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              {/* <img src="twitter-icon.png" alt="Twitter" className="w-6" /> */}
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              {/* <img src="linkedin-icon.png" alt="LinkedIn" className="w-6" /> */}
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; 2024 AXIMO. All rights reserved.</p>
        <p>
          <a href="/terms" className="hover:underline">Terms of Service</a> |{' '}
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </p>
      </div>
    </footer>
    );
};
 export default Footer;
