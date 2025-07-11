
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchUsers } from "../services/api";
import {
    Mail,
    MapPin,
    Phone,
    Globe,
    Building2,
    User,
    ArrowLeft,
    MapPin as LocationIcon,
    Briefcase,
    Hash,
    Navigation,
    Target,
    Star,
    Heart
} from "lucide-react";

const UserProfile = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const allUsers = await fetchUsers();
                const found = allUsers.find((u) => u.id === parseInt(id));
                if (found) {
                    setUser(found);
                } else {
                    setError("User not found");
                }
                setLoading(false);
            } catch (err) {
                setError("Failed to load user profile");
                setLoading(false);
            }
        };
        loadUser();
    }, [id]);

    const gradients = [
        'from-blue-500 to-purple-600',
        'from-purple-500 to-pink-600',
        'from-pink-500 to-red-500',
        'from-green-500 to-blue-500',
        'from-yellow-500 to-orange-500',
        'from-indigo-500 to-purple-500',
        'from-teal-500 to-cyan-500',
        'from-rose-500 to-pink-500'
    ];

    const userGradient = user ? gradients[user.id % gradients.length] : gradients[0];

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                <div className="mt-14 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
                    <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20">
                        <div className="relative">
                            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
                            <div className="absolute inset-0 h-10 w-10 rounded-full bg-blue-600/20 animate-ping"></div>
                        </div>
                        <div>
                            <p className="text-gray-800 text-2xl font-semibold">Loading profile...</p>
                            <p className="text-gray-600 text-sm mt-1">Please wait while we fetch the user data</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !user) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
                <Navbar />
                <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
                    <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-red-200">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-xl">!</span>
                            </div>
                            <div>
                                <p className="text-red-700 text-xl font-semibold">{error || "User not found"}</p>
                                <p className="text-red-600 text-sm mt-1">The requested user profile could not be found.</p>
                            </div>
                        </div>
                        <Link
                            to="/"
                            className="mt-6 inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to Dashboard</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="container mx-auto px-4 py-8 max-w-5xl">
                {/* Back Navigation */}
                <div className="mb-6">
                    <Link
                        to="/dashboard"
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-xl border border-blue-200/30 hover:bg-blue-50/70 transition-all duration-200 font-medium"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back to Dashboard</span>
                    </Link>
                </div>

                {/* Profile Header */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 mb-6 relative overflow-hidden">
                    {/* Background decorative elements */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${userGradient} opacity-5 rounded-3xl`}></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/20 to-transparent rounded-3xl transform rotate-45 translate-x-32 -translate-y-32"></div>

                    <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                            {/* Avatar */}
                            <div className="relative">
                                <div className={`w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br ${userGradient} rounded-3xl flex items-center justify-center shadow-2xl`}>
                                    <User className="h-12 w-12 lg:h-16 lg:w-16 text-white" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                    <Star className="h-4 w-4 text-white" />
                                </div>
                                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-3 border-white shadow-lg animate-pulse"></div>
                            </div>

                            {/* Basic Info */}
                            <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                    <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        {user.name}
                                    </h1>
                                    <button className="p-2 hover:bg-red-50 rounded-xl transition-colors">
                                        <Heart className="h-6 w-6 text-gray-400 hover:text-red-500 transition-colors" />
                                    </button>
                                </div>
                                <p className="text-lg text-gray-600 bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-full inline-block mb-4">
                                    @{user.username}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-xl border border-blue-200/30">
                                        <span className="text-sm font-medium text-blue-700">ID: #{user.id}</span>
                                    </div>
                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-xl border border-green-200/30">
                                        <span className="text-sm font-medium text-green-700">Active Member</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Contact Information */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6 h-fit">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                <Mail className="h-5 w-5 text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">Contact Information</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4 p-4 hover:bg-blue-50/50 rounded-xl transition-colors duration-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                                    <Mail className="h-5 w-5 text-white" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="text-gray-800 font-medium">{user.email}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 hover:bg-green-50/50 rounded-xl transition-colors duration-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-sm">
                                    <Phone className="h-5 w-5 text-white" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p className="text-gray-800 font-medium">{user.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 hover:bg-purple-50/50 rounded-xl transition-colors duration-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
                                    <Globe className="h-5 w-5 text-white" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-500">Website</p>
                                    <a
                                        href={`https://${user.website}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-600 hover:text-purple-700 font-medium hover:underline"
                                    >
                                        {user.website}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Address Information */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6 h-fit">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                                <MapPin className="h-5 w-5 text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">Address & Location</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200/30">
                                <div className="flex items-start space-x-3">
                                    <LocationIcon className="h-5 w-5 text-orange-600 mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-800">{user.address.street}</p>
                                        {user.address.suite && (
                                            <p className="text-gray-600">{user.address.suite}</p>
                                        )}
                                        <p className="text-gray-800">{user.address.city}</p>
                                        <p className="text-sm text-gray-600">{user.address.zipcode}</p>
                                    </div>
                                </div>
                            </div>

                            {user.address.geo && (
                                <div className="p-4 hover:bg-cyan-50/50 rounded-xl transition-colors duration-200">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <Navigation className="h-5 w-5 text-cyan-600" />
                                        <span className="font-medium text-gray-800">Coordinates</span>
                                    </div>
                                    <div className="ml-8 space-y-1">
                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">Latitude:</span> {user.address.geo.lat}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">Longitude:</span> {user.address.geo.lng}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Company Information */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6 lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                <Building2 className="h-5 w-5 text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">Company Information</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="p-4 hover:bg-indigo-50/50 rounded-xl transition-colors duration-200">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <Building2 className="h-5 w-5 text-indigo-600" />
                                        <span className="font-medium text-gray-800">Company Name</span>
                                    </div>
                                    <p className="ml-8 text-gray-700 font-semibold">{user.company.name}</p>
                                </div>

                                <div className="p-4 hover:bg-purple-50/50 rounded-xl transition-colors duration-200">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <Target className="h-5 w-5 text-purple-600" />
                                        <span className="font-medium text-gray-800">Mission</span>
                                    </div>
                                    <p className="ml-8 text-gray-700 italic">"{user.company.catchPhrase}"</p>
                                </div>
                            </div>

                            {user.company.bs && (
                                <div className="p-4 hover:bg-teal-50/50 rounded-xl transition-colors duration-200">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <Briefcase className="h-5 w-5 text-teal-600" />
                                        <span className="font-medium text-gray-800">Business Focus</span>
                                    </div>
                                    <p className="ml-8 text-gray-700">{user.company.bs}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className={`flex-1 bg-gradient-to-r ${userGradient} hover:shadow-lg text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2`}>
                            <Mail className="h-5 w-5" />
                            <span>Send Message</span>
                        </button>
                        <button className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-md flex items-center justify-center space-x-2">
                            <Phone className="h-5 w-5" />
                            <span>Call Now</span>
                        </button>
                        <button className="flex-1 bg-gradient-to-r from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 text-green-700 font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-md flex items-center justify-center space-x-2">
                            <Globe className="h-5 w-5" />
                            <span>Visit Website</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
