import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Mail, Lock, Eye, EyeOff, MessageSquare, Settings } from "lucide-react";
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
        <div className="h-[100vh] bg-slate-900 text-white flex">
            {/* Header */}
            <Navbar />
            {/* Left side - Login Form */}
            <div className="flex-1 flex items-center justify-center px-8">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <div className="text-center mb-8">
                        <div className="max-md:hidden w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <span className="text-2xl font-bold text-black">UD</span>
                        </div>
                        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back</h1>
                        <p className="text-muted-foreground">Sign in to the User Dashboard</p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter the admin email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder:text-gray-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-12 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder:text-gray-500"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed max-md:mt-2"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>Signing in...</span>
                                </div>
                            ) : (
                                "Sign in"
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-400">
                            Don't have an account?{' '}
                            <button className="text-blue-400 hover:text-blue-300 transition-colors">
                                Contact your administrator
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side - Welcome Message */}
            <AuthImagePattern
                title={"Welcome back!"}
                subtitle={"Sign in to continue viewing your users on the admin panel."}
            />
        </div>
    );
};

export default Login;