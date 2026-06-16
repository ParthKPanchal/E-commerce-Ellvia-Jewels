function Categories() {
  const categories = [
    "Rings",
    "Earrings",
    "Bracelets",
    "Pendant Chains",
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#1A5C5A] mb-12">
          Shop By Category
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {categories.map((item) => (
            <div
              key={item}
              className="
                p-10
                rounded-2xl
                bg-[#FFF6E8]
                text-center
                shadow-sm
              "
            >
              <h3 className="text-xl font-semibold text-[#1A5C5A]">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;