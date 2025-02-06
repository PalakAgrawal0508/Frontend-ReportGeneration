import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../../types/auth';
import { useAuth } from '../../hooks/useAuth';
import { Building2, GraduationCap, Info, ExternalLink } from 'lucide-react';
import Footer from '../../components/layout/Footer';

export default function Login() {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [role, setRole] = useState<UserRole>('FACULTY');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password, role);
      navigate(`/${role.toLowerCase()}/dashboard`);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a237e] to-[#0d47a1] relative">
      {/* Info Bar */}
      <div className="bg-[#002147] text-white py-3 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <Building2 size={24} className="text-blue-200" />
          <span className="text-sm md:text-base font-medium text-center md:text-left">
            Track,Analyze and Manage Attendance
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="https://www.manit.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm flex items-center hover:text-blue-200 transition-colors duration-200"
          >
            <span>MANIT</span>
            <ExternalLink size={14} className="ml-1" />
          </a>
          <a href="#" className="text-sm hover:text-blue-200 transition-colors duration-200">Contact</a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl p-6 md:p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto mb-6 transform hover:rotate-3 transition-transform duration-300">
                <img
                  src="/manit_sm.png"
                  alt="MANIT Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">MANIT Bhopal</h2>
              <p className="text-blue-100 text-lg">Attendance Management System</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-100 p-4 rounded-lg text-sm text-center animate-shake">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as UserRole)}
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-200 hover:bg-white/15"
                >
                  <option value="FACULTY" className="text-gray-900">Faculty Member</option>
                  <option value="HOD" className="text-gray-900">HOD</option>
                  <option value="DIRECTOR" className="text-gray-900">Director</option>
                </select>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-200 hover:bg-white/15"
                />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-200 hover:bg-white/15"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 bg-[#002147] hover:bg-[#003166] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#1a237e] transition-all duration-300 disabled:opacity-50 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="text-center mt-4">
              <a 
                href="https://userid.manit.ac.in/" 
                className="text-white/90 hover:text-white transition-colors" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Forgot Password?
              </a>
            </div>

            <div className="mt-8 p-5 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <Info size={18} className="text-blue-200" />
                <span className="text-sm text-blue-200 font-medium">Demo Credentials</span>
              </div>
              <div className="space-y-2 text-sm text-blue-100/80">
                <div className="hover:text-blue-100 transition-colors duration-200">Director: director@manit.ac.in</div>
                <div className="hover:text-blue-100 transition-colors duration-200">HOD: hodcse@manit.ac.in</div>
                <div className="hover:text-blue-100 transition-colors duration-200">Faculty: faculty@manit.ac.in</div>
                <div className="text-xs text-blue-100/60 mt-3 pt-2 border-t border-white/10">
                  Password for all accounts: password123
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}