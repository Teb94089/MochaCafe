import { css } from "styled-components";

export const imageZoomEffect = css`
  img {
    transition: 0.8s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const TitleStyles = css`
  .title {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h1 {
      font-size: 3rem;
      text-transform: uppercase;
      span {
        color:  rgba(11, 190, 173,0.8);
      }
    }
    .yellow {
      color: #f9c74f;
    }
    h3 {
      font-size: 2rem;
      text-transform: uppercase;
      span {
        color:  rgba(11, 190, 173,0.8);
      }
    }
    .yellow {
      color: #f9c74f;
    }
    p {
      padding: 0 10vw;
      font-size: 1.1rem;
      line-height: 2rem;
      letter-spacing: 0.1rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .title {
      gap: 1rem;
      h1 {
        font-size: 2rem;
      }
      p {
        padding: 0 1vw;
      }
    }
  }
`;

// Define ButtonStyles here
export const ButtonStyles = css`
  padding: 0.6rem 3rem;
  letter-spacing: 0.2rem;
  border-radius: 2rem;
  font-size: 1.1rem;
  border: none;
  color: white;
  background-color: #fc4958;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #f9c74f;
  }
`;
//main-container
export const Main = css`
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0 0 0;
  height: auto;
  min-height: 35rem;
  padding: 14rem 0;
}
`;
// Define ContactStyles here
export const ContactStyles = css`
.main-container {
 
 
}

.central-form {
  height:50%;
  max-width: 1100px;
  padding:10px ;
  display: flex;
  box-shadow: 0 0px 20px -2px #1f2235;
  border-radius: 12px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  background-color:  light-blue;
}

.central-form h2 {
  color: rgba(4, 4, 9, 0.689);
  font-family: "Montserrat Medium";
  letter-spacing: 0.1rem;
  margin-bottom: 20px;
}

.back-form {
  max-width: 320px;
  
 
}

.back-form .img-back {
  width: 100%;
  margin-bottom: 20px;
}

.img-back h4 {
  font-family: "Montserrat Medium";
  letter-spacing: 0.1rem;
  font-weight: 400;
  color: rgba(4, 4, 9, 0.689);
  font-size: 14px;
  opacity: 0.9;
}

.back-form .img-back img {
  width: 50%;
  height: 50%;
  opacity: 0.9;
}

.central-form form {
  width: auto;
 
  display: flex;
  color: black;
  padding: -2px;
  justify-content: center;
  flex-direction: column;
  margin-top: -10px;
  opacity: 0.9;
  background-color: white;
 
  border-radius: 10px;
}

form p {
  text-align: center;
  margin-bottom: 5px;
  color: black;
  letter-spacing: 0.1rem;
  font-family: "Poppins Bold";
}

form label {
  margin-bottom: 5px;
  color: black;
  letter-spacing: 0.2rem;
}

form input,
textarea {
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: 0.3s;
  border-radius: 10px;
}

textarea:focus {
  border: 2px solid rgba(30, 85, 250, 0.47);
  background-color: #fff;
}
form input:focus {
  border: 2px solid rgba(30, 85, 250, 0.47);
  background-color: #fff;
}

form button {
  margin-top: 15px;
  padding: 5px;
  outline: none;
  width: 900px;
  color: rgba(4, 4, 9, 0.689);
  border: 2px solid navy;
  font-size: 12px;
  border-radius: 19px;
  background-color: lightblue;
  font-size: 18px;
  width: 160px;
  align-items: center;
  justify-content: center;
}

form button:hover {
  background-color: lightseagreen;
  transition: all ease 1s;
  border: 2px solid #1f2235;
}

button .load {
  width: 100%;
}

button .load img {
  width: 60px;
  color: green;
}
.col i {
  padding: 7px;
  color: rgba(4, 4, 9, 0.689);
}
.col i:hover {
  transform: scale(1.5);
}

@media screen and (min-width: 940px) {
  .main-container {
    min-height: 100vh;
    /* background-image: url("../../assets/ContactMe/contact_us.jpeg"); 
    background-image: url('../../assets//Home/bg.jpg'); */
    min-height: 50rem;
    padding: 22rem 0;
    margin: 100px 0 -450px 0;
  }

  .back-form {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }

  .img-back {
    flex: 1;
    align-self: center;
    margin-right: 20px;
  }

  form {
    flex: 0.9;
  }
}
@media screen and (max-width: 414px) {
  .central-form h2 {
    font-size: 16px;
  }
}
`;
