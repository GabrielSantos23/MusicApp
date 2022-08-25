import React from "react";
import CenterMenu from "./components/CenterMenu";
import { Facebook, Twitter, YouTube, LinkedIn } from "@material-ui/icons";
function Footer() {
  const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]";
  return (
    <div className='footer relative z-[-1] mt-[-10rem] flex h-[45rem] flex-col items-center justify-start bg-[#081730] px-[5rem] pt-[18rem]'>
      <CenterMenu />
      <div className='mt-14 flex w-[100%] justify-center'>
        <div className={SocialStyle}>
          <Facebook />
        </div>
        <div className={SocialStyle}>
          <Twitter />
        </div>
        <div className={SocialStyle}>
          <YouTube />
        </div>
        <div className={SocialStyle}>
          <LinkedIn />
        </div>
      </div>

      <span className='mt-[4rem] flex justify-center px-[15rem] pl-44 text-center align-middle text-[1rem] text-gray-400'>
        Designed and programmed by gabriel santos
      </span>
    </div>
  );
}

export default Footer;
