import React from "react";
import Profile from "./profile.jpg";

const ProfileCard = () => {
  return (
    <div className="boxDataShdow rounded-lg bg-white min-h-56 addEmpForm  h-56 min-w-[270px] ">
      <h1 className="flex justify-center mb-1 text-xl">
        software traniee engineer
      </h1>
      <div className="border-y-4 rounded-3xl border-pink-400 h-44 flex flex-row space-x-2 items-center">
        <div className="border-4 border-indigo-200 rounded-3xl">
          <img
            style={{
              borderRadius: "18%",
            }}
            src={Profile}
            width="100"
            height="100"
            alt="profile"
          />
        </div>
        <div className="rounded-lg space-y-3 my-2 boxDataShdow">
          <h1 className="border-b-2">
            <i className="fa-solid fa-user"></i>Name:Anand
          </h1>
          <h1 className="border-b-2">
            <i className="fa-solid fa-id-badge"></i>ID:RIM-875
          </h1>
          <h1 className="border-b-2">
            <i className="fa-solid fa-mobile"></i>Mobile:123456789
          </h1>
          <h1 className="border-b-2">
            <i className="fa-solid fa-briefcase"></i>Deparment:web development
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
