import React, { useState } from "react";
import DowloadAds from "./DowloadAds";
import { motion } from "framer-motion";
import VisibilytySensor from "react-visibility-sensor";

function Hero() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };
  const musicPlayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };
  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  };
  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };
  return (
    <VisibilytySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <div className='heroall wrapper relative flex h-[35rem] w-[100%] items-center justify-between rounded-b-[5rem] bg-[#081730] px-[5rem]'>
        <div className='headings items flex h-[100%] flex-col items-start justify-center text-[3rem]'>
          <span>Experience The</span>
          <span>
            <b>Best Quality Music</b>
          </span>
          <span className='text-[15px] text-[#525d6e]'>
            Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.{" "}
            <br />
            Suspendisse in leo non risus tincidunt lobortis.
          </span>
          <div>
            <span className='text-[13px]'>Download now on IOS and Android</span>
            <DowloadAds />
          </div>
        </div>
        <div className='images relative w-[50%]'>
          <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={require("./img/backgraphics.png")}
            alt=''
            className='bg absolute top-[-8rem] left-[19rem]'
          />
          <img
            src={require("./img/p 1.png")}
            alt=''
            className='img absolute top-[-15rem] left-[13rem] h-[34rem]'
          />
          <motion.img
            variants={musicPlayer}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
            src={require("./img/p 2.png")}
            alt=''
            className='img absolute left-[235px] top-[94px] w-[175px]'
          />
          <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("./img/p 3.png")}
            alt=''
            className='img absolute left-[13rem] top-[12rem] w-[5rem]'
          />
          <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("./img/p 4.png")}
            alt=''
            className='img absolute left-[12.5rem] top-[12rem] w-[5rem]'
          />
        </div>
      </div>
    </VisibilytySensor>
  );
}

export default Hero;
