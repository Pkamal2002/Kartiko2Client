import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Elevate Your Everyday Style with{" "}
              <span className="text-primary">Kartiko</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-lg">
              Discover premium fashion and lifestyle essentials designed
              for comfort, confidence, and modern living.
            </p>

            <div className="flex gap-4">
              <Button className="btn-gradient rounded-xl px-8 py-6">
                Shop Now
              </Button>
              <Button variant="outline" className="rounded-xl px-8 py-6">
                Explore Collection
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src="https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FWhat_is_E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg&w=4500&q=90"
              alt="Kartiko Hero"
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= FEATURED CATEGORIES ================= */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold mb-12 text-center">
            Shop by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {["Men", "Women", "Accessories"].map((category) => (
              <Card
                key={category}
                className="glass hover-lift rounded-2xl overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative h-72">
                    <img
                      src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
                      alt={category}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <h3 className="text-white text-2xl font-semibold">
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
      <section className="px-6 py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">
              Trending Products
            </h2>
            <Button variant="outline">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            {[1, 2, 3, 4].map((item) => (
              <Card
                key={item}
                className="glass hover-lift rounded-2xl p-4"
              >
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                  alt="Product"
                  className="rounded-xl mb-4 object-cover"
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
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">

          <div className="glass rounded-3xl p-12 text-center space-y-6 hover-lift">
            <h2 className="text-3xl md:text-4xl font-bold">
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