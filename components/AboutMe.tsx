export default function AboutMe() {
    return (
        <section className="min-h-screen bg-white px-8 lg:px-16 py-24 "  id="AboutMe">
        <div
         className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg-grid-areas-layout"
         >
        <div className="space-y-8 lg-grid-area-design">
        <h2 className="text-6xl font-bold text-[#5E17EB]">About Me</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
        "I am a passionate and detail-oriented Software Engineering student
        specializing in Frontend Development. With hands-on experience in
        building responsive websites and web applications, I am proficient in HTML,
        CSS, JavaScript, and modern frontend frameworks like React.js. I am committed
        to creating user-friendly, visually appealing interfaces that deliver seamless user experiences."
        </p>
        </div>
        <div className="space-y-8 lg-grid-area-engineering">
        <h2 className="text-6xl font-bold text-[#5E17EB]"></h2>
        <p className="text-gray-600 text-lg leading-relaxed">
        When it comes to crafting JavaScript applications, I work with a toolkit that’s just right for the job, yet I’m fully capable of stepping outside the box to solve
         problems efficiently. I focus on delivering fast, reliable, and scalable solutions 
         that are built to grow with your needs. Performance and scalability are always top of mind,
          ensuring that every line of code I write is designed for resilience and long-term success.
        </p>
        </div>
        </div>
        </section>
    )
}
