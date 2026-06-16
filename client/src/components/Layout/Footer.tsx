import logoLight from "../../assets/logo/logo-light.png";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1A5C5A] text-[#FFF6E8] mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>

            <img
              src={logoLight}
              alt="Ellvia Jewels"
              className="h-14 mb-5"
            />

            <p className="text-[#FFF6E8]/80 leading-7">
              Timeless elegance crafted for every moment.
              Discover jewelry designed to celebrate
              beauty, confidence and individuality.
            </p>

          </div>

          {/* Shop */}
          <div>

            <h3 className="font-semibold text-lg mb-4">
              Shop
            </h3>

            <ul className="space-y-3 text-[#FFF6E8]/80">
              <li>Rings</li>
              <li>Earrings</li>
              <li>Bracelets</li>
              <li>Pendant Chains</li>
            </ul>

          </div>

          {/* Company */}
          <div>

            <h3 className="font-semibold text-lg mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-[#FFF6E8]/80">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>

          </div>

          {/* Newsletter */}
          <div>

            <h3 className="font-semibold text-lg mb-4">
              Newsletter
            </h3>

            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                px-4
                py-3
                rounded-lg
                bg-[#FFF6E8]
                text-[#1A5C5A]
                outline-none
              "
            />

            <button
              className="
                mt-4
                bg-[#FFF6E8]
                text-[#1A5C5A]
                px-6
                py-3
                rounded-lg
                font-medium
                hover:opacity-90
              "
            >
              Subscribe
            </button>

          </div>

        </div>

        {/* Bottom Footer */}

        <div className="border-t border-[#FFF6E8]/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">

          <p className="text-[#FFF6E8]/70 text-sm">
            © 2026 Ellvia Jewels. All Rights Reserved.
          </p>

          <div className="flex gap-5 mt-4 md:mt-0 text-lg">

            <FaInstagram />

            <FaFacebookF />

            <FaPinterestP />

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;