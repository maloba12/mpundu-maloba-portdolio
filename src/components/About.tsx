import { Code2, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Code2, title: "Web Development", description: "Building responsive and performant web applications" },
    { icon: Palette, title: "UI/UX Design", description: "Creating beautiful and intuitive user interfaces" },
    { icon: Zap, title: "Performance", description: "Optimizing for speed and efficiency" },
    { icon: Users, title: "Collaboration", description: "Working effectively in team environments" },
  ];

  const technologies = [
    "React", "TypeScript", "Tailwind CSS", "Node.js",
    "java", "php", "JavaScript", "HTML/CSS", "Git", "Mysql"
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating innovative digital solutions that make a difference
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass-card p-6 rounded-xl hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 glow-effect">
                <skill.icon className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="glass-card p-8 rounded-xl animate-fade-in-up">
          <h3 className="text-2xl font-semibold mb-6 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-sm font-medium hover:border-primary/50 transition-all hover:scale-105 cursor-default animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
