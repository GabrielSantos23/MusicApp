import React from "react";
import Feature from "./Feature";

function Experience() {
  return (
    <div className='experience  z-[2] mt-[-10rem] flex h-[60rem] flex-col items-center justify-start rounded-b-[5rem] bg-[#020917] px-[5rem] pt-[18rem]'>
      {/* titld icon */}
      <img src={require("./img/Path 318.png")} alt='' className='w-[5rem]' />
      {/* heading */}
      <div className='headline mt-7 flex flex-col items-center text-[2rem]'>
        <span>An Amazing App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>
      <div className='feature flex items-center justify-around'>
        <Feature icon='Group 2' title='for Live Music' />
        <Feature icon='music icon' title='for Daily Music' />
        <Feature icon='Group 4' title='for Artists' />
      </div>
    </div>
  );
}

export default Experience;
