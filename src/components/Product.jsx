import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import api from "@/config/api"

const Product = () => {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [limit] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                setError(null)

                const response = await api.get(
                    `/products?page=${page}&limit=${limit}`
                )

                const data = response?.data?.data || []

                // 👇 SMART FIX
                if (data.length === 0 && page > 1) {
                    setPage((prev) => prev - 1)
                    return
                }

                setProducts(data)

            } catch (err) {
                console.error("Error fetching products:", err)
                setError("Failed to load product.")
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [page, limit])

    /* ================= STATES ================= */

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-muted-foreground">Loading product...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-6">
                <p className="text-red-500">{error}</p>
                <Button onClick={() => setPage(1)}>
                    Go to First Page
                </Button>
            </div>
        )
    }

    if (!products.length) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
                <h2 className="text-2xl font-semibold">
                    No products available
                </h2>

                <p className="text-muted-foreground">
                    It looks like there are no products on this page.
                </p>

                {page > 1 && (
                    <Button
                        variant="outline"
                        onClick={() => setPage((prev) => prev - 1)}
                    >
                        Go to Previous Page
                    </Button>
                )}
            </div>
        )
    }

    const product = products[0]

    const categoryName =
        typeof product.category === "object"
            ? product.category?.name
            : product.category

    const imageSrc =
        product.image ||
        product.images?.[0] ||
        "/Logo3.png"

    return (
        <section className="bg-background text-foreground py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

                    {/* ================= IMAGE ================= */}
                    <Card className="overflow-hidden rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl">
                        <img
                            src={imageSrc}
                            alt={product.name}
                            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                        />
                    </Card>

                    {/* ================= DETAILS ================= */}
                    <div className="space-y-8 md:space-y-10">

                        <div className="space-y-4">
                            <Badge className="bg-primary text-white px-3 py-1 text-xs sm:text-sm">
                                {categoryName || "Category"}
                            </Badge>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                                {product.name}
                            </h1>

                            <span className="text-2xl sm:text-3xl font-bold">
                                ${product.price}
                            </span>

                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* ================= ACTION BUTTONS ================= */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="btn-gradient py-5 sm:py-6 w-full">
                                Add to Cart
                            </Button>

                            <Button
                                variant="outline"
                                className="py-5 sm:py-6 w-full"
                            >
                                Buy Now
                            </Button>
                        </div>

                        {/* ================= PAGINATION ================= */}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 md:pt-8 border-t border-border">
                            <Button
                                variant="outline"
                                disabled={page === 1}
                                onClick={() => setPage((prev) => prev - 1)}
                                className="w-full sm:w-auto"
                            >
                                Previous
                            </Button>

                            <span className="text-muted-foreground text-sm">
                                Page {page}
                            </span>

                            <Button
                                variant="outline"
                                onClick={() => setPage((prev) => prev + 1)}
                                className="w-full sm:w-auto"
                            >
                                Next
                            </Button>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Product