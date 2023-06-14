import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <Navbar>
      <Link to="/">
        <Image src="src/Logo.png"></Image>
      </Link>

      <NavbarMenu $active={nav}>
        <ListItem>
          <ItemLink to="/">Home</ItemLink>
        </ListItem>
        <ListItem>
          <ItemLink to="/about">About</ItemLink>
        </ListItem>
      </NavbarMenu>
      <Burger onClick={() => setNav(!nav)}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </Burger>
    </Navbar>
  );
};

const Navbar = styled.nav`
  width: 100%;
  height: 70px;
  background: #68a691;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavbarMenu = styled.ul`
  list-style-type: none;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    left: ${(props) => (props.$active ? "0" : "-100%")};
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 100%;
    background-color: gray;
    z-index: 10;
    transition: left 1s;
  }
`
const ListItem = styled.li`
  display: inline-block;
  margin-right: 55px;
  @media (max-width: 640px) {
    margin-right: 0;
  }
`
const ItemLink = styled(Link)`
  display: inline-block;
  color: #464655;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    color: white;
  }
  @media (max-width: 640px) {
    font-size: 30px;
  }
`
const Image = styled.img`
  margin-left: 55px;
`
const Burger = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
    position: absolute;
    right: 55px;
    top: 20px;
    cursor: pointer;
    z-index: 10;
  }
`
