import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section className="py-28 bg-[#FFF6E8]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Image */}

        <div>
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop"
            alt="Brand Story"
            className="
              rounded-[40px]
              w-full
              h-[650px]
              object-cover
            "
          />
        </div>

        {/* Content */}

        <div>
          <p className="uppercase tracking-[5px] text-sm text-[#1A5C5A] mb-4">
            About EllviaJewels
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-semibold
              text-[#1A5C5A]
              leading-tight
            "
          >
            Jewellery designed
            <br />
            for everyday elegance.
          </h2>

          <p className="mt-8 text-gray-700 leading-8 text-lg">
            EllviaJewels was created with the belief that jewellery should feel
            personal, timeless, and effortlessly wearable.
          </p>

          <p className="mt-6 text-gray-700 leading-8 text-lg">
            Every piece is crafted to become part of your daily identity —
            subtle enough for everyday wear, yet meaningful enough to carry
            memories with you.
          </p>

          <Link
            to="/about"
            className="
              inline-block
              mt-10
              bg-[#1A5C5A]
              text-white
              px-8
              py-4
              rounded-full
              hover:opacity-90
              transition
            "
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
