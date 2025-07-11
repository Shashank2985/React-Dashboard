import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Mail, Lock, Eye, EyeOff, User, Star, Heart } from "lucide-react";
import AuthImagePattern from "../components/AuthImagePattern";
import Navbar from "../components/Navbar";

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await login(email, password);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <Navbar />
            <div className="flex min-h-screen pt-16 mt-4">
                {/* Left side - Login Form */}
                <div className="flex-1 flex items-center justify-center md:px-8 px-3">
                    <div className="w-full max-w-md">
                        {/* Welcome Section */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 mb-6 relative overflow-hidden">
                            {/* Background decorative elements */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-5 rounded-3xl"></div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/20 to-transparent rounded-3xl transform rotate-45 translate-x-16 -translate-y-16"></div>

                            <div className="relative z-10 text-center">
                                {/* Logo */}
                                <div className="max-md:hidden relative mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl mx-auto">
                                        <User className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                        <Star className="h-4 w-4 text-white" />
                                    </div>
                                </div>

                                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                    Welcome back
                                </h1>
                                <p className="text-lg text-gray-600 md:bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-full inline-block">
                                    Sign in to the User Dashboard
                                </p>
                            </div>
                        </div>

                        {/* Login Form */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
                            {/* Background decorative elements */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-3 rounded-3xl"></div>
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-100/20 to-transparent rounded-3xl transform rotate-45 translate-x-12 -translate-y-12"></div>

                            <div className="relative z-10">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                                        <Lock className="h-5 w-5 text-white" />
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-800">Sign In</h2>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6 max-md:space-y-4">
                                    {/* Email Field */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="h-4 w-4" />
                                            </div>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="Enter your admin email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full pl-14 pr-4 py-4 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder:text-gray-500 shadow-lg hover:shadow-xl"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Password Field */}
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Lock className="h-4 w-4" />
                                            </div>
                                            <input
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full pl-14 pr-14 py-4 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder:text-gray-500 shadow-lg hover:shadow-xl"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                                            >
                                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg text-white font-semibold max-md:py-2 py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center justify-center space-x-2">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                <span>Signing in...</span>
                                            </div>
                                        ) : (
                                            "Sign In"
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-6 text-center">
                            <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-4">
                                <p className="text-gray-600 text-sm">
                                    Don't have an account?{' '}
                                    <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors">
                                        Contact your administrator
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Welcome Message */}
                <AuthImagePattern
                    title={"Welcome back!"}
                    subtitle={"Sign in to continue viewing your users on the admin panel."}
                />
            </div>
        </div>
    );
};

export default Login;