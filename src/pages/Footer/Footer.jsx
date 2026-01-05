const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/chayonsarkerns" target="_blank" className="hover:text-white">Facebook</a>
            <a href="https://www.instagram.com/" target="_blank" className="hover:text-white">Instagram</a>
            <a href="https://www.linkedin.com/in/chayon11/" target="_blank" className="hover:text-white">LinkedIn</a>
          </div>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Legal</h3>
          <a href="/privacy" className="block hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="block hover:text-white">
            Terms & Conditions
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © Your Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
