import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categories = [
  {
    name: "Men's Fashion",
    image: "https://images.unsplash.com/photo-1520975918318-3b7d4c5e6c1f",
  },
  {
    name: "Women's Fashion",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
  },
  {
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
  {
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
]

export default function CategoriesPage() {
  return (
    <section className="py-16 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by Categories
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover a wide range of products across all categories at Kartiko.
            Find what suits your lifestyle.
          </p>
        </div>

        {/* ================= CATEGORY GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">

          {categories.map((category, index) => (
            <Card
              key={index}
              className="group rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
            >
              <CardContent className="p-0">
                <div className="relative h-64">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h2 className="text-white text-xl font-semibold">
                      {category.name}
                    </h2>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <Button className="btn-gradient rounded-xl w-full">
                    Explore
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

        </div>

      </div>
    </section>
  )
}