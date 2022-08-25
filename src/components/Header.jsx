import React from "react";
import CenterMenu from "./CenterMenu";
import { BiMenu } from "react-icons/bi";
function Header({ setMenuIsVisible }) {
  const buttonStyle =
    "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]";
  return (
    <div className='header tet-[0.8rem] flex items-center justify-between bg-[#081730] px-[5rem] py-[2.4rem] '>
      <img
        src={require("./img/MuzicLogo.png")}
        alt=''
        className='logo h-[42px] w-[42px]'
      />
      <CenterMenu />
      <BiMenu
        className='mobile-btn'
        onClick={() => setMenuIsVisible(true)}
        size={45}
      />

      <div className='buttons flex'>
        <button className={`mr-[35px] hover:bg-[#232A4E] ` + buttonStyle}>
          Log in
        </button>
        <button className={buttonStyle + ` bg-[#232A4E]`}>Sign up</button>
      </div>
    </div>
  );
}

export default Header;
