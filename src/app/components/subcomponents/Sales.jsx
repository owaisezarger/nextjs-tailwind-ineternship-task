import React from "react";

const Sales = () => {
  return (
    <div>
      <div className="sales flex justify-between gap-4 m-4 ">
        <div className="h-60 w-1/6 border  border-gray-300 rounded-md ">
          <div className="mt-5">
            <div className="px-6">
              <h1 className="text-xl font-semibold text-gray-600">Sales</h1>
              <p className=" text-gray-300 text-sm">Last year</p>
            </div>
            <img
              src="/images/r1g1.png"
              alt="r1g1"
              className="object-cover mt-4 w-full"
            />
            <div className="px-6 flex gap-6">
              <h1 className="text-xl">175k </h1>
              <p className=" text-red-700">-16.2%</p>
            </div>
          </div>
        </div>
        <div className="h-60 w-1/6 border  border-gray-300 rounded-md">
          <div className="mt-5">
            <div className="px-6">
              <h1 className="text-xl font-semibold text-gray-600">Sessions</h1>
              <p className=" text-gray-300 text-sm">This Month</p>
            </div>
            <img
              src="/images/r1g2.png"
              alt="r1g2"
              className="object-cover mt-4 w-full"
            />
            <div className="px-6 flex gap-6">
              <h1 className="text-xl">45.1k </h1>
              <p className=" text-green-700">12.6%</p>
            </div>
          </div>
        </div>
        <div className="h-60 w-1/6 border border-gray-300 rounded-md">
          <div className="mt-5 px-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14 p-4 mb-4 bg-red-50 rounded-md"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <div>
              <h1 className="text-xl font-semibold text-gray-600">
                Total Profit
              </h1>
              <p className=" text-gray-300 text-sm">Last Week</p>
            </div>

            <div>
              <h1 className="text-xl">1.28k </h1>
              <p className="bg-gray-100 w-16 rounded-md text-center mt-4">
                -12.2%
              </p>
            </div>
          </div>
        </div>
        <div className="h-60 w-1/6 border  border-gray-300 rounded-md">
          <div className="mt-5 px-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14 p-4 mb-4 bg-cyan-50 rounded-md"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
              />
            </svg>

            <div>
              <h1 className="text-xl font-semibold text-gray-600">
                Total Sales
              </h1>
              <p className=" text-gray-300 text-sm">Last Week</p>
            </div>

            <div>
              <h1 className="text-xl">$4,673 </h1>
              <p className="bg-gray-100 w-16 rounded-md text-center mt-4">
                +25.2%
              </p>
            </div>
          </div>
        </div>
        <div className="h-60 w-2/6 border mr-8 flex border-gray-300 rounded-md">
          <div className="mt-5 px-6">
            <div>
              <h1 className="text-xl font-semibold text-gray-600">
                Revenue Growth
              </h1>
              <p className=" text-gray-300 text-sm">Weekly Report</p>
            </div>
            <div className="mt-8">
              <h1 className="text-2xl">4,673 </h1>
              <p className="bg-green-100 w-16 rounded-md text-green-600 text-center mt-4">
                +15.4%
              </p>
            </div>
          </div>
          <div className="mt-12 ">
            <img src="images/r1g3.png" alt="r1g3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
