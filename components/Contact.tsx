"use client"; 
import { FaGithub, FaFacebookF, FaGoogle } from "react-icons/fa"; 

export default function Footer() {
  return (
    <footer  id="contact" className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-14">
      
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-purple-500"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:your-email@gmail.com"
            className="text-3xl hover:text-purple-500"
            aria-label="Gmail"
          >
            <FaGoogle />
          </a>


          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-purple-500"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
