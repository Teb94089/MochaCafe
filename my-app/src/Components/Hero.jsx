import React from 'react'
import styled from "styled-components";
import hero from "../assets/chocC.jpg";
import heroDesign from "../assets/chocC.jpg";
export default function Hero() {
  

  return (
    <div className="main-container " >
    <Section id="home">
      <div className="background">
        <img src={hero} alt="Background Image" />
      </div>
      <div className="content">
      <div className="info">
          <h2>MOCHA CAFE</h2>
          <em>
          Our menu is a testament to our dedication to quality and variety. 
          </em>
          <button>ORDER NOW</button>
        </div>
        <div className="sale">
          <img src={heroDesign} alt="" />
          <h1>
          We ARE OPEN
            <span></span>
          </h1>
        </div>
       
      </div>
    </Section>
    </div>
  );
}

const Section = styled.section`

padding:0;
  height: 90vh;
  width: 100vw;
  position: relative;
  .background {
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .sale {
      position: relative;
      left: 60%;
      img {
        height: 70vh;
      }
      h1 {
        color: white;
        position: absolute;
        top: 25vh;
        left: 15vh;
        font-size: 4.5rem;
        span {
          display: block;
          font-size: 5vw;
        }
      }
    }
    .info {
      position: absolute;
      top: 40%;
      left: 10%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      h2 {
        color: #f9c74f;
        font-size: 4rem;
        letter-spacing: 0.5rem;
      }
      em {
        color: white;
        width: 60%;
        text-align: end;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: rgba(11, 190, 173,0.8);
        border: none;
        color: white;
        font-weight: 800;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      .sale {
        display: none;
      }
      .info {
        top: 25%;
        h2 {
          font-size: 2rem;
        }
        em {
          width: 90%;
        }
      }
    }
  }
`;
 
  
