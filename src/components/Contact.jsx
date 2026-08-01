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
    <section id="contact" className="py-24 relative overflow-hidden bg-[#FAF7F7] dark:bg-[#1A1D24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Nikola Radeski Style) */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-[#D98F9D] dark:text-[#D98F9D] mb-3">
            / 07 Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#222222] dark:text-white tracking-tight leading-tight">
            Hello, <span className="text-[#D98F9D]">let's talk</span>
          </h2>
          <p className="text-[#2F3640] dark:text-slate-300 mt-3 max-w-2xl text-base leading-relaxed">
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
              <h3 className="text-2xl font-bold text-[#222222] dark:text-white mb-2">Direct Contact</h3>
              <p className="text-sm text-[#2F3640] dark:text-slate-300 mb-6 leading-relaxed">
                Reach out directly via email or phone. I'm based in Pune, India and quick to respond.
              </p>

              <div className="space-y-3.5">
                {/* Email Card */}
                <div className="rose-card rounded-xl p-4.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#F2D5DA] dark:bg-[#3F2B32] text-[#D98F9D] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-[#8B93A0] dark:text-slate-500 uppercase tracking-wider">Email</span>
                      <a href={`mailto:${email}`} className="block text-sm font-bold text-[#222222] dark:text-white hover:text-[#D98F9D] transition-colors">
                        {email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(email, 'Email')}
                    className="p-2 rounded-lg bg-[#FAF7F7] dark:bg-[#2A2F3A] border border-[#EFE4E6] dark:border-[#383E4B] text-[#2F3640] dark:text-slate-400 hover:text-[#D98F9D] transition-colors"
                    title="Copy Email"
                  >
                    {copiedText === 'Email' ? <CheckCircle2 className="w-4 h-4 text-[#D98F9D]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="rose-card rounded-xl p-4.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#F2D5DA] dark:bg-[#3F2B32] text-[#D98F9D] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-[#8B93A0] dark:text-slate-500 uppercase tracking-wider">Phone</span>
                      <a href={`tel:${phone}`} className="block text-sm font-bold text-[#222222] dark:text-white hover:text-[#D98F9D] transition-colors">
                        {phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(phone, 'Phone')}
                    className="p-2 rounded-lg bg-[#FAF7F7] dark:bg-[#2A2F3A] border border-[#EFE4E6] dark:border-[#383E4B] text-[#2F3640] dark:text-slate-400 hover:text-[#D98F9D] transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedText === 'Phone' ? <CheckCircle2 className="w-4 h-4 text-[#D98F9D]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Card */}
                <div className="rose-card rounded-xl p-4.5 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#F2D5DA] dark:bg-[#3F2B32] text-[#D98F9D] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#8B93A0] dark:text-slate-500 uppercase tracking-wider">Location</span>
                    <p className="text-sm font-bold text-[#222222] dark:text-white">
                      {location}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-6 border-t border-[#EFE4E6] dark:border-[#383E4B]">
              <span className="text-xs font-semibold text-[#8B93A0] dark:text-slate-500 uppercase tracking-wider block mb-3">Profiles:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-white dark:bg-[#242831] border border-[#EFE4E6] dark:border-[#383E4B] hover:border-[#D98F9D] text-[#222222] dark:text-slate-300 hover:text-[#D98F9D] flex items-center justify-center gap-2 text-xs font-semibold shadow-xs transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>

                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-white dark:bg-[#242831] border border-[#EFE4E6] dark:border-[#383E4B] hover:border-[#D98F9D] text-[#222222] dark:text-slate-300 hover:text-[#D98F9D] flex items-center justify-center gap-2 text-xs font-semibold shadow-xs transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>

                <a
                  href={socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-white dark:bg-[#242831] border border-[#EFE4E6] dark:border-[#383E4B] hover:border-[#D98F9D] text-[#222222] dark:text-slate-300 hover:text-[#D98F9D] flex items-center justify-center gap-2 text-xs font-semibold shadow-xs transition-colors"
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
            className="lg:col-span-7 rose-card rounded-2xl p-7 sm:p-8"
          >
            <h3 className="text-xl font-bold text-[#222222] dark:text-white mb-5">Send Me a Message</h3>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-[#F2D5DA] dark:bg-[#3F2B32] border border-[#E4B8C1] dark:border-[#7F3643] text-[#8B3B4A] dark:text-[#F2D5DA] text-sm font-semibold flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#D98F9D] shrink-0" />
                <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#222222] dark:text-slate-300 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F7] dark:bg-[#2A2F3A] border border-[#EFE4E6] dark:border-[#383E4B] text-[#222222] dark:text-white placeholder-[#8B93A0] focus:outline-none focus:border-[#D98F9D] text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#222222] dark:text-slate-300 mb-1.5">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F7] dark:bg-[#2A2F3A] border border-[#EFE4E6] dark:border-[#383E4B] text-[#222222] dark:text-white placeholder-[#8B93A0] focus:outline-none focus:border-[#D98F9D] text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#222222] dark:text-slate-300 mb-1.5">Subject *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Engineer Opportunity"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F7] dark:bg-[#2A2F3A] border border-[#EFE4E6] dark:border-[#383E4B] text-[#222222] dark:text-white placeholder-[#8B93A0] focus:outline-none focus:border-[#D98F9D] text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#222222] dark:text-slate-300 mb-1.5">Message *</label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share project details or role inquiries..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F7] dark:bg-[#2A2F3A] border border-[#EFE4E6] dark:border-[#383E4B] text-[#222222] dark:text-white placeholder-[#8B93A0] focus:outline-none focus:border-[#D98F9D] text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-[#D98F9D] hover:bg-[#C77D8B] text-white font-semibold text-sm shadow-xs transition-all flex items-center justify-center gap-2 disabled:opacity-50"
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
