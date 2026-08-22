import { motion } from 'motion/react';

interface ContactProps {
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  cvPath?: string;
}

export default function Contact({
  email = "myesil042@gmail.com",
  githubUrl = "https://github.com/Jeeareen",
  linkedinUrl = "https://www.linkedin.com/in/mustafa-yeşil",
  cvPath = "/mustafa_yesil_cv.pdf"
}: ContactProps) {
  return (
    <section className="pt-16 pb-6 px-6 bg-[#FAFAFA] text-[#111827] border-t border-gray-200/60 overflow-hidden flex flex-col justify-between">
      <div className="max-w-5xl mx-auto space-y-8 w-full flex-1">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 w-full"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFD070]/20 border border-[#FFD070]/50 text-xs font-semibold uppercase tracking-wider text-[#111827] font-['Saira_Semi_Condensed']">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-['Atkinson_Hyperlegible'] tracking-tight text-[#111827] text-center">
            Let's talk.
          </h2>
          <p className="text-lg md:text-xl font-['Atkinson_Hyperlegible'] text-gray-600 max-w-xl mx-auto text-center leading-relaxed">
            Open for Frontend AI Engineering roles, high-intent collaborations, or technical discussions.
          </p>
        </motion.div>

        {/* 2-Column Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Column 1: Direct Reach & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-white border border-gray-200/90 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold font-['Saira_Semi_Condensed'] text-gray-400 uppercase tracking-widest">
                Direct Contact
              </span>
              <h3 className="text-xl font-bold font-['Atkinson_Hyperlegible'] text-[#111827]">
                Send me a message
              </h3>
              <p className="text-sm font-['Atkinson_Hyperlegible'] text-gray-600 leading-relaxed">
                Click below to launch your email client directly.
              </p>
            </div>

            {/* Direct Mailto Button */}
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-between px-6 py-4 rounded-xl bg-[#FFD070]/20 border border-[#FFD070]/60 text-[#111827] font-semibold text-sm tracking-wide font-['Saira_Semi_Condensed'] uppercase hover:bg-[#FFD070]/40 transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{email}</span>
              </div>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Social Buttons */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 text-sm font-semibold font-['Saira_Semi_Condensed'] text-gray-700 hover:text-black hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 text-sm font-semibold font-['Saira_Semi_Condensed'] text-gray-700 hover:text-black hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Resume / CV Actions */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-white border border-gray-200/90 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold font-['Saira_Semi_Condensed'] text-gray-400 uppercase tracking-widest">
                Resume & Background
              </span>
              <h3 className="text-xl font-bold font-['Atkinson_Hyperlegible'] text-[#111827]">
                Curriculum Vitae
              </h3>
              <p className="text-sm font-['Atkinson_Hyperlegible'] text-gray-600 leading-relaxed">
                Review technical achievements, stack experience, and project background.
              </p>
            </div>

            {/* View & Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-gray-300 text-[#111827] font-semibold text-xs tracking-wider font-['Saira_Semi_Condensed'] uppercase hover:bg-gray-50 hover:border-gray-400 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>View CV</span>
              </a>

              <a
                href={cvPath}
                download="mustafa_yesil_cv.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#111827] text-white font-semibold text-xs tracking-wider font-['Saira_Semi_Condensed'] uppercase hover:bg-gray-800 transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Line */}
      <footer className="mt-8 pt-4 pb-2 border-t border-gray-200/60 text-center">
        <p className="text-xs font-['Saira_Semi_Condensed'] text-gray-500 uppercase tracking-widest">
          © {new Date().getFullYear()} Mustafa Yeşil — Frontend AI Engineer
        </p>
      </footer>
    </section>
  );
}