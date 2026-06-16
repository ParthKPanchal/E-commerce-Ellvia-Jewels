import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center bg-[#FFF6E8]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left Content */}
        <div>

          <p className="uppercase tracking-[6px] text-sm text-[#1A5C5A] mb-4">
            Everyday Luxury
          </p>

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-semibold
              text-[#1A5C5A]
              leading-tight
            "
          >
            Jewellery
            <br />
            made to
            <br />
            feel like you.
          </h1>

          <p className="mt-6 text-gray-700 text-lg leading-8 max-w-lg">
            Minimal silver pieces crafted for everyday elegance,
            softness, and timeless beauty.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">

            <Link
              to="/products"
              className="
                bg-[#1A5C5A]
                text-white
                px-8
                py-4
                rounded-full
                hover:opacity-90
                transition
              "
            >
              Shop Collection
            </Link>

            <button
              className="
                border
                border-[#1A5C5A]
                text-[#1A5C5A]
                px-8
                py-4
                rounded-full
                hover:bg-[#1A5C5A]
                hover:text-white
                transition
              "
            >
              Explore More
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop"
            alt="Luxury Jewellery"
            className="
              w-full
              h-[400px]
              sm:h-[500px]
              md:h-[700px]
              object-cover
              rounded-[40px]
            "
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;