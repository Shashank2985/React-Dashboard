import { useAuth } from "../context/AuthContext";
import { LogOut, User, Star, Users } from "lucide-react";

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-xl shadow-xl border-b border-white/20">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Brand */}
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <Users className="h-5 w-5 text-white" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-sm">
                                <Star className="h-2 w-2 text-white" />
                            </div>
                        </div>
                        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            User Dashboard
                        </h1>
                    </div>

                    {/* User Section - Only show if user is logged in */}
                    {user && (
                        <div className="flex items-center space-x-4">
                            {/* User Info */}
                            <div className="hidden md:flex items-center space-x-3 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-white/20">
                                <div className="relative">
                                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-sm">
                                        <User className="h-4 w-4 text-white" />
                                    </div>
                                    <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border border-white shadow-sm animate-pulse"></div>
                                </div>
                                <div className="text-sm">
                                    <p className="font-semibold text-gray-800">{user?.name || 'Admin User'}</p>
                                    <p className="text-gray-600 text-xs">{user?.email}</p>
                                </div>
                            </div>

                            {/* Mobile User Avatar */}
                            <div className="md:hidden relative">
                                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                                    <User className="h-4 w-4 text-white" />
                                </div>
                                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border border-white shadow-sm animate-pulse"></div>
                            </div>

                            {/* Logout Button */}
                            <button
                                onClick={logout}
                                className="flex items-center space-x-2 bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 text-red-600 px-4 py-2 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border border-red-200/30"
                            >
                                <LogOut className="h-4 w-4" />
                                <span className="hidden sm:inline">Logout</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;