import { useState } from "react"; // import state
import Profileimg from "../components/assitComponet/Profileimg";
const Navbar1 = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex item-center bg-slate-100 min-h-[70px] ">
      <div className="flex items-center justify-between ">
        <nav>
          <section className="MOBILE-MENU flex lg:hidden bg-slate-100">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <div className=" flex items-center justify-end  flex-row space-x-2">
                <Profileimg
                  SrcImg="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                  altname="profilename"
                  UIstyle=""
                />
                <i className="fa-solid fa-ellipsis-vertical text-2xl"></i>
              </div>
            </div>

            <div
              className={
                isNavOpen ? "showMenuNav bg-slate-100" : "hideMenuNav "
              }
            >
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <button
                    className="btnFocus"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Home
                  </button>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <button onClick={() => setIsNavOpen(false)}>Profile</button>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <button
                    className="btnFocus"
                    onClick={() => setIsNavOpen(false)}
                  >
                    logout
                  </button>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden lg:flex -mb-5">
            <li>
              <button className=" btnFocus focus:bg-gray-200 py-2 px-3 border-b-4 border-gray-400 min-w-[100px] focus:border-b-4  focus:border-b-blue-500 ">
                Home
              </button>
            </li>
            <li>
              <button className=" btnFocus focus:bg-gray-200 py-2 px-3 border-b-4 border-gray-400 min-w-[100px] focus:border-b-4  focus:border-b-blue-500 ">
                <p>Profile</p>
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
