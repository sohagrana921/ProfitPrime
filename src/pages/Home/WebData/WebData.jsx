const WebData = () => {
  return (
    <div>
      <div className="my-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-semibold mb-2">1,000+</h3>
          <p className="text-gray-500">Happy Customers</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-semibold mb-2">50,000+</h3>
          <p className="text-gray-500">Monthly Visitors</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-semibold mb-2">100+</h3>
          <p className="text-gray-500">Countries Worldwide</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-semibold mb-2">20+</h3>
          <p className="text-gray-500">Top Partners</p>
        </div>
      </div>
    </div>
  );
};

export default WebData;
