import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, Copy, Linkedin, Github, Code, Calendar
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { email, phone, location, socials } = portfolioData.personal;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedText, setCopiedText] = useState(null);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#F8FAFC] dark:bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Nikola Radeski Style) */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 mb-3">
            / 07 Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Hello, <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">let's talk</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl text-base leading-relaxed">
            Open for full-stack software engineering opportunities, project collaborations, or a quick technical conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Direct Contact</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Reach out directly via email or phone. I'm based in Pune, India and quick to respond.
              </p>

              <div className="space-y-3.5">
                {/* Email Card */}
                <div className="tech-card rounded-xl p-4.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email</span>
                      <a href={`mailto:${email}`} className="block text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                        {email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(email, 'Email')}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                    title="Copy Email"
                  >
                    {copiedText === 'Email' ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="tech-card rounded-xl p-4.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Phone</span>
                      <a href={`tel:${phone}`} className="block text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                        {phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(phone, 'Phone')}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedText === 'Phone' ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Card */}
                <div className="tech-card rounded-xl p-4.5 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</span>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {location}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">Profiles:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-white dark:bg-[#161E2E] border border-slate-200 dark:border-slate-800 hover:border-indigo-500/60 text-slate-800 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 flex items-center justify-center gap-2 text-xs font-semibold shadow-xs transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>

                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-white dark:bg-[#161E2E] border border-slate-200 dark:border-slate-800 hover:border-indigo-500/60 text-slate-800 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 flex items-center justify-center gap-2 text-xs font-semibold shadow-xs transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>

                <a
                  href={socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-white dark:bg-[#161E2E] border border-slate-200 dark:border-slate-800 hover:border-indigo-500/60 text-slate-800 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 flex items-center justify-center gap-2 text-xs font-semibold shadow-xs transition-colors"
                >
                  <Code className="w-4 h-4" />
                  LeetCode
                </a>
              </div>
            </div>

          </motion.div>

          {/* Contact Message Form */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="lg:col-span-7 tech-card rounded-2xl p-7 sm:p-8"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5">Send Me a Message</h3>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-sm font-semibold flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">Subject *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Engineer Opportunity"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">Message *</label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share project details or role inquiries..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-sm shadow-indigo-glow transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
