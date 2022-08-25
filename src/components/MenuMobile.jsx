import React, { useEffect } from "react";
import { Container } from "./style.js";
import { IoClose } from "react-icons/io5";
function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);
  return (
    <Container className='container' isVisible={menuIsVisible}>
      <IoClose
        className='svg'
        size={45}
        onClick={() => setMenuIsVisible(false)}
      />
      <ul className='flex w-[100%] justify-between'>
        <li>Home</li>
        <li>About</li>
        <li>Preformer</li>
        <li>Event Shedule</li>
      </ul>
    </Container>
  );
}

export default MenuMobile;
