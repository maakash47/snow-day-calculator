// // import React from "react";
// // import { Link } from "react-router-dom";

// // function Header() {
// //   return (
// //     <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
// //       <div className="container mx-auto flex justify-between items-center p-4">
// //         <Link to="/" className="text-2xl font-bold text-[hsl(213,94%,67%)] animate-bounce">
// //           ❄️ Snow Day Calculator
// //         </Link>
// //         <nav>
// //           <ul className="flex space-x-6 text-gray-700">
// //             <li><Link to="/about">About Us</Link></li>
// //             <li><Link to="/blog">Blogs</Link></li>
// //             <li><Link to="/faq">FAQs</Link></li>
// //             <li><Link to="/contact">Contact Us</Link></li>
// //           </ul>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // }

// // export default Header;
// // import React from "react";
// // import { NavLink } from "react-router-dom";

// // function Header() {
// //   return (
// //     <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
// //       <div className="container mx-auto flex justify-between items-center p-4">
// //       <NavLink to="/" className="text-2xl font-bold text-[hsl(213,94%,68%)] flex items-center">
// //   <svg
// //     xmlns="http://www.w3.org/2000/svg"
// //     viewBox="0 0 24 24"
// //     fill="hsl(213,94%,68%)"  // ✅ Icon color set to primary
// //     className="w-6 h-6 mr-2"
// //   >
// //     <path
// //       fillRule="evenodd"
// //       d="M12 2a1 1 0 0 1 .993.883L13 3v1.06a5.5 5.5 0 0 1 4.94 4.94H19a1 1 0 0 1 0 2h-1.06a5.5 5.5 0 0 1-4.94 4.94V19a1 1 0 0 1-2 0v-1.06a5.5 5.5 0 0 1-4.94-4.94H5a1 1 0 0 1 0-2h1.06a5.5 5.5 0 0 1 4.94-4.94V3a1 1 0 0 1 1-1Zm0 4a3.5 3.5 0 0 0-3.466 3.001L8.5 9H7a3.5 3.5 0 0 0 0 7h1.5l.034-.001A3.5 3.5 0 0 0 12 19a3.5 3.5 0 0 0 3.466-3.001L15.5 16H17a3.5 3.5 0 0 0 0-7h-1.5l-.034.001A3.5 3.5 0 0 0 12 6Z"
// //       clipRule="evenodd"
// //     />
// //   </svg>
// //   Snow Day Calculator
// // </NavLink>


// //         {/* <NavLink to="/" className="text-2xl font-bold text-[hsl(213,94%,68%)]">
// //           ❄️ Snow Day Calculator
// //         </NavLink> */}
// //         <nav>
// //           <ul className="flex space-x-6 text-gray-700">
// //             {[
// //               { path: "/about", label: "About" },
// //               { path: "/blog", label: "Blog" },
// //               { path: "/faq", label: "FAQ" },
// //               { path: "/contact", label: "Contact" },
// //             ].map(({ path, label }) => (
// //               <li key={path}>
// //                 <NavLink
// //                   to={path}
// //                   className={({ isActive }) =>
// //                     `px-4 py-2 rounded-lg transition-colors duration-300 ${
// //                       isActive
// //                         ? "text-[hsl(213,94%,67%)] bg-[hsl(213,94%,97%)] font-bold"
// //                         : "hover:text-[hsl(213,94%,67%)] hover:bg-[hsl(213,94%,97%)]"
// //                     }`
// //                 }
// //                 >
// //                   {label}
// //                 </NavLink>
// //               </li>
// //             ))}
// //           </ul>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // }

// // export default Header;
// import React from "react";
// import { IoSnow } from "react-icons/io5";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <NavLink to="/" className="text-2xl font-bold text-[hsl(213,94%,68%)] flex items-center">
//           <IoSnow className="w-6 h-6 mr-2 text-[hsl(213,94%,68%)] animate-bounce" />
//           Snow Day Calculator
//         </NavLink>
//         <nav>
//           <ul className="flex space-x-6 text-gray-700">
//             {[
//               { path: "/about", label: "About" },
//               { path: "/blog", label: "Blogs" },
//               { path: "/faq", label: "FAQ" },
//               { path: "/contact", label: "Contact" },
//             ].map(({ path, label }) => (
//               <li key={path}>
//                 <NavLink
//                   to={path}
//                   className={({ isActive }) =>
//                     `px-4 py-2 rounded transition-colors duration-300 ${
//                       isActive
//                         ? "text-[hsl(213,94%,67%)] bg-[hsl(213,94%,97%)] font-bold"
//                         : "hover:text-[hsl(213,94%,67%)] hover:bg-[hsl(213,94%,97%)]"
//                     }`
//                 }
//                 >
//                   {label}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { IoSnow, IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <NavLink to="/" className="text-2xl font-bold text-[hsl(213,94%,68%)] flex items-center">
          <IoSnow className="w-6 h-6 mr-2 text-[hsl(213,94%,68%)] animate-bounce" />
          Snow Day Calculator
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-gray-700">
            {[{ path: "/about", label: "About" }, { path: "/blog", label: "Blogs" }, { path: "/faq", label: "FAQ" }, { path: "/contact", label: "Contact" }].map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded transition-colors duration-300 ${
                      isActive
                        ? "text-[hsl(213,94%,67%)] bg-[hsl(213,94%,97%)] font-bold"
                        : "hover:text-[hsl(213,94%,67%)] hover:bg-[hsl(213,94%,97%)]"
                    }`
                }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-[hsl(213,94%,68%)]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full z-50 p-4 border-t">
          <ul className="flex flex-col space-y-4 text-center text-gray-700">
            {[{ path: "/about", label: "About" }, { path: "/blog", label: "Blogs" }, { path: "/faq", label: "FAQ" }, { path: "/contact", label: "Contact" }].map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded transition-colors duration-300 ${
                      isActive
                        ? "text-[hsl(213,94%,67%)] bg-[hsl(213,94%,97%)] font-bold"
                        : "hover:text-[hsl(213,94%,67%)] hover:bg-[hsl(213,94%,97%)]"
                    }`
                }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
