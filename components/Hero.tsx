import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-white">Your Name</h1>
        <p className="text-xl mb-6 text-white">Software Engineer</p>
        <p className="max-w-lg mx-auto mb-8 text-white">
          Passionate software engineer specializing in building exceptional digital experiences
          with modern web technologies.
        </p>
        <div className="space-x-4">
          <Link 
            href="#projects"
            className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
}