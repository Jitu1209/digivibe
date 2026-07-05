import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDbItem, setDbItem } from '../utils/mockDb';
import { BarChart3, LineChart, PieChart, Inbox, Users, DollarSign, Percent, Globe, Star, Trash2, ArrowUpRight, Award, ShieldAlert } from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState([]);
  const [payments, setPayments] = useState([]);
  const [activeSubTab, setActiveSubTab] = useState('analytics');

  useEffect(() => {
    // Check if logged in user is admin
    const loggedInUser = getDbItem('digivibe_current_user', null);
    if (!loggedInUser || loggedInUser.email !== 'admin@digivibe.in') {
      navigate('/auth');
      return;
    }

    setLeads(getDbItem('digivibe_leads', []));
    setPayments(getDbItem('digivibe_payments', []));
  }, []);

  const handleDeleteLead = (idxToDelete) => {
    const updatedLeads = leads.filter((_, idx) => idx !== idxToDelete);
    setLeads(updatedLeads);
    setDbItem('digivibe_leads', updatedLeads);
  };

  // Calculations for stats
  const totalRevenue = payments.reduce((acc, p) => acc + (p.status === 'Success' ? p.amount : 0), 0);
  const totalEnrollments = payments.filter(p => p.status === 'Success').length;
  
  // Analytics Mock Data
  const paymentSuccessRate = 96.2;
  const engagementRate = 78.4;
  const completionRate = 42.5;

  const funnelSteps = [
    { name: 'Website Visitors', value: '12,500', pct: '100%' },
    { name: 'Syllabus Page Views', value: '4,200', pct: '33.6%' },
    { name: 'Initiated Checkout', value: '850', pct: '6.8%' },
    { name: 'Enrolled Students', value: totalEnrollments + 120, pct: '1.2%' } // Combined mock + active
  ];

  const leadSources = [
    { name: 'Google Search Ads', value: 45 },
    { name: 'Meta Performance Ads', value: 30 },
    { name: 'Organic SEO', value: 15 },
    { name: 'Direct Referrals', value: 10 }
  ];

  const mentorPerformance = [
    { name: 'Dr. Aris Rawat', course: 'AI & Data Science', rating: 4.8, count: 58 },
    { name: 'Vikram Aditya', course: 'Full Stack Development', rating: 4.7, count: 72 },
    { name: 'Kunal Sen', course: 'Digital Marketing', rating: 4.6, count: 35 },
    { name: 'Meenakshi Iyer', course: 'HR Management', rating: 4.5, count: 20 }
  ];

  return (
    <div className="text-white min-h-screen relative pt-12 pb-24">
      {/* Background glow */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6 mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-brand-yellow uppercase">Digivibe Admin Center</span>
            <h1 className="logo-font text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Analytics & CRM Console
            </h1>
          </div>
          
          {/* Action Tabs */}
          <div className="flex space-x-2">
            <button onClick={() => setActiveSubTab('analytics')} className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all ${activeSubTab === 'analytics' ? 'bg-brand-yellow text-black' : 'bg-white/5 border border-white/10 text-gray-300 hover:text-white'}`}>
              Analytics Report
            </button>
            <button onClick={() => setActiveSubTab('leads')} className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all ${activeSubTab === 'leads' ? 'bg-brand-yellow text-black' : 'bg-white/5 border border-white/10 text-gray-300 hover:text-white'}`}>
              Leads Inbox ({leads.length})
            </button>
          </div>
        </div>

        {activeSubTab === 'analytics' ? (
          /* ANALYTICS DASHBOARD VIEW */
          <div className="space-y-10 animate-fade-in">
            
            {/* Stat Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="glass-panel p-6 rounded-2xl border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-bold">Total Revenue</span>
                  <p className="text-2xl font-extrabold font-mono mt-1">₹{totalRevenue.toLocaleString()}</p>
                </div>
                <div className="bg-[#4ADE80]/15 text-[#4ADE80] p-2.5 rounded-xl">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-bold">Success Enrollments</span>
                  <p className="text-2xl font-extrabold font-mono mt-1">{totalEnrollments}</p>
                </div>
                <div className="bg-brand-orange/15 text-brand-orange p-2.5 rounded-xl">
                  <Users className="w-5 h-5" />
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-bold">Payment Success Rate</span>
                  <p className="text-2xl font-extrabold font-mono mt-1">{paymentSuccessRate}%</p>
                </div>
                <div className="bg-[#60A5FA]/15 text-[#60A5FA] p-2.5 rounded-xl">
                  <Percent className="w-5 h-5" />
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-bold">Academy Leads</span>
                  <p className="text-2xl font-extrabold font-mono mt-1">{leads.length}</p>
                </div>
                <div className="bg-brand-yellow/15 text-brand-yellow p-2.5 rounded-xl">
                  <Inbox className="w-5 h-5" />
                </div>
              </div>

            </div>

            {/* Traffic & Conversion Funnels Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Conversion Funnel */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                  <LineChart className="w-4.5 h-4.5 text-brand-yellow" />
                  <span>Interactive Conversion Funnel</span>
                </h3>
                <div className="space-y-3.5 pt-4">
                  {funnelSteps.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex justify-between items-center text-xs mb-1.5">
                        <span className="text-gray-300 font-medium">{step.name}</span>
                        <span className="font-mono text-white font-bold">{step.value} ({step.pct})</span>
                      </div>
                      <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-brand-orange to-brand-yellow h-full" style={{ width: step.pct }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead Source Breakdown */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                  <PieChart className="w-4.5 h-4.5 text-brand-yellow" />
                  <span>Lead Attribution Sources</span>
                </h3>
                <div className="space-y-3.5 pt-4 text-xs">
                  {leadSources.map((src, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-gray-400 flex items-center">
                        <Globe className="w-4 h-4 text-brand-orange mr-2" />
                        {src.name}
                      </span>
                      <span className="font-bold text-white">{src.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Mentor Performance and Engagement Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Mentor Stats */}
              <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Mentor Performance Ratings</h3>
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-white/5 text-gray-500 pb-2">
                      <th className="py-2">Mentor Name</th>
                      <th className="py-2">Course Module</th>
                      <th className="py-2 text-center">Avg Rating</th>
                      <th className="py-2 text-right">Reviews</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mentorPerformance.map((m, idx) => (
                      <tr key={idx} className="border-b border-white/5 last:border-b-0 text-gray-300">
                        <td className="py-2.5 font-semibold text-white">{m.name}</td>
                        <td className="py-2.5 text-gray-400">{m.course}</td>
                        <td className="py-2.5 text-center font-bold text-brand-yellow flex items-center justify-center">
                          <Star className="w-3.5 h-3.5 fill-current mr-1" />
                          <span>{m.rating}</span>
                        </td>
                        <td className="py-2.5 text-right font-mono text-gray-500">{m.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Engagement & Completion Rates */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Syllabus Progress Metrics</h3>
                  <div className="mt-6 text-center space-y-2">
                    <span className="text-4xl font-extrabold font-mono text-white">{completionRate}%</span>
                    <p className="text-xs text-gray-400">Course Completion Rate</p>
                  </div>
                  <div className="mt-6 text-center space-y-2">
                    <span className="text-4xl font-extrabold font-mono text-white">{engagementRate}%</span>
                    <p className="text-xs text-gray-400">Active Weekly Interaction Rate</p>
                  </div>
                </div>
                <div className="border-t border-white/5 pt-4 text-[10px] text-gray-500 leading-normal text-justify">
                  Measurements reflect student ticks in recorded lecture modules and mock exam assessment logs.
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* LEADS CRM INBOX VIEW */
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 border-l-2 border-brand-yellow pl-3">Lead Submission Inbox</h3>
            
            {leads.length === 0 ? (
              <div className="glass-panel p-8 rounded-2xl text-center max-w-md mx-auto space-y-4">
                <Inbox className="w-10 h-10 text-gray-500 mx-auto" />
                <h4 className="font-bold text-white text-sm">Leads Inbox is Empty</h4>
                <p className="text-xs text-gray-400">No new client consultation or academy registration request found.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {leads.map((lead, idx) => (
                  <div key={idx} className="glass-panel p-6 rounded-xl border border-white/10 relative space-y-4">
                    
                    {/* Badge header */}
                    <div className="flex items-center justify-between">
                      <span className={`text-[9px] font-bold uppercase px-2.5 py-0.5 rounded tracking-widest ${lead.type === 'Agency' ? 'bg-[#3399FF]/10 border border-[#3399FF]/30 text-[#3399FF]' : 'bg-brand-orange/10 border border-brand-orange/30 text-brand-orange'}`}>
                        {lead.type} Request
                      </span>
                      <div className="flex items-center space-x-2 text-[10px] text-gray-500 font-mono">
                        <span>{new Date(lead.date).toLocaleDateString()} {new Date(lead.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        <button onClick={() => handleDeleteLead(idx)} className="text-gray-500 hover:text-brand-red p-1 rounded focus:outline-none transition-colors" title="Delete Inquiry">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Metadata fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                      <div>
                        <span className="text-gray-500 block uppercase text-[9px] font-bold">Contact Name:</span>
                        <span className="text-white font-medium">{lead.name}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block uppercase text-[9px] font-bold">Email Address:</span>
                        <span className="text-white font-mono">{lead.email}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block uppercase text-[9px] font-bold">Phone Number:</span>
                        <span className="text-white font-mono">{lead.phone}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs border-t border-white/5 pt-3">
                      {lead.type === 'Agency' ? (
                        <>
                          <div>
                            <span className="text-gray-500 block uppercase text-[9px] font-bold">Company Name:</span>
                            <span className="text-white">{lead.company}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 block uppercase text-[9px] font-bold">Service Category:</span>
                            <span className="text-white">{lead.service}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 block uppercase text-[9px] font-bold">Project Budget:</span>
                            <span className="text-brand-yellow font-bold font-mono">{lead.budget}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <span className="text-gray-500 block uppercase text-[9px] font-bold">College / Org:</span>
                            <span className="text-white">{lead.college}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 block uppercase text-[9px] font-bold">Interest Program:</span>
                            <span className="text-white uppercase font-mono">{lead.course}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 block uppercase text-[9px] font-bold">Current Status:</span>
                            <span className="text-white">{lead.status}</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Messages briefs */}
                    {lead.message && (
                      <div className="bg-white/5 border border-white/5 p-3 rounded-lg text-xs text-gray-300">
                        <strong className="text-[9px] text-gray-400 block uppercase mb-1">Message Content:</strong>
                        <p className="italic">"{lead.message}"</p>
                      </div>
                    )}

                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
