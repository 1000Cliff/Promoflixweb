import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, Eye, EyeOff, Sparkles, TrendingUp, Users, User } from 'lucide-react';
import svgPaths from './login-modal-logo-paths';

interface LoginModalProps {
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

// PromoFlix Logomark Component
function Logomark() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Logomark">
      <div className="absolute inset-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
          <g filter="url(#filter0_ddiii_19_2143)" id="Logomark">
            <g clipPath="url(#clip0_19_2143)">
              <rect fill="var(--fill-0, #3A6EF2)" height="40" rx="10" width="40" x="2.5" y="0" />
              <g id="Background gradient">
                <rect fill="url(#paint0_linear_19_2143)" height="40" transform="translate(2.5)" width="40" />
              </g>
              <path d={svgPaths.p2a640600} fill="url(#paint1_linear_19_2143)" id="Rectangle 19" opacity="0.9" />
              <path d={svgPaths.p3d23dcc0} fill="url(#paint2_linear_19_2143)" id="Rectangle 20" opacity="0.9" />
            </g>
            <rect height="38.3333" rx="9.16667" stroke="url(#paint3_linear_19_2143)" strokeWidth="1.66667" width="38.3333" x="3.33333" y="0.833333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="47.5" id="filter0_ddiii_19_2143" width="45" x="0" y="-2.5">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="0.833333" />
              <feGaussianBlur stdDeviation="0.416667" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_19_2143" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect2_dropShadow_19_2143" />
              <feOffset dy="2.5" />
              <feGaussianBlur stdDeviation="1.66667" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0.14 0" />
              <feBlend in2="effect1_dropShadow_19_2143" mode="normal" result="effect2_dropShadow_19_2143" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_19_2143" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="-2.5" />
              <feGaussianBlur stdDeviation="1.25" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="shape" mode="normal" result="effect3_innerShadow_19_2143" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2.5" />
              <feGaussianBlur stdDeviation="1.25" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
              <feBlend in2="effect3_innerShadow_19_2143" mode="normal" result="effect4_innerShadow_19_2143" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect5_innerShadow_19_2143" />
              <feOffset />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect4_innerShadow_19_2143" mode="normal" result="effect5_innerShadow_19_2143" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_19_2143" x1="20" x2="21.6667" y1="0" y2="40">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_19_2143" x1="17.5832" x2="26.4547" y1="7.13883" y2="30.0014">
              <stop stopColor="white" stopOpacity="0.8" />
              <stop offset="1" stopColor="white" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_19_2143" x1="23.7991" x2="32.6705" y1="4.72703" y2="27.5896">
              <stop stopColor="white" stopOpacity="0.8" />
              <stop offset="1" stopColor="white" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_19_2143" x1="22.5" x2="22.5" y1="0" y2="40">
              <stop stopColor="white" stopOpacity="0.12" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_19_2143">
              <rect fill="white" height="40" rx="10" width="40" x="2.5" y="0" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export function LoginModal({ onClose, initialMode = 'login' }: LoginModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(initialMode === 'signup');
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(isSignUp 
      ? `🎉 Welcome to PromoFlix!\n\nEmail: ${email}\n\n✅ Your 14-day free trial has started\n✅ No credit card required\n✅ Full access to all features` 
      : `✅ Login successful!\n\nWelcome back, ${email.split('@')[0]}!`
    );
    onClose();
  };

