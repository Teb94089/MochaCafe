import React from 'react'
import styled from "styled-components";
export default function Contact() {
  return (
    <div>
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
  )
}

const MenuContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const MenuHeader = styled.h1`
  font-size: 28px;
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
  gap: 20px; /* Gap between items */
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.h3`
  font-size: 20px;
`;

const ItemPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
`;