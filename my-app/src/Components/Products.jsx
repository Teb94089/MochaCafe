import React from "react";
import styled from "styled-components";
import product1 from "../assets/chickenburger.jpg";
import product2 from "../assets/cheeseeburger.jpg";
import product3 from "../assets/chocolate-cake.jpg";
import product4 from "../assets/carrotCake.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import { Main } from "./ReusableStyles";
export default function Products() {
 
 return (
    <Section id="products">
      <div className="title">
    <h1>
      <span>In-Store Menu</span> 
    </h1>
  </div>
  <MenuContainer>
      <><MenuHeader>Mocha Cafe Menu</MenuHeader><MenuSection>
      <MenuCategory>Our Coffee</MenuCategory>
      <MenuGrid>
        <MenuItem>
          <ItemName>Espresso</ItemName>
          <ItemPrice>R 23</ItemPrice>
        </MenuItem>
        <MenuItem>
          <ItemName>Black Coffee</ItemName>
          <ItemPrice>R 26</ItemPrice>
        </MenuItem>
        <MenuItem>
          <ItemName>White Coffee</ItemName>
          <ItemPrice>R 24</ItemPrice>
        </MenuItem>
        <MenuItem>
          <ItemName>Americano</ItemName>
          <ItemPrice>R 28</ItemPrice>
        </MenuItem>
        
        <MenuItem>
          <ItemName>Cortado</ItemName>
          <ItemPrice>R 25</ItemPrice>
        </MenuItem>
        <MenuItem>
          <ItemName>Flat White</ItemName>
          <ItemPrice>R 27</ItemPrice>
        </MenuItem>
        <MenuItem>
          <ItemName>Latte</ItemName>
          <ItemPrice>R 32</ItemPrice>
        </MenuItem>
        <MenuItem>
          <ItemName>Cappuccino</ItemName>
          <ItemPrice>R 35</ItemPrice>
        </MenuItem>
      </MenuGrid>
    </MenuSection><MenuSection>
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
      </MenuSection><MenuSection>
        <MenuCategory>Iced Coffee</MenuCategory>
        <MenuGrid>
          <MenuItem>
            <ItemName>Classic</ItemName>
            <ItemPrice>R 36</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Gourmet</ItemName>
            <ItemPrice>R 50</ItemPrice>
          </MenuItem>

          {/* Add more iced coffee items here */}
        </MenuGrid>
      </MenuSection><MenuSection>
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
          <MenuItem>
            <ItemName>Chocolate cake</ItemName>
            <ItemPrice>R 180</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Carrot cake</ItemName>
            <ItemPrice>R 110</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Vanilla cake</ItemName>
            <ItemPrice>R 100</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Velvet cake</ItemName>
            <ItemPrice>R 150</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Blackforest cake</ItemName>
            <ItemPrice>R 120</ItemPrice>
          </MenuItem>
          {/* Add more cake items here */}
        </MenuGrid>
      </MenuSection><MenuSection>
        <MenuCategory>Burgers</MenuCategory>
        <MenuGrid>
          <MenuItem>
            <ItemName>Classic Burger</ItemName>
            <ItemPrice>R 45</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Cheese Burger</ItemName>
            <ItemPrice>R 45</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Beef Burger</ItemName>
            <ItemPrice>R 45</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Chicken Burger</ItemName>
            <ItemPrice>R 45</ItemPrice>
          </MenuItem>
          {/* Add more burger items here */}
        </MenuGrid>
      </MenuSection></>
    </MenuContainer>
</Section>
 )
}


const Section = styled.div`
height: auto;
min-height: 35rem;
padding: 8rem 0;
.title {
  position: absolute;
  top: -1rem;
  left: 35%;
  padding: 0 2rem;
  background-color: white;
}
`;
const MenuContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: rgb(69 211 255 / 27%);
   
 
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

