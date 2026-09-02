import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-black text-white mb-2">GUARDIAN LINK</div>
            <p className="text-sm text-slate-400">Connecting businesses. Protecting people.</p>
          </div>

          {/* For Talent */}
          <div>
            <h4 className="font-semibold text-white mb-4">For Talent</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition">Find Opportunities</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Build Profile</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Get Verified</a></li>
            </ul>
          </div>

          {/* For Business */}
          <div>
            <h4 className="font-semibold text-white mb-4">For Business</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition">Post Jobs</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Find Talent</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">How it Works</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Guardian Link. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
