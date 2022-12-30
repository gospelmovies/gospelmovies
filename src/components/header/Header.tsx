import {useState} from "react";
import SearchImage from '../../assets/images/searchicon.png'
import NotifImage from '../../assets/images/notificon.png'
import Logo from '../../assets/images/logo.svg'
import MenuIcon from '../../assets/images/menuicon.svg'
import {
  Wrapper,
  Container,
  LogoWrapper,
  Menu,
  Links,
  Action,
  SearchIcon,
  NotifIcon,
  HomeLink,
  LinkItem,
  HamburgerMenu,
  HamburgerMenuIcon,
  DropdownMenu,
  Ul,
  Li,
  LinkItem2
} from '../../styles/Header.styled'

function Header() {
    const [navbar, setNavbar] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

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
                   <HamburgerMenuIcon src={MenuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)} />
               </HamburgerMenu>
           </Menu>
           {
            isMenuOpen && (
              <DropdownMenu>
                <Ul>
                  <Li><LinkItem2 href='/'>Home</LinkItem2></Li>
                  <Li><LinkItem2 href='/'>TvShows</LinkItem2></Li>
                  <Li><LinkItem2 href='/'>Movies</LinkItem2></Li>
                  <Li><LinkItem2 href='/'>Categories</LinkItem2></Li>
                  <Li><LinkItem2 href='/'>Search</LinkItem2></Li>
                </Ul>
              </DropdownMenu>
            )
           }
          
       </Container>
      </Wrapper>
    )
}

export default Header