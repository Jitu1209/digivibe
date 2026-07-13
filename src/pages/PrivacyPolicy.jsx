import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, Calendar, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-transparent pt-12 pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumbs / Back button */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-brand-purple transition-all group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero header */}
        <div className="glass-panel p-8 rounded-3xl border border-slate-200/80 mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex items-center space-x-3 text-brand-purple mb-4">
            <ShieldCheck className="w-6 h-6" />
            <span className="text-xs font-extrabold uppercase tracking-widest bg-brand-purple/10 px-2.5 py-1 rounded-full">
              Legal Compliance & Safety
            </span>
          </div>
          
          <h1 className="logo-font text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          
          <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Last Updated: January 10, 2026</span>
            </span>
            <span className="flex items-center space-x-1">
              <FileText className="w-3.5 h-3.5" />
              <span>Platform Version 2.4</span>
            </span>
          </div>
        </div>

        {/* Policy Content */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/80 space-y-12 text-slate-600 leading-relaxed text-sm">
          
          <div>
            <p className="text-base text-slate-700 font-medium mb-4">
              This Privacy Policy describes how BeyondSkills (“we”, “our”, “us”) collects, uses, stores, and protects your personal information when you access or use our website and services.
            </p>
            <p>
              By visiting our website at <a href="https://www.beyondskills.in" className="text-brand-purple font-semibold hover:underline">https://www.beyondskills.in</a> (or related routing domains), you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </div>

          <hr className="border-slate-200" />

          {/* Section 1 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-purple/10 text-brand-purple font-mono text-xs font-bold">1</span>
              <span>Information We Collect</span>
            </h3>
            <p>We collect personal information that you provide to us directly or that is gathered automatically during your use of our platforms. This includes:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-500">
              <li><strong>Personal Identifiable Data:</strong> Your name, email address, phone number, and mailing address.</li>
              <li><strong>Account Credentials:</strong> Onboarding and registration details used to provision student spaces.</li>
              <li><strong>Communications Data:</strong> Information sent via support emails, live chats, and query boards.</li>
              <li><strong>Technical Logs:</strong> IP address, device specifications, operating system parameters, and browser settings.</li>
              <li><strong>Interaction Statistics:</strong> Pages visited, duration of stay, and dynamic client click actions.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-purple/10 text-brand-purple font-mono text-xs font-bold">2</span>
              <span>How We Use Your Information</span>
            </h3>
            <p>The information we collect is deployed to maintain our operational parameters and deliver professional services, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-500">
              <li>To provide, operate, and continuously optimize our learning environments.</li>
              <li>To personalize candidate lessons, dashboards, and metrics.</li>
              <li>To send essential security notifications, weekly logs, and updates.</li>
              <li>To process transaction tokens and secure dashboard access layers.</li>
              <li>To perform predictive analytics and prevent security system breaches.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-purple/10 text-brand-purple font-mono text-xs font-bold">3</span>
              <span>Log Files</span>
            </h3>
            <p>
              BeyondSkills follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-purple/10 text-brand-purple font-mono text-xs font-bold">4</span>
              <span>Cookies & Tracking Technologies</span>
            </h3>
            <p>
              We use cookies to improve system response times, analyze user traffic patterns, and save active student preferences. Cookies do not scan your hard drive. You may toggle off cookies via individual browser options, though doing so might disrupt page styling or render student dashboards temporarily inaccessible.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-purple/10 text-brand-purple font-mono text-xs font-bold">5</span>
              <span>Third-Party Privacy Policies</span>
            </h3>
            <p>
              BeyondSkills’ Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-purple/10 text-brand-purple font-mono text-xs font-bold">6</span>
              <span>CCPA Privacy Rights</span>
            </h3>
            <p>Under the CCPA, among other rights, California consumers have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-500">
              <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
              <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
              <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-purple/10 text-brand-purple font-mono text-xs font-bold">7</span>
              <span>GDPR Data Protection Rights</span>
            </h3>
            <p>We want to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-500">
              <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
              <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
              <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
              <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-purple/10 text-brand-purple font-mono text-xs font-bold">8</span>
              <span>Children's Privacy</span>
            </h3>
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. BeyondSkills does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>
          </div>

          <hr className="border-slate-200" />
          
          <div className="text-center text-xs text-slate-400">
            <p>If you have any questions or concerns regarding this policy, please reach out to <a href="mailto:support@beyondskills.in" className="text-brand-purple hover:underline">support@beyondskills.in</a>.</p>
          </div>

        </div>

      </div>
    </div>
  );
}
