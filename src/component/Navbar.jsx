import React, { useState } from "react";

const Navbar = () => {
  const [isResidencesOpen, setResidencesOpen] = useState(false);
  const [isServicingOpen, setServicingOpen] = useState(false);
  const [isDiscoverOpen, setDiscoverOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white shadow-lg px-4 py-3">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full">
          <span className="text-lg font-semibold text-gray-600">★</span>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <div className="relative">
          <button
            onClick={() => setResidencesOpen(!isResidencesOpen)}
            className="text-gray-700 font-medium focus:outline-none"
          >
            Residences <span className="ml-1">▼</span>
          </button>
          {isResidencesOpen && (
            <div className="absolute bg-white border rounded-lg shadow-lg mt-2 w-40">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Option 2
              </a>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => setServicingOpen(!isServicingOpen)}
            className="text-gray-700 font-medium focus:outline-none"
          >
            Servicing <span className="ml-1">▼</span>
          </button>
          {isServicingOpen && (
            <div className="absolute bg-white border rounded-lg shadow-lg mt-2 w-40">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Option 2
              </a>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setDiscoverOpen(!isDiscoverOpen)}
            className="text-gray-700 font-medium focus:outline-none"
          >
            Discover <span className="ml-1">▼</span>
          </button>
          {isDiscoverOpen && (
            <div className="absolute bg-white border rounded-lg shadow-lg mt-2 w-40">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Option 2
              </a>
            </div>
          )}
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
