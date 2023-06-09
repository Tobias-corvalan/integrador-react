import React from 'react'
import styled from 'styled-components'
import {Navlink} from 'react-router-dom'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavItem = styled(Navlink)`
    color: aliceblue;
`;



function Navbar() {
  return (
    <Header>
        <Logo>Logo</Logo>
        <Nav>
            <ul>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/about">About</NavItem>
                <NavItem to="/contact">Contact</NavItem>
            </ul>
        </Nav>
    </Header>
  )
}

export default Navbar