import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Logo from "@/assets/Logo3.png"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Menu, X, ShoppingCart, User, Sun, Moon, Search } from "lucide-react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    // Toggle Dark Mode
    useEffect(() => {
        const metaThemeColor = document.querySelector("meta[name='theme-color']")

        if (darkMode) {
            document.documentElement.classList.add("dark")
            metaThemeColor.setAttribute("content", "#0f0f0f")
        } else {
            document.documentElement.classList.remove("dark")
            metaThemeColor.setAttribute("content", "#ffffff")
        }
    }, [darkMode])

    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src={Logo}
                        alt="Kartiko Logo"
                        className="h-32 w-auto object-contain shrink-0"
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/shop" className="hover:text-primary transition">
                        Shop
                    </Link>
                    <Link to="/categories" className="hover:text-primary transition">
                        Categories
                    </Link>
                    <Link to="/about" className="hover:text-primary transition">
                        About
                    </Link>
                </nav>

                {/* Search */}
                <div className="hidden md:flex items-center relative w-64">
                    <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search products..."
                        className="pl-9 rounded-xl"
                    />
                </div>

                {/* Right Icons */}
                <div className="flex items-center gap-4">

                    {/* Dark Mode Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDarkMode(!darkMode)}
                        className="rounded-full"
                    >
                        {darkMode ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                    </Button>

                    {/* Cart */}
                    <div className="relative">
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <ShoppingCart className="h-5 w-5" />
                        </Button>
                        <span className="absolute -top-1 -right-1 bg-primary text-white text-xs px-1.5 rounded-full">
                            2
                        </span>
                    </div>

                    {/* Profile Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <User className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="rounded-xl">
                            <DropdownMenuItem asChild>
                                <Link to="/profile">Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/orders">Orders</Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden rounded-full"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </Button>

                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden px-6 pb-6 space-y-4 bg-background border-b border-border">
                    <Link to="/shop" className="block">
                        Shop
                    </Link>
                    <Link to="/categories" className="block">
                        Categories
                    </Link>
                    <Link to="/about" className="block">
                        About
                    </Link>

                    <div className="relative mt-4">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search products..."
                            className="pl-9 rounded-xl"
                        />
                    </div>
                </div>
            )}
        </header>
    )
}