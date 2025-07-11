import { useAuth } from "../context/AuthContext";
import { LogOut, User } from "lucide-react";

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <header className="fixed w-full top-0 z-40 backdrop-blur-lg bg-purple-950/10">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Brand */}
                    <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-sm font-bold text-primary-foreground">UD</span>
                        </div>
                        <h1 className="max-md:hidden text-xl font-bold text-foreground">User Dashboard</h1>
                    </div>

                    {/* Only show this part if user is logged in */}
                    {user && (
                        <div className="flex items-center space-x-4">
                            {/* User Info */}
                            <div className="hidden md:flex items-center space-x-3 bg-muted/50 px-4 py-2 rounded-xl">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                    <User className="h-4 w-4 text-primary" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-medium text-foreground">{user?.name || 'User'}</p>
                                    <p className="text-muted-foreground text-xs">{user?.email}</p>
                                </div>
                            </div>

                            {/* Logout Button */}
                            <button
                                onClick={logout}
                                className="flex items-center space-x-2 bg-destructive/10 hover:bg-destructive/20 text-destructive px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95"
                            >
                                <LogOut className="h-4 w-4" />
                                <span className="sm:inline">Logout</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
