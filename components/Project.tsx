import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce platform built with Next.js and Node.js',
    image: '/project1.jpg',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Data Dashboard',
    description: 'Real-time data visualization dashboard using React and D3.js',
    image: '/project2.jpg',
    tags: ['React', 'D3.js', 'Firebase'],
  },
  {
    title: 'AI Analytics Tool',
    description: 'Machine learning-powered analytics tool built with Python',
    image: '/project3.jpg',
    tags: ['Python', 'TensorFlow', 'FastAPI'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
