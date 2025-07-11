import { Mail, MapPin, Building2, User, Phone, Globe } from "lucide-react";

const UserCard = ({ user, onClick }) => {
    return (
        <div
            className="group bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/20"
            onClick={onClick}
        >
            {/* Header */}
            <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <User className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-1 truncate">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">@{user.username}</p>
                </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground truncate flex-1">{user.email}</span>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{user.address.city}</span>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground truncate flex-1">{user.company.name}</span>
                </div>

                {user.phone && (
                    <div className="flex items-center space-x-3 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">{user.phone}</span>
                    </div>
                )}

                {user.website && (
                    <div className="flex items-center space-x-3 text-sm">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span className="text-primary hover:text-primary/80 truncate flex-1 cursor-pointer">
                            {user.website}
                        </span>
                    </div>
                )}
            </div>

            {/* CatchPhrase */}
            {user.company.catchPhrase && (
                <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground italic">
                        "{user.company.catchPhrase}"
                    </p>
                </div>
            )}

            {/* View Button (only for UX – card is already clickable) */}
            <div className="max-md:hidden mt-4 pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-2">
                    <button className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200">
                        View Profile
                    </button>
                    <button className="bg-muted hover:bg-muted/80 text-foreground text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200">
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
