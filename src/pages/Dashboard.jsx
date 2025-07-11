import { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import UserCard from "../components/UserCard";
import Navbar from "../components/Navbar";
import { Loader2, Users, Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCity, setSelectedCity] = useState("All");
    const [selectedCompany, setSelectedCompany] = useState("All");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch users");
                setLoading(false);
            }
        };
        loadUsers();
    }, []);

    const cities = ["All", ...new Set(users.map((user) => user.address.city))];
    const companies = ["All", ...new Set(users.map((user) => user.company.name))];

    const filteredUsers = users.filter((user) => {
        const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCity = selectedCity === "All" || user.address.city === selectedCity;
        const matchesCompany = selectedCompany === "All" || user.company.name === selectedCompany;
        return matchesSearch && matchesCity && matchesCompany;
    });

    if (loading || error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                <Navbar />
                <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
                    {loading ? (
                        <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20">
                            <div className="relative">
                                <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
                                <div className="absolute inset-0 h-10 w-10 rounded-full bg-blue-600/20 animate-ping"></div>
                            </div>
                            <div>
                                <p className="text-gray-800 text-2xl font-semibold">Loading team directory...</p>
                                <p className="text-gray-600 text-sm mt-1">Please wait while we fetch the user data</p>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-red-200">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">!</span>
                                </div>
                                <div>
                                    <p className="text-red-700 text-xl font-semibold">{error}</p>
                                    <p className="text-red-600 text-sm mt-1">Unable to load the team directory.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <Navbar />
            <div className="mt-14 container mx-auto px-4 py-8 max-w-7xl">
                {/* Header Section */}
                <div className="mb-8">
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 mb-6 relative overflow-hidden">
                        {/* Background decorative elements */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-5 rounded-3xl"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/20 to-transparent rounded-3xl transform rotate-45 translate-x-32 -translate-y-32"></div>

                        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                            <div className="relative">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                                    <Users className="h-10 w-10 text-white" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-sm">{users.length}</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                    Team Directory
                                </h1>
                                <p className="max-md:hidden text-lg text-gray-600 bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-full inline-block">
                                    Discover and connect with {users.length} team members
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Search and Filters */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6 mb-6">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                                <Search className="h-5 w-5 text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">Search & Filter</h2>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="flex-1">
                                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                            </div>
                            <div className="lg:w-64">
                                <FilterBar label="Cit" selected={selectedCity} setSelected={setSelectedCity} options={cities} />
                            </div>
                            <div className="lg:w-64">
                                <FilterBar label="Compan" selected={selectedCompany} setSelected={setSelectedCompany} options={companies} />
                            </div>
                        </div>
                    </div>

                    {/* Results Summary */}
                    <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-4 mb-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="max-md:hidden w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                    <Filter className="h-4 w-4 text-white " />
                                </div>
                                <p className="text-sm text-gray-700 font-medium">
                                    Showing {filteredUsers.length} of {users.length} users
                                    {searchQuery && ` matching "${searchQuery}"`}
                                    {selectedCity !== "All" && ` in ${selectedCity}`}
                                    {selectedCompany !== "All" && ` from ${selectedCompany}`}
                                </p>
                            </div>
                            {(searchQuery || selectedCity !== "All" || selectedCompany !== "All") && (
                                <div className="flex gap-2">
                                    {searchQuery && (
                                        <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                                            Search: {searchQuery}
                                        </span>
                                    )}
                                    {selectedCity !== "All" && (
                                        <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                                            City: {selectedCity}
                                        </span>
                                    )}
                                    {selectedCompany !== "All" && (
                                        <span className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">
                                            Company: {selectedCompany}
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* User Grid */}
                {filteredUsers.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {filteredUsers.map((user, index) => (
                            <div
                                key={user.id}
                                className="animate-in fade-in-0 duration-300"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <UserCard user={user} onClick={() => navigate(`/user/${user.id}`)} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-16">
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-12 text-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <span className="text-4xl">🔍</span>
                            </div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent mb-3">
                                No users found
                            </h3>
                            <p className="text-gray-600 max-w-md mx-auto">
                                Try adjusting your search terms or filters to find what you're looking for.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedCity("All");
                                    setSelectedCompany("All");
                                }}
                                className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105"
                            >
                                Clear Filters
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;