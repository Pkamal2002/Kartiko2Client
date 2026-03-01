import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, ShieldCheck, Star, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">

      {/* ================= HERO SECTION ================= */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold">
            About <span className="text-primary">Kartiko</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kartiko is a modern Indian ecommerce platform built to bring
            premium quality products to your doorstep with trust,
            transparency, and style.
          </p>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b"
              alt="Our Story"
              className="rounded-3xl shadow-xl object-cover w-full h-100"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Our Story
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Founded with a vision to redefine online shopping in India,
              Kartiko focuses on quality, affordability, and seamless user
              experience. We aim to bridge the gap between premium brands
              and everyday consumers.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              From fashion to electronics, we curate products that
              elevate your lifestyle while maintaining competitive pricing.
            </p>
          </div>

        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">

          <Card className="rounded-2xl p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To provide high-quality products at fair prices while
                delivering an exceptional shopping experience across India.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To become India’s most trusted ecommerce brand known for
                innovation, customer satisfaction, and reliability.
              </p>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-12">

          <h2 className="text-3xl font-bold">
            Why Choose Kartiko?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            <Card className="rounded-2xl p-6 text-center hover:shadow-lg transition">
              <CardContent className="space-y-4">
                <Truck className="mx-auto text-primary" size={40} />
                <h4 className="font-semibold">Fast Delivery</h4>
                <p className="text-muted-foreground text-sm">
                  Quick and reliable delivery across India.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 text-center hover:shadow-lg transition">
              <CardContent className="space-y-4">
                <ShieldCheck className="mx-auto text-primary" size={40} />
                <h4 className="font-semibold">Secure Payments</h4>
                <p className="text-muted-foreground text-sm">
                  100% secure payment gateways and transactions.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 text-center hover:shadow-lg transition">
              <CardContent className="space-y-4">
                <Star className="mx-auto text-primary" size={40} />
                <h4 className="font-semibold">Premium Quality</h4>
                <p className="text-muted-foreground text-sm">
                  Carefully curated products from trusted brands.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 text-center hover:shadow-lg transition">
              <CardContent className="space-y-4">
                <Heart className="mx-auto text-primary" size={40} />
                <h4 className="font-semibold">Customer First</h4>
                <p className="text-muted-foreground text-sm">
                  Dedicated support and easy return policies.
                </p>
              </CardContent>
            </Card>

          </div>

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Experience Kartiko?
          </h2>
          <p className="opacity-90">
            Start shopping today and discover a new way to buy online.
          </p>
          <Button variant="secondary" className="rounded-xl px-10 py-6">
            Shop Now
          </Button>
        </div>
      </section>

    </div>
  )
}