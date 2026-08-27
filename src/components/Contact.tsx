import { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface ContactProps {
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  cvPath?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact({
  email = "myesil042@gmail.com",
  githubUrl = "https://github.com/Jeeareen",
  linkedinUrl = "https://www.linkedin.com/in/mustafa-yeşil",
  cvPath = "/mustafa_yesil_cv.pdf"
}: ContactProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const validateForm = (formData: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    const name = (formData.get('name') as string || '').trim();
    const emailValue = (formData.get('email') as string || '').trim();
    const message = (formData.get('message') as string || '').trim();

    if (!name) {
      newErrors.name = 'Please enter your name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(emailValue)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!message) {
      newErrors.message = 'Please enter a message.';
    } else if (message.length < 10) {
      newErrors.message = `Message must be at least 10 characters (currently ${message.length}).`;
    }

    return newErrors;
  };

  const handleInputChange = (field: keyof FormErrors) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const executeSubmission = async (form: HTMLFormElement) => {
    const formData = new FormData(form);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('idle');
      return;
    }

    setErrors({});
    setStatus('submitting');

    formData.append("access_key", "339ebc9d-dd51-4e7a-aa2a-752d440e5a6f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        form.reset();
        setTimeout(() => {
          setStatus('idle');
        }, 4000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting' || status === 'success') return;
    executeSubmission(e.currentTarget);
  };

  const handleRetryClick = () => {
    if (status === 'submitting' || status === 'success') return;
    if (formRef.current) {
      executeSubmission(formRef.current);
    }
  };

  return (
    <section className="pt-16 pb-6 px-6 bg-[#FAFAFA] text-[#111827] border-t border-gray-200/60 overflow-hidden flex flex-col justify-between">
      <div className="max-w-6xl mx-auto space-y-8 w-full flex-1">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.5 }}
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

        {/* Connected Top Card (Direct Contact + Socials + CV) */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.5, delay: shouldReduceMotion ? 0 : 0.1 }}
          className="p-7 md:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          {/* Left Column: Direct Mail & Social Links */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold font-['Saira_Semi_Condensed'] text-gray-400 uppercase tracking-widest">
                Direct Contact
              </span>
              <h3 className="text-xl font-bold font-['Atkinson_Hyperlegible'] text-[#111827]">
                Reach out directly
              </h3>
              <p className="text-sm font-['Atkinson_Hyperlegible'] text-gray-600 leading-relaxed">
                Prefer sending an email directly from your mail app or checking social profiles?
              </p>
            </div>

            <div className="space-y-3 pt-1">
              {/* Direct Mailto Button */}
              <a
                href={`mailto:${email}`}
                className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-[#FFD070]/20 border border-[#FFD070]/60 text-[#111827] font-semibold text-xs tracking-wide font-['Saira_Semi_Condensed'] uppercase hover:bg-[#FFD070]/40 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <svg className="w-4 h-4 text-[#111827] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="truncate">{email}</span>
                </div>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* Social Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-xl border border-gray-200 text-xs font-semibold font-['Saira_Semi_Condensed'] text-gray-700 hover:text-black hover:border-gray-400 hover:bg-gray-50 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 uppercase tracking-wider cursor-pointer"
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
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-xl border border-gray-200 text-xs font-semibold font-['Saira_Semi_Condensed'] text-gray-700 hover:text-black hover:border-gray-400 hover:bg-gray-50 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 uppercase tracking-wider cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Resume & Background CV */}
          <div className="flex flex-col justify-between space-y-6 pt-6 lg:pt-0 lg:border-l lg:border-gray-200/80 lg:pl-8">
            <div className="space-y-3">
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
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href={cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-300 text-[#111827] font-semibold text-xs tracking-wider font-['Saira_Semi_Condensed'] uppercase shadow-sm hover:bg-gray-50 hover:border-gray-400 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group cursor-pointer"
              >
                <svg className="w-4 h-4 animate-eye-blink shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>View CV</span>
              </a>

              <a
                href={cvPath}
                download="mustafa_yesil_cv.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#111827] text-white font-semibold text-xs tracking-wider font-['Saira_Semi_Condensed'] uppercase hover:bg-gray-800 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group cursor-pointer"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v11m0 0l-3.5-3.5M12 14l3.5-3.5"
                    className="transform -translate-y-1 group-hover:translate-y-0.5 transition-transform duration-200 ease-out"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 17v1a2 2 0 002 2h12a2 2 0 002-2v-1"
                  />
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Card: Web3Forms Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.5, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="pt-6"
        >
          <div className="p-7 md:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold font-['Saira_Semi_Condensed'] text-gray-400 uppercase tracking-widest">
                  Quick Form
                </span>
                <h3 className="text-xl font-bold font-['Atkinson_Hyperlegible'] text-[#111827] mt-1">
                  Send a direct message
                </h3>
                <p className="text-sm font-['Atkinson_Hyperlegible'] text-gray-600 mt-1">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form ref={formRef} noValidate onSubmit={handleSubmit} className="space-y-4">
                {/* Hidden subject field for Web3Forms email subject line */}
                <input
                  type="hidden"
                  name="subject"
                  value="New Submission from Portfolio Contact Form"
                />

                {/* Hidden honeypot botcheck field */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field (Required) */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider font-['Saira_Semi_Condensed'] text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      onChange={() => handleInputChange('name')}
                      className={`w-full px-4 py-2.5 rounded-xl border bg-gray-50/50 text-sm font-['Atkinson_Hyperlegible'] text-[#111827] placeholder:text-gray-400 focus:outline-none transition-all ${errors.name
                        ? 'border-red-400 focus:ring-2 focus:ring-red-400/40 focus:border-red-400'
                        : 'border-gray-200 focus:ring-2 focus:ring-[#FFD070] focus:border-transparent'
                        }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 font-['Atkinson_Hyperlegible'] mt-1 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Company Field (Optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider font-['Saira_Semi_Condensed'] text-gray-700">
                      Company <span className="text-gray-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Acme Inc."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm font-['Atkinson_Hyperlegible'] text-[#111827] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD070] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Email Field (Required) */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider font-['Saira_Semi_Condensed'] text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jane@example.com"
                    onChange={() => handleInputChange('email')}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-gray-50/50 text-sm font-['Atkinson_Hyperlegible'] text-[#111827] placeholder:text-gray-400 focus:outline-none transition-all ${errors.email
                      ? 'border-red-400 focus:ring-2 focus:ring-red-400/40 focus:border-red-400'
                      : 'border-gray-200 focus:ring-2 focus:ring-[#FFD070] focus:border-transparent'
                      }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 font-['Atkinson_Hyperlegible'] mt-1 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message Field (Required, minLength=10) */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider font-['Saira_Semi_Condensed'] text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project, role, or ideas..."
                    onChange={() => handleInputChange('message')}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-gray-50/50 text-sm font-['Atkinson_Hyperlegible'] text-[#111827] placeholder:text-gray-400 focus:outline-none resize-none transition-all ${errors.message
                      ? 'border-red-400 focus:ring-2 focus:ring-red-400/40 focus:border-red-400'
                      : 'border-gray-200 focus:ring-2 focus:ring-[#FFD070] focus:border-transparent'
                      }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-xs text-red-500 font-['Atkinson_Hyperlegible'] mt-1 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Interactive State Machine Submit Button */}
                <div className="pt-2">
                  <AnimatePresence mode="wait">
                    {status === 'idle' && (
                      <motion.button
                        key="idle"
                        type="submit"
                        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.99 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.99 }}
                        transition={{ duration: 0.2 }}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111827] text-white font-semibold text-xs tracking-wider font-['Saira_Semi_Condensed'] uppercase hover:bg-gray-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group cursor-pointer"
                      >
                        <span>Send Message</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.button>
                    )}

                    {status === 'submitting' && (
                      <motion.button
                        key="submitting"
                        type="button"
                        disabled
                        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.99 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.99 }}
                        transition={{ duration: 0.1 }}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gray-800 text-white font-semibold text-xs tracking-wider font-['Saira_Semi_Condensed'] uppercase cursor-not-allowed shadow-sm opacity-90"
                      >
                        <span className="inline-flex items-center gap-1">
                          <span className={shouldReduceMotion ? '' : 'bg-gradient-to-r from-gray-100 via-white to-gray-400 bg-clip-text text-transparent animate-pulse'}>
                            Sending
                          </span>
                          <span className="inline-flex ml-0.5 space-x-0.5">
                            <motion.span animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0 }}>.</motion.span>
                            <motion.span animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}>.</motion.span>
                            <motion.span animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}>.</motion.span>
                          </span>
                        </span>
                      </motion.button>
                    )}

                    {status === 'success' && (
                      <motion.button
                        key="success"
                        type="button"
                        disabled
                        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
                        transition={{ type: "spring", stiffness: 500, damping: 28 }}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs tracking-wider font-['Saira_Semi_Condensed'] uppercase cursor-not-allowed shadow-md"
                      >
                        <svg
                          className="w-4 h-4 text-white shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: shouldReduceMotion ? 0.1 : 0.3, ease: "easeOut" }}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Sent Successfully</span>
                      </motion.button>
                    )}

                    {status === 'error' && (
                      <motion.button
                        key="error"
                        type="button"
                        onClick={handleRetryClick}
                        initial={{ opacity: 0, x: 0 }}
                        animate={{
                          opacity: 1,
                          x: shouldReduceMotion ? 0 : [0, -12, 12, -8, 8, -4, 4, 0]
                        }}
                        exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.99 }}
                        transition={{
                          x: { duration: 0.4, ease: "easeInOut" },
                          opacity: { duration: 0.1 }
                        }}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#111827] font-semibold text-xs tracking-wider font-['Saira_Semi_Condensed'] uppercase shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                      >
                        <svg className="w-4 h-4 text-[#111827] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>Something went wrong — Try Again</span>
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </motion.div>
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