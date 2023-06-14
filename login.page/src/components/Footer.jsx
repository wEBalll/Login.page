import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Navbar>
      <Link to="/">
        <Image src="src/Logo.png"></Image>
      </Link>

      <NavbarMenu>
        <ListItem>
          <ItemLink to="/">Home</ItemLink>
        </ListItem>
        <ListItem>
          <ItemLink to="/about">About</ItemLink>
        </ListItem>
      </NavbarMenu>
    </Navbar>
  );
};

const Navbar = styled.nav`
  width: 100%;
  height: 70px;
  background: #464655;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavbarMenu = styled.ul`
  list-style-type: none;
`;
const ListItem = styled.li`
  display: inline-block;
  margin-right: 55px;
`;
const ItemLink = styled(Link)`
  display: inline-block;
  color: white;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    color: #68a691;
  }
`;
const Image = styled.img`
  margin-left: 55px;
`;
