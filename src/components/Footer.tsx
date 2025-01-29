import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12 py-[5.6rem] text-sm bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
        {/* Logo */}
        <div>
          <h1>WEBSITE</h1>
        </div>

        {/* Links */}
        <div>
          <ul className="grid gap-y-4">
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Cookie Policy</Link>
            </li>
          </ul>
        </div>

        {/* Other Links */}
        <div className="grid gap-y-4">
          <p>Website Link</p>
          <p>Bogota, Colombia</p>
          <p>Ghana</p>
          <p>website@gmail.com</p>
          <p>+2334509833</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
