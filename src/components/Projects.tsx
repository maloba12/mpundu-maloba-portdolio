import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Coding Progress Tracker",
      description: "A modern, responsive web application to track your coding progress, set goals, and monitor your programming journey.",
      tags: ["React", "Tailwind", "Firebase"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "MaanoAI",
      description: "Maano AI is a comprehensive learning platform that brings multiple AI models (ChatGPT, Claude, Gemini, Qwen, etc.) into a single, safe, and student-friendly interface. It helps learners pick the right AI for each task, compare answers side by side, and build AI literacy while supporting teachers with classroom tools, analytics, and content safeguards.",
      tags: ["JavaScript", "HTML", "Shell", "Batchfile", "CSS"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Sayansi Yathu",
      description: "Sayansi Yathu is a comprehensive virtual science laboratory designed specifically for Zambian secondary schools. It provides interactive 3D and 2D simulations for physics, chemistry, and biology experiments, with AI-powered tutoring and offline capabilities.",
      tags: ["Python", "PHP", "JavaScript", "HTML", "CSS", "Batchfile"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "ZamEdu Voice",
      description: "Mobile-first social platform for creative professionals",
      tags: ["Java", "HTML", "CSS"],
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Group Project: ZamSure Insurance System",
      description: "A comprehensive system for managing insurance policies, claims, and client information.s",
      tags: ["PHP", "JavaScript", "HTML", "CSS"],
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and design approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-6 rounded-xl hover-lift group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder with Gradient */}
              <div className={`w-full h-48 rounded-lg bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />
                <span className="text-white font-bold text-2xl z-10">{project.title}</span>
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