  const features = [
    { icon: <Sparkles size={18} />, text: 'AI-powered personalization' },
    { icon: <TrendingUp size={18} />, text: '10x conversion boost' },
    { icon: <Users size={18} />, text: 'Team collaboration tools' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl max-w-[520px] w-full overflow-hidden relative"
      >
        {/* Close Button - Inside the card, top right */}
        <motion.button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <X size={20} className="text-gray-600" />
        </motion.button>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FFC107]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#4A9EFF]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        {/* Header */}
        <div className="relative px-6 pt-8 pb-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="flex items-center justify-center mb-3"
          >
            <Logomark />
          </motion.div>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-[#0a0d12] mb-1.5"
          >
            {isSignUp ? 'Start creating today' : 'Welcome Back'}
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-[#717680]"
          >
            {isSignUp ? '14-day free trial • No credit card needed' : 'Enter your email and password to access your account.'}
          </motion.p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6">
          <div className="space-y-3">
            {/* Name Input (Sign Up only) */}
            {isSignUp && (
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-semibold text-[#0a0d12] mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full pl-4 pr-4 py-2.5 bg-[#f8f9fa] border-2 border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-[#4A9EFF] transition-all text-[#0a0d12] placeholder:text-[#a4a7ae] no-hover"
                />
              </motion.div>
            )}

            {/* Email Input */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm font-semibold text-[#0a0d12] mb-1.5">
                Email
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a4a7ae] group-focus-within:text-[#4A9EFF] transition-colors" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-2.5 bg-[#f8f9fa] border-2 border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-[#4A9EFF] transition-all text-[#0a0d12] placeholder:text-[#a4a7ae] no-hover"
                />
              </div>
            </motion.div>

            {/* Password Input */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-semibold text-[#0a0d12]">
                  Password
                </label>
                <motion.button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[#a4a7ae] hover:text-[#0a0d12] no-hover p-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </motion.button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a4a7ae] group-focus-within:text-[#4A9EFF] transition-colors" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-4 py-2.5 bg-[#f8f9fa] border-2 border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-[#4A9EFF] transition-all text-[#0a0d12] placeholder:text-[#a4a7ae] no-hover"
                />
              </div>
              
              {/* Remember Password & Forgot Password (Login only) - Now directly under password field */}
              {!isSignUp && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center justify-between mt-2"
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberPassword}
                      onChange={(e) => setRememberPassword(e.target.checked)}
                      className="w-4 h-4 rounded border-2 border-[#a4a7ae] text-[#4A9EFF] focus:ring-2 focus:ring-[#4A9EFF] focus:ring-offset-0"
                    />
                    <span className="text-sm text-[#717680]">Remember Password</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-[#4A9EFF] hover:underline no-hover"
                  >
                    Forgot Password
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Confirm Password Input (Sign Up only) */}
            {isSignUp && (
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-sm font-semibold text-[#0a0d12]">
                    Confirm Password
                  </label>
                  <motion.button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-[#a4a7ae] hover:text-[#0a0d12] no-hover p-1"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </motion.button>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a4a7ae] group-focus-within:text-[#4A9EFF] transition-colors" size={20} />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    required
                    className="w-full pl-12 pr-4 py-2.5 bg-[#f8f9fa] border-2 border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-[#4A9EFF] transition-all text-[#0a0d12] placeholder:text-[#a4a7ae] no-hover"
                  />
                </div>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-[#000000] to-[#1a1a1a] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all mt-4 no-hover"
            >
              {isSignUp ? 'Create Account' : 'Login'}
            </motion.button>

            {/* Toggle Sign Up / Sign In */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-center pt-3"
            >
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-[#717680] hover:text-[#0a0d12] transition-colors no-hover"
              >
                {isSignUp ? "Already have an account? " : "Don't have an account yet? "}
                <span className="font-semibold text-[#4A9EFF] hover:underline">
                  {isSignUp ? 'Login to PromoFlix' : 'Create a promoflix account'}
                </span>
              </button>
            </motion.div>

            {/* Features (Sign Up only) */}
            <AnimatePresence>
              {isSignUp && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pt-4 mt-1 border-t border-[#e5e7eb]"
                >
                  <p className="text-xs font-semibold text-[#0a0d12] mb-2">What you'll get:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        className="flex items-start gap-2 text-xs text-[#717680]"
                      >
                        <div className="mt-0.5 text-[#FFC107]">
                          {feature.icon}
                        </div>
                        <span>{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </form>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="px-6 pb-5 text-center"
        >
          <p className="text-xs text-[#a4a7ae] leading-relaxed">
            By continuing, you agree to PromoFlix's{' '}
            <a href="#" className="text-[#4A9EFF] hover:underline no-hover">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-[#4A9EFF] hover:underline no-hover">Privacy Policy</a>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
