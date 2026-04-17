import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="box">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" className="svg">
              <text 
                x="50%" 
                y="50%" 
                dominantBaseline="middle" 
                textAnchor="middle" 
                fontWeight="bold"
                fontSize="16" /* Increased font size for the larger scale */
                fontFamily="Arial, sans-serif"
              >
                Mindshift
              </text>
            </svg>
          </div>
        </div>
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    --size: 400px; /* Increased from 250px to 400px */
    --duration: 2s;
    --main-bg-color: #F3EDE6; 
    --text-color: #521920; 
    
    --background: linear-gradient(
      0deg,
      rgba(243, 237, 230, 0.1) 0%,
      rgba(243, 237, 230, 0.2) 100%
    );

    height: var(--size);
    aspect-ratio: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader .box {
    position: absolute;
    background: var(--background);
    border-radius: 50%;
    border-top: 2px solid rgba(243, 237, 230, 0.8); /* Slightly thicker border for scale */
    box-shadow: rgba(0, 0, 0, 0.4) 0px 20px 30px -5px; /* Deeper shadow for larger size */
    backdrop-filter: blur(10px);
    animation: ripple var(--duration) infinite ease-in-out;
  }

  .loader .box:nth-child(1) {
    inset: 35%;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid var(--main-bg-color);
  }

  .loader .box:nth-child(2) { inset: 28%; z-index: 98; animation-delay: 0.2s; border-color: rgba(243, 237, 230, 0.6); }
  .loader .box:nth-child(3) { inset: 20%; z-index: 97; animation-delay: 0.4s; border-color: rgba(243, 237, 230, 0.4); }
  .loader .box:nth-child(4) { inset: 10%; z-index: 96; animation-delay: 0.6s; border-color: rgba(243, 237, 230, 0.2); }
  .loader .box:nth-child(5) { inset: 0%; z-index: 95; animation-delay: 0.8s; border-color: rgba(243, 237, 230, 0.1); }

  .loader .logo {
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader .logo svg {
    width: 100%;
    height: auto;
    fill: var(--text-color);
    animation: color-change var(--duration) infinite ease-in-out;
  }

  @keyframes ripple {
    0%, 100% { 
      transform: scale(1); 
      box-shadow: rgba(0, 0, 0, 0.4) 0px 20px 30px -5px;
    }
    50% { 
      transform: scale(1.08); /* Slightly reduced scale factor so it doesn't overflow at 400px */
      box-shadow: rgba(0, 0, 0, 0.5) 0px 35px 45px -5px;
    }
  }

  @keyframes color-change {
    0%, 100% { 
      fill: var(--text-color); 
      opacity: 0.7;
    }
    50% { 
      fill: var(--text-color); 
      opacity: 1;
    }
  }
`;

export default Loader;