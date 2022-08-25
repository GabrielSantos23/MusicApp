import React from "react";

function DowloadAds() {
  const downloadimageStyle =
    "border-[2px] border-[#232a4e] rounded-[13px] h-[3rem] w-[10rem]";
  return (
    <div className='download'>
      <div className='download_images flex'>
        <img
          src={require("./img/App Store.png")}
          alt='App Store'
          className={downloadimageStyle + ` mr-[2rem]`}
        />
        <img
          src={require("./img/Google Play.png")}
          alt='Google Play'
          className={downloadimageStyle}
        />
      </div>
    </div>
  );
}

export default DowloadAds;
