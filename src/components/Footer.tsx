import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Mpundu maloba. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1 mt-2">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> using React & Tailwind
            </p>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/maloba12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:border-primary/50 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="www.linkedin.com/in/mpundu-maloba-186b26271"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:border-primary/50 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:mpundumaloba23@gmail.com"
              className="p-3 rounded-full glass-card hover:border-primary/50 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
