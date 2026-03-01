import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import api from "@/config/api"
import { Filter } from "lucide-react"

export default function ShopPage() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [limit] = useState(8)
  const [loading, setLoading] = useState(false)
  const [sort, setSort] = useState("newest")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)

        const response = await api.get(
          `/products?page=${page}&limit=${limit}&sort=${sort}`
        )

        const data = response?.data?.data || []
        setProducts(data)

      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [page, limit, sort])

  return (
    <section className="py-12 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= TOP BAR ================= */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">

          {/* Mobile Filter */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="sm:hidden flex items-center gap-2">
                <Filter size={16} />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <Filters />
            </SheetContent>
          </Sheet>

          {/* Sort */}
          <Select onValueChange={(value) => setSort(value)} defaultValue="newest">
            <SelectTrigger className="w-56">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* ================= DESKTOP FILTERS ================= */}
          <div className="hidden md:block border rounded-xl p-4">
            <Filters />
          </div>

          {/* ================= PRODUCT GRID ================= */}
          <div className="md:col-span-3">

            {loading ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">Loading products...</p>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20">
                <p>No products found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => {

                  const price = product.price || 0
                  const originalPrice = product.originalPrice || price + 500
                  const discount = Math.round(
                    ((originalPrice - price) / originalPrice) * 100
                  )

                  const imageSrc =
                    product.images?.[0] ||
                    product.image ||
                    "/Logo3.png"

                  return (
                    <Card
                      key={product._id}
                      className="rounded-xl p-4 hover:shadow-lg transition"
                    >
                      <img
                        src={imageSrc}
                        alt={product.name}
                        className="rounded-lg mb-3 object-cover w-full h-52"
                      />

                      <h3 className="font-semibold text-sm mb-1 line-clamp-1">
                        {product.name}
                      </h3>

                      <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-bold text-lg">
                          ₹{price}
                        </span>
                        <span className="text-muted-foreground line-through text-sm">
                          ₹{originalPrice}
                        </span>
                        <span className="text-green-600 text-sm font-medium">
                          {discount}% off
                        </span>
                      </div>

                      <Button size="sm" className="w-full btn-gradient rounded-lg">
                        Add to Cart
                      </Button>
                    </Card>
                  )
                })}
              </div>
            )}

            {/* ================= PAGINATION ================= */}
            <div className="flex justify-between items-center mt-10">
              <Button
                variant="outline"
                disabled={page === 1}
                onClick={() => setPage((prev) => prev - 1)}
              >
                Previous
              </Button>

              <span className="text-muted-foreground">
                Page {page}
              </span>

              <Button
                variant="outline"
                onClick={() => setPage((prev) => prev + 1)}
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

/* ================= FILTER COMPONENT ================= */

function Filters() {
  return (
    <div className="space-y-8">

      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-2 text-muted-foreground text-sm">
          <p>Men's Fashion</p>
          <p>Women's Fashion</p>
          <p>Electronics</p>
          <p>Footwear</p>
          <p>Accessories</p>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <div className="space-y-2 text-muted-foreground text-sm">
          <p>₹0 - ₹999</p>
          <p>₹1,000 - ₹2,999</p>
          <p>₹3,000 - ₹5,999</p>
          <p>₹6,000+</p>
        </div>
      </div>

    </div>
  )
}