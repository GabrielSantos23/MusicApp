import { React, useState } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

function Feature({ icon, title }) {
  const variant = {
    true: {
      transform: "scale(1)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };
  const [elementIsVisible, setElementIsVisible] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      // minTopValue={100}
    >
      <div className='feature relative mx-12 flex flex-col items-center justify-center text-center'>
        {/* icon */}
        <motion.div
          variants={variant}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          animate={`${elementIsVisible}`}
          className='icon rounded-2xl bg-[#081730] p-4'
        >
          <img src={require(`./img/${icon}.png`)} alt='' className='w-[3rem]' />
        </motion.div>

        <span className='mt-5'>{title}</span>

        <span className='mt-4 text-[#707070]'>
          Nunc elementum, dolor vitae lacinia pulvinar, augue felis scelerisque
          libero, sit amet laoreet lorem.
        </span>

        <span className='mt-[3rem] text-[#E600FF]  hover:cursor-pointer'>
          Learn more
        </span>
      </div>
    </VisibilitySensor>
  );
}

export default Feature;
