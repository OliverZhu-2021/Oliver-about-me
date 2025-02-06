import styled, { keyframes } from "styled-components";
import plane from '../assets/aeroplane.svg';
import cloud from '../assets/cloud.svg';

const Earth = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background: linear-gradient(#6ab9ff, #0090d2);
  border-radius: 50%;
  border: 1px solid #fff;
  box-shadow: inset 0 0 12px rgba(0, 0, 0, .8),
              0 3px 12px rgba(0, 0, 0, .8);
  overflow: hidden;
`;

const animatePlane = keyframes`
  0% {
    transform: translate(2px, 2px);
  }

  50% {
    transform: translate(-2px, -2px);
  }

  100% {
    transform: translate(2px, 2px);
  }
`;

const Plane = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animatePlane} 1s linear infinite;
  img {
    position: relative;
    width: 32px;
    height: 32px;
    z-index: 3;
  }
`;

const animateCloud = keyframes`
  0% {
    transform: translateX(50px);
  }

  40%,100% {
    transform: translateX(-50px);
  }
`;

const Cloud = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  img {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 0;
    left: 0;
    opacity: .8;
    z-index: 2;
    animation: ${animateCloud} 3s linear infinite;
  }
  img:nth-child(1) {
    top: 6px;
    amimation-delay: -2s;
    animation: ${animateCloud} 3.5s linear infinite;
  }
  img:nth-child(2) {
    top: 24px;
    amimation-delay: -1s;
    animation: ${animateCloud} 3s linear infinite;
  }
  img:nth-child(3) {
    top: 12px;
    amimation-delay: -2.5s;
    animation: ${animateCloud} 2.5s linear infinite;
  }
`;

const EarthSpin = () => {

  return(
    <Earth>
      <Plane>
        <img src={plane} alt="aeroplane" />
      </Plane>
      <Cloud>
        <img src={cloud} alt="cloud" />
        <img src={cloud} alt="cloud" />
        <img src={cloud} alt="cloud" />
      </Cloud>
    </Earth>
  )
};

export default EarthSpin;