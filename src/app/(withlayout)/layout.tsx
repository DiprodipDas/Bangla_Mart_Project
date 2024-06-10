"use client";

import { CgProfile } from "react-icons/cg";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-12 '>
      <div className='col-span-2 h-screen bg-gray-800 text-zinc-50'>
        <div className='side-bar'>
          <ul className='p-2 m-2  '>
            <li className='rounded-lg p-4 hover:bg-gray-700 focus:bg-green-300 '>
              <div className="flex items-center gap-1">
                <div>
                  <CgProfile />
                </div>
                <div>Profile</div>
              </div>
            </li>
            <li className='rounded-lg p-4 hover:bg-gray-700 focus:bg-green-300'>
              Order
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className='col-span-10'>{children}</div>
    </div>
  );
};
export default DashboardLayout;
