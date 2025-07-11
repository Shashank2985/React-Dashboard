import { Search, X } from "lucide-react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const handleClear = () => {
        setSearchQuery("");
    };

    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
                type="text"
                className="w-full pl-12 pr-12 py-3 bg-background border border-input rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 text-foreground placeholder:text-muted-foreground shadow-sm"
                placeholder="Search by name or username..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
                <button
                    onClick={handleClear}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                    <X className="h-5 w-5" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
