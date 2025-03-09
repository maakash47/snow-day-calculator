import { Link } from "react-router-dom";
import { IoSnow } from "react-icons/io5";

const Footer = () => {
  const links = {
    product: [
      { href: "/about", label: "About Us" },
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" }
    ],
    legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" }
    ],
    contact: [
      { href: "/contact", label: "Contact Us" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <IoSnow className="h-8 w-8 text-[hsl(213,94%,68%)]" />
              <span className="font-bold text-xl text-[hsl(213,94%,68%)]">
                Snow Day Calculator
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Accurate snow day predictions using real-time weather data and advanced algorithms.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {links.product.map(({ href, label }) => (
                <li key={href}>
                  <Link to={href} className="text-sm text-gray-400 hover:text-[hsl(213,94%,68%)]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map(({ href, label }) => (
                <li key={href}>
                  <Link to={href} className="text-sm text-gray-400 hover:text-[hsl(213,94%,68%)]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            
            <ul className="space-y-3">
              {links.contact.map(({ href, label }) => (
                <li key={href}>
                  <Link to={href} className="text-sm text-gray-400 hover:text-[hsl(213,94%,68%)]">
                    {label}
                  </Link>
                  <h4 className="text-sm text-gray-400 hover:text-[hsl(213,94%,68%)]">info.snowdaycalculator@gmail.com</h4>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Snow Day Calculator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
