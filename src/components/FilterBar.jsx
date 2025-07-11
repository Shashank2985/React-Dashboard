import { ChevronDown, MapPin, Building2 } from "lucide-react";

const FilterBar = ({ selected, setSelected, options, label }) => {
    const icon = label === "City" ? <MapPin className="h-5 w-5 text-muted-foreground" /> : <Building2 className="h-5 w-5 text-muted-foreground" />;

    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                {icon}
            </div>
            <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="w-full pl-12 pr-10 py-3 bg-background border border-input rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 text-foreground appearance-none cursor-pointer shadow-sm"
            >
                {options.map((option, idx) => (
                    <option key={idx} value={option} className="bg-background text-foreground">
                        {option === "All" ? `All ${label}ies` : option}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
            </div>
        </div>
    );
};

export default FilterBar;
