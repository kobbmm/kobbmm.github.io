export default function Skills() {
  const skills = {
    frontend: [
      { image: "/path/to/react-logo.png" },
      { image: "/path/to/typescript-logo.png" },
      { image: "/path/to/tailwind-logo.png" },
    ],
    backend: [
      { image: "/path/to/nodejs-logo.png" },
      { image: "/path/to/python-logo.png" },
      { image: "/path/to/mongodb-logo.png" },
    ],
    devops: [
      { image: "/path/to/docker-logo.png" },
      { image: "/path/to/kubernetes-logo.png" },
      { image: "/path/to/googlecloud-logo.png" },
    ],
  };

  const renderSkillCategory = (items: { image: string }[]) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((skill, index) => (
        <div key={index} className="p-6 bg-white rounded-lg text-center">
          <img
            src={skill.image}
            alt={`Skill-${index}`}
            className="mb-4 mx-auto h-16 w-16 object-contain"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section
      className="min-h-screen px-8 lg:px-16 py-24 relative justify-center"
      id="skills"
    >
      <div className="container mx-auto px-4">
        <div className="Skills-layout grid gap-8 grid-cols-1 md:grid-cols-3 auto-rows-auto">
          {/* Render skill categories without any string */}
          <div className="frontend-area">{renderSkillCategory(skills.frontend)}</div>
          <div className="devops-area">{renderSkillCategory(skills.devops)}</div>
          <div className="backend-area">{renderSkillCategory(skills.backend)}</div>
        </div>
      </div>
    </section>
  );
}
