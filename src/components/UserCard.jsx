import { Mail, MapPin, Building2, User, Phone, Globe, Star, Heart } from "lucide-react";

const UserCard = ({ user, onClick }) => {
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

    const userGradient = gradients[user.id % gradients.length];

    return (
        <div
            className="group bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-white/40 cursor-pointer relative overflow-hidden"
            onClick={onClick}
        >
            {/* Background decorative elements */}
            <div className={`absolute inset-0 bg-gradient-to-br ${userGradient} opacity-3 rounded-3xl`}></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/10 to-transparent rounded-3xl transform rotate-45 translate-x-16 -translate-y-16"></div>

            {/* Header */}
            <div className="relative z-10 flex items-start space-x-4 mb-4">
                <div className="relative">
                    <div className={`w-14 h-14 bg-gradient-to-br ${userGradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <User className="h-7 w-7 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-md">
                        <Star className="h-3 w-3 text-white" />
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 truncate">{user.name}</h3>
                    <p className="text-sm text-gray-600 bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1 rounded-full inline-block">@{user.username}</p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1 hover:bg-red-50 rounded-lg">
                    <Heart className="h-4 w-4 text-gray-400 hover:text-red-500 transition-colors" />
                </button>
            </div>

            {/* Contact Info */}
            <div className="relative z-10 space-y-3">
                <div className="flex items-center space-x-3 text-sm p-3 hover:bg-blue-50/50 rounded-xl transition-colors duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                        <Mail className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 truncate flex-1 font-medium">{user.email}</span>
                </div>

                <div className="flex items-center space-x-3 text-sm p-3 hover:bg-orange-50/50 rounded-xl transition-colors duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-sm">
                        <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{user.address.city}</span>
                </div>

                <div className="flex items-center space-x-3 text-sm p-3 hover:bg-indigo-50/50 rounded-xl transition-colors duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
                        <Building2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 truncate flex-1 font-medium">{user.company.name}</span>
                </div>

                {user.phone && (
                    <div className="flex items-center space-x-3 text-sm p-3 hover:bg-green-50/50 rounded-xl transition-colors duration-200">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-sm">
                            <Phone className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{user.phone}</span>
                    </div>
                )}

                {user.website && (
                    <div className="flex items-center space-x-3 text-sm p-3 hover:bg-purple-50/50 rounded-xl transition-colors duration-200">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
                            <Globe className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-purple-600 hover:text-purple-700 truncate flex-1 cursor-pointer font-medium">
                            {user.website}
                        </span>
                    </div>
                )}
            </div>

            {/* CatchPhrase */}
            {user.company.catchPhrase && (
                <div className="relative z-10 mt-4 pt-4 border-t border-gray-200/50">
                    <p className="text-xs text-gray-600 italic bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-xl">
                        "{user.company.catchPhrase}"
                    </p>
                </div>
            )}

            {/* Action Buttons */}
            <div className="relative z-10 max-md:hidden mt-4 pt-4 border-t border-gray-200/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex space-x-2">
                    <button className={`flex-1 bg-gradient-to-r ${userGradient} hover:shadow-lg text-white text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105`}>
                        View Profile
                    </button>
                    <button className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105">
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;