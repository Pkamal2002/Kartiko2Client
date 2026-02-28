import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"
import Logo from "@/assets/Logo3.png"

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* ================= TOP GRID ================= */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* BRAND */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center">
                            <img
                                src={Logo}
                                alt="Kartiko Logo"
                                className="h-32 w-auto object-contain shrink-0"
                            />
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            Premium fashion and lifestyle ecommerce store designed
                            for modern living and comfort.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 pt-2">
                            <Facebook className="h-5 w-5 cursor-pointer hover:text-primary transition" />
                            <Instagram className="h-5 w-5 cursor-pointer hover:text-primary transition" />
                            <Twitter className="h-5 w-5 cursor-pointer hover:text-primary transition" />
                        </div>
                    </div>

                    {/* SHOP LINKS */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Shop</h3>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link to="/shop" className="hover:text-primary transition">
                                All Products
                            </Link>
                            <Link to="/categories" className="hover:text-primary transition">
                                Categories
                            </Link>
                            <Link to="/new-arrivals" className="hover:text-primary transition">
                                New Arrivals
                            </Link>
                            <Link to="/best-sellers" className="hover:text-primary transition">
                                Best Sellers
                            </Link>
                        </div>
                    </div>

                    {/* SUPPORT */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Support</h3>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link to="/contact" className="hover:text-primary transition">
                                Contact Us
                            </Link>
                            <Link to="/faq" className="hover:text-primary transition">
                                FAQs
                            </Link>
                            <Link to="/shipping" className="hover:text-primary transition">
                                Shipping & Returns
                            </Link>
                            <Link to="/privacy" className="hover:text-primary transition">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                    {/* NEWSLETTER */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Stay Updated</h3>
                        <p className="text-sm text-muted-foreground">
                            Subscribe to get special offers and updates.
                        </p>

                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Your email"
                                className="rounded-xl"
                            />
                            <Button className="btn-gradient rounded-xl">
                                <Mail className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                </div>

                {/* ================= BOTTOM BAR ================= */}
                <div className="border-t border-border mt-16 pt-8 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} Kartiko. All rights reserved.</p>

                    <div className="flex gap-6">
                        <Link to="/terms" className="hover:text-primary transition">
                            Terms
                        </Link>
                        <Link to="/privacy" className="hover:text-primary transition">
                            Privacy
                        </Link>
                        <Link to="/cookies" className="hover:text-primary transition">
                            Cookies
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    )
}