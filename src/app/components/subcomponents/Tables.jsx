// components/Tables.js

import React from "react";

const data = [
  {
    card: "John Doe",
    date: "Sent 25 Mar 2017",
    status: "Verfied",
    trend: "123",
  },
  { card: "John Doe", date: 25, status: "Rejected", trend: "123" },
  { card: "John Doe", date: 25, status: "Verified", trend: "123" },
  { card: "John Doe", date: 25, status: "Pending", trend: "123" },
  { card: "Jane Doe", date: 30, status: "Rejected", trend: "123" },
  // Add more data as needed
];

const Tables = () => {
  return (
    <div>
      <div className="tab flex justify-evenly gap-4 m-4">
        <div className=" p-6 w-3/6 border border-gray-300 rounded-md ">
          <div className="flex justify-between ">
            <div>
              <h1 className="text-xl font-semibold text-gray-700">
                Recent Transactions
              </h1>
            </div>
            <div className="text-gray-300">⋮</div>
          </div>
          <div>
            {/* table */}
            <table className="w-full table-auto mt-6">
              <thead>
                <tr
                  className="
                  border-y-2
                  font-semibold
                 text-black"
                >
                  <th className="font-semibold p-2">Card</th>
                  <th className=" font-semibold p-2">Date</th>
                  <th className=" font-semibold p-2">Status</th>
                  <th className="font-semibold p-2">Trend</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center p-2">
                  <td>
                    <div>*4230</div>
                    <div className="text-gray-400"> Credit</div>
                  </td>
                  <td>
                    <div>Sent</div>
                    <div className="text-gray-400"> 17 March 2022</div>
                  </td>
                  <td>
                    <div className="bg-green-100 text-green-600 rounded-md">
                      Verified
                    </div>
                  </td>
                  <td className="text-gay-400">+$1654</td>
                </tr>
                <tr className="text-center p-2">
                  <td>
                    <div>*5430</div>
                    <div className="text-gray-400">Credit</div>
                  </td>
                  <td>
                    <div>Sent</div>
                    <div className="text-gray-400"> 3 December 2021</div>
                  </td>
                  <td>
                    <div className="bg-red-100 text-red-600 rounded-md">
                      Rejected
                    </div>
                  </td>
                  <td className="text-gay-400">+$784</td>
                </tr>
                <tr className="text-center p-2">
                  <td>
                    <div>*7630</div>
                    <div className="text-gray-400"> Credit</div>
                  </td>
                  <td>
                    <div>Sent</div>
                    <div className="text-gray-400"> 23 January 2022</div>
                  </td>
                  <td>
                    <div className="bg-slate-100 text-slate-600 rounded-md">
                      Pending
                    </div>
                  </td>
                  <td className="text-gay-400">+$156</td>
                </tr>
                <tr className="text-center p-2">
                  <td>
                    <div>*5437</div>
                    <div className="text-gray-400"> Credit</div>
                  </td>
                  <td>
                    <div>Sent</div>
                    <div className="text-gray-400"> 17 March 2022</div>
                  </td>
                  <td>
                    <div className="bg-red-100 text-red-600 rounded-md">
                      Rejected
                    </div>
                  </td>
                  <td className="text-gay-400">+$654</td>
                </tr>
                <tr className="text-center p-2">
                  <td>
                    <div>*4230</div>
                    <div className="text-gray-400"> Credit</div>
                  </td>
                  <td>
                    <div>Sent</div>
                    <div className="text-gray-400"> 5 March 2022</div>
                  </td>
                  <td>
                    <div className="bg-green-100 text-green-600 rounded-md">
                      Verified
                    </div>
                  </td>
                  <td className="text-gay-400">+$1654</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="h-80 p-6 w-3/6 border border-gray-300 rounded-md ">
          <div className="flex justify-between ">
            <div>
              <h1 className="text-xl font-semibold text-gray-700">
                Activity Timeline
              </h1>
            </div>
            <div className="text-gray-300">⋮</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
