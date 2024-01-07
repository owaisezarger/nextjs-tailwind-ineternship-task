import React from "react";

const Stats = () => {
  return (
    <div>
      <div className="stats flex justify-evenly gap-4 m-4">
        <div className=" p-6 w-2/6 border border-gray-300 rounded-md ">
          <div className="flex justify-between ">
            <div>
              <h1 className="text-xl font-semibold text-gray-700">
                Browsers States
              </h1>
              <p className="text-gray-300">Counter April 2022</p>
            </div>
            <div className="text-gray-300">⋮</div>
          </div>
          <div>
            <img src="images/r3g1.png" alt="r3g1" />
          </div>
        </div>
        <div className=" p-6 w-2/6 border border-gray-300 rounded-md ">
          <div className="flex justify-between ">
            <div>
              <h1 className="text-xl font-semibold text-gray-700">
                Projest Status
              </h1>
            </div>
            <div className="text-gray-300">⋮</div>
          </div>
          <div className="flex justify-between mt-5  w-full">
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 bg-orange-100 rounded-md"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div>
                <h1>$4371</h1>
                <p className="text-gray-300">Your Earnings</p>
              </div>
            </div>
            <div>
              <p className="text-green-600">10.2%</p>
            </div>
          </div>
          <div>
            <img src="images/r3g2.png" alt="" />
          </div>
          <div className="flex justify-between">
            <div>
              <p className="mb-2">Donates</p>
              <p> Podcasts</p>
            </div>
            <div className="flex gap-4">
              <div>
                <p>$756.82</p> <p>$4,326.82</p>
              </div>
              <div>
                <p className="text-red-600">-129.5</p>
                <p className="text-green-600">+5249.5</p>
              </div>
            </div>
          </div>
        </div>

        {/* ------ */}
        <div className=" p-6 w-2/6 border border-gray-300 rounded-md ">
          <div className="flex justify-between ">
            <div>
              <h1 className="text-xl font-semibold text-gray-700">
                Active Projects
              </h1>
              <p className="text-gray-300">Average 72% completed</p>
            </div>
            <div className="text-gray-300">⋮</div>
          </div>
          <div>
            <img src="images/r3g3.png" alt="r3g3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
