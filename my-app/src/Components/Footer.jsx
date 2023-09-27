import React from "react";
import styled from "styled-components";
import logo from "../assets/choco.jpg";
import AiFillInstagram from "../assets/insta.png"; // Update import statements
import FaFacebookF from "../assets/fbook.png"; // Update import statements
import GrLinkedinOption from "../assets/link.png"; // Update import statements
import BsTwitter from "../assets/twiiter.png"; // Update import statements
export default function Footer() {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
          <img src={logo} alt="" />
          <p>
          Mocha Cafe's story begins with a deep-rooted love for the art of coffee-making.
          </p>
          <ul>
          <a href="https://www.linkedin.com/in/nonkululeko-tebeni-938a86190/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/Teb94089">
              <i className="fa fa-github"></i>
            </a>
          </ul>
        </div>
        <div className="about container">
          <div className="title">
            <h3>About Us</h3>
          </div>
          <p>
          Welcome to Mocha Cafe, where the passion for coffee and the love of community come together to create an exceptional experience.
          Inspired by the vibrant coffee culture of places, we set out on a journey to craft a unique space that not only serves exceptional coffee but also fosters meaningful connections.
          </p>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Contact Us</h3>
          </div>
          <p>+91 1231231231</p>
          <p>mochacafe@gmail.com</p>
          <p>@mochacafe</p>
          <p>412 Street, Ground Floor, South Africa</p>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h2>
          Copyright &copy; 2021 <span>Mocha Cafe</span>
        </h2>
      </LowerFooter>
    </div>
  );
}

const Section = styled.footer`
  margin: 0;
  background: linear-gradient(to right, #fc4958, #e85d04);
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fc4958;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness(0) invert(1);
    width: 10vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;
  h2 {
    span {
      color: #fc4958;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;
