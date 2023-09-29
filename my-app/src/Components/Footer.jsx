import React from "react";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";
import logo from "../assets/choco.jpg";
import AiFillInstagram from "../assets/insta.png"; // Update import statements
import FaFacebookF from "../assets/fbook.png"; // Update import statements
import GrLinkedinOption from "../assets/link.png"; // Update import statements
import BsTwitter from "../assets/twiiter.png"; // Update import statements
export default function Footer() {
  return (
    <div className="footer">
      <Section1 id="newsletter">
      <div className="title">
        <h1>
          <span>Subscribe</span> Newsletter
        </h1>
        <p>
        Be the first to know of any specials, launches, rewards and more.
        </p>
      </div>
      <div className="container">
        <input type="text" placeholder="email@example.com" />
        <button>Search</button>
      </div>
    </Section1>
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

const Section1 = styled.section`
  border: 0.01rem solid black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  ${TitleStyles};
  .container {
    background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
    padding: 0.3vw;
    input {
      border: none;
      padding: 1.5rem 8rem 1.5rem 1rem;
      font-size: 1.3rem;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 1rem 5rem;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        letter-spacing: 0.6rem;
        padding: 1rem 2  rem;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      padding: 0.8rem;
      border-radius: 0.5rem;
      input {
        width: 75vw;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      button {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem;
        &:hover {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;
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
