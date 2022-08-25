import { React, useState } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import MusicPlayer from "./MusicPlayer";
function Search() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "-60rem",
    },
    false: {
      left: "-100rem",
    },
  };
  const redimg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };
  const musicimg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };
  return (
    <div className='search relative z-[-1] mt-[-15rem] flex h-[65rem] items-center justify-between rounded-b-[5rem] bg-[#081730] px-[5rem] pt-[18rem] pb-[10rem]'>
      {/* left side */}
      <div className='left flex-1'>
        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("./img/backgraphics.png")}
          alt=''
          className='absolute top-[22rem] left-[47rem]'
        />
        <motion.img
          src={require("./img/d1.png")}
          alt=''
          className='img absolute top-[26rem] w-[16rem] '
        />{" "}
        <motion.img
          src={require("./img/d2.png")}
          alt=''
          className='img absolute top-[32.7rem] left-[7rem] z-10 w-[9rem]'
        />{" "}
        <motion.img
          variants={redimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
          src={require("./img/d3.png")}
          alt=''
          className='img absolute top-[33rem] left-[17rem] z-10 w-[9rem]'
        />
        <motion.img
          variants={musicimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("./img/d4.png")}
          alt=''
          className='img absolute top-[50rem] left-[2rem] z-10 w-[17rem]'
        />
      </div>
      {/* right side */}
      <div className='right flex h-[100%] flex-1 flex-col items-start justify-start pt-[9rem]'>
        {/* Search */}
        <div className='searchbar flex w-[100%] justify-start'>
          <input
            type='text'
            placeholder='Enter the keyword or URL'
            className='h-[3rem] flex-[19] rounded-xl bg-[#020917] p-3 outline-none'
          />
          {/* SearchIcon */}
          <div className='searchIcon ml-4 flex h-[3rem] flex-1 items-center rounded-xl bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4'>
            <img
              src={require("./img/search.png")}
              alt=''
              className='w-[1.5rem]'
            />
          </div>
        </div>
        {/* tild icon */}
        <div className='tild mt-7 flex w-[100%] items-center justify-start'>
          <img
            src={require("./img/Path 318.png")}
            alt=''
            className='w-[5rem]'
          />
        </div>

        {/* paragraph */}
        <div className='detail mt-5 flex flex-col text-4xl'>
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className='mt-3 text-sm text-[#4D586A]'>
            Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
            eget. Vestibulum ullamcorper <br /> volutpat varius.
          </span>
        </div>
        {/* Music Player */}
        <VisibilitySensor
          onChange={(isVisible) => setElementIsVisible(isVisible)}
        >
          <MusicPlayer />
        </VisibilitySensor>
      </div>
    </div>
  );
}

export default Search;
