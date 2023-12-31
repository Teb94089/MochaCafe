import React from "react";
import styled from "styled-components";
import avatar1 from "../assets/expresso.jpg";
import avatar2 from "../assets/cappatino.jpg";
import avatar3 from "../assets/blackco.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import { Main } from "./ReusableStyles";



  export default function Portfolio() {
    return (

    <Section id="portfolio">
     <div className="main-ontainer">
        <div className="container">
          <div className="title">
            <h1>
              <span>Our</span> Coffee
            </h1>
          </div>
          <div className="testimonials">
            <div className="testimonial">
              <div className="image">
                <img src={avatar1} alt="" />
              </div>
              <p>
                Expresso <span></span>{" "}
                
              </p>
            </div>
            <div className="testimonial">
              <div className="image">
                <img src={avatar2} alt="" />
              </div>
              <p>
                Cuppocino <span></span>{" "}
                
              </p>
            </div>
            <div className="testimonial">
              <div className="image">
                <img src={avatar3} alt="" />
              </div>
              <p>
                Coffee Bean<span></span>{" "}
                
              </p>
            </div>
           
          </div>
        </div>
        </div>
      </Section>
  ); 
}



const Section = styled.section`
.main-container {
  min-height: 100rem;
  padding: 14rem 14rem;
}
  margin: 5vw;
  background-color: rgba(11, 190, 173,0.8);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;
 
  .container {
    
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;
    ${TitleStyles};
    .title {
      position: absolute;
      top: -1rem;
      left: 25%;
      padding: 0 2rem;
      background-color: white;
    }
    .testimonials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6vw;
      margin-top: 3vw;
      .testimonial {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        p {
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
          span {
            color: #fc4958;
          }
        }
        ${imageZoomEffect};
        .image {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 10rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .testimonials {
        flex-direction: column;
      }
    }
  }
`;







