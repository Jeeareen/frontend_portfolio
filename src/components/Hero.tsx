import { useState } from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  githubUrl?: string;
  linkedinUrl?: string;
}

export default function Hero({
  githubUrl = "https://github.com/Jeeareen",
  linkedinUrl = "https://www.linkedin.com/in/mustafa-yeşil"
}: HeroProps) {
  const [isHovered, setIsHovered] = useState(false);

  const techStack = [
    'React',
    'Next.js',
    'TypeScript',
    'Vite',
    'Tailwind CSS',
    'Motion',
    'AI Engineering'
  ];

  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-28 md:pt-32 pb-20 bg-[#FAFAFA] text-[#111827]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-4xl mx-auto flex flex-col items-center gap-8"
      >
        {/* Title / Name with Stationary Heading & Absolute Floating Indicator */}
        <div className="flex flex-col items-center w-full space-y-4 text-center">
          <div className="relative inline-block text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-['Atkinson_Hyperlegible'] tracking-tight text-[#111827] leading-tight text-center">
              Mustafa Yeşil <span className="text-gray-400 font-light">—</span> <span className="text-gray-600 font-normal">Frontend Engineer</span>
            </h1>

            {/* Absolute Floating Indicator (zero layout shift on heading) */}
            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsHovered((prev) => !prev)}
              className="absolute -top-[20px] -right-2 md:-right-6 inline-flex items-center cursor-pointer select-none bg-white border border-gray-200/90 shadow-xs rounded-full py-1.5 px-2.5 transition-all hover:border-gray-300 z-10"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>

              <motion.span
                initial={false}
                animate={{
                  width: isHovered ? 'auto' : 0,
                  opacity: isHovered ? 1 : 0,
                  marginLeft: isHovered ? 8 : 0
                }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden whitespace-nowrap text-xs font-semibold uppercase tracking-wider font-['Saira_Semi_Condensed'] text-gray-700"
              >
                Available for work
              </motion.span>
            </motion.div>
          </div>

          {/* One-line Claim */}
          <p className="text-xl md:text-2xl font-['Atkinson_Hyperlegible'] font-normal text-[#111827]/80 max-w-2xl text-center mx-auto leading-relaxed pt-2">
            "I ship experiences, not interfaces — built for how it feels to use, not how it looks."
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 pt-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1 rounded-md bg-[#FFD070]/20 border border-[#FFD070]/50 text-xs font-semibold uppercase tracking-wider text-[#111827] font-['Saira_Semi_Condensed'] transition-all hover:bg-[#FFD070]/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Social Icons (GitHub, LinkedIn) */}
        <div className="flex items-center gap-4 pt-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:text-black hover:border-gray-400 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:text-black hover:border-gray-400 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}