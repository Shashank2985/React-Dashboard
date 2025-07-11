import { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import UserCard from "../components/UserCard";
import Navbar from "../components/Navbar";
import { Loader2 } from "lucide-react";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCity, setSelectedCity] = useState("All");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    // 🔍 Filtered Users
    const filteredUsers = users.filter((user) => {
        const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCity = selectedCity === "All" || user.address.city === selectedCity;
        return matchesSearch && matchesCity;
    });

    // Unique cities for filter dropdown
    const cities = ["All", ...new Set(users.map((user) => user.address.city))];

    if (loading) {
        return (
            <div className="min-h-screen bg-background">
                <Navbar />
                <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gradient-to-br from-background to-muted/20">
                    <div className="flex items-center space-x-3 bg-card p-8 rounded-2xl shadow-lg border">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        <p className="text-foreground text-xl font-medium">Loading users...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-background">
                <Navbar />
                <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gradient-to-br from-background to-muted/20">
                    <div className="bg-card p-8 rounded-2xl shadow-lg border border-destructive/20">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                                <span className="text-destructive font-bold">!</span>
                            </div>
                            <p className="text-destructive text-xl font-medium">{error}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
            <Navbar />
            <div className="mt-14 container mx-auto px-4 py-8 max-w-7xl">
                {/* Header Section */}
                <div className="mb-8">
                    <div className="flex flex-col space-y-2 mb-6">
                        <h1 className="text-3xl font-bold text-foreground">Team Directory</h1>
                        <p className="text-muted-foreground text-lg">
                            Discover and connect with {users.length} team members
                        </p>
                    </div>

                    {/* Search and Filter Controls */}
                    <div className="flex flex-col lg:flex-row gap-4 mb-6">
                        <div className="flex-1">
                            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                        </div>
                        <div className="lg:w-64">
                            <FilterBar selected={selectedCity} setSelected={setSelectedCity} options={cities} />
                        </div>
                    </div>

                    {/* Results Summary */}
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                            Showing {filteredUsers.length} of {users.length} users
                            {searchQuery && ` matching "${searchQuery}"`}
                            {selectedCity !== "All" && ` in ${selectedCity}`}
                        </p>
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
                                <UserCard user={user} />
                                {console.log(user)}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-16">
                        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                            <span className="text-4xl text-muted-foreground">🔍</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">No users found</h3>
                        <p className="text-muted-foreground text-center max-w-md">
                            Try adjusting your search terms or filters to find what you're looking for.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
