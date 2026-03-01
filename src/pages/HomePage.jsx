import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">

      {/* ================= HERO SECTION ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Elevate Your Everyday Style with{" "}
              <span className="text-primary">Kartiko</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto md:mx-0">
              Discover premium fashion and lifestyle essentials designed
              for comfort, confidence, and modern living.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="btn-gradient rounded-xl px-8 py-6 w-full sm:w-auto">
                Shop Now
              </Button>
              <Button variant="outline" className="rounded-xl px-8 py-6 w-full sm:w-auto">
                Explore Collection
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Kartiko Hero"
              className="rounded-3xl shadow-xl object-cover w-full h-[300px] sm:h-[400px] md:h-[500px]"
            />
          </div>

        </div>
      </section>

      {/* ================= FEATURED CATEGORIES ================= */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Shop by Category
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {["Men", "Women", "Accessories"].map((category) => (
              <Card
                key={category}
                className="overflow-hidden rounded-2xl group hover:shadow-xl transition"
              >
                <CardContent className="p-0">
                  <div className="relative h-60 sm:h-72">
                    <img
                      src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
                      alt={category}
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <h3 className="text-white text-xl font-semibold">
                        {category}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

          </div>
        </div>
      </section>

      {/* ================= TRENDING PRODUCTS ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Trending Products
            </h2>
            <Button variant="outline">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {[1, 2, 3, 4].map((item) => (
              <Card
                key={item}
                className="rounded-2xl p-4 hover:shadow-xl transition"
              >
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                  alt="Product"
                  className="rounded-xl mb-4 object-cover w-full h-48"
                />

                <h3 className="font-semibold mb-1">
                  Premium Sneakers
                </h3>

                <p className="text-muted-foreground text-sm mb-3">
                  Modern comfort design
                </p>

                <div className="flex justify-between items-center">
                  <span className="font-bold">$129</span>
                  <Button size="sm" className="btn-gradient rounded-lg">
                    Add
                  </Button>
                </div>
              </Card>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROMO BANNER ================= */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="rounded-3xl p-10 sm:p-12 text-center space-y-6 bg-card shadow-lg">
            <h2 className="text-2xl md:text-4xl font-bold">
              Get 20% Off Your First Order
            </h2>

            <p className="text-muted-foreground max-w-xl mx-auto">
              Join Kartiko and receive exclusive offers, early access
              to collections, and members-only discounts.
            </p>

            <Button className="btn-gradient px-10 py-6 rounded-xl">
              Claim Offer
            </Button>
          </div>

        </div>
      </section>

    </div>
  )
}