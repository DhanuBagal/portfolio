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
    <section id="contact" className="py-24 relative overflow-hidden" style={{backgroundColor:'var(--bg-main)', color:'var(--text-primary)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Nikola Radeski Style) */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono font-bold tracking-wider uppercase mb-3" style={{color:'var(--accent)'}}>
            / 07 Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight" style={{color:'var(--text-primary)'}}>
            Hello, <span style={{background:'linear-gradient(135deg, var(--accent), var(--accent-rose))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>let's talk</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{color:'var(--text-muted)'}}>
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
              <h3 className="text-2xl font-bold mb-2" style={{color:'var(--text-primary)'}}>Direct Contact</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{color:'var(--text-muted)'}}>
                Reach out directly via email or phone. I'm based in Pune, India and quick to respond.
              </p>

              <div className="space-y-3.5">
                {/* Email Card */}
                <div className="tech-card rounded-xl p-4.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{backgroundColor:'var(--bg-accent-subtle)', color:'var(--accent)'}}>
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider" style={{color:'var(--text-very-faint)'}}>Email</span>
                      <a href={`mailto:${email}`} className="block text-sm font-bold transition-colors" style={{color:'var(--text-primary)'}}>
                        {email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(email, 'Email')}
                    className="p-2 rounded-lg transition-colors"
                    style={{backgroundColor:'var(--bg-subtle)', border:'1px solid var(--border-subtle)', color:'var(--text-secondary)'}}
                    title="Copy Email"
                  >
                    {copiedText === 'Email' ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="tech-card rounded-xl p-4.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{backgroundColor:'var(--bg-accent-subtle)', color:'var(--accent)'}}>
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider" style={{color:'var(--text-very-faint)'}}>Phone</span>
                      <a href={`tel:${phone}`} className="block text-sm font-bold transition-colors" style={{color:'var(--text-primary)'}}>
                        {phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(phone, 'Phone')}
                    className="p-2 rounded-lg transition-colors"
                    style={{backgroundColor:'var(--bg-subtle)', border:'1px solid var(--border-subtle)', color:'var(--text-secondary)'}}
                    title="Copy Phone Number"
                  >
                    {copiedText === 'Phone' ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Card */}
                <div className="tech-card rounded-xl p-4.5 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{backgroundColor:'var(--bg-accent-subtle)', color:'var(--accent)'}}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider" style={{color:'var(--text-very-faint)'}}>Location</span>
                    <p className="text-sm font-bold" style={{color:'var(--text-primary)'}}>
                      {location}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-6" style={{borderTop:'1px solid var(--border-main)'}}>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider block mb-3" style={{color:'var(--text-very-faint)'}}>Profiles:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold shadow-xs transition-colors"
                  style={{backgroundColor:'var(--bg-card)', border:'1px solid var(--border-main)', color:'var(--text-secondary)'}}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>

                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold shadow-xs transition-colors"
                  style={{backgroundColor:'var(--bg-card)', border:'1px solid var(--border-main)', color:'var(--text-secondary)'}}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>

                <a
                  href={socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold shadow-xs transition-colors"
                  style={{backgroundColor:'var(--bg-card)', border:'1px solid var(--border-main)', color:'var(--text-secondary)'}}
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
          <h3 className="text-xl font-bold mb-5" style={{color:'var(--text-primary)'}}>Send Me a Message</h3>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-sm font-semibold flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{color:'var(--text-primary)'}}>Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm transition-colors focus:outline-none"
                    style={{backgroundColor:'var(--bg-subtle)', border:'1px solid var(--border-subtle)', color:'var(--text-primary)'}}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{color:'var(--text-primary)'}}>Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm transition-colors focus:outline-none"
                    style={{backgroundColor:'var(--bg-subtle)', border:'1px solid var(--border-subtle)', color:'var(--text-primary)'}}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{color:'var(--text-primary)'}}>Subject *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Engineer Opportunity"
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm transition-colors focus:outline-none"
                  style={{backgroundColor:'var(--bg-subtle)', border:'1px solid var(--border-subtle)', color:'var(--text-primary)'}}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{color:'var(--text-primary)'}}>Message *</label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share project details or role inquiries..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm transition-colors focus:outline-none resize-none"
                  style={{backgroundColor:'var(--bg-subtle)', border:'1px solid var(--border-subtle)', color:'var(--text-primary)'}}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                style={{background:'linear-gradient(135deg, var(--accent), var(--accent-hover))', boxShadow:'0 0 20px var(--border-accent)'}}
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
