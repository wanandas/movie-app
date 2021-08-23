import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../utils/COLOR";

interface Props {
  isActive: boolean;
}

export function Modal({
  button,
  price,
}: {
  button: JSX.Element;
  price: number;
}) {
  const [open, setOpen] = useState<boolean>(false);

  const [counter, setCounter] = React.useState<number>(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((pre) => pre - 1);
    }, 1000);
    if (counter === 0) setOpen(false);
    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <>
      <ContainButton
        onClick={() => {
          clearInterval(counter);
          setCounter(60);
          setOpen(!open);
        }}
      >
        {button}
      </ContainButton>
      <ModalContainer isActive={open}>
        <ModalContent>
          <CloseBtn
            onClick={() => {
              clearInterval(counter);
              setOpen(!open);
              setCounter(60);
            }}
          >
            &times;
          </CloseBtn>
          <h2>Shopping</h2>
          <h3>โอนเงินไปที่ xxx-x-xxxxx-x</h3>
          <h3>กรุณาโอนเงินภายใน {counter}</h3>
        </ModalContent>
      </ModalContainer>
    </>
  );
}

const ContainButton = styled.div`
  border-radius: 0.25rem;
  width: 100%;
  height: 100%;

  & button {
    border: none;
    font-weight: 800;
    font-size: 3rem;
    background-color: ${COLORS.WHITE};
  }
  &:hover {
    & button {
      opacity: 0.5;
    }
  }
`;

const ModalContainer = styled.div<Props>`
  display: ${(props) => (props.isActive ? "unset" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(13, 37, 63, 0.7);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 50% auto; /* 15% from the top and centered */
  padding: 20px;
  text-align: center;
  border-radius: 0.5rem;
  border: 1px solid ${COLORS.GREY};
  position: relative;
  width: 80%; /* Could be more or less, depending on screen size */

  @media (min-width: 768px) {
    margin: 20% auto;
    width: 60%;
  }
  @media (min-width: 1024px) {
    margin: 10% auto;
  }
  @media (min-width: 1440px) {
    width: 40%;
  }
`;
export const CloseBtn = styled.span`
  color: ${COLORS.GREY};
  float: right;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  top: 0;
  right: 1rem;

  &:hover,
  &:focus {
    color: ${COLORS.PRIMARY};
    text-decoration: none;
    cursor: pointer;
  }
`;
