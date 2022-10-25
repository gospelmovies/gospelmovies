import {useState} from "react";
import styled from "styled-components";
import SearchImage from '../../assets/images/searchicon.png'
import NotifImage from '../../assets/images/notificon.png'
import Logo from '../../assets/images/logo.svg'
import MenuIcon from '../../assets/images/menuicon.svg'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to bottom,
  rgba(0, 0, 0, 0.61) 20%,
  rgba(0, 0, 0, 0));
  z-index: 999;
  &.active {
    background: rgba(0, 0, 0, 0.84)
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 89px;
  padding: 10px 100px;
  @media (max-width: 1024px){
    padding: 10px 80px;
    gap: 60px;
  }
  @media (max-width: 768px){
    padding: 10px 30px;
  }
  @media (max-width: 425px){
    padding: 0 10px;
  }
`;
const LogoWrapper = styled.img`
  width: 80px;
  height: 80px;
  @media (max-width: 768px){
    width: 60px;
    height: 60px;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  @media (max-width: 820px){
    justify-content: flex-end;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 39px;
  @media (max-width: 1024px){
    gap: 20px;
  }
  @media (max-width: 820px){
    display: none;
  }
`;
const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 820px){
    display: none;
  }
`;
const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const NotifIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const HomeLink = styled.a`
  text-decoration: none;
`;
const LinkItem = styled.a`
  color: white;
  text-decoration: none;
  font-family: openSans-Regular;
  font-size: 15px;
`;
const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 820px){
    display: initial;
  }
`;
const HamburgerMenuIcon = styled.img`
    color: white;
`;

function Header() {
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 100){
            setNavbar(true)
        } else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)
    return(
      <Wrapper className={navbar ? 'navbar active' : 'navbar'}>
       <Container>
           <HomeLink href='/'>
               <LogoWrapper src={Logo} />
           </HomeLink>
           <Menu>
               <Links>
                   <LinkItem href='/'>Home</LinkItem>
                   <LinkItem href='/'>TV Shows</LinkItem>
                   <LinkItem href='/'>Movies</LinkItem>
                   <LinkItem href='/'>Trending</LinkItem>
                   <LinkItem href='/'>Categories</LinkItem>
               </Links>
               <Action>
                   <SearchIcon src={SearchImage} />
                   <NotifIcon src={NotifImage} />
               </Action>
               <HamburgerMenu>
                   <HamburgerMenuIcon src={MenuIcon} />
               </HamburgerMenu>
           </Menu>

       </Container>
      </Wrapper>
    )
}

export default Header