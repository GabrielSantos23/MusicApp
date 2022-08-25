import styled, { css } from "styled-components";

export const Container = styled.section`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(16, 19, 31);
  background: linear-gradient(
    90deg,
    rgba(16, 19, 31, 1) 0%,
    rgba(70, 73, 97, 1) 50%,
    rgba(32, 34, 51, 1) 100%
  );
  opacity: 0;
  pointer-events: none;

  transition: 0.5s;
  transform: translateY(50px);
  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.5);
    transition: 0.7s;
  }
  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }
      ul {
        transform: scale(1);
      }
    `}
`;
