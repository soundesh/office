import { useState } from "react"; // import state
import Profileimg from "../components/assitComponet/Profileimg";
const Navbar1 = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex item-center  min-h-[70px] ">
      <div className="flex items-center justify-between ">
        <nav>
          <ul className="DESKTOP-MENU hidden lg:flex -mb-5">
            <li>
              <button className=" btnFocus focus:bg-gray-200 py-2 px-3 border-b-4 border-gray-400 min-w-[100px] focus:border-b-4  focus:border-b-blue-500 ">
                Home
              </button>
            </li>
            <li>
              <button className=" btnFocus focus:bg-gray-200 py-2 px-3 border-b-4 border-gray-400 min-w-[100px] focus:border-b-4  focus:border-b-blue-500 ">
                <p>TasK Management</p>
              </button>
            </li>
            <li>
              <button className=" btnFocus focus:bg-gray-200 py-2 px-3 border-b-4 border-gray-400 min-w-[100px] focus:border-b-4  focus:border-b-blue-500 ">
                <p>Leave Maintenance</p>
              </button>
            </li>
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
       
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </div>
  );
};

export default Navbar1;
