function Dashboard() {
  return (
    <div>

      <h1 className="text-4xl font-bold text-[#1A5C5A] mb-10">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-8 rounded-[25px]">
          <h3 className="text-gray-500">
            Products
          </h3>

          <p className="text-4xl font-bold text-[#1A5C5A] mt-3">
            20
          </p>
        </div>

        <div className="bg-white p-8 rounded-[25px]">
          <h3 className="text-gray-500">
            Orders
          </h3>

          <p className="text-4xl font-bold text-[#1A5C5A] mt-3">
            2
          </p>
        </div>

        <div className="bg-white p-8 rounded-[25px]">
          <h3 className="text-gray-500">
            Users
          </h3>

          <p className="text-4xl font-bold text-[#1A5C5A] mt-3">
            1
          </p>
        </div>

        <div className="bg-white p-8 rounded-[25px]">
          <h3 className="text-gray-500">
            Revenue
          </h3>

          <p className="text-4xl font-bold text-[#1A5C5A] mt-3">
            ₹4497
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;