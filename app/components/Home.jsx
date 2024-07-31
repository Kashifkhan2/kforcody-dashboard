import React from "react";

const Home = () => {
  return (
    <div className="pt-6">
      <div className="flex items-center justify-center  p-4 md:h-40">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="bg-gray-700 rounded-md flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
            <div className="flex-col">
              <div className="text-sm font-medium text-gray-400 my-2">
                Summary
              </div>
              <div className="class flex items-center">
                <div className="text-3xl font-bold text-gray-200">15k</div>
                <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                  <div>25%</div>
                </div>
              </div>
              <div className="w-full h-0.5 bg-gray-400">
                <div className="w-[25%] h-0.5 bg-red-500"></div>
              </div>
              <div className="text-sm font-medium text-gray-400 ">
                Last week 18.7k
              </div>
            </div>
          </div>
          <div className="bg-gray-700 rounded-md flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
            <div className="flex-col">
              <div className="text-sm font-medium text-gray-400 my-2">
                Engagement
              </div>
              <div className="class flex items-center">
                <div className="text-3xl font-bold text-gray-200">23k</div>
                <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                  <div>85%</div>
                </div>
              </div>
              <div className="w-full h-0.5 bg-gray-400">
                <div className="w-[85%] h-0.5 bg-green-500"></div>
              </div>
              <div className="text-sm font-medium text-gray-400 ">
                Last week 10.2k
              </div>
            </div>
          </div>
          <div className="bg-gray-700 rounded-md flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
            <div className="flex-col">
              <div className="text-sm font-medium text-gray-400 my-2">
                Customers
              </div>
              <div className="class flex items-center">
                <div className="text-3xl font-bold text-gray-200">43k</div>
                <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                  <div>40%</div>
                </div>
              </div>
              <div className="w-full h-0.5 bg-gray-400">
                <div className="w-[40%] h-0.5 bg-red-500"></div>
              </div>
              <div className="text-sm font-medium text-gray-400 ">
                Last week 44.9k
              </div>
            </div>
          </div>
          <div className="bg-gray-700 rounded-md flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
            <div className="flex-col">
              <div className="text-sm font-medium text-gray-400 my-2">
                Views
              </div>
              <div className="class flex items-center">
                <div className="text-3xl font-bold text-gray-200">107k</div>
                <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                  <div>35%</div>
                </div>
              </div>
              <div className="w-full h-0.5 bg-gray-400">
                <div className="w-[35%] h-0.5 bg-green-500"></div>
              </div>
              <div className="text-sm font-medium text-gray-400 ">
                Last week 97k
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 ">
        <div className="flex flex-col max-w-7xl w-full md:w-[70%]">
          <div className="flex flex-col lg:flex-row ">
            <div className="bg-gray-700 shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
              <div className="flex items-center justify-start w-full">
                <div className="flex-col w-[85%]">
                  <div className="text-sm font-medium text-violet-600 my-2">
                    Total Income
                  </div>
                  <div className="class flex items-center">
                    <div className="text-3xl font-bold text-gray-200">
                      $2,30,568
                    </div>
                  </div>
                  <div className="w-full h-1 rounded bg-gray-300 my-1">
                    <div className="w-[78%] h-1 rounded bg-green-500"></div>
                  </div>
                  <div className="text-xs font-medium text-gray-400 ">
                    Weekly Goal
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
              <div className="flex items-center justify-start w-full">
                <div className="flex-col w-[85%]">
                  <div className="text-sm font-medium text-violet-600 my-2">
                    Engaged Users
                  </div>
                  <div className="class flex items-center">
                    <div className="text-3xl font-bold text-gray-200">
                      32.78%
                    </div>
                  </div>
                  <div className="w-full h-1 rounded bg-gray-300 my-1">
                    <div className="w-[33%] h-1 rounded bg-red-500"></div>
                  </div>
                  <div className="text-xs font-medium text-gray-400 ">
                    Daily Goal
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row ">
            <div className="bg-gray-700 shadow-lg rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4 px-4 mx-4 my-2">
              <div className="flex items-center justify-center w-full">
                <div className="flex-col">
                  <div className="text-sm font-medium text-violet-600 my-2">
                    Weekly Income
                  </div>
                  <div className="class flex items-center">
                    <div className="text-3xl font-bold text-gray-200">
                      $6,568
                    </div>
                    <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                      <div className="text-xs bg-green-200 px-2 rounded-lg">
                        + 54%
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 items-center justify-center mt-4 ">
                    <div className="flex-col">
                      <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                        <div className="h-[20%] w-6 rounded-tr rounded-tl bg-green-400"></div>
                      </div>
                      <div className="text-xs font-medium ml-2 text-gray-400">
                        Mon
                      </div>
                    </div>
                    <div className="flex-col">
                      <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                        <div className="h-[60%] w-6 rounded-tr rounded-tl bg-green-400"></div>
                      </div>
                      <div className="text-xs font-medium ml-2 text-gray-400">
                        Tue
                      </div>
                    </div>
                    <div className="flex-col">
                      <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                        <div className="h-[70%] w-6 rounded-tr rounded-tl bg-green-400"></div>
                      </div>
                      <div className="text-xs font-medium ml-2 text-gray-400">
                        Wed
                      </div>
                    </div>
                    <div className="flex-col">
                      <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                        <div className="h-[44%] w-6 rounded-tr rounded-tl bg-green-400"></div>
                      </div>
                      <div className="text-xs font-medium ml-2 text-gray-400">
                        Thu
                      </div>
                    </div>
                    <div className="flex-col">
                      <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                        <div className="h-[87%] w-6 rounded-tr rounded-tl bg-green-400"></div>
                      </div>
                      <div className="text-xs font-medium ml-2 text-gray-400">
                        Fri
                      </div>
                    </div>
                    <div className="flex-col">
                      <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                        <div className="h-[55%] w-6 rounded-tr rounded-tl bg-green-400"></div>
                      </div>
                      <div className="text-xs font-medium ml-2 text-gray-400">
                        Sat
                      </div>
                    </div>
                    <div className="flex-col">
                      <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                        <div className="h-[34%] w-6 rounded-tr rounded-tl bg-green-400"></div>
                      </div>
                      <div className="text-xs font-medium ml-2 text-gray-400">
                        Sun
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 shadow-lg rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4 px-4 mx-4 my-2">
              <div className="flex items-center justify-center w-full">
                <div className="flex-col">
                  <div className="text-sm font-medium text-violet-600 my-2">
                    Weekly Users
                  </div>
                  <div className="class flex items-center">
                    <div className="text-3xl font-bold text-gray-200">
                      16,568
                    </div>
                    <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                      <div className="text-xs bg-red-200 px-2 rounded-lg">
                        - 8.7%
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap justify-center mt-4 ">
                    <div className="flex-col">
                      <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                        <div className="h-[79%] w-6 rounded-tr rounded-tl bg-violet-400"></div>
                      </div>
                      <div className="text-xs font-medium ml-2 text-gray-400">
                        Mon
                      </div>
                    </div>
                    <div className="flex-col">
                      <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                        <div className="h-[20%] w-6 rounded-tr rounded-tl bg-violet-400"></div>
                      </div>
                      <div className="text-xs font-medium ml-2 text-gray-400">
                        Tue
                      </div>
                    </div>
                    <div className="flex-col">
                      <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                        <div className="h-[30%] w-6 rounded-tr rounded-tl bg-violet-400"></div>
                      </div>
                      <div className="text-xs font-medium ml-2 text-gray-400">
                        Wed
                      </div>
                    </div>
                    <div className="flex-col">
                      <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                        <div className="h-[44%] w-6 rounded-tr rounded-tl bg-violet-400"></div>
                      </div>
                      <div className="text-xs font-medium ml-2 text-gray-400">
                        Thu
                      </div>
                    </div>
                    <div className="flex-col">
                      <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                        <div className="h-[67%] w-6 rounded-tr rounded-tl bg-violet-400"></div>
                      </div>
                      <div className="text-xs font-medium ml-2 text-gray-400">
                        Fri
                      </div>
                    </div>
                    <div className="flex-col">
                      <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                        <div className="h-[25%] w-6 rounded-tr rounded-tl bg-violet-400"></div>
                      </div>
                      <div className="text-xs font-medium ml-2 text-gray-400">
                        Sat
                      </div>
                    </div>
                    <div className="flex-col">
                      <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                        <div className="h-[64%] w-6 rounded-tr rounded-tl bg-violet-400"></div>
                      </div>
                      <div className="text-xs font-medium ml-2 text-gray-400">
                        Sun
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
