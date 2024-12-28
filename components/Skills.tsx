'use client';

export default function Skills() {
  const skills = [
    { src: '/src/jv.jpg', alt: 'JavaScript', name: 'JavaScript' },
    { src: '/src/java.jpg', alt: 'Java', name: 'Java' },
    { src: '/src/types.png', alt: 'TypeScript', name: 'TypeScript' },
    { src: '/src/Nextjs.png', alt: 'Next.js', name: 'Next.js' },
    { src: '/src/python.png', alt: 'Python', name: 'Python' },
    { src: '/src/react.png', alt: 'React', name: 'React' },
    { src: '/src/css.png', alt: 'CSS', name: 'CSS' },
    { src: '/images/skill8.png', alt: 'HTML', name: 'HTML' },
    { src: '/images/skill9.png', alt: 'Node.js', name: 'Node.js' },
    { src: '/images/skill10.png', alt: 'Git', name: 'Git' },
  ];

  return (
    <section id="Skills" className="py-24 bg-white text-center text-black " >
      <h2 className="text-4xl font-bold mb-8">My Skills</h2>

      <div className="landing-container grid grid-cols-5 grid-rows-2 gap-5 p-2 h-screen">
        {skills.map((skill, index) => (
          <div key={index} className="skills-item bg-white rounded-lg flex flex-col items-center justify-center p-3 text-center">
            <img
              src={skill.src}
              alt={skill.alt}
              className="max-w-[80%] max-h-[100px] w-auto h-auto mb-4 rounded-sm"
            />
            <h3 className="font-semibold text-lg">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
