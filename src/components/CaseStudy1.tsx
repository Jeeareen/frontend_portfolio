import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import previewImage from '../assets/soloberty-preview.png';

export default function CaseStudy1() {
  const keyDecisions = [
    {
      title: 'High-Performance 3D Card Stack',
      description: 'Snappy, UX-friendly 3D card animations optimized by rendering only 5 cards at a time — maximizing performance and delighting short attention spans.'
    },
    {
      title: 'Psychology-Driven 2x Undo Limit',
      description: 'Allows only 2x undo actions to curb decision paralysis, forgiving accidental swipes without rewarding mindless backtracking.'
    },
    {
      title: 'Instant Profile Preview',
      description: 'Tap card to seamlessly toggle detailed bio & interests without breaking swipe momentum or state.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#FAFAFA] text-[#111827] border-t border-gray-200/60">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 w-full"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFD070]/20 border border-[#FFD070]/50 text-xs font-semibold uppercase tracking-wider text-[#111827] font-['Saira_Semi_Condensed']">
            Featured Case Study
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-['Atkinson_Hyperlegible'] tracking-tight text-[#111827] text-center">
            Soloberty MatchCards
          </h1>
          <p className="text-lg md:text-xl font-['Atkinson_Hyperlegible'] text-gray-600 max-w-xl mx-auto text-center leading-relaxed">
            Rethinking social discovery card stacks — built for how it feels to use, not just how it looks.
          </p>
        </motion.div>

        {/* Screenshot / Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-xl p-2 md:p-4 transition-all hover:shadow-2xl"
        >
          <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-video md:aspect-[16/9] flex items-center justify-center">
            <img
              src={previewImage}
              alt="Soloberty MatchCards Interface Screenshot"
              className="w-full h-full object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-500 ease-out"
            />
          </div>
        </motion.div>

        {/* Key UX Decisions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4"
        >
          {keyDecisions.map((decision, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold font-['Saira_Semi_Condensed'] text-gray-400 tracking-widest uppercase">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-bold font-['Atkinson_Hyperlegible'] text-[#111827]">
                  {decision.title}
                </h3>
                <p className="text-sm font-['Atkinson_Hyperlegible'] text-gray-600 leading-relaxed">
                  {decision.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Links to /demo and GitHub Repository */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <Link
            to="/demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#FFD070] text-[#111827] font-semibold text-base tracking-wide font-['Saira_Semi_Condensed'] uppercase shadow-md hover:bg-[#ffe099] hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0.5 transition-all duration-150 group cursor-pointer select-none"
          >
            <span>Wanna try?</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <a
            href="https://github.com/Jeeareen/soloberty"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white border border-gray-300 text-[#111827] font-semibold text-base tracking-wide font-['Saira_Semi_Condensed'] uppercase shadow-xs hover:border-gray-400 hover:bg-gray-50 hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0.5 transition-all duration-150 group cursor-pointer select-none"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub Repo</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

