import React from "react";

const Profileimg = ({ SrcImg, altname, UIstyle }) => {
  /* <Profileimg
  SrcImg="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
  altname="profilename"
  UIstyle="bg-blue-600"
  /> */

  return (
    <div
      className={`w-[32px] h-[32px] broder-3 rounded-full ${UIstyle} bg-white flex items-center justify-center`}
    >
      <img
        style={{ borderRadius: "50%" }}
        className="w-[30px] h-[30px] object-cover"
        src={SrcImg}
        alt={altname}
      />
    </div>
  );
};

export default Profileimg;
