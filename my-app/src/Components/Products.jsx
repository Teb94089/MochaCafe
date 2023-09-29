import React from "react";
import styled from "styled-components";
import product1 from "../assets/chickenburger.jpg";
import product2 from "../assets/cheeseeburger.jpg";
import product3 from "../assets/chocolate-cake.jpg";
import product4 from "../assets/carrotCake.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Products() {
  const data = [
    {
      image: product1,
      name: "Chicken Burger",
      price: "R69.99",
    },
    {
      image: product2,
      name: "Cheese Burger",
      price: "R59.99",
    },
    {
      image: product3,
      name: "Chocolate cake",
      price: "R90.00",
    },

    {
      image: product4,
      name: "Carrot Cake",
      price: "R12.5/pcs",
    },
  ];
  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Favourite</span> All the time!
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>He Printing and Typesetting the industry. </p>
              <button>Buy Now</button>
            </div>
          );
        })}
      </div>
      <div>

      <div className="title">
        <h1>
          <span>In-Store</span> Menu
        </h1> 
        </div>
      <MenuContainer>
      <MenuHeader>Mocha Cafe Menu</MenuHeader>
      <MenuSection>
        <MenuCategory>Our Coffee</MenuCategory>
        <MenuGrid>
          <MenuItem>
            <ItemName>Espresso</ItemName>
            <ItemPrice>R 24 / R 32</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Espresso</ItemName>
            <ItemPrice>R 24 / R 32</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Espresso</ItemName>
            <ItemPrice>R 24 / R 32</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Americano</ItemName>
            <ItemPrice>R 28</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Americano</ItemName>
            <ItemPrice>R 28</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Americano</ItemName>
            <ItemPrice>R 28</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Americano</ItemName>
            <ItemPrice>R 28</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Cappuccino</ItemName>
            <ItemPrice>R 34</ItemPrice>
          </MenuItem>
        </MenuGrid>
      </MenuSection>

      <MenuSection>
        <MenuCategory>Tea</MenuCategory>
        <MenuGrid>
          <MenuItem>
            <ItemName>Chai Latte</ItemName>
            <ItemPrice>R 36</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Earl Grey</ItemName>
            <ItemPrice>R 30</ItemPrice>
          </MenuItem>
        </MenuGrid>
      </MenuSection>

      <MenuSection>
        <MenuCategory>Iced Coffee</MenuCategory>
        <MenuGrid>
          <MenuItem>
            <ItemName>Cold Brew</ItemName>
            <ItemPrice>R 36</ItemPrice>
          </MenuItem>
          {/* Add more iced coffee items here */}
        </MenuGrid>
      </MenuSection>

      <MenuSection>
        <MenuCategory>Cake</MenuCategory>
        <MenuGrid>
          <MenuItem>
            <ItemName>Croissant</ItemName>
            <ItemPrice>R 22</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Muffin</ItemName>
            <ItemPrice>R 18</ItemPrice>
          </MenuItem>
          {/* Add more cake items here */}
        </MenuGrid>
      </MenuSection>

      <MenuSection>
        <MenuCategory>Burgers</MenuCategory>
        <MenuGrid>
          <MenuItem>
            <ItemName>Classic Burger</ItemName>
            <ItemPrice>R 45</ItemPrice>
          </MenuItem>
          {/* Add more burger items here */}
        </MenuGrid>
      </MenuSection>
    </MenuContainer>
  
</div>
    </Section>
    
  );
}
const MenuContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: rgb(69 211 255 / 27%);
   
  border-radius:10%;
`;

const MenuHeader = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

const MenuSection = styled.div`
  margin-bottom: 30px;
`;

const MenuCategory = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 10px; /* Gap between items */
  border-bottom: 50%;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.h3`
  font-size: 14px;
`;

const ItemPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
const Section = styled.section`
margin: 50px 0 0 0;
    min-height: 35rem;
    padding: 14rem 0;
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #f9c74f;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
        
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background:  rgba(11, 190, 173,0.8);
        text-transform: uppercase;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
