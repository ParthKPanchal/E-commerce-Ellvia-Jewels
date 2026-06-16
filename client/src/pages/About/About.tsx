import MainLayout from "../../layouts/MainLayout";

function About() {
  return (
    <MainLayout>
      <section className="py-20 bg-[#FFF6E8]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">
            <p className="uppercase tracking-[5px] text-sm text-[#1A5C5A] mb-5">
              About EllviaJewels
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-[#1A5C5A] leading-tight">
              Jewellery Designed For Everyday Elegance
            </h1>

            <p className="mt-8 text-gray-700 leading-8 text-lg">
              EllviaJewels creates timeless pieces crafted to become part
              of your everyday identity — soft, elegant, feminine,
              and effortlessly luxurious.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-28">

            <div>
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop"
                alt="Jewellery"
                className="w-full h-[600px] object-cover rounded-[40px]"
              />
            </div>

            <div>
              <p className="uppercase tracking-[5px] text-sm text-[#1A5C5A] mb-5">
                Our Story
              </p>

              <h2 className="text-4xl font-semibold text-[#1A5C5A] leading-tight">
                Jewellery That Feels Personal & Timeless
              </h2>

              <p className="mt-8 text-gray-700 leading-8">
                EllviaJewels was born from the belief that jewellery should
                never wait for a special occasion.
              </p>

              <p className="mt-6 text-gray-700 leading-8">
                Every piece is thoughtfully designed to bring softness,
                confidence, and understated elegance into everyday life.
              </p>

              <p className="mt-6 text-gray-700 leading-8">
                In a world of loud trends, EllviaJewels embraces minimal
                beauty, emotional connection, and timeless femininity.
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-28">

            <div className="bg-white rounded-[40px] p-10">
              <p className="uppercase tracking-[5px] text-sm text-[#1A5C5A] mb-5">
                Mission
              </p>

              <h3 className="text-3xl font-semibold text-[#1A5C5A]">
                Everyday Confidence Through Elegance
              </h3>

              <p className="mt-6 text-gray-700 leading-8">
                Our mission is to create jewellery that helps women feel
                feminine, confident, and effortlessly beautiful every
                single day.
              </p>
            </div>

            <div className="bg-white rounded-[40px] p-10">
              <p className="uppercase tracking-[5px] text-sm text-[#1A5C5A] mb-5">
                Vision
              </p>

              <h3 className="text-3xl font-semibold text-[#1A5C5A]">
                Timeless Minimal Luxury
              </h3>

              <p className="mt-6 text-gray-700 leading-8">
                We envision EllviaJewels becoming a globally loved modern
                jewellery brand known for emotional design, softness,
                and wearable luxury.
              </p>
            </div>

          </div>

          <div className="mt-32 text-center max-w-4xl mx-auto">

            <h2 className="text-4xl md:text-5xl font-semibold text-[#1A5C5A] leading-tight">
              “Jewellery made to feel like you.”
            </h2>

            <p className="mt-8 text-gray-600 text-lg">
              Minimal pieces crafted for your everyday moments.
            </p>

          </div>

        </div>
      </section>
    </MainLayout>
  );
}

export default About;