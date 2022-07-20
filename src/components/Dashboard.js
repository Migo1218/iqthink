import React, { useState } from "react";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div>
        {/* <Navbar /> */}

        <div className="flex w-full">
          <div
            className={`${
              open ? "w-72" : "w-20 "
            } bg-white shadow-lg h-screen p-5 rounded-md pt-8 relative duration-300`}
          >
            <span
              class={`material-symbols-outlined absolute text-white bg-dark-purple cursor-pointer  mt-16 px-1 -right-3 top-9 w-7 border-gold
           border-2 rounded-full ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}
              alt="back"
            >
              arrow_back_ios
            </span>

            {/* <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer mt-24 -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
            alt="back"
          /> */}
            <div className="w-3/5 m-auto flex gap-x-4 items-center">
              <img
                src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1658290712/iqthink/Vector_xa6hlv.svg"
                className={`cursor-pointer h-10 w-10 duration-500 ${
                  open && "rotate-[360deg]"
                }`}
                alt=""
              />
              <div
                className={`text-white origin-left font-medium text-xl duration-300 ${
                  !open && "hidden"
                }`}
              >
                <img
              
                  src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1658290852/iqthink/Gandalf_s_Book_xfmwtz.svg"
                  alt="ganfa"
                />
              </div>
            </div>
            <ul className="pt-6">
              <li className="flex  rounded-md p-2 cursor-pointer hover:bg-lime-600 font-semibold text-letter-color text-sm items-center gap-x-4">
                <span class="material-symbols-outlined">dashboard</span>

                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Dashboard
                </span>
              </li>

              <li className="flex  rounded-md p-2 cursor-pointer hover:bg-lime-600 font-semibold text-letter-color text-sm items-center gap-x-4">
                <span class="material-symbols-outlined">calendar_month</span>

                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Calendar
                </span>
              </li>

              <li className="flex  rounded-md p-2 cursor-pointer hover:bg-lime-600 font-semibold text-letter-color text-sm items-center gap-x-4">
                <span class="material-symbols-outlined">android</span>

                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Characters
                </span>
              </li>

              <li className="flex  rounded-md p-2 cursor-pointer hover:bg-lime-600 font-semibold text-letter-color text-sm items-center gap-x-4">
                <span class="material-symbols-outlined">forum</span>

                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Chat
                </span>
              </li>

              <li className="flex rounded-md p-2 cursor-pointer hover:bg-lime-600 font-semibold text-letter-color text-sm items-center gap-x-4">
                <span class="material-symbols-outlined">logout</span>

                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
