import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#5E17EB] min-h-screen">
      {/* Logo */}

      {/* Navigation */}
      <nav className="fixed top-8 right-8 z-50">
        <button className="nav-icon">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen px-8 lg:px-16 py-24 relative flex items-center justify-center">
        <div className="dot-pattern absolute top-0 right-0 w-64 h-64 opacity-20"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-7xl font-bold text-white leading-tight">
              Hello 
              <br />
              i'm Khomkit Manpasong
            </h1>
            <p className="text-white text-xl max-w-lg mx-auto lg:mx-0">
            Frontend Developer
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 mx-auto lg:mx-0">
              <div>
                <p className="text-white">I like to craft solid and scalable frontend products with great user experiences.   </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-lime-300/20 blur-3xl rounded-full"></div>
            <div className="relative z-10 w-full aspect-square max-w-md mx-auto">
            <Image 
                src="/Dog.jpg"  
                alt="Profile"
                layout="fill"
                className="rounded-2xl w-full h-full object-cover"/>

            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
